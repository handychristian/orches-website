import { test, expect } from '@playwright/test';

test.describe('Daily Tasks Page', () => {
  test('should navigate to daily tasks page and check for errors', async ({ page }) => {
    // Listen for console messages
    const consoleMessages: string[] = [];
    page.on('console', msg => {
      consoleMessages.push(`[${msg.type()}] ${msg.text()}`);
    });

    // Listen for page errors
    const pageErrors: string[] = [];
    page.on('pageerror', error => {
      pageErrors.push(error.message);
    });

    // Navigate to the page
    await page.goto('http://localhost:3000/daily-tasks', {
      waitUntil: 'networkidle',
      timeout: 30000
    });

    // Wait a bit for any dynamic content
    await page.waitForTimeout(3000);

    // Take screenshot
    await page.screenshot({
      path: 'screenshots/daily-tasks.png',
      fullPage: true
    });

    // Check if there are any errors
    if (pageErrors.length > 0) {
      console.log('\n❌ Page Errors Found:');
      pageErrors.forEach(err => console.log(`  - ${err}`));
    } else {
      console.log('\n✅ No page errors found');
    }

    // Log console messages
    console.log('\n📋 Console Messages:');
    consoleMessages.forEach(msg => console.log(`  ${msg}`));

    // Check for specific error indicators in the page
    const buildError = await page.locator('text=Build Error').count();
    if (buildError > 0) {
      console.log('\n❌ Build Error detected on page');
      const errorText = await page.locator('body').textContent();
      console.log('Error details:', errorText);
    }

    // Basic assertions
    expect(pageErrors.length).toBe(0);
  });

  test('should interact with the page if loaded successfully', async ({ page }) => {
    await page.goto('http://localhost:3000/daily-tasks', {
      waitUntil: 'networkidle',
      timeout: 30000
    });

    // Check if main content is visible
    const heading = await page.locator('h1').first();
    if (await heading.count() > 0) {
      const headingText = await heading.textContent();
      console.log('Page heading:', headingText);
    }

    // Try to find and click demo button if exists
    const demoButton = page.locator('button:has-text("Start Live Simulation")');
    if (await demoButton.count() > 0) {
      console.log('✅ Demo button found, clicking...');
      await demoButton.click();
      await page.waitForTimeout(2000);

      // Take screenshot after interaction
      await page.screenshot({
        path: 'screenshots/daily-tasks-after-click.png',
        fullPage: true
      });

      console.log('✅ Button clicked successfully');
    }
  });
});