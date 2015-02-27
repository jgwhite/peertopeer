import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('episode', 'Episode', {
  // Specify the other units that are required for this test.
  needs: ['model:partner']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
