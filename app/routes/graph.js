import Ember from 'ember';
import episodesToDot from '../utils/episodes-to-dot';

export default Ember.Route.extend({
  model: function() {
    return episodesToDot(this.store.all('episode'));
  }
});
