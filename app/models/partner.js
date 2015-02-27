import DS from 'ember-data';
let { attr, belongsTo, hasMany } = DS;

export default DS.Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  guestEpisode: belongsTo('episode', { inverse: 'guest' }),
  hostEpisodes: hasMany('episode', { inverse: 'host' }),

  name: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName')
});
