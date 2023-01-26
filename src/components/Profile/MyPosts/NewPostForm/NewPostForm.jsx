import React from 'react';
import { Form, Field } from 'react-final-form';
import { TextArea } from '../../../Common/FormControls/FormsControls';
import {requiredField, maxLengthCreator, composeValidators} from './../../../../utilities/validators/validators'

const NewPostForm = (props) => {

    let addNewPost = (values) => {
        props.addNewPost(values.postField)
    }

    return (
        <Form onSubmit={addNewPost} >
            {({handleSubmit, form, submitting})=>(
            <form onSubmit={handleSubmit}>
                    <Field 
                        name="postField" 
                        validate={composeValidators(requiredField, maxLengthCreator(22))} 
                        component={"textarea"}
                        
                    >
                        {({ input, meta }) => (
                            <div>
                                <TextArea {...input} meta={meta} type="text" placeholder={"Post text"}/> 
                            </div>
                        )}
                    </Field>

                    <button type={"submit"} disabled={submitting} onClick={() => setTimeout(form.reset, 100)}>Add Post</button>
            </form>)}
        </Form>
    );
}

export default NewPostForm;
