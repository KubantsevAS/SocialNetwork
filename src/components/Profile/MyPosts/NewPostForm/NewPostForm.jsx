import React from 'react';
import { Form, Field } from 'react-final-form';

const NewPostForm = (props) => {

    let addNewPost = (values) => {
        props.addNewPost(values.postField)
    }
    return (
        <Form onSubmit={addNewPost} >
            {({handleSubmit, submitting})=>(
            <form onSubmit={handleSubmit}>
                <Field name={"postField"} component={"textarea"}/>
                <button type={"submit"} disabled={submitting}>Add Post</button>
            </form>)}
        </Form>
    );
}

export default NewPostForm;
