Template.playerSubmit.events({
'submit form': function(e) {
e.preventDefault();
var player = {
name: $(e.target).find('[name=name]').val(),
playedFor: $(e.target).find('[name=playedFor]').val(),
imgUrl: $(e.target).find('[name=imgUrl]').val()
}
player._id = Players.insert(player);
Router.go('playerDetails', player);
}
});