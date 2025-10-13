import { test, expect, devices } from '@playwright/test';

const LOCAL_URL = 'http://localhost:3000';

test.describe('Mobile Overflow Debug', () => {
  test.beforeEach(async ({ page }) => {
    // Go to localhost
    await page.goto(LOCAL_URL);
  });

  test('iPhone 12 Pro - Detect horizontal overflow', async ({ page, browser }) => {
    // Use iPhone 12 Pro viewport
    const context = await browser.newContext({
      ...devices['iPhone 12 Pro'],
      viewport: { width: 390, height: 844 }
    });

    const mobilePage = await context.newPage();
    await mobilePage.goto(LOCAL_URL);

    // Wait for page to load completely
    await mobilePage.waitForLoadState('networkidle');

    // Take screenshot before detection
    await mobilePage.screenshot({
      path: 'screenshots/mobile-before-debug.png',
      fullPage: true
    });

    // Inject our overflow detection script
    const overflowElements = await mobilePage.evaluate(() => {
      const viewportWidth = window.innerWidth;
      const overflowElements: any[] = [];

      document.querySelectorAll('*').forEach(el => {
        const rect = el.getBoundingClientRect();
        const computedStyle = window.getComputedStyle(el);

        // Check for elements extending beyond viewport
        if (rect.right > viewportWidth ||
            rect.width > viewportWidth ||
            (el as HTMLElement).scrollWidth > viewportWidth) {

          overflowElements.push({
            tagName: el.tagName,
            className: el.className,
            id: el.id,
            width: rect.width,
            scrollWidth: (el as HTMLElement).scrollWidth,
            right: rect.right,
            viewportWidth: viewportWidth,
            computedWidth: computedStyle.width,
            computedMaxWidth: computedStyle.maxWidth,
            computedMinWidth: computedStyle.minWidth
          });

          // Highlight the element
          (el as HTMLElement).style.border = '3px solid red';
          (el as HTMLElement).style.backgroundColor = 'rgba(255,0,0,0.1)';
        }
      });

      return {
        count: overflowElements.length,
        elements: overflowElements,
        documentWidth: document.documentElement.scrollWidth,
        viewportWidth: viewportWidth
      };
    });

    // Take screenshot after highlighting overflow elements
    await mobilePage.screenshot({
      path: 'screenshots/mobile-overflow-highlighted.png',
      fullPage: true
    });

    // Log results
    console.log('🔍 Mobile Overflow Detection Results:');
    console.log(`📱 Viewport Width: ${overflowElements.viewportWidth}px`);
    console.log(`📄 Document Width: ${overflowElements.documentWidth}px`);
    console.log(`🚨 Overflow Elements: ${overflowElements.count}`);

    if (overflowElements.count > 0) {
      console.log('\n📋 Overflow Elements Details:');
      overflowElements.elements.forEach((el, index) => {
        console.log(`${index + 1}. ${el.tagName} ${el.className ? '.' + el.className : ''}`);
        console.log(`   Width: ${el.width}px | ScrollWidth: ${el.scrollWidth}px`);
        console.log(`   Computed: ${el.computedWidth} | MaxWidth: ${el.computedMaxWidth}`);
        console.log('');
      });
    }

    // Check document scroll width vs viewport
    const hasHorizontalScroll = overflowElements.documentWidth > overflowElements.viewportWidth;

    if (hasHorizontalScroll) {
      console.log(`❌ HORIZONTAL SCROLL DETECTED!`);
      console.log(`   Document: ${overflowElements.documentWidth}px > Viewport: ${overflowElements.viewportWidth}px`);
    } else {
      console.log(`✅ NO HORIZONTAL SCROLL`);
    }

    await context.close();
  });

  test('Compare multiple mobile devices', async ({ browser }) => {
    const devices_to_test = ['iPhone 12 Pro', 'iPhone SE', 'Pixel 5'];

    for (const deviceName of devices_to_test) {
      console.log(`\n📱 Testing ${deviceName}:`);

      const context = await browser.newContext({
        ...devices[deviceName]
      });

      const page = await context.newPage();
      await page.goto(LOCAL_URL);
      await page.waitForLoadState('networkidle');

      const result = await page.evaluate(() => {
        return {
          viewportWidth: window.innerWidth,
          documentWidth: document.documentElement.scrollWidth,
          hasOverflow: document.documentElement.scrollWidth > window.innerWidth
        };
      });

      console.log(`   Viewport: ${result.viewportWidth}px`);
      console.log(`   Document: ${result.documentWidth}px`);
      console.log(`   Overflow: ${result.hasOverflow ? '❌ YES' : '✅ NO'}`);

      await page.screenshot({
        path: `screenshots/mobile-${deviceName.replace(' ', '-').toLowerCase()}.png`,
        fullPage: true
      });

      await context.close();
    }
  });
});