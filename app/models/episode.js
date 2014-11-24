import DS from 'ember-data';

export default DS.Model.extend({
  challengeName: DS.attr('string'),
  guestName: DS.attr('string'),
  hostName: DS.attr('string'),
  posterFrameUrl: DS.attr('string'),
  guest: DS.belongsTo('partner', { inverse: 'guestEpisode' }),
  host: DS.belongsTo('partner', { inverse: 'hostEpisodes' }),

  prequels: function() {
    var host = this.get('host');

    return this.store.filter('episode', function(episode) {
      return episode.get('guest') === host;
    });
  }.property('host'),

  sequels: function() {
    var guest = this.get('guest');

    return this.store.filter('episode', function(episode) {
      return episode.get('host') === guest;
    });
  }.property('guest')
});
