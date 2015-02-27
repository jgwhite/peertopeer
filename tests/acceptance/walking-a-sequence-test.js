import Ember from 'ember';
import {module, test} from 'qunit';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: Walking a sequence', {
  beforeEach: function() {
    App = startApp();
  },
  afterEach: function() {
    Ember.run(App, 'destroy');
  }
});

test('walking from Tom to Camille', function(assert) {
  visit('/');
  click('a:contains("Counting tree nodes")');
  click('a:contains("Ranking poker hands")');

  andThen(function() {
    assert.equal(currentURL(), '/episodes/2');
  });
});
