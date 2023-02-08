import React from 'react';
import { compose } from 'redux';
import withAuthRedirect from './../../hoc/withAuthRedirect'

const About = () => {
    return (
        <h1>About</h1>
    )
}


export default compose(
    withAuthRedirect
    )(About);