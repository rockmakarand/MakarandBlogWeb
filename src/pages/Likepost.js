import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase-config";
import { arrayRemove, arrayUnion, collection, doc, getDocs, updateDoc } from "firebase/firestore";

export default function Likepost({ id, likes }) {
  const [user] = useAuthState(auth);

  const postsCollectionRef = collection(db, "posts");
const handleLike = () => 
{
  if (likes?.includes(user.uid)) {
    updateDoc(postsCollectionRef, {
      likes: arrayRemove(user.uid),
    }).then(() => {
        console.log("unliked");
    }).catch((e) => {
          console.log(e);
    });
  }
  else{
      updateDoc(postsCollectionRef,{
          likes:arrayUnion(user.uid)
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
        className={`fa fa-heart${!likes?.includes(user.uid) ? "-o" : ""} fa-lg`}
        style={{
          cursor: "pointer",
          color: likes?.includes(user.uid) ? "red" : null,
        }}
        onClick={handleLike}
      />
    </div>
  );
}
