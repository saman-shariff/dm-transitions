import React, { useState } from 'react';
import { Button, Form, Container, Header } from 'semantic-ui-react';
import axios from 'axios';
import './FormPopUp.css';
import { cloneDeep } from 'lodash';
import { formFields } from './InitData';

function FormPopUp() {
    const [state, setState] = useState({
        "firstName": "",
        "lastName": "",
        "mobileNumber": "",
        "email": "",
        "companyName": "",
        "companyWebsite": "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = cloneDeep(state);
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
        <Container fluid className="container">
            <Header as="h2">Book Intro Call</Header>
            <Form className="form">
                {formFields.map(ele => {
                    return (
                        <Form.Field key={ele.value}>
                            <label>{ele.label}</label>
                            <input
                                placeholder={ele.placeholder}
                                onChange={(e) => handleSetValues(e, ele.value)}
                            />
                        </Form.Field>
                    )
                })}
                <Button color="blue" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default FormPopUp;
