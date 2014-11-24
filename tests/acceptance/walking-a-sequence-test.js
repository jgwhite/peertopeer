import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: Walking a sequence', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('walking from Tom to Camille', function() {
  visit('/');
  click('a:contains("Counting tree nodes")');
  click('a:contains("Ranking poker hands")');

  andThen(function() {
    equal(currentPath(), '/episodes/2');
  });
});
