export function startLoading() {
  return {
    type: "feed/startLoading",
  };
}

export function postFetched(morePosts) {
  return {
    type: "feed/postFetched",
    payload: morePosts,
  };
}
