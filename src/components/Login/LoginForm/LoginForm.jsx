import React from 'react';
import { Form, Field } from 'react-final-form'
import { Input } from '../../Common/FormControls/FormsControls';
import { requiredField, maxLengthCreator, composeValidators } from '../../../utilities/validators/validators'
import { FORM_ERROR } from 'final-form';
import styles from './LoginForm.module.css'



const LoginForm = (props) => {

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
    
    const onSubmit = async values => {
        props.login(values.login, values.password, values.rememberMe)
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
                        <Field placeholder={"Login"} component={'input'} name={"login"} validate={composeValidators(requiredField, maxLengthCreator(22))}>
                            {({ input, meta }) => (
                                <div>
                                    <Input {...input} meta={meta} type="text" placeholder={"Email"} />
                                </div>
                            )}
                        </Field>
                    </div>
                    <div>
                        <Field placeholder={"Password"} component={"input"} name={"password"} validate={composeValidators(requiredField, maxLengthCreator(22))}>
                            {({ input, meta }) => (
                                <div>
                                    <Input {...input} meta={meta} type="password" placeholder={"Password"} />
                                </div>
                            )}
                        </Field>
                    </div>
                    <div>
                        <Field type={"checkbox"} component={"input"} name={"rememberMe"} /> Remember Me
                    </div>
                    <div>
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
