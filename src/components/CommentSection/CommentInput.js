// You do not need to do anything in this file
import React from 'react';

const CommentInput = props => {
  const {addComment, doNothing} = props;
  return (
    <>
    <div className="comment-form" onSubmit={doNothing}>
      <input
        type="text"
        id="test-test"
        // value={props.comment}
        placeholder="Add comment... "
        onKeyDown={addComment}
        onSubmit={doNothing}
      />
    </div>
    {/* <button onClick={addComment}>Submit Comment</button> */}
    </>
  );
};

export default CommentInput;
