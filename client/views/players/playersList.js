Meteor.subscribe('players');

Template.playersList.helpers({
 players: function(){
 	return Players.find();
}
});