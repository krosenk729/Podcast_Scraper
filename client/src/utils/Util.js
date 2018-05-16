
// **************************************************************/
// Check for valid url

export function checkStitchUrl(checkMe) {
  return !!checkMe.match(/^(https:\/\/www.stitcher.com\/podcast\/)[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gi);
}
