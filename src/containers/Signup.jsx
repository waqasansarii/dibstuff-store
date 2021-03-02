import React from "react";
import { Form, Field, ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import TextError from "../components/TextError";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Required"),
});

const onSubmit = (values) => {
  console.log(`Form data`, values);
};

export default function Signup() {
  return (
    <div className="container-account">
      <div>
        <h3>Sign Up</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form>
                <div className="form-control">
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Username"
                  />
                  <ErrorMessage name="name" component={TextError} />
                </div>
                <div className="form-control">
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                  <ErrorMessage name="email" component={TextError} />
                </div>
                <div className="form-control">
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                  />
                  <ErrorMessage name="password" component={TextError} />
                </div>

                <button className="button " type="submit">
                  Sign Up
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
