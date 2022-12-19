import React from 'react';
import { Form, Field } from 'react-final-form'
import { Input } from '../../Common/FormControls/FormsControls';
import { requiredField, maxLengthCreator, composeValidators } from '../../../utilities/validators/validators'


const LoginForm = (props) => {
    return (
        <Form
            onSubmit={values => {
                props.login(values.login, values.password, values.rememberMe)
            }}

        >
            {({ handleSubmit, pristine, form, submitting }) => (
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
