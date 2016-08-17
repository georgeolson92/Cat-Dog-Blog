import Ember from 'ember';

export default Ember.Component.extend ({
  updateAuthorForm: false,
  actions: {
    updateAuthorForm() {
      this.set("updateAuthorForm", true);
    },
    update(author) {
      var params = {
        fullName: this.get("fullName"),
        positionTitle: this.get("positionTitle"),
        bio: this.get("bio")
      };
      this.set("updateAuthorForm", false);
      this.sendAction("update", author, params)
    }
  }
});
