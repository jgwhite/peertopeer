import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    this.store.all('episode').mapBy('prequels');
  },

  model: function() {
    return this.store.filter('episode', function(episode) {
      return episode.get('prequels.length') === 0;
    });
  }
});
