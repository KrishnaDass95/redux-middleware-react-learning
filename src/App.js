import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPost } from "./redux/actions/postActions";

const App = () => {
    let loading = useSelector(state => state.loading);
    let data = useSelector(state => state.data);
    let error = useSelector(state => state.error);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPost())
    }, [])

    if(loading){
        return(
            <div>Loading...</div>
        )
    }
    if(error){
        return(
            <div>Error...</div>
        )
    }

    return(
        <div>
            <hi>Post List</hi>
            {
                data.map((post) => {
                    return(
                        <div key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default App;