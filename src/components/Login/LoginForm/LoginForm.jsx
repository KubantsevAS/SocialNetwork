import React from 'react';
import { Form, Field } from 'react-final-form'


const LoginForm = (props) => {
    return (
        <Form
            onSubmit={values => {

            }}
            initialValues={{
                // login: 'Dan'
            }}
            validate={values => {
                // do validation here, and return errors object
            }}

        >
            {({ handleSubmit, pristine, form, submitting }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field placeholder={"Login"} component={"input"} name={"login"} />
                    </div>
                    <div>
                        <Field placeholder={"Password"} component={"input"} name={"password"} />
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
