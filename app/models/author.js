import DS from 'ember-data';

export default DS.Model.extend ({
  fullName: DS.attr(),
  positionTitle: DS.attr(),
  bio: DS.attr()
});
