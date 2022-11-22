/*
import userEvent from "@testing-library/user-event"
import { domainToASCII } from "url"
*/

import { IErrors, IForm } from "../sections/SContactForm"

export const submitData = async (url: string, method: string, data: any, contentType = 'application/json') => {

    const res = await fetch(url, {
        method: method,
        headers: {
            "Content-Type": contentType,
        },
        body: data,
    })

    if (res.status === 200) {
        return true
    }
    return false

}

export const validate = (e: any, form: IForm | null) => {
    let errors : IErrors = { name: null, email: null, comments: null}
    if (e.type === 'submit') {

        errors.name = validate_name(form!.name)
        errors.email = validate_email(form!.email)
        errors.comments = validate_comments(form!.comments)
        return errors

    } else {
        const { id, value } = e.target
        switch (id) {
            case 'name':
                errors = {...errors, [id]: validate_name(value)}
                break;
            case 'email':
                errors = {...errors, [id]: validate_email(value)}
                break;
            case 'comments':
                errors = {...errors, [id]: validate_comments(e)}
                break;
            default:
                break;
/*             case 'name':
                return validate_name(value)
            case 'email':
                return validate_email(value)
            case 'comments':
                return validate_comments(value)
            default:
                break; */
        }
    }
}


const validate_name: any = (value: any) => {
    if (!value)
        return 'A name is required'
    else if (value.length < 2)
        return 'Name must be at least 2 characters'
    else
        return null
}

const validate_email: any = (value: any) => {
    const regex_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!value)
        return 'An email address is required'
    else if (!regex_email.test(value))
        return 'Must be a valid email address (eg. example@domain.com)'
    else
        return null
}

const validate_comments: any = (value: any) => {
    if (!value)
        return 'A comment is required'
    else if (value.length < 5)
        return 'Your comment must be at least 5 characters long'
    else
        return null
}