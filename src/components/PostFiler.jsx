import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFiler = ({filter,setFilter}) => {
    return (
        <div style={{marginLeft:'30px'}}>
            <MyInput
                value={filter.query}
                onChange={e=>setFilter({...filter,query: e.target.value})}
                placeholder='Search...'
            />

            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter,sort:selectedSort})}
                defaultValue='Sorting'
                options={[
                    {value:'title',name:'By title'},
                    {value:'body',name:'By description'}
                ]}
            />
        </div>
    );
};

export default PostFiler;