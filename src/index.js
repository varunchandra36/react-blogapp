import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from  'redux-promise';
import PostList from './components/postslist'
import reducers from './reducers';
import postdescription from "./components/postShow";
import NewPost from "./components/newposts"

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
       <BrowserRouter>
           <div>
               <Switch>
                   <Route path="/posts/new" component={NewPost}/>
                   <Route path="/post/:id" component={postdescription}/>
                   <Route path="/" component={PostList}/>


               </Switch>
           </div>
       </BrowserRouter>

    </Provider>,document.getElementById('root'));
registerServiceWorker();
