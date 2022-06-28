/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc, } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import './Home.css'
//import LikeArticle from "./LikeArticle";


function Liked({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");
 
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  });

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
  return (
    <div className="homePage">
      <h1 style={{textAlign:'center',marginLeft:10,marginRight:10}}>View The blogs of various other Authors and Yours too!</h1>
      
       
      {postLists.map((post,createdAt,user,seconds,currentUser) => {
        if(isAuth)
      {

         
        if (post.likes?.includes(currentUser.uid))
        {
            return (
          
          
                <div className="post">
                    
                  
                
                  <div className="postHeader">
                    <div className="title">
                      <h1> {post.title}</h1>
                    </div>
                    <div className="deletePost">
                      {isAuth && post.author.id === auth.currentUser.uid && (
                        <button
                          onClick={() => {
                            deletePost(post.id);
                          }}
                        >
                          {" "}
                          &#128465;
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="postTextContainer"> {post.postText} </div>
                  <h3>@{post.author.name}</h3>
                
                
                  
                </div>
              );
        }
        
                  }
      })}
          
    </div>
    
  );
}

export default Liked;