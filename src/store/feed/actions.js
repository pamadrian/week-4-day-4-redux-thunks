import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { API_URL } from "../../config";
// const API_URL = `https://codaisseur-coders-network.herokuapp.com/posts`;

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

export async function fetchNext5Posts(dispatch, getState) {
  // selectFeedPosts({ ...data, loading: true });
  dispatch(startLoading());

  const offset = getState().feed.posts.length;
  const response = await axios.get(`${API_URL}?offset=${offset}&limit=5`);
  const morePosts = response.data.rows;
  console.log(response.data);

  // TODO
  // fetch next set of posts (use offset+limit),
  //  and define the variable `morePosts`

  //   selectFeedPosts({
  //     loading: false,
  //     posts: [...data.posts, ...morePosts],
  //   });
  // }

  dispatch(postFetched(morePosts));
}
