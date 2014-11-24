import DS from 'ember-data';

export default DS.ActiveModelSerializer.extend({
  normalize: function(type, hash, prop) {
    hash.host_episode_ids = hash.host_episodes;
    delete hash.host_episodes;

    hash.guest_episode_id = hash.guest_episode;
    delete hash.guest_episode;

    return this._super(type, hash, prop);
  }
});
