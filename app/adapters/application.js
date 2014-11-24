import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  namespace: 'api',

  pathForType: function() {
    return this._super.apply(this, arguments) + '.json';
  }
});
