import Ember from 'ember';
let Promise = Ember.RSVP.Promise;

export default Ember.Route.extend({
  beforeModel: function() {
    return Promise.all([
      this.store.find('episode'),
      this.store.find('partner')
    ]);
  }
});
