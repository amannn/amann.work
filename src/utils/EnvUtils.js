export default {
  isClient() {
    return typeof window !== 'undefined';
  },

  isWindows() {
    return this.isClient() && navigator.userAgent.includes('Windows');
  }
};
