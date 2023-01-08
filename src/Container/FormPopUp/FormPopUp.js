import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import './FormPopUp.css';
import { cloneDeep } from 'lodash';
import { formFields, mandatoryFields } from './InitData';

function FormPopUp() {
    const [state, setState] = useState({
        "firstName": "",
        "lastName": "",
        "mobileNumber": "",
        "email": "",
        "companyName": "",
        "companyWebsite": "",
        "showError": "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = cloneDeep(state);
        console.log('payload: ', payload);

        /** checking validation here itself */
        // if (isEmpty(payload.firstName) || isEmpty(payload.mobileNumber) ||
        //     isEmpty(payload.email) || isEmpty(payload.companyName) || isEmpty(payload.companyWebsite)) {
        //     payload['showError'] = 'This field is required';
        //     console.log("why>");
        // } else {
        //     payload['showError'] = '';
        //     console.log("why> not>>>");
        // }
        // setState((prev) => ({
        //     ...prev,
        //     ...payload
        // }));


        axios.post(
            'https://sheet.best/api/sheets/3003adcd-6a59-49b4-9da8-afdbdf59362f',
            payload,
        ).then((response) => {
            console.log("GoogleAPI-Success", response);
            setState((prev) => ({ ...prev }));
        }).catch(e => {
            console.error("GoogleAPI-Error", e);
        });
    };

    const handleSetValues = (e, inputFieldName) => {
        const modifiedInput = cloneDeep(state);
        modifiedInput[inputFieldName] = e.target.value;

        setState((prev) => ({
            ...prev,
            ...modifiedInput
        }));
    }

    return (
        <>
            <div className="popupBox">
                <div className="box">
                    <span className="close-icon" onClick="">X</span>
                    <h4 className='fontFamily headingDecor' style={{ marginBottom: "2rem" }}>Book Intro Call</h4>
                    <Form className="form">
                        {formFields.map(ele => {
                            return (
                                <Form.Field key={ele.value} style={{ marginBottom: "1rem" }}>
                                    <label className='subHeadingDecor'>{ele.label}
                                        {mandatoryFields.includes(ele.value)
                                            ? <span style={{ color: "red" }}>*</span> : null}
                                    </label>
                                    <br />
                                    <input
                                        placeholder={ele.placeholder}
                                        onChange={(e) => handleSetValues(e, ele.value)}
                                        onPaste={(e) => handleSetValues(e, ele.value)}
                                        className={"inputWidth"}
                                    />
                                    {mandatoryFields.includes(ele.value)
                                        && state.showError && <>
                                            <br />
                                            <span className='errorLine'>{state.showError}</span>
                                        </>
                                    }

                                </Form.Field>
                            )
                        })}
                        <Button className='blue' type="submit" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default FormPopUp;
