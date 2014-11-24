import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('partner', 'Partner', {
  // Specify the other units that are required for this test.
  needs: ['model:episode']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
