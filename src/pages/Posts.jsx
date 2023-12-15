import React, {useEffect, useState} from "react";
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import PostForm from "../components/PostForm";
import PostFiler from "../components/PostFiler";
import PostList from "../components/PostList";
import Pagination from "../components/UI/pagination/Pagination";
import Loader from "../components/UI/Loader/Loader";

function Posts() {

    const [posts,setPosts] = useState([])

    const [filter,setFilter] = useState({sort:'',query:''})

    const [modal,setModal] = useState(false);

    const [totalPages,setTotalPages]=useState(0)

    const [limit,setLimit]=useState(10)

    const [page,setPage]=useState(1)

    const sortedAndSearchedPosts = usePosts(posts,filter.sort,filter.query);



    const [fetchPosts,isPostsLoading,postError]=useFetching(async (limit,page)=>{
        const response = await PostService.getALl(limit,page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount,limit))
    })

    useEffect(() => {
        fetchPosts(limit,page)
    }, [page]);
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

            <Pagination
                page={page}
                setPage={setPage}
                totalPages={totalPages}
            />

        </div>
    );
}

export default Posts;
