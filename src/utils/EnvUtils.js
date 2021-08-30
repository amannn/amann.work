export default {
  isClient() {
    return typeof window === 'object';
  }
};
