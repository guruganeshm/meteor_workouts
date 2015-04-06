Template.playersList.helpers({
 players: function(){
	return Players.find();
}
});

Template.applicationLayout.helpers({
pageTitle: function() { return Session.get('pageTitle'); }
});