import isServer from 'detect-node';
import hasTouch from 'has-touch';

export default class EnvUtils {

  static isClient() {
    return !isServer;
  }

  static isServer() {
    return isServer;
  }

  static isGoogleChrome() {
    if (!EnvUtils.isClient()) return false;
    return window.chrome !== undefined;
  }

  static hasTouch() {
    return hasTouch;
  }

}
