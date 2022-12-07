function getVoteCount(votes) {
	console.log(votes.upvotes);
	return votes.upvotes - votes.downvotes;
}