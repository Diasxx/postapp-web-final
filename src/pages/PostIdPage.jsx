import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import { post } from 'axios';
import Loader from '../components/UI/Loader/Loader';

const PostIdPage = () => {
    const params = useParams();
    const [post, setPosts] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPosts(response.data);
    });

    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id);
    }, []);

    return (
        <div className="post-id-page" style={{ color: 'black' }}>
            <h1>You opened post page with id = {params.id}</h1>

            {isLoading ? (
                <Loader />
            ) : (
                <div className="post-details">
                    <div className="post-id">{post.title}</div>
                    <div className="post-title">{post.body}</div>
                </div>
            )}

            <h1 className="comments-heading">Comments</h1>

            {isComLoading ? (
                <Loader />
            ) : (
                <div className="comments-container">
                    {comments.map((comm, index) => (
                        <div className="comment" key={index}>
                            <h5 className="comment-email">{comm.email}</h5>
                            <div className="comment-body">{comm.body}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PostIdPage;