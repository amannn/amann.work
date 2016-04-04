import state from './state';

export default {

  pushLocationToHistory(location) {
    // Mutating the state directly is very bad. However for this tiny app
    // it's ok. At least better than setting up a full flux store :).
    state.routeHistory.push(location);
  }

};
