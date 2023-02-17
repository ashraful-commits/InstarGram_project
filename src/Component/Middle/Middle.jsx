import axios from 'axios';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import Model from '../Model/Model';
import './Middle.scss';
const Middle = () => {
  //all state here
  const [drop, setDrop] = useState(false);
  const [editModel, setEditModel] = useState(false);
  const [post, setPost] = useState([]);
  const [uid, setId] = useState();
  const [input, setInput] = useState({ text: '', photo: '' });
  //======================================== input onchang
  // get all post  here
  // delete
  const hendelDelete = (id) => {
    swal({
      title: 'Are you sure?',
      text: '',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal('Poof! Your  post has been deleted!', {
          icon: 'success',
        });
        axios.delete(`http://localhost:5050/post/${id}`);
        setDrop(false);
        setPost(post.filter((item) => item.id !== id));
      } else {
        swal('Your post is safe!');
      }
    });
  };
  //=========================== dropdown down menu cancel
  const handelCancel = () => {
    setDrop(false);
  };
  
  //=============================================== edit form
  //===================================== all state
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  //=================================== onchange input
  const hendelInput = async (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    const allfile = e.target.files[0];
    console.log(allfile);
    const url = URL.createObjectURL(allfile);
    console.log(url);
    setImage(allfile);
    setPreview(url);
  };
  //==============================edit
const handelDropdown =(uid)=>{
 setId(uid);
  setDrop(true);
}
  const handelEdit = () => {
   
    setDrop(false);
    setEditModel(true);
    axios.get(`http://localhost:5050/post/${uid}`).then((res) => {
      setInput(res.data);
      setPreview(res.data.photo);
    });
  };

  //===================== form submite
  const heldelEditOnSumit = async (e) => {
    e.preventDefault();
    if (image === undefined) {
      swal({
        title: 'Please Select a photo or video!',
        text: '',
        icon: 'warning',
        button: 'ok',
      });
    } else {
      console.log(preview);
      const data = new FormData();

      data.append('file', image);

      data.append('upload_preset', 'instagram');
      //======= coludinary post image
      await axios
        .post(
          'https://api.cloudinary.com/v1_1/ds9mljkgj/image/upload',
          data
        )
        .then((res) => {
          try {
            const allData = {
              ...input,
              photo: res.data.secure_url,
            };

            // const strData = JSON.stringify(allData);

            const jurl = `http://localhost:5050/post/${uid}`;

            //===================== data post on db json
            axios
              .put(jurl, allData)
              .then((res) => {
                setInput({
                  para: '',
                  photo: '',
                });
                setEditModel(false);
                setPost((prevState)=>({
                 ... prevState,
                 ... res.data
                }))
              })
              .catch((error) => {
                console.log(error.message);
              });
            swal({
              title: 'Edit success!',
              text: '',
              icon: 'success',
              button: 'ok',
            });
          } catch (error) {
            console.log(error.message);
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };
  //=============================clearimg
  const handelClearImg = () => {
    setPreview(undefined);
    setImage(undefined);
  };
  useEffect(
    () => {
      axios.get('http://localhost:5050/post?_sort=id&_order=desc').then((res) => {
        setPost(res.data);
      });
    },
    [setPost,post]
  );
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
        {/* //==========================no post */}
        {post.length === 0 && (
          <div className="post">
            <h4 style={{ textAlign: 'center' }}>No post</h4>
          </div>
        )}
        {/* =========all post */}
        {post.length > 0 &&
          post.map((item, index) => (
            <div key={index} className="post">
              {/* // dropdown menu here edit delete */}
              {drop && (
                <Model hide={setDrop}>
                  <div className="dropdown">
                    <ul>
                      <li>
                        <button onClick={() => handelEdit(item.id)}>
                          Edit
                        </button>
                        <button onClick={() => hendelDelete(item.id)}>
                          Detete
                        </button>
                        <button onClick={handelCancel}>Cancle</button>
                      </li>
                    </ul>
                  </div>
                </Model>
              )}
              {editModel && (
                <Model hide={setEditModel}>
                  <div className="form">
                    <h4>Edit post</h4>
                    <form onSubmit={heldelEditOnSumit} action="">
                      <div
                        style={{ display: 'none' }}
                        className="field"
                      >
                        <label for="">Text</label>
                        <input
                          name="para"
                          value={input.para}
                          onChange={hendelInput}
                          type="text"
                        />
                      </div>
                      <div className="field">
                        {/* <label for="">Photo</label> */}
                        {/*============= default img */}
                        {preview === undefined && (
                          <label for="PhotoPrev">
                            <div className="prev">
                              <svg
                                aria-label="Icon to represent media such as images or videos"
                                class="_ab6-"
                                color="#262626"
                                fill="#262626"
                                height="100"
                                role="img"
                                viewBox="0 0 97.6 77.3"
                                width="100"
                              >
                                <path
                                  d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                              <p>Drag photos and videos here</p>
                              <button>Select from computer</button>
                            </div>
                          </label>
                        )}
                        {/* preview image */}
                        {preview && <img src={preview} alt="" />}
                        {preview && (
                          <button
                            onClick={handelClearImg}
                            className="clear_img"
                          >
                            <i class="bx bx-x"></i>
                          </button>
                        )}
                        <input
                          style={{ display: 'none' }}
                          id="PhotoPrev"
                          name="photo"
                          onChange={hendelInput}
                          type="file"
                          multiple
                        />
                      </div>
                      {preview && <button type="submit">Post</button>}
                    </form>
                  </div>
                </Model>
              )}
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
                  <button onClick={()=> handelDropdown(item.id)}>
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
                    Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the
                    1500s, when an unknown
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
          ))}
      </div>
    </div>
  );
};

export default Middle;
