import Ember from 'ember';
import ajax from 'ic-ajax';
import buildCollaborators from '../utils/build-collaborators';

export default Ember.Route.extend({
  model: function() {
    return ajax('/api/episodes.json').then(function(data) {
      var episodes = data.episodes;
      return buildCollaborators(episodes);
    });
  }
});
