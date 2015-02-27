import Ember from 'ember';
let { computed, defineProperty } = Ember;

export default Ember.Component.extend({
  tagName: 'x-list',

  definePresentableItems: function() {
    let filterBy = this.get('filterBy');
    let fun = computed.oneWay('items');

    if (filterBy) {
      fun = computed.filterBy('items', filterBy);
    }

    defineProperty(this, 'presentableItems', fun);
  }.observes('filterBy').on('init')
});
