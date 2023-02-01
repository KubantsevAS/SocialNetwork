import React from 'react'
import { Form, Field } from 'react-final-form'
import { composeValidators, maxLengthCreator, requiredField} from '../../../../utilities/validators/validators'
import { Input, TextArea } from '../../../Common/FormControls/FormsControls'
import { Contact } from '../ProfileInfo'

export default function ProfileDataForm({profile, onSubmit}) {


    
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
            {({ handleSubmit, submitting}) => (
                <form onSubmit={handleSubmit}>

                    <div>Full Name:
                        <Field component={'input'} name={"fullName"} validate={composeValidators(requiredField)}>
                            {({ input, meta }) => (
                                <div>
                                    <TextArea {...input} meta={meta} type="text"  placeholder={"fullName"}/>
                                </div>
                            )}
                        </Field>
                    </div>

                    <div>About me:
                        <Field component={'input'} name={"aboutMe"} validate={composeValidators(requiredField)}>
                            {({ input, meta }) => (
                                <div>
                                    <Input {...input} meta={meta} type="text" placeholder={"About me"} />
                                </div>
                            )}
                        </Field>
                    </div>
                    
                    <div>Looking for a job: 
                        <Field name="lookingForAJob" component="input" type="checkbox" />
                    </div>

                    <div>My professional skills:
                        <Field component={'input'} name={"lookingForAJobDescription"} validate={composeValidators(requiredField)}>
                            {({ input, meta }) => (
                                <div>
                                    <TextArea {...input} meta={meta} type="text" placeholder={"skills"} />
                                </div>
                            )}
                        </Field>
                    </div>


                    

                    <div>Contacts: {Object.keys(profile.contacts).map(key => {
                        return (
                            <div>
                                <Contact contactTitle={key} contactValue={profile.contacts[key]} />
                                <Field name={`contacts.${key}`} component={'input'} type={'text'} placeholder={key}/>
                            </div>
                            
                        )
                    })}
                    </div>
                    <button type={"submit"} disabled={submitting}>
                            SAVE
                    </button>
                </form>
            )}
        </Form>
    )
}
