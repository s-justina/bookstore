import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export interface formValidation {
  firstName: string;
  lastName: string;
  city: string;
  postalCode: string;
}

const Summary = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        city: "",
        postalCode: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        city: Yup.string()
          .min(2, "Must be 2 characters or more")
          .required("Required"),
        postalCode: Yup.string()
          .required("Required")
          .matches(
            /[0-9]{2}\-[0-9]{3}/,
            "Postal Code should have exact format: NN-NNN"
          ),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <label htmlFor="firstName">Imię</label>
        <Field name="firstName" type="text" />
        <ErrorMessage name="firstName" />

        <label htmlFor="lastName">Nazwisko</label>
        <Field name="lastName" type="text" />
        <ErrorMessage name="lastName" />

        <label htmlFor="city">Miejscowość</label>
        <Field name="city" type="city" />
        <ErrorMessage name="city" />

        <label htmlFor="postalCode">Kod pocztowy</label>
        <Field name="postalCode" type="postalCode" />
        <ErrorMessage name="postalCode" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default Summary;
