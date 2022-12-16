export const requiredField = value => {
    return !value ? "Field is required" : undefined;
}

export const maxLengthCreator = (maxLength) => (value) => {
    return value && value.length > maxLength ? `Max length is ${maxLength} symbols` : undefined;
}

export const composeValidators = (...validators) => value =>
        validators.reduce((error, validator) => error || validator(value), undefined)