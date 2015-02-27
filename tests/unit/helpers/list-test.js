import {
  list
} from '../../../helpers/list';
import { module, test } from 'qunit';

module('ListHelper');

// Replace this with your real tests.
test('it works', function(assert) {
  var result = list(42, 43, 44, 'options');
  assert.deepEqual(result, [42, 43, 44]);
});
