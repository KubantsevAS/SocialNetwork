import React from 'react';
import { Form, Field } from 'react-final-form';
import { createInput } from '../../Common/FormControls/FormsControls';
import {
  requiredField,
  maxLengthCreator,
  composeValidators,
} from '../../../utilities/validators/validators';
import { FORM_ERROR } from 'final-form';
import styles from './LoginForm.module.css';
import emailIcon from './../../../redux/images/icons/email.png';
import keyIcon from './../../../redux/images/icons/key.png';
import captchaIcon from './../../../redux/images/icons/captcha.png';

const LoginForm = (props) => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (values) => {
    props.login(
      values.login,
      values.password,
      values.rememberMe,
      values.captcha
    );
    await sleep(500);
    if (!props.errorMessage) {
      return { [FORM_ERROR]: `Try another email` };
    }
  };
  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit, pristine, form, submitting, submitError }) => (
        <form onSubmit={handleSubmit}>
          <div>
            {createInput({
              name: 'login',
              type: 'text',
              placeholder: 'Email',
              validators: composeValidators(requiredField),
              icon: emailIcon,
            })}
            {createInput({
              name: 'password',
              type: 'password',
              placeholder: 'Password',
              validators: composeValidators(
                requiredField,
                maxLengthCreator(22)
              ),
              icon: keyIcon,
            })}
          </div>
          <div className={styles.checkboxContainer}>
            <Field
              type={'checkbox'}
              component={'input'}
              name={'rememberMe'}
              className={styles.checkboxField}
            />
            <span>Remember Me</span>
          </div>
          <div>
            {props.captchaUrl && (
              <img
                src={props.captchaUrl}
                className={styles.captchaPic}
                alt="captcha"
              />
            )}
            {props.captchaUrl &&
              createInput({
                name: 'captcha',
                type: 'text',
                placeholder: 'Enter captcha',
                validators: composeValidators(
                  requiredField,
                  maxLengthCreator(10)
                ),
                icon: captchaIcon,
              })}

            <div className={styles.btnContainer}>
              <label htmlFor={'subBtn'} className={styles.subBtn}>
                Log In
                <button
                  type={'submit'}
                  disabled={submitting}
                  id={'subBtn'}
                ></button>
              </label>

              <label
                htmlFor={'clearBtn'}
                className={styles.subBtn + ' ' + styles.clearBtn}
              >
                Clear Values
                <button
                  type="button"
                  disabled={pristine || submitting}
                  onClick={form.reset}
                  id={'clearBtn'}
                ></button>
              </label>
            </div>
            {submitError && <div className={styles.error}>{submitError}</div>}
          </div>
        </form>
      )}
    </Form>
  );
};

export default LoginForm;
