Router.configure({
layoutTemplate: 'applicationLayout',
loadingTemplate: 'loading',
waitOn: function() { return Meteor.subscribe('players'); }
});

Router.map(function() {
	this.route('playersList',{
		path:'/'
	});

	this.route('playerDetails', {
		path:'/players/:name',
		data: function() {
			return Players.findOne(this.params.name); }
	});
	
	this.route('playerSubmit', {
		path: '/submit'
	});

	var requireLogin = function() {
		if (! Meteor.user()) {
		this.render('accessDenied');
		this.stop();
			}
		}

Router.before(requireLogin, {only: 'playerSubmit'});


});