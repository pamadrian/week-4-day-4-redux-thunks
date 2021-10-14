// src/pages/PostsFeed.js
import React, { useEffect } from "react";
// import axios from "axios";
import moment from "moment";
import "./PostFeed.css";
import { useDispatch, useSelector } from "react-redux";
// import { postFetched, startLoading } from "../store/feed/actions";
import { selectFeedLoading, selectFeedPosts } from "../store/feed/selectors";
import { fetchNext5Posts } from "../store/feed/actions";

// const API_URL = `https://codaisseur-coders-network.herokuapp.com/posts`;

export default function PostsFeed() {
  const dispatch = useDispatch();
  const loading = useSelector(selectFeedLoading);
  const posts = useSelector(selectFeedPosts);

  useEffect(() => {
    dispatch(fetchNext5Posts);
  }, [dispatch]);

  return (
    <div className="PostsFeed">
      <h2 align="center">Recent posts</h2>
      {posts.map((post) => {
        return (
          <div class="main--container">
            <div class="card">
              <div key={post.id}>
                {" "}
                <h3>{post.title}</h3>
                <p> {post.content} </p>
                <p className="meta">
                  {" "}
                  {moment(post.createdAt).format("DD-MM-YYYY")}&bull;{" "}
                  <span className="tags">
                    {post.tags.map((tag) => {
                      return (
                        <React.Fragment key={tag.id}>
                          <span className="Tag">{tag.tag} </span>
                        </React.Fragment>
                      );
                    })}
                  </span>
                </p>
              </div>
            </div>
          </div>
        );
      })}

      <p>
        {loading ? (
          <em>Loading...</em>
        ) : (
          <button
            class="button-19"
            role="button"
            onClick={() => dispatch(fetchNext5Posts)}
          >
            Load more
          </button>
        )}
      </p>
    </div>
  );
}

// {
/* TODO: render the list of posts */
// }

// {
/* TODO: show a loading indicator when the posts are loading,
        or else a button to load more posts if not */
// }
