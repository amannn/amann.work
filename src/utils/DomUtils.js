export default {
  /**
   * Returns the coordinates of an element measured
   * from the top left corner of `maxParent`.
   * @param {Element} element
   * @param {Element} [maxParent = window]
   * @return {Object} E.g. {top: 2310, left: 120}
   */
  getAccumulatedOffset(element, maxParent = window) {
    const offset = {top: 0, left: 0};

    if (element === maxParent) {
      return offset;
    }

    do {
      offset.top += element.offsetTop || 0;
      offset.left += element.offsetLeft || 0;
      element = element.offsetParent;
    } while (element && element !== maxParent);

    return offset;
  }
};
