import Ember from 'ember';

export function list(...args) {
  return args.slice(0, -1);
}

export default Ember.Handlebars.makeBoundHelper(list);
