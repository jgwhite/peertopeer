import Ember from 'ember';

export function graphViz(input) {
  return Ember.String.htmlSafe(Viz(input, 'svg'));
}

export default Ember.Handlebars.makeBoundHelper(graphViz);
