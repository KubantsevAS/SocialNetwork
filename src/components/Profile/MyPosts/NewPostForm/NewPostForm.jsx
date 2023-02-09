import React, {useState} from 'react';
import { Form, Field } from 'react-final-form';
import { TextArea } from '../../../Common/FormControls/FormsControls';
import { maxLengthCreator, composeValidators, requiredField } from './../../../../utilities/validators/validators'
import styles from './NewPostForm.module.css'


const NewPostForm = (props) => {

    let addNewPost = (values) => {
        props.addNewPost(values.postField)           
    }

    return (
        <Form onSubmit={addNewPost}>
            {({ handleSubmit, form, submitting, values}) => (
                <form onSubmit={handleSubmit} className={styles.newPostForm}>

                    <div className={styles.newPostTitle}><b>New Post</b></div>

                    <Field
                        name="postField"
                        validate={composeValidators(requiredField, maxLengthCreator(185))}
                        component={"textarea"}
                    >
                        {({ input, meta }) => (
                            <div className={styles.textareaContainer}>
                                <TextArea {...input} meta={meta} type="text" placeholder={"Enter something to share your post..."} 
                                    styles={styles.textarea}
                                    errorStyle={styles.textareaError}
                                />
                            </div>
                        )}
                    </Field>
                    
                    <div className={styles.postBtnContainer}>
                        <div>Symbols: {values.postField ? values.postField.length : 0}</div>
                        <label htmlFor='newPostBtn' className={styles.labelPostBtn}>Add post</label>
                        <button 
                            type={"submit"} 
                            disabled={submitting} 
                            onClick={() => {
                                if (values.postField){
                                setTimeout(form.restart, 100)}
                            }}
                            id='newPostBtn'
                            className={styles.postBtn}
                        >
                        </button>
                    </div>

                </form>)}
        </Form>
    );
}

export default NewPostForm;
