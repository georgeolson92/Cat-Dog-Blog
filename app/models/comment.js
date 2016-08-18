import DS from 'ember-data';

export default DS.Model.extend({
  userName: DS.attr(),
  commentDate: DS.attr(),
  commentText: DS.attr(),
  post: DS.belongsTo("post", {async: true}),
});
