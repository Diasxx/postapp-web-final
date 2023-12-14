import React, {useMemo, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFiler from "./components/PostFiler";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
function App() {

    const [posts,setPosts] = useState([
        {id:1,title:'AA',body:'CC'},
        {id:2,title:'BB',body:'BB'},
        {id:3,title:'CC',body:'AA'}
    ])

    const [filter,setFilter] = useState({sort:'',query:''})
    const [modal,setModal] = useState(false);


    const sortedPosts = useMemo(()=>{

        console.log('func SortedPost works')
        if(filter.sort){
            return [...posts].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;

    },[filter.sort,posts])

    const sortedAndSearchedPosts = useMemo(()=>{
        return sortedPosts.filter(post=>post.title.toLowerCase().includes(filter.query))
    },[filter.query,sortedPosts])

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
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title="High level language"/>

    </div>
  );
}

export default App;
