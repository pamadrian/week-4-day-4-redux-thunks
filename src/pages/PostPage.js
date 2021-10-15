// / src/pages/PostPage.js
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../store/postPage/actions";
import { selectPostAndComments } from "../store/postPage/selectors";

export default function PostPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(selectPostAndComments);
  console.log(id);

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  return (
    <div>
      {" "}
      <h1 align="center">Hello this is the postpage!</h1>
      <div>
        <p>{loading ? <em>Loading...</em> : <p> Done! </p>}</p>
      </div>
    </div>
  );
}
