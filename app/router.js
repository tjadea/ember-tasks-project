import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('services');
  this.route('actions');
  this.route('tasks', function() {
    this.route('new');
    this.route('edit', {path: '/edit/:task_id'});
  });
});

export default Router;
