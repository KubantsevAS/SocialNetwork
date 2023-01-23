import React from 'react';
import { compose } from 'redux';
import withAuthRedirect from './../../hoc/withAuthRedirect'

const News = () => {
    return (
        <h1>PUGS NEWS</h1>
    )
}


export default compose(
    withAuthRedirect
    )(News);