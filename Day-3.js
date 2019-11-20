const candidates = ["Tim", "Sally", "Beth"]

const castVote = (name, votes) => {
  votes[ candidates.indexOf(name) ] += 1;
  return votes;
}