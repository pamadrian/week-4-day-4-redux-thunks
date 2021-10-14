// src/pages/PostsFeed.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import "./PostFeed.css";

const API_URL = `https://codaisseur-coders-network.herokuapp.com/posts`;

export default function PostsFeed() {
  const [data, setData] = useState({
    loading: true,
    posts: [],
  });

  async function fetchNext5Posts() {
    setData({ ...data, loading: true });

    const response = await axios.get(
      `${API_URL}?offset=${data.posts.length}&limit=5`
    );
    console.log(response.data);

    // TODO
    // fetch next set of posts (use offset+limit),
    //  and define the variable `morePosts`

    const morePosts = response.data.rows;

    setData({
      loading: false,
      posts: [...data.posts, ...morePosts],
    });
  }

  useEffect(() => {
    fetchNext5Posts();
  }, []);

  return (
    <div className="PostsFeed">
      <h2 align="center">Recent posts</h2>
      {data.posts.map((post) => {
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
        {data.loading ? (
          <em>Loading...</em>
        ) : (
          <button class="button-19" role="button" onClick={fetchNext5Posts}>
            Load more
          </button>
        )}
      </p>
    </div>
  );
}

{
  /* TODO: render the list of posts */
}

{
  /* TODO: show a loading indicator when the posts are loading,
        or else a button to load more posts if not */
}
