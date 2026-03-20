import React from 'react'
import "../style/Feed.scss"

const Feed = () => {
  return (
    <main className='feed-page'>
      <div className="fees">
        <div className="posts">
          <div className="post">

          <div className="user">
              <img src="https://images.unsplash.com/photo-1773613007146-650c070ffc59?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDF8fHxlbnwwfHx8fHw%3D"  alt=""/>
            <p>Username</p>
          </div>
            <img src="https://images.unsplash.com/photo-1773709766459-6790344f97b9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3N3x8fGVufDB8fHx8fA%3D%3D" alt="" />
          <div className="bottom">
            <p className="caption">caption caption</p>
          </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Feed