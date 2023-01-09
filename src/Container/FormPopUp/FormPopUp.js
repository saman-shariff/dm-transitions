import React, { useEffect, useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import './FormPopUp.css';
import { cloneDeep, isEmpty } from 'lodash';
import { formFields, mandatoryFields, mobileNumberRegex, emailRegex } from './InitData';

function FormPopUp(props) {
    const [state, setState] = useState({
        "firstName": "",
        "lastName": "",
        "mobileNumber": "",
        "email": "",
        "companyName": "",
        "companyWebsite": "",
        "showError": "",
        "showErrorField": "",
        "successResponse": false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = cloneDeep(state);
        console.log('post payload: ', payload);

        if (mobileNumberRegex.test(payload.mobileNumber) && emailRegex.test(payload.email)) {
            payload['showError'] = '';
            payload['showErrorField'] = "";

            axios.post(
                'https://sheet.best/api/sheets/3003adcd-6a59-49b4-9da8-afdbdf59362f',
                payload,
            ).then((response) => {
                console.log("GoogleAPI-Success", response);
                setState((prev) => ({ ...prev, successResponse: true }));
            }).catch(e => {
                console.error("GoogleAPI-Error", e);
            });
        } else if (!mobileNumberRegex.test(payload.mobileNumber)) {
            payload['showError'] = 'This field does not match regex pattern.';
            payload['showErrorField'] = "mobileNumber";
        } else if (!emailRegex.test(payload.email)) {
            payload['showError'] = 'This field does not match regex pattern.';
            payload['showErrorField'] = "email";
        }

        setState((prev) => ({
            ...prev,
            ...payload
        }));
    };

    const handleSetValues = (e, inputFieldName) => {
        const modifiedInput = cloneDeep(state);
        modifiedInput[inputFieldName] = e.target.value;

        setState((prev) => ({
            ...prev,
            ...modifiedInput
        }));
    }

    const enableCondition = isEmpty(state.firstName) || isEmpty(state.mobileNumber)
        || isEmpty(state.email) || isEmpty(state.companyName)
        || isEmpty(state.companyWebsite)

    useEffect(() => {
        if (state.successResponse) {
            setTimeout(() => {
                props.closePopup();
            }, 1000);
        }
    }, [state.successResponse]);

    return (
        <>
            <div className="popupBox">
                <div className="box">
                    <span className="close-icon" onClick={props.closePopup}>X</span>
                    <h4 className='fontFamily headingDecor' style={{ marginBottom: "2rem" }}>Book Intro Call</h4>
                    <Form className="form">
                        {formFields.map(ele => {
                            return (
                                <Form.Field key={ele.value} style={{ marginBottom: "1.5rem" }}>
                                    <label className='subHeadingDecor'>{ele.label}
                                        {mandatoryFields.includes(ele.value)
                                            ? <span style={{ color: "red" }}>&nbsp;*</span> : null}
                                    </label>
                                    <br />
                                    <input
                                        placeholder={ele.placeholder}
                                        onChange={(e) => handleSetValues(e, ele.value)}
                                        onPaste={(e) => handleSetValues(e, ele.value)}
                                        className={"inputWidth"}
                                        value={state[ele.value]}
                                    />
                                    {mandatoryFields.includes(ele.value)
                                        && ele.value === state.showErrorField &&
                                        <>
                                            <br />
                                            <span className='errorLine'>{state.showError}</span>
                                        </>
                                    }

                                </Form.Field>
                            )
                        })}
                        <Button className={!enableCondition ? 'blue' : 'grey'} type="submit"
                            disabled={enableCondition}
                            onClick={handleSubmit}>
                            Submit
                        </Button>
                        {state.successResponse &&
                            <>
                                <br />
                                <span className='successLine'>Form submitted successfully!</span>
                            </>
                        }
                    </Form>
                </div>
            </div>
        </>
    );
}

export default FormPopUp;
