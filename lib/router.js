Router.configure({
	layoutTemplate:'layout',
	loadingTemplate:'loading',
	waitOn: function() { return Meteor.subscribe('players'); Players.find(); }
});

Router.map(function() {
	this.route('playersList', {path:'/'});
});