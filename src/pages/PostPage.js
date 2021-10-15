// / src/pages/PostPage.js
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../store/postPage/actions";
import { selectPostAndComments } from "../store/postPage/selectors";
import ReactMarkdown from "react-markdown";
import moment from "moment";

export default function PostPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const postData = useSelector(selectPostAndComments);
  console.log("postdata", postData);

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  return (
    <div>
      {" "}
      <h1 align="center">Hello this is the postpage!</h1>
      <div>
        {!postData ? (
          <em>Loading...</em>
        ) : (
          <>
            <h1>{postData.post.title}</h1>
            <p className="meta">
              By <strong>{postData.post.developer.name}</strong>
              {moment(postData.post.createdAt).format("DD-MM-YYYY")}
              &bull;{" "}
            </p>
            <span className="tags">
              {postData.post.tags.map((tag) => {
                return (
                  <React.Fragment key={tag.id}>
                    <span className="Tag">{tag.tag}</span>{" "}
                  </React.Fragment>
                );
              })}
            </span>
            <ReactMarkdown source={postData.post.content} />

            <h2>Comments</h2>
            {postData.comments.rows.lenght === 0 ? (
              <p>
                <em> No comments left behind yet :(</em>
              </p>
            ) : (
              postData.comments.rows.map((comment) => {
                return (
                  <div key={comment.id}>
                    <p>{comment.text}</p>
                    <p className="meta">
                      By <strong>{comment.developer.name}</strong> &bull;{" "}
                      {moment(comment.createdAt).format("DD-MM-YYYY")}{" "}
                    </p>
                  </div>
                );
              })
            )}
          </>
        )}
      </div>
    </div>
  );
}
