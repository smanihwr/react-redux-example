import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect }from 'react-redux';
import { createPost } from "../actions/postActions";

class PostForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        };

        //call action
        this.props.createPost(post);
    }

    render() {
        return (
            <div>
                <h1>Add Posts</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label> Title: </label> <br/>
                        <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                    </div>
                    <br/>
                    <div>
                        <label> Body: </label> <br/>
                        <textarea name="body" cols="50" rows="5" value={this.state.body}
                                  onChange={this.handleChange}/>
                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

PostForm.propTypes = {
 createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);
