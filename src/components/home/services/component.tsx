import React from 'react';
import { Formik , Form} from "formik"

import {
    Section,
    Wrapper,
    Heading,
    Bold,
    Row,
    InputContainer,
    Input,
    PlaceHolder,
    ButtonContainer,
    Button
} from "./styles"

const Services = () => {
    return (
        <Section>
            <Wrapper>
                <Heading><Bold>enquire </Bold>about our services</Heading>
                <Formik
                    initialValues={{
                        firstName: "",
                        lastName: "",
                        contactNumber: "",
                        emailAddress: "",
                        subject: "",
                        message: ""
                    }}
                    onSubmit={values => {
                        console.log(values);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                    }) => (
                        <Form>
                            <Row>
                                <InputContainer>
                                    <Input
                                        type="text"
                                        name="firstName"
                                        placeholder='First Name'
                                        $active={values.firstName} 
                                        validation={
                                            touched.firstName 
                                        }
                                    />
                                    <PlaceHolder  $active={values.firstName} >First Name</PlaceHolder>
                                </InputContainer>
                                <InputContainer>
                                    <Input
                                        type="text"
                                        name="lastName"
                                        placeholder='Last name'
                                        $active={values.lastName}
                                        validation={
                                            touched.lastName 
                                        }
                                    />
                                    <PlaceHolder $active={values.lastName}>Last name</PlaceHolder>
                                </InputContainer>
                            </Row>
                            <Row>
                                <InputContainer>
                                    <Input
                                        type="text"
                                        name="contactNumber"
                                        placeholder='Contact number'
                                    />
                                    <PlaceHolder $active={values.contactNumber}>Contact number</PlaceHolder>
                                </InputContainer>
                                <InputContainer>
                                    <Input
                                        type="email"
                                        name="emailAddress"
                                        placeholder='Email address'
                                    />
                                    <PlaceHolder $active={values.emailAddress}>Email address</PlaceHolder>
                                </InputContainer>
                            </Row>
                            <Row>
                                <InputContainer row>
                                    <Input
                                        type="text"
                                        name="subject"
                                        placeholder='Subject'
                                        $active={values.subject}
                                        validation={
                                            touched.subject
                                        }
                                    />
                                    <PlaceHolder $active={values.subject}>Subject</PlaceHolder>
                                </InputContainer>
                            </Row>
                            <Row>
                                <InputContainer message >
                                    <Input message
                                        type="test"
                                        name="message"
                                        placeholder='Message'
                                        $active={values.message}
                                        validation={
                                            touched.message
                                        }
                                    />
                                    <PlaceHolder $active={values.message}>Message</PlaceHolder>
                                </InputContainer>
                            </Row>
                            <ButtonContainer>
                                <Button type="submit">Submit</Button>
                            </ButtonContainer>
                        </Form>
                    )}
                </Formik>
            </Wrapper>
        </Section>

    )

}

export default Services;
