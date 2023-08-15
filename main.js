$(document).ready(function() {
    // Get the content of the block-content div
    const blockContentHTML = $(".block-content").html();

    // Update the HTML, CSS, and JS code inside the pre elements
    $(".html-section pre code").text(blockContentHTML);
    $(".css-section pre code").text($('style').text());
    $(".js-section pre code").text($('script').last().text());
  });