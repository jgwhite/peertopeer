import Ember from 'ember';
let Promise = Ember.RSVP.Promise;

export default Ember.Route.extend({
  model: function() {
    // Preload both datasets simultaneously
    // because we don’t have /partners/:id
    // endpoints to talk to.
    return Promise.all([
      this.store.find('episode'),
      this.store.find('partner')
    ]).then(function([episodes]) {
      return episodes;
    });
  }
});
