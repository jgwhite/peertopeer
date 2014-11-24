import { test } from 'ember-qunit';
import episodesToDot from 'peertopeer/utils/episodes-to-dot';

module('episodesToDot');

test('it generates a dotfile from episodes', function() {
  expect(1);

  var ep1 = {
    id: 1,
    challengeName: 'Counting tree nodes'
  };
  var ep2 = {
    id: 2,
    challengeName: 'Ranking poker hands'
  };
  var ep3 = {
    id: 3,
    challengeName: 'Graphing collaborations'
  };

  ep1.prequels = [];
  ep1.sequels = [ep2];
  ep2.prequels = [ep1];
  ep2.sequels = [ep3];
  ep3.prequels = [ep2];
  ep3.sequels = [];

  var expected = [
    'digraph {',
    '"Counting tree nodes" -> "Ranking poker hands";',
    '"Ranking poker hands" -> "Graphing collaborations";',
    '}'
  ].join('\n');

  return episodesToDot([ep1, ep2, ep3]).then(function(actual) {
    equal(actual, expected);
  });
});
