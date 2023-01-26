import React from 'react'
import { Form, Field } from 'react-final-form'
import { composeValidators, maxLengthCreator } from '../../../../utilities/validators/validators'
import { Input, TextArea } from '../../../Common/FormControls/FormsControls'
import { Contact } from '../ProfileInfo'

export default function ProfileDataForm({profile, onSubmit}) {

    

    return (
        <Form
        onSubmit={onSubmit}
        >
            {({ handleSubmit, pristine, form, submitting, submitError }) => (
                <form onSubmit={handleSubmit}>

                    <div>Full Name:
                        <Field component={'input'} name={"fullName"} validate={composeValidators(maxLengthCreator(22))}>
                            {({ input, meta }) => (
                                <div>
                                    <TextArea {...input} meta={meta} type="text" placeholder={"fullName"} />
                                </div>
                            )}
                        </Field>
                    </div>
                        

                    <div>Looking for a job: 
                        <Field name="lookingForAJob" component="input" type="checkbox" />
                    </div>

                    <div>My professional skills:
                        <Field component={'input'} name={"lookingForAJobDescription"} validate={composeValidators(maxLengthCreator(22))}>
                            {({ input, meta }) => (
                                <div>
                                    <TextArea {...input} meta={meta} type="text" placeholder={"skills"} />
                                </div>
                            )}
                        </Field>
                    </div>


                    <div>About me:
                        <Field component={'input'} name={"aboutMe"} validate={composeValidators(maxLengthCreator(22))}>
                            {({ input, meta }) => (
                                <div>
                                    <Input {...input} meta={meta} type="text" placeholder={"About me"} />
                                </div>
                            )}
                        </Field>
                    </div>

                    <div>Contacts: {Object.keys(profile.contacts).map(key => {
                        return <Contact contactTitle={key} contactValue={profile.contacts[key]} />
                    })}</div>


                    <button type={"submit"} disabled={submitting}>
                            SAVE
                    </button>
                </form>
            )}
        </Form>
    )
}
