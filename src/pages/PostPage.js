// / src/pages/PostPage.js
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function PostPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(id);

  useEffect(() => {
    dispatch(fetchPosts(id));
  }, [dispatch, id]);

  const postData = useSelector(selectPostAndComments);

  return (
    <div>
      {" "}
      <h1 align="center">Hello this is the postpage!</h1>
      <div>
        <div key={id}></div>
        {id.data.map((posts) => {
          return <h1>Title: {id.data.title}</h1>;
        })}
      </div>
    </div>
  );
}
