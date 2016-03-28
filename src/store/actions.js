import state from './state';

// None yet
export default {

  pushLocationToHistory(location) {
    // Mutating the state directly is very bad. However for this tiny app
    // it's ok. At least better than setting up a full flux store :).
    state.routeHistory.push(location);
  }

};
