import React from "react";
import Comment from "./Comment";

const CommentsList: React.FC<any> = ({ comments }) => {
  return comments?.map((comment: any, index: any) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 ml-5 border-l-black">
        <CommentsList comments={comment?.replies} />
      </div>
    </div>
  ));
};

export default CommentsList;
