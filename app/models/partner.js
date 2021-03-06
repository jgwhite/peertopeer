import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  guestEpisode: DS.belongsTo('episode', { inverse: 'guest' }),
  hostEpisodes: DS.hasMany('episode', { inverse: 'host' }),

  name: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName')
});
