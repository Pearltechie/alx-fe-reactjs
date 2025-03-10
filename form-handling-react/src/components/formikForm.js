import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
    return (
        <Formik
            initialValues={{ username: "", email: "", password: "" }}
            validationSchema={Yup.object({
                username: Yup.string().required("Username is required"),
                email: Yup.string().email("Invalid email address").required("Email is required"),
                password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
                console.log("Form submitted:", values);
                setSubmitting(false);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <label>Username:</label>
                        <Field type="text" name="username" />
                        <ErrorMessage name="username" component="p" style={{ color: "red" }} />
                    </div>

                    <div>
                        <label>Email:</label>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="p" style={{ color: "red" }} />
                    </div>

                    <div>
                        <label>Password:</label>
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="p" style={{ color: "red" }} />
                    </div>

                    <button type="submit" disabled={isSubmitting}>Register</button>
                </Form>
            )}
        </Formik>
    );
};

export default FormikForm;
