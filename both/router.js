Router.configure({
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route('/', {
  name: 'home',
  layoutTemplate: 'publicLayout'
});

Router.route('/about', {
  name: 'about',
  layoutTemplate: 'publicLayout'
});

Router.route('/signup', {
  name: 'signup',
  layoutTemplate: 'publicLayout'
});

Router.route('/signin', {
  name: 'signin',
  layoutTemplate: 'publicLayout'
});

Router.route('/dashboard', {
  name: 'onboarding',
	layoutTemplate: 'dashboardLayout',
});
