import axios from 'axios';
const Add_Post='Add_Post';

const Fetch_Posts='Fetch_Posts';

const root_url='http://reduxblog.herokuapp.com/api/posts';
const APi_key='?key=varunchandra123';
export function fetchPosts() {
    const request=axios.get(`${root_url}${APi_key}`);
    console.log(request);
    return{
        type:Fetch_Posts,
        payload:request
    };
    
}
export function addNewPost(values,callback) {
    const request = axios
        .post(`${root_url}${APi_key}`, values)
        .then(() => callback());

    return {
        type: Add_Post,

        payload: request
    }
}
export function fetchpost(id)
{
    const request=axios
        .get(`${root_url}/${id}${APi_key}`);

    return{
        type: 'fetch_post',
        payload: request
    }
}
export function deletePost(id,callback)
{
    const request=axios
        .delete(`${root_url}/${id}${APi_key}`)
        .then(()=>callback());

    return{
        type:'delete_post',
        payload: request
    }
}

export default Fetch_Posts;

