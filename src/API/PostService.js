import axios from "axios";

export default class PostService{
    static async getALl(limit=10,page=1){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
            params:{
                _limit:limit,
                _page:page
            }
        })
        return response
    }
}