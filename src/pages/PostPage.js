// / src/pages/PostPage.js
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPost } from "../store/postPage/actions";

export default function PostPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(id);

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  return (
    <div>
      {" "}
      <h1 align="center">Hello this is the postpage!</h1>
      <div></div>
    </div>
  );
}
