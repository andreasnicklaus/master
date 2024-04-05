import { test, expect } from '@playwright/test';

// See here how to get started:
// https://playwright.dev/docs/intro
test('visits the app root url', async ({ page }, TestInfo) => {
  const startTime = Date.now();
  await page.goto('/');
  await page.waitForLoadState();
  const loadTime = Date.now() - startTime;
  // await expect(page.locator('div.greetings > h1')).toHaveText('You did it!');
  const timing = await measurePerformance(page, TestInfo);
  console.log(loadTime, timing)
  expect(timing).toBeLessThanOrEqual(1000);
  expect(loadTime).toBeLessThanOrEqual(1000);

})


async function measurePerformance(page, TestInfo) {
  // Use Performance API to measure performance 
  // https://developer.mozilla.org/en-US/docs/Web/API/Performance/getEntriesByType
  const [performanceTiming] = await page.evaluate(() => {
    const [timing] = performance.getEntriesByType('navigation');
    return [timing];
  });
  // Get the start to load event end time
  // const startToLoadEventEnd = performanceTiming.loadEventEnd - performanceTiming.startTime;
  const startToLoadEventEnd = performanceTiming.domComplete;
  // Add the performance annotation to the HTML report
  test.info().annotations.push({ type: 'Performance', description: `"${TestInfo.project.name}" - Navigation start to load event end: ${startToLoadEventEnd}ms` });
  return startToLoadEventEnd;
}