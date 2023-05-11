import React from 'react';
import { Field } from 'react-final-form';
import styles from './FormsControls.module.css';

const FormControl = (props) => {
  const hasError =
    (props.meta.error || props.meta.submitError) && props.meta.touched;
  return (
    <span className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
      <>{props.children}</>
      {hasError && (
        <span className={props.errorStyle || styles.oldErrorText}>
          *{props.meta.error || props.meta.submitError}
        </span>
      )}
    </span>
  );
};

export const TextArea = (props) => {
  return (
    <FormControl {...props}>
      <textarea {...props} className={props.styles} />
    </FormControl>
  );
};

export const Input = (props) => {
  return (
    <FormControl {...props}>
      <input {...props} className={props.styles} />
    </FormControl>
  );
};

export const createInput = (props) => {
  return (
    <Field name={props.name} validate={props.validators}>
      {({ input, meta }) => (
        <div className={styles.inputFieldContainer}>
          <img src={props.icon} alt={'icon'} className={styles.inputIcon}></img>
          <input
            {...input}
            type={props.type}
            placeholder={props.placeholder || meta.error}
            className={
              styles.inputNew +
              ' ' +
              (meta.error && meta.touched ? styles.inputNewErr : '')
            }
          />
          {meta.error && meta.touched && (
            <div className={styles.errorText}>*{meta.error}</div>
          )}
        </div>
      )}
    </Field>
  );
};
