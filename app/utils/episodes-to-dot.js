import Ember from 'ember';

var get = Ember.get;
var RSVP = Ember.RSVP;

export default function episodesToDot(episodes) {
  return RSVP.all(episodes.mapBy('sequels'))
  .then(function() {
    var result = [];

    episodes.forEach(function(episode) {
      var a = get(episode, 'challengeName');
      get(episode, 'sequels').forEach(function(sequel) {
        var b = get(sequel, 'challengeName');
        result.push('"%@" -> "%@";'.fmt(a, b));
      });
    });

    return 'digraph {\n' + result.join('\n') + '\n}';
  });
}
