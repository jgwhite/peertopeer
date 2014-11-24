import DS from 'ember-data';

export default DS.Model.extend({
  challengeName: DS.attr('string'),
  guest: DS.belongsTo('partner', { inverse: 'guestEpisode' }),
  host: DS.belongsTo('partner', { inverse: 'hostEpisodes' })
});
