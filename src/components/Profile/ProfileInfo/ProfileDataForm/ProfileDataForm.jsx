import React, {useState} from 'react'
import { Form, Field } from 'react-final-form'
import { composeValidators, maxLengthCreator, requiredField} from '../../../../utilities/validators/validators'
import { Input, TextArea } from '../../../Common/FormControls/FormsControls'
import { Contact } from '../ProfileInfo'
import { FORM_ERROR } from 'final-form';
import styles from './ProfileDataForm.module.css'

const ProfileDataForm = ({profile, formError, saveProfile, setEditMode}) => {
    
    let [invalidFormat, setInvalidFormat] = useState(false)

    console.log(formError);

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

    // let state = {
    //     errorText: formError,
    //     invalidFormat: false
    // }

    const onSubmit = async (values) => {
        saveProfile(values);
        setEditMode(false); 

        // await sleep(500);
        // if (formError) {
        //     return {[FORM_ERROR] : `${formError}`}
        // } else {
        //     setEditMode(false); 
        // }   
    }

    return (
        <Form
        onSubmit={onSubmit}
        initialValues={{
            fullName: profile.fullName,
            aboutMe: profile.aboutMe,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            contacts: profile.contacts
        }}
        >
            {({ handleSubmit, submitting, submitError}) => (
                <form onSubmit={handleSubmit}>

                    <div className={styles.mainInfo}>

                    <div className={styles.mainInfo__item} subscribe='Full Name'>
                        <Field component={'input'} name={"fullName"} validate={composeValidators(requiredField)}>
                            {({ input, meta }) => (
                                <div>
                                    <Input {...input} meta={meta} type="text" placeholder={"fullName"} styles={styles.input}/>
                                </div>
                            )}
                        </Field>
                    </div>

                    <div className={styles.mainInfo__item} subscribe='About Me'>
                        <Field component={'input'} name={"aboutMe"} validate={composeValidators(requiredField)}>
                            {({ input, meta }) => (
                                <div>
                                    <Input {...input} meta={meta} type="text" placeholder={"About me"} styles={styles.input}/>
                                </div>
                            )}
                        </Field>
                    </div>
                    
                    <div className={styles.mainInfo__item} subscribe='Job Status'> 
                        <Field name="lookingForAJob" component="input" type="checkbox" className={styles.chekbox}/>
                    </div>

                    <div className={styles.mainInfo__item} subscribe='My Professional Skills'>
                        <Field component={'input'} name={"lookingForAJobDescription"} validate={composeValidators(requiredField)}>
                            {({ input, meta }) => (
                                <div>
                                    <TextArea {...input} meta={meta} type="text" placeholder={"skills"} styles={styles.input}/>
                                </div>
                            )}
                        </Field>
                    </div>


                    </div>
                    

                    {submitError && <div>{submitError}</div>}
                    

                    <div>Contacts:{Object.keys(profile.contacts).map(key => {
                        return (
                            <div>
                                <Contact contactTitle={key}/>
                                <Field name={`contacts.${key}`} component={'input'} type={'text'} placeholder={key}/>
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

export default ProfileDataForm