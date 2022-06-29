import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase-config";
import { arrayRemove, arrayUnion, collection, doc, updateDoc } from "firebase/firestore";

export default function Likepost({likes}) {

   const likesRef = collection(db, "posts");

  const handleLike = () => 
  {
    if (likes?.includes(auth.currentUser.uid)) {
      updateDoc(likesRef, {
        likes: arrayRemove(auth.currentUser.uid),
      }).then(() => {
          console.log("unliked");
      }).catch((e) => {
            console.log(e);
      });
    }
    else{
        updateDoc(likesRef,{
            likes:arrayUnion(auth.currentUser.uid)
        }).then(() => {
            console.log("liked");
        }).catch((e) => {
              console.log(e);
        });
    }
  };
  return (
    <div>
      <i
        className={`fa fa-heart${!likes?.includes(auth.currentUser.uid) ? "-o" : ""} fa-lg`}
        style={{
          cursor: "pointer",
          color: likes?.includes(auth.currentUser.uid) ? "red" : null,
        }}
        onClick={handleLike}
      />
    </div>
  );
}


