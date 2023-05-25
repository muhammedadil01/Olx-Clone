import React,{useEffect,useState,useContext} from 'react';

import './View.css';
import { PostContext } from '../../Store/PostContext';
import { FirebaseContext } from '../../Store/Context';
function View() {
  const [userDetials, setuserDetials] = useState({})

  const {postDetails}=useContext(PostContext)
  const {firebase}=useContext(FirebaseContext)

  useEffect(() => {
    const {userId}= postDetails
    firebase.firestore().collection('user').where('id','==',userId).get().then((res)=>{
      res.forEach(doc=>{
        setuserDetials(doc.data())
      })
    })
  }, [])
  
console.log(userDetials);
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9;{postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>Tue May 04 2021</span>
        </div>
        {userDetials && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetials.username}</p>
          <p>{userDetials.Phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
