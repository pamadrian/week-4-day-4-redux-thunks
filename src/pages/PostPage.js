// / src/pages/PostPage.js
import React from "react";
import { useParams } from "react-router-dom";

export default function PostPage() {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      {" "}
      <h1 align="center">Hello this is the postpage!</h1>
      <div>
        <div key={id}></div>
      </div>
    </div>
  );
}
