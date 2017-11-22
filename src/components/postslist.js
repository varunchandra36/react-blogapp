import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from "../actions/index";
import _ from 'lodash';
import { Link} from 'react-router-dom';
class PostList extends Component{
        componentDidMount()
        {
            this.props.fetchPosts();
        }
        renderPosts()
        {

           return _.map(this.props.posts,post=>{
               return (

                   <ul className="list-item-title" key={post.title}>
                       <Link to={`/post/${post.id}`}>
                           {post.title}
                       </Link>

                   </ul>
               )

           })
        }
    render()
    {console.log(this.props.posts);
        return(

            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">Create New Post</Link>
                </div>
                <h3>Posts</h3>
             <ul className="list-group">
                 {this.renderPosts()}
             </ul>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostList);