import { test, expect, devices, chromium } from '@playwright/test';

// Use existing dev server
const LOCAL_URL = 'http://localhost:3000';

test.describe('Mobile Overflow Debug - Standalone', () => {
  test('Detect mobile overflow elements', async () => {
    // Launch browser with mobile device
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext({
      ...devices['iPhone 12 Pro'],
      viewport: { width: 390, height: 844 }
    });

    const page = await context.newPage();

    try {
      // Navigate to localhost
      console.log('🌐 Navigating to localhost...');
      await page.goto(LOCAL_URL, { waitUntil: 'networkidle' });
      console.log('✅ Page loaded successfully');

      // Take initial screenshot
      await page.screenshot({
        path: 'screenshots/mobile-initial.png',
        fullPage: true
      });
      console.log('📸 Initial screenshot saved');

      // Inject overflow detection script
      console.log('🔍 Detecting overflow elements...');
      const result = await page.evaluate(() => {
        const viewportWidth = window.innerWidth;
        const overflowElements: any[] = [];
        let elementCount = 0;

        document.querySelectorAll('*').forEach(el => {
          elementCount++;
          const rect = el.getBoundingClientRect();
          const computedStyle = window.getComputedStyle(el);
          const htmlEl = el as HTMLElement;

          // Check for various overflow conditions
          const conditions = {
            rectRight: rect.right > viewportWidth,
            rectWidth: rect.width > viewportWidth,
            scrollWidth: htmlEl.scrollWidth > viewportWidth,
            computedWidth: parseFloat(computedStyle.width) > viewportWidth
          };

          const hasOverflow = Object.values(conditions).some(Boolean);

          if (hasOverflow) {
            overflowElements.push({
              tagName: el.tagName,
              className: el.className || 'no-class',
              id: el.id || 'no-id',
              textContent: el.textContent?.substring(0, 50) || '',
              rect: {
                width: Math.round(rect.width),
                height: Math.round(rect.height),
                left: Math.round(rect.left),
                right: Math.round(rect.right)
              },
              scrollWidth: htmlEl.scrollWidth,
              offsetWidth: htmlEl.offsetWidth,
              computedStyles: {
                width: computedStyle.width,
                maxWidth: computedStyle.maxWidth,
                minWidth: computedStyle.minWidth,
                position: computedStyle.position,
                overflow: computedStyle.overflow,
                overflowX: computedStyle.overflowX
              },
              conditions: conditions
            });

            // Highlight the element with red border
            htmlEl.style.border = '3px solid red';
            htmlEl.style.backgroundColor = 'rgba(255,0,0,0.1)';
            htmlEl.style.position = 'relative';
            htmlEl.style.zIndex = '9999';
          }
        });

        return {
          viewport: {
            width: viewportWidth,
            height: window.innerHeight
          },
          document: {
            width: document.documentElement.scrollWidth,
            height: document.documentElement.scrollHeight
          },
          body: {
            width: document.body.scrollWidth,
            height: document.body.scrollHeight
          },
          overflowElements: overflowElements,
          totalElements: elementCount,
          hasHorizontalScroll: document.documentElement.scrollWidth > viewportWidth
        };
      });

      // Take screenshot with highlighted overflow elements
      await page.screenshot({
        path: 'screenshots/mobile-overflow-highlighted.png',
        fullPage: true
      });
      console.log('📸 Overflow highlighted screenshot saved');

      // Log comprehensive results
      console.log('\n🔍 MOBILE OVERFLOW DETECTION RESULTS:');
      console.log('=' .repeat(50));
      console.log(`📱 Viewport: ${result.viewport.width}x${result.viewport.height}`);
      console.log(`📄 Document: ${result.document.width}x${result.document.height}`);
      console.log(`🌐 Body: ${result.body.width}x${result.body.height}`);
      console.log(`📊 Total Elements Scanned: ${result.totalElements}`);
      console.log(`🚨 Overflow Elements Found: ${result.overflowElements.length}`);
      console.log(`📏 Horizontal Scroll: ${result.hasHorizontalScroll ? '❌ YES' : '✅ NO'}`);

      if (result.hasHorizontalScroll) {
        const extraWidth = result.document.width - result.viewport.width;
        console.log(`📐 Extra Width: +${extraWidth}px beyond viewport`);
      }

      if (result.overflowElements.length > 0) {
        console.log('\n📋 PROBLEMATIC ELEMENTS:');
        console.log('-'.repeat(50));

        result.overflowElements.forEach((el, index) => {
          console.log(`\n${index + 1}. ${el.tagName}${el.className !== 'no-class' ? ' .' + el.className : ''}${el.id !== 'no-id' ? ' #' + el.id : ''}`);
          console.log(`   📏 Dimensions: ${el.rect.width}×${el.rect.height}px`);
          console.log(`   📍 Position: left=${el.rect.left}, right=${el.rect.right}`);
          console.log(`   📜 ScrollWidth: ${el.scrollWidth}px`);
          console.log(`   💻 Computed Width: ${el.computedStyles.width}`);
          console.log(`   🎯 Max Width: ${el.computedStyles.maxWidth}`);
          console.log(`   🔄 Overflow-X: ${el.computedStyles.overflowX}`);

          const activeConditions = Object.entries(el.conditions)
            .filter(([key, value]) => value)
            .map(([key]) => key);
          console.log(`   ⚠️  Overflow Reasons: ${activeConditions.join(', ')}`);

          if (el.textContent) {
            console.log(`   📝 Content: "${el.textContent}"`);
          }
        });
      }

      // Assert no horizontal scroll
      if (result.hasHorizontalScroll) {
        console.log('\n❌ TEST FAILED: Horizontal scroll detected!');
      } else {
        console.log('\n✅ TEST PASSED: No horizontal scroll detected!');
      }

    } catch (error) {
      console.error('❌ Test failed with error:', error);
    } finally {
      await context.close();
      await browser.close();
    }
  });
});