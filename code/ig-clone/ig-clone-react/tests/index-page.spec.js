import { test, expect } from '@playwright/test';

// See here how to get started:
// https://playwright.dev/docs/intro
// test('visits the app root url', async ({ page }) => {
//   await page.goto('/');
//   await expect(page.locator('h1#notinstagram')).toHaveText('NotInstagram');
// })


const pageLoadBudgetMs = 3000

test(`index page loads in less than ${pageLoadBudgetMs}ms`, async ({ page }, TestInfo) => {
  const testStart = Date.now()
  await page.goto("/")
  const testDuration = Date.now() - testStart;
  await page.waitForLoadState();
  const timing = await measurePerformance(page)
  const { responseStart, responseEnd, domContentLoadedEventEnd, domComplete, loadEventEnd } = timing;

  test.info().annotations.push({ type: 'Test Duration', description: `"${TestInfo.project.name}" - Test start to test end: ${testDuration}ms` });
  test.info().annotations.push({ type: 'Performance', description: `"${TestInfo.project.name}" - Navigation start to responseEnd event end: ${responseEnd}ms` });
  test.info().annotations.push({ type: 'Performance', description: `"${TestInfo.project.name}" - Navigation start to responseStart event end: ${responseStart}ms` });
  test.info().annotations.push({ type: 'Performance', description: `"${TestInfo.project.name}" - Navigation start to domContentLoadedEventEnd event end: ${domContentLoadedEventEnd}ms` });
  test.info().annotations.push({ type: 'Performance', description: `"${TestInfo.project.name}" - domContentLoadedEventEnd to domComplete event end: ${domComplete - domContentLoadedEventEnd}ms` });
  test.info().annotations.push({ type: 'Performance', description: `"${TestInfo.project.name}" - Navigation start to domComplete event end: ${domComplete}ms` });
  test.info().annotations.push({ type: 'Performance', description: `"${TestInfo.project.name}" - Navigation start to loadEventEnd event end: ${loadEventEnd}ms` });

  expect(testDuration).toBeLessThanOrEqual(pageLoadBudgetMs)
  expect(domComplete).toBeLessThanOrEqual(pageLoadBudgetMs)
  expect(loadEventEnd).toBeLessThanOrEqual(pageLoadBudgetMs)
})

async function measurePerformance(page, TestInfo) {
  // Use Performance API to measure performance 
  // https://developer.mozilla.org/en-US/docs/Web/API/Performance/getEntriesByType
  const [performanceTiming] = await page.evaluate(() => {
    const [timing] = performance.getEntriesByType('navigation');
    return [timing];
  });
  // const startToLoadEventEnd = performanceTiming.loadEventEnd - performanceTiming.startTime;
  const startToLoadEventEnd = performanceTiming;
  return startToLoadEventEnd;
}