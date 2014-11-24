import buildCollaborators from 'peertopeer/utils/build-collaborators';

module('buildCollaborators');

test('it works', function() {
  var episodes = [{
    id: 1,
    challenge_name: 'Counting tree nodes',
    host_id: 1,
    guest_id: 2
  }, {
    id: 2,
    challenge_name: 'Ranking poker hands',
    host_id: 2,
    guest_id: 3
  }];

  var actual = buildCollaborators(episodes);
  var expected = [{
    id: 1,
    challenge_name: 'Counting tree nodes',
    host_id: 1,
    guest_id: 2,
    sequel_ids: [2]
  }, {
    id: 2,
    challenge_name: 'Ranking poker hands',
    host_id: 2,
    guest_id: 3,
    prequel_id: 1,
    sequel_ids: []
  }];


  deepEqual(actual, expected,
      'expected episodes to gain prequel/sequel data');
});
