/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase-config";
import Deletepost from "./Deletepost";
import { useAuthState } from "react-firebase-hooks/auth";
import Likepost from "./Likepost";
import { Link } from "react-router-dom";
import './Home.css'

export default function Liked() {
  const [articles, setArticles] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const articleRef = collection(db, "Articles");
    const q = query(articleRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
      console.log(articles);
    });
  }, []);
  return (
    
    <div>

      
        {articles.map(
          ({
            id,
            title,
            description,
            imageUrl,
            createdAt,
            createdBy,
            userId,
            likes,
            comments,
          }) => 
          {
            if(likes?.includes(user.uid))
  {
  return(
    
    <div className="  border mt-3 p-3 w-40 bg-red " key={id}>
              
    <div className="row">
    <div className="col-9 ps-3">

    <div className="row">
         
         
          <div className="col-6 d-flex flex-row-reverse">
            {user && user.uid === userId && (
              <Deletepost id={id} imageUrl={imageUrl} />
            )}
          </div>
        </div>
        <h3>{title}</h3>
        <p>{createdAt.toDate().toDateString()}</p>
        <h5>{description}</h5>

        <div className="d-flex flex-row-reverse">
          {user && <Likepost id={id} likes={likes} />}
          <div className="pe-2">
            <p>{likes?.length} likes</p>
          </div>
          {comments && comments.length > 0 && (
            <div className="pe-2">
              <p>{comments?.length} comments</p>
            </div>
          )}
           <div className="col-11">
                     {createdBy && (
                       <span className ><h3 style={{marginLeft:30}}>@{createdBy}</h3></span>
                     )}
            </div>
        </div>
      </div>
    </div>
  </div>
  )
  }
           
          }
        )
      }
    </div>
  );
}
