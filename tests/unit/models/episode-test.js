import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('episode', 'Episode', {
  // Specify the other units that are required for this test.
  needs: ['model:guest', 'model:host']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
