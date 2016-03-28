export default class DOMUtils {

  static preloadImage(imageURL) {
    let img = new Image();
    img.src = imageURL;
  }

  static preloadImages(imageURLs) {
    imageURLs.forEach(imageURL => {
      DOMUtils.preloadImage(imageURL);
    });
  }

}
