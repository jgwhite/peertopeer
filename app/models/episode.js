import DS from 'ember-data';
import Ember from 'ember';
let { attr, belongsTo } = DS;
let { computed } = Ember;

export default DS.Model.extend({
  challengeName: attr('string'),
  guestName: attr('string'),
  hostName: attr('string'),
  posterFrameUrl: attr('string'),
  guest: belongsTo('partner', { inverse: 'guestEpisode' }),
  host: belongsTo('partner', { inverse: 'hostEpisodes' }),

  all: function() {
    return this.store.all('episode');
  }.property(),

  prequels: computed.filter('all.@each.guest', function(episode) {
    return episode.get('guest') === this.get('host');
  }),

  sequels: computed.filter('all.@each.host', function(episode) {
    return episode.get('host') === this.get('guest');
  }),

  isRoot: computed.empty('prequels')
});
