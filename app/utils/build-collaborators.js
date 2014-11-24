export default function buildCollaborators(episodes) {
  return episodes.reduce(function(result, episode) {
    var prequel = episodes.findBy('guest_id', episode.host_id);
    if (prequel) { episode.prequel_id = prequel.id; }

    var sequels = episodes.filterBy('host_id', episode.guest_id);
    episode.sequel_ids = sequels.mapBy('id');

    result.push(episode);

    return result;
  }, []);
}
