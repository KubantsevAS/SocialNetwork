import React from 'react';
import { Form, Field } from 'react-final-form'
import { Input, createInput } from '../../Common/FormControls/FormsControls';
import { requiredField, maxLengthCreator, composeValidators } from '../../../utilities/validators/validators'
import { FORM_ERROR } from 'final-form';
import styles from './LoginForm.module.css'



const LoginForm = (props) => {

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
    
    const onSubmit = async values => {
        props.login(values.login, values.password, values.rememberMe, values.captcha)
        await sleep(500)
        if (!props.errorMessage) {
            return {[FORM_ERROR] : `Try another email`}
        }
    }
    return (
        <Form
            onSubmit={onSubmit}
        >
            {({ handleSubmit, pristine, form, submitting, submitError }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        {createInput({
                            name:"login", 
                            type:"text", 
                            placeholder:"Email", 
                            validators:composeValidators(requiredField, maxLengthCreator(22))
                            })
                        }
                        {createInput({
                            name:"password", 
                            type:"password", 
                            placeholder:"Password", 
                            validators:composeValidators(requiredField, maxLengthCreator(22))
                            })
                        }
                    </div>
                    <div>
                        <Field type={"checkbox"} component={"input"} name={"rememberMe"} /> Remember Me
                    </div>
                    <div>

                        {props.captchaUrl && <img src={props.captchaUrl} />}
                        {props.captchaUrl &&
                            createInput({
                                name:"captcha", 
                                type:"text", 
                                placeholder: "Enter captcha", 
                                validators: composeValidators(requiredField, maxLengthCreator(22))
                                })
                            
                        }


                        {submitError && <div className={styles.error}>{submitError}</div>}
                        <button type={"submit"} disabled={submitting}>
                            Login
                        </button>
                        
                        <button
                            type="button"
                            disabled={pristine || submitting}
                            onClick={form.reset}
                        >
                            Clear Values
                        </button>
                    </div>
                </form>
            )
            }

        </Form >


    );
    
}

export default LoginForm;
