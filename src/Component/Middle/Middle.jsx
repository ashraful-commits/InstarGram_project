import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Model from '../Model/Model';
import './Middle.scss';
const Middle = () => {
  const [drop, setDrop] = useState(false);
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5050/post').then((res) => {
      setPost(res.data);
    });
  }, [post]);
  // delet
  const hendelDelete = (id) => {
    console.log(id);
    // axios.delete(`http://localhost:5050/post/${id}`);
  };
  return (
    <div className="middle_content">
      <div className="users">
        <div className="user">
          <div className="user_photo">
            <img
              src="https://images.unsplash.com/photo-1559080463-5c7eb3a52de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80"
              alt=""
            />
          </div>
          <span>user name</span>
        </div>
        <div className="user">
          <div className="user_photo">
            <img
              src="https://images.unsplash.com/photo-1559080463-5c7eb3a52de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80"
              alt=""
            />
          </div>
          <span>user name</span>
        </div>
        <div className="user">
          <div className="user_photo">
            <img
              src="https://images.unsplash.com/photo-1559080463-5c7eb3a52de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80"
              alt=""
            />
          </div>
          <span>user name</span>
        </div>
        <div className="user">
          <div className="user_photo">
            <img
              src="https://images.unsplash.com/photo-1559080463-5c7eb3a52de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80"
              alt=""
            />
          </div>
          <span>user name</span>
        </div>
        <div className="user">
          <div className="user_photo">
            <img
              src="https://images.unsplash.com/photo-1559080463-5c7eb3a52de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80"
              alt=""
            />
          </div>
          <span>user name</span>
        </div>
      </div>
      <div className="post_container">
        {post.map((item, index) => (
          <>
            <div key={index} className="post">
              <div className="post_user ">
                <div className="profile">
                  <img
                    src="https://images.unsplash.com/photo-1559080463-5c7eb3a52de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80"
                    alt=""
                  />
                  <div className="user_datials">
                    <p>ashraful10000</p>
                    <span>Md.Ashraful Alam</span>
                  </div>
                  <button onClick={() => setDrop(true)}>
                    <i class="bx bx-dots-horizontal-rounded"></i>
                  </button>
                </div>
              </div>
              <div className="post_content">
                <img src={item.photo} alt="" />

                <div className="status">
                  <div className="comment">
                    <span>
                      <svg
                        aria-label="Like"
                        class="_ab6-"
                        color="#8e8e8e"
                        fill="#8e8e8e"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                      </svg>
                    </span>
                    <span>
                      <svg
                        aria-label="Comment"
                        class="_ab6-"
                        color="#8e8e8e"
                        fill="#8e8e8e"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path
                          d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                          fill="none"
                          stroke="currentColor"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></path>
                      </svg>
                    </span>
                    <span>
                      <svg
                        aria-label="Share Post"
                        class="_ab6-"
                        color="#8e8e8e"
                        fill="#8e8e8e"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <line
                          fill="none"
                          stroke="currentColor"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="22"
                          x2="9.218"
                          y1="3"
                          y2="10.083"
                        ></line>
                        <polygon
                          fill="none"
                          points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                          stroke="currentColor"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></polygon>
                      </svg>
                    </span>
                  </div>
                  <span>
                    <svg
                      aria-label="Save"
                      class="_ab6-"
                      color="#8e8e8e"
                      fill="#8e8e8e"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <polygon
                        fill="none"
                        points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></polygon>
                    </svg>
                  </span>
                  <div></div>
                </div>
                <div className="comment_content">
                  <span>22 likes</span>
                  <span>
                    Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Aut eligendi obcaecati placeat
                    officiis illum quae quo sint molestiae, mollitia
                    error!
                  </span>
                  <a href="/">See translation</a>
                  <form action="">
                    <input
                      type="text"
                      placeholder="Add a comment..."
                    />
                  </form>
                </div>
              </div>
            </div>
            {drop && (
              <Model hide={setDrop}>
                <div className="dropdown">
                  <button>Edit</button>
                  <button onClick={hendelDelete(item.id)}>
                    Detete
                  </button>
                </div>
              </Model>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Middle;
