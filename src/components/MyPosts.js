import React, { useEffect, useRef, useState } from "react";
import { getPost } from "../api";

const MyPosts = ({ myPosts }) => {
  const [showInactive, setShowInactive] = useState(false);
  const showInactiveCheck = useRef();

  useEffect(() => {
    getPost().then((result) => {
      setShowInactive(result.data.posts);
    });
  }, []);

  function handleShowInactive(event) {
    setShowInactive(showInactive ? false : true);
    event.target.checked = !showInactive;
  }

  return (
    <div>
      <h2>My posts</h2>

      <input
        ref={showInactiveCheck}
        type="checkbox"
        onClick={handleShowInactive}
      />
      <label>Show inactive posts</label>

      {myPosts.length ? (
        myPosts.map((post) => {
          return showInactive || post.active ? (
            <div key={`myPosts ${post._id}`} className="post">
              <h2>{post.title}</h2>
              <p>{post.messages.length} Messages</p>
            </div>
          ) : null;
        })
      ) : (
        <p>Nothing to display</p>
      )}
    </div>
  );
};

export default MyPosts;
