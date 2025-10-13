import { test, expect, devices, chromium } from '@playwright/test';

test.describe('Production vs Localhost Mobile Comparison', () => {
  test('Test orchesagency.com mobile rendering', async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext({
      ...devices['iPhone 12 Pro'],
      viewport: { width: 390, height: 844 }
    });

    const page = await context.newPage();

    try {
      console.log('🌐 Testing production site: orchesagency.com');

      // Navigate to production site
      await page.goto('https://orchesagency.com', { waitUntil: 'networkidle' });
      console.log('✅ Production site loaded');

      // Take screenshot
      await page.screenshot({
        path: 'screenshots/production-mobile.png',
        fullPage: true
      });
      console.log('📸 Production screenshot saved');

      // Check viewport meta tag
      const viewportMeta = await page.locator('meta[name="viewport"]').getAttribute('content');
      console.log('📱 Viewport meta tag:', viewportMeta);

      // Check document width
      const result = await page.evaluate(() => {
        return {
          viewport: {
            width: window.innerWidth,
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
          devicePixelRatio: window.devicePixelRatio,
          userAgent: navigator.userAgent,
          hasHorizontalScroll: document.documentElement.scrollWidth > window.innerWidth
        };
      });

      console.log('\\n🔍 PRODUCTION SITE ANALYSIS:');
      console.log('=' .repeat(50));
      console.log(`📱 Viewport: ${result.viewport.width}x${result.viewport.height}`);
      console.log(`📄 Document: ${result.document.width}x${result.document.height}`);
      console.log(`🌐 Body: ${result.body.width}x${result.body.height}`);
      console.log(`📏 Device Pixel Ratio: ${result.devicePixelRatio}`);
      console.log(`📏 Horizontal Scroll: ${result.hasHorizontalScroll ? '❌ YES' : '✅ NO'}`);
      console.log(`🖥️ User Agent: ${result.userAgent}`);

      // Check for potential CSS issues
      const cssCheck = await page.evaluate(() => {
        const html = document.documentElement;
        const body = document.body;

        return {
          htmlWidth: window.getComputedStyle(html).width,
          bodyWidth: window.getComputedStyle(body).width,
          htmlMaxWidth: window.getComputedStyle(html).maxWidth,
          bodyMaxWidth: window.getComputedStyle(body).maxWidth,
          htmlOverflowX: window.getComputedStyle(html).overflowX,
          bodyOverflowX: window.getComputedStyle(body).overflowX
        };
      });

      console.log('\\n🎨 CSS COMPUTED STYLES:');
      console.log('-'.repeat(30));
      console.log('HTML width:', cssCheck.htmlWidth);
      console.log('BODY width:', cssCheck.bodyWidth);
      console.log('HTML max-width:', cssCheck.htmlMaxWidth);
      console.log('BODY max-width:', cssCheck.bodyMaxWidth);
      console.log('HTML overflow-x:', cssCheck.htmlOverflowX);
      console.log('BODY overflow-x:', cssCheck.bodyOverflowX);

    } catch (error) {
      console.error('❌ Production test failed:', error);
    } finally {
      await context.close();
      await browser.close();
    }
  });
});