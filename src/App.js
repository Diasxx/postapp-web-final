import React, {useEffect, useMemo, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFiler from "./components/PostFiler";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import {useFetching} from "./hooks/useFetching";
function App() {

    const [posts,setPosts] = useState([])
    const [filter,setFilter] = useState({sort:'',query:''})
    const [modal,setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts,filter.sort,filter.query);
    const [fetchPosts,isPostsLoading,postError]=useFetching(async ()=>{
        const posts = await PostService.getALl()
        setPosts(posts)
    })

    useEffect(() => {
        fetchPosts()
    }, []);
    const createPost=(newPost)=>{
        setPosts([...posts,newPost])
        setModal(false)
    }
    const removePost = (post)=>{
        setPosts(posts.filter(p => p.id !== post.id))
    }


  return (
    <div className="App">
        <MyButton style={{marginTop:30}} onClick={()=>setModal(true)}>
            Create Post
        </MyButton>
        <MyModal
            visible={modal}
            setVisible={setModal}>
            <PostForm create ={createPost}/>
        </MyModal>
        <hr style={{margin:'15px 0'}}/>
        <PostFiler
            filter={filter}
            setFilter={setFilter}
        />

        {
            postError &&
            <h1>Error occurred ${postError}</h1>
        }

        {isPostsLoading
            ?<div style={{display:'flex',justifyContent:'center',marginTop:50}}><Loader/></div>
            :<PostList remove={removePost} posts={sortedAndSearchedPosts} title="High level language"/>
        }

    </div>
  );
}

export default App;
