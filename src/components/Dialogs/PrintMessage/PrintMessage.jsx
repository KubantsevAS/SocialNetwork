import React from 'react';
import classes from './PrintMessage.module.css'
import { Form, Field } from 'react-final-form'

const PrintMessage = (props) => {
    
    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody)
    }

    return (
        <Form 
            onSubmit={addNewMessage}
            >
            {({handleSubmit, submitting}) => (
            <form 
                onSubmit={handleSubmit}
                
            >
                    <div className={classes.printAreaBorder}>
                        <div className={classes.printArea}>
                            <Field 
                                component={"textarea"} 
                                name={"newMessageBody"}
                                className={classes.newMessage} 
                            />
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