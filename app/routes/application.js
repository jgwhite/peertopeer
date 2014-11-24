import Ember from 'ember';
var RSVP = Ember.RSVP;

export default Ember.Route.extend({
  model: function() {
    return RSVP.hash({
      episodes: this.store.find('episode'),
      partners: this.store.find('partner')
    });
  }
});
