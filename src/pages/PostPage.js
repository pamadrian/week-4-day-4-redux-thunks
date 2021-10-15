// / src/pages/PostPage.js
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../store/postPage/actions";
import { selectPostAndComments } from "../store/postPage/selectors";
import ReactMarkdown from "react-markdown";

export default function PostPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const postData = useSelector(selectPostAndComments);
  console.log(id);

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  return (
    <div>
      {" "}
      <h1 align="center">Hello this is the postpage!</h1>
      <div>
        {postData ? (
          <em>Loading...</em>
        ) : (
          <>
            <h1> {postData.post.title} </h1>
            <p className="meta"> TODO </p>
            <ReactMarkdown children={postData.post.content} />

            <h2>Comments</h2>
            <p>TODO</p>
          </>
        )}
      </div>
    </div>
  );
}
