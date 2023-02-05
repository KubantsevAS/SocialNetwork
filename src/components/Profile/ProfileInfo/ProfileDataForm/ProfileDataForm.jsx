import React, { useState } from 'react'
import { Form, Field } from 'react-final-form'
import { composeValidators, maxLengthCreator, requiredField } from '../../../../utilities/validators/validators'
import { Input, TextArea } from '../../../Common/FormControls/FormsControls'
import { Contact } from '../ProfileInfo'
import { FORM_ERROR } from 'final-form';
import styles from './ProfileDataForm.module.css'

class ProfileDataForm extends React.Component {

    state = {
        errorText: this.props.formError,
    }

    onSubmit = async (values) => {
        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
        this.props.saveProfile(values);
        await sleep(300);
        if (this.state.errorText) {
            return {[FORM_ERROR] : `${this.state.errorText}`}
        } else {
            this.props.setEditMode(false); 
            this.setState({
                errorText: false
            })
        }   
    }
    componentDidUpdate (prevProps, prevState) {
        if ( prevProps.formError !== this.props.formError){
            this.setState({
                errorText: this.props.formError
            });
        }
    }

    makeField(name, subscribe, placeholder) {
        return (
            <div className={styles.mainInfo__item} subscribe={subscribe}>
                <Field component={'input'} name={name} validate={composeValidators(requiredField)}>
                    {({ input, meta }) => (
                        <div>
                            <Input {...input} meta={meta} type="text" placeholder={placeholder} styles={styles.input} />
                        </div>
                    )}
                </Field>
            </div>
        )
    }


    render() {

        return (
            <Form
                onSubmit={this.onSubmit}
                initialValues={{
                    fullName: this.props.profile.fullName,
                    aboutMe: this.props.profile.aboutMe,
                    lookingForAJob: this.props.profile.lookingForAJob,
                    lookingForAJobDescription: this.props.profile.lookingForAJobDescription,
                    contacts: this.props.profile.contacts
                }}
            >
                {({ handleSubmit, submitting, submitError }) => (
                    <form onSubmit={handleSubmit}>

                        <div className={styles.mainInfo}>

                            {this.makeField('fullName', 'Full Name', 'fullName')}
                            {this.makeField('aboutMe', 'About Me', 'aboutMe')}
                            
                            <div className={styles.mainInfo__item} subscribe='Job Status'>
                                <label>Looking for a job: </label> 
                                <Field name='lookingForAJob' component="input" type='checkbox' className={styles.checkbox}/>
                            </div>
                            
                            <div className={styles.mainInfo__item} subscribe={'My Professional Skills'}>
                                <Field component={'input'} name={'lookingForAJobDescription'} validate={composeValidators(requiredField)}>
                                    {({ input, meta }) => (
                                        <div>
                                            <TextArea {...input} meta={meta} type="text" placeholder={'skills'} styles={styles.input} />
                                        </div>
                                    )}
                                </Field>
                            </div>

                        </div>


                        {submitError && <div className={styles.contactsError}>{submitError}</div>}


                        <div>
                            <div className={styles.contactsHeader}>Contacts:</div>
                            {Object.keys(this.props.profile.contacts).map(key => {
                                return (
                                    <div className={styles.contactContainer}>
                                        <Contact contactTitle={key[0].toUpperCase() + key.slice(1)} />
                                        <Field 
                                            name={`contacts.${key}`} 
                                            component={'input'} 
                                            type={'text'} 
                                            placeholder={'Link...'}
                                            className={styles.contactField}
                                            />
                                    </div>

                            )
                        })}
                        </div>
                        <button
                            type={"submit"}
                            disabled={submitting}
                            id="ProfileFormSub"
                            className={styles.ProfileFormSub}
                        >
                            SAVE
                        </button>
                    </form>
                )}
            </Form>
        )
    }
}

export default ProfileDataForm