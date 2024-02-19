export const validateForm = (input) => {

    let errors = {}

    const regexEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (input.name === '') {
        errors.name = true
    }
    if (input.description === '') {
        errors.description = true
    }
    if (input.email === '' || !regexEmail.test(input.email)) {
        errors.email = true
    }
    if (input.reason === '') {
        errors.reason = true
    }
    return errors
}