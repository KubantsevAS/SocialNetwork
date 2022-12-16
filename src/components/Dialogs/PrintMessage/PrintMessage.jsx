import React from 'react';
import classes from './PrintMessage.module.css'
import { Form, Field } from 'react-final-form'
// import { TextArea } from '../../Common/FormControls/FormsControls';
import {requiredField} from './../../../utilities/validators/validators'

const PrintMessage = (props) => {

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody)
    }

    return (
        <Form
            onSubmit={addNewMessage}
        >
            {({ handleSubmit, submitting }) => (
                <form
                    onSubmit={handleSubmit}

                >
                    <div className={classes.printAreaBorder}>
                        <div className={classes.printArea}>
                            
                            <Field
                                name="newMessageBody"
                                validate={requiredField}
                                component={'textarea'}
                                className={classes.newMessage}
                            >
                            </Field>
                            <label htmlFor='post' className={classes.postBtn}>
                                <div className={classes.Arrow}></div>
                            </label>
                            <button
                                className={classes.btn}
                                id={"post"}
                                type={"submit"}
                                disabled={submitting}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>)
            }
        </Form>


    )
}

export default PrintMessage;