import {createContext, useContext, useState} from "react"

export const PostContext = createContext(null)

function Post({children}){
    const [postDetails, setpostDetails] = useState([])
    console.log(postDetails);
    return(
        <PostContext.Provider value={{postDetails,setpostDetails}}>
            {children}
        </PostContext.Provider>
    )
}

export default Post