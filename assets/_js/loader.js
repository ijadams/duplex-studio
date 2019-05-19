/* eslint-disable */
export function loader() {
  return new Promise(function (resolve) {
    let perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
      EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
      time = parseInt((EstimatedTime / 1000) % 60) * 100;

    new Vivus('loader-svg', {duration: 150}, () => {
      $('svg').addClass('finished');
    });

    setTimeout(function () {
      resolve();
    }, (time + 650));

  });
}
