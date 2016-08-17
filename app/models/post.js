import DS from 'ember-data';

export default DS.Model.extend ({
  title: DS.attr(),
  author: DS.belongsTo("author", {async: true}),
  date: DS.attr(),
  content: DS.attr(),
  image: DS.attr()
});
