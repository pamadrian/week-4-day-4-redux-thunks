export function selectPostAndComments(reduxState) {
  return reduxState.postPage.loading
    ? null
    : {
        post: reduxState.postPage.posts,
        comments: reduxState.postPage.comments,
      };
}

// returns an object of the shape { post, comments } if the post is done loading,
// returns null if the post is still loading
