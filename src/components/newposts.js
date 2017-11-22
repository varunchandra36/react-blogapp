import React,{Component} from 'react';
import {Field,reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {addNewPost} from '../actions/index';
class NewPost extends Component
{
    renderField(field){
        return(
          <div>
              <div >
              <label>{field.label} :</label>
              <input type="text" {...field.input} />
              {field.meta.touched ? field.meta.error: ''}
          </div>
          </div>
        );

    }
    onSubmit(values)
    {
        this.props.addNewPost(values, () => {
            this.props.history.push("/");
        });
        console.log(values);
    }
    render()
    {   const {handleSubmit}=this.props;
        return(
            <div className="container-fluid center-block col-md-8" >
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field label="Title" name="title" component={this.renderField}/>
                <Field label="Categories" name="categories" component={this.renderField}/>
                <Field label="Content" name="content" component={this.renderField}/>
                    <button type="submit" className="btn btn-primary">Save</button>
                    <Link className="btn btn-danger" to="/">cancel</Link>
                </form>
            </div>
        );
    }

}
function validate(values)
{
    const errors={};

    if(!values.title)
    {
        errors.title="Enter Title"
    }

    if(!values.categories)
    {
        errors.categories="Enter Categories";
    }
    if(!values.content)
    {
        errors.content="Enter Categories"
    }


    return errors;
}
export default reduxForm({
    validate,
    form:'postsNewForm'
})(connect(null,{addNewPost})(NewPost));