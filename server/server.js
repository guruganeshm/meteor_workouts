Meteor.publish('players', function () {
	return Players.find({
		/*
		sort: Sort specifier,
		skip: Number,
		limit: Number,
		fields: Field specifier,
		reactive: Boolean,
		transform: Function
		*/
	});
});