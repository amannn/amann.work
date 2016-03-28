export default class ReactUtils {

  /**
   * Some performance hints:
   *  - When a function is bound in the `render` function, the props for the
   *    component receiving the function will never be equal, since `bind`
   *    always creates a new instance. The solution is to save the bound
   *    instance of the function.
   *  - `props.children` will always be different. There seemingly is no good
   *  	way of optimizing this.
   */
  static arePropsEqual(a, b) {
    return Object.keys(a).every(key => a[key] === b[key]);
  }

  static isStateEqual(a, b) {
    return Object.keys(a).every(key => a[key] === b[key]);
  }

}
