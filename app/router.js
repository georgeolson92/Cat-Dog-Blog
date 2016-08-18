import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('admin');
  this.route('post', {path: '/post/:post_id'});
  this.route('author', {path: "/author/:author_id"});
  this.route('comment');
});

export default Router;
