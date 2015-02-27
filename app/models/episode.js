import DS from 'ember-data';
let { computed } = Ember;

export default DS.Model.extend({
  challengeName: DS.attr('string'),
  guestName: DS.attr('string'),
  hostName: DS.attr('string'),
  posterFrameUrl: DS.attr('string'),
  guest: DS.belongsTo('partner', { inverse: 'guestEpisode' }),
  host: DS.belongsTo('partner', { inverse: 'hostEpisodes' }),

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
