/**
 * This is a simple Spring implementation of a damped spring using a symbolic
 * integration of Hooke's law: F = -kx - cv.
 *
 * This is based on the implementation of iamralpht. Have a look at it here:
 * https://github.com/iamralpht/iamralpht.github.io/tree/master/physics
 *
 * The implementation is quite simple, but thus quite performant.
 *
 * This physics textbook explains the model:
 * http://www.stewartcalculus.com/data/CALCULUS%20Concepts%20and%20Contexts/up iles/3c3-AppsOf2ndOrders_Stu.pdf
*/

const EPSILON = 0.001;

const almostEqual = (a, b) => (a > (b - EPSILON)) && (a < (b + EPSILON));
const almostZero = (a) => almostEqual(a, 0);

/**
 * @param {number} springConstant
 * @param {number} damping
 * @param {number} [mass = 1]
 */
export default class Spring {

  constructor(springConstant, damping, mass = 1) {
    this._m = mass;
    this._k = springConstant;
    this._c = damping;
    this._solution = null;
    this._endValue = 0;
    this._startTime = 0;
  }

  /**
   * Returns an object with solvers for `x` and `dx`.
   * @param {number} initial Value for x.
   * @param {number} velocity
   * @return {object} E.g. `{x: () => {}, dx: () => {}}`
   */
  _solve(initial, velocity) {
    let c = this._c;
    let m = this._m;
    let k = this._k;

    // Get the type of the damping.
    // Solve the quadratic equation; root = (-c +/- sqrt(c^2 - 4mk)) / 2m.
    let cmk = c * c - 4 * m * k;

    if (cmk === 0) {
      // The spring is critically damped.
      // x = (c1 + c2 * t) * e ^ (-c / 2 * m) * t
      let r = -c / (2 * m);
      let c1 = initial;
      let c2 = velocity / (r * initial);
      return {
        x: t => (c1 + c2 * t) * Math.pow(Math.E, r * t),
        dx: t => {
          let pow = Math.pow(Math.E, r * t);
          return r * (c1 + c2 * t) * pow + c2 * pow;
        }
      };
    } else if (cmk > 0) {
      // The spring is overdamped; no bounces.
      // x = c1 * e ^ (r1 * t) + c2 * e ^ (r2 * t)
      // Need to find r1 and r2, the roots, then solve c1 and c2.
      let r1 = (-c - Math.sqrt(cmk)) / (2 * m);
      let r2 = (-c + Math.sqrt(cmk)) / (2 * m);
      let c2 = (velocity - r1 * initial) / (r2 - r1);
      let c1 = initial - c2;

      return {
        x: t => (c1 * Math.pow(Math.E, r1 * t) + c2 * Math.pow(Math.E, r2 * t)),
        dx: t => (
          c1 * r1 * Math.pow(Math.E, r1 * t)
          + c2 * r2 * Math.pow(Math.E, r2 * t)
        )
      };
    } else {
      // The spring is underdamped, it has imaginary roots.
      // r = -(c / 2 * m) +- w * i
      // w = sqrt(4 * m * k - c ^ 2) / 2 * m
      // x = (e ^ -(c / 2 * m) * t) * (c1 * cos(wt) + c2 * sin(wt))
      let w = Math.sqrt(4 * m * k - c * c) / (2 * m);
      let r = -(c / 2 * m);
      let c1 = initial;
      let c2 = (velocity - r * initial) / w;

      return {
        x: t => Math.pow(Math.E, r * t) * (c1 * Math.cos(w * t) + c2 * Math.sin(w * t)),
        dx: t => {
          let power =  Math.pow(Math.E, r * t);
          let cos = Math.cos(w * t);
          let sin = Math.sin(w * t);
          return power * (c2 * w * cos - c1 * w * sin) + r * power * (c2 * sin + c1 * cos);
        }
      };
    }
  }

  /**
   * The current value of the spring.
   * @param {number} [dt] The time that has passed since `_startTime`.
   * @return {number}
   */
  x(dt) {
    if (dt === undefined) {
      dt = ((new Date()).getTime() - this._startTime) / 1000.0;
    }

    return this._solution ? this._endValue + this._solution.x(dt) : 0;
  }

  endValue = () => this._endValue;

  dx(dt) {
    if (dt === undefined) {
      dt = ((new Date()).getTime() - this._startTime) / 1000.0;
    }
    return this._solution ? this._solution.dx(dt) : 0;
  }

  /**
   * Setting a new end value that can be solved (animated) towards.
   * @param {number} endValue
   * @param {number} [velocity = 0]
   * @param {number} [t = the current time]
   */
  setEnd(endValue, velocity = 0, t) {
    let position = this._endValue;

    if (!t) t = (new Date()).getTime();
    if (endValue === this._endValue && almostZero(velocity)) return;

    if (this._solution) {
      if (almostZero(velocity)) {
        velocity = this._solution.dx((t - this._startTime) / 1000.0);
      }
      position = this._solution.x((t - this._startTime) / 1000.0);
      if (almostZero(velocity)) velocity = 0;
      if (almostZero(position)) position = 0;
      position += this._endValue;
    }

    if (
      this._solution && almostZero(position - endValue)
      && almostZero(velocity)
    ) {
      return;
    }

    this._endValue = endValue;
    this._solution = this._solve(position - this._endValue, velocity);
    this._startTime = t;
  }

  /**
   * Set a new end value directly without solving the intermediate steps.
   * @param {number} endValue
   */
  snap(endValue) {
    this._startTime = (new Date()).getTime();
    this._endValue = endValue;
    this._solution = {
      x: () => 0,
      dx: () => 0
    };
  }

  /**
   * Returns if the solving towards the end value is complete.
   * @param {number} [t = the current time]
   * @return {bool}
   */
  done(t) {
    if (!t) t = (new Date()).getTime();
    return almostEqual(this.x(), this._endValue) && almostZero(this.dx());
  }

  reconfigure(mass, springConstant, damping) {
    this._m = mass;
    this._k = springConstant;
    this._c = damping;

    if (this.done()) return;
    this._solution = this._solve(this.x() - this._endValue, this.dx());
    this._startTime = (new Date()).getTime();
  }

  springConstant() { return this._k; }

  damping() { return this._c; }
}
