export default {

  // **************************************************************/
  // Check for valid url

  checkStitchUrl: function(checkMe) {
    return !!checkMe.match(/^(https:\/\/www.stitcher.com\/podcast\/)[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gi);
  }

};
