import React from "react";
import { useFormik } from "formik";

interface formValidation {
    firstName?: string, lastName?: string, city?: string, postalCode?: string
}

const Summary = () => {

    const validate = (values:formValidation) => {
        const errors:formValidation = {};
        if (!values.firstName) {
            errors.firstName = 'Required';
        } else if (values.firstName.length < 3) {
            errors.firstName = 'Must be 3 characters or more';
        }

        if (!values.lastName) {
            errors.lastName = 'Required';
        } else if (values.lastName.length < 2) {
            errors.lastName = 'Must be 3 characters or more';
        }

        // if (!values.city) {
        //     errors.city = 'Required';
        // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        //     errors.city = 'Invalid email address';
        // }

        return errors;
    };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      city: "",
      postalCode: "",
    },
      validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">Imię</label>
      <input
        id="firstName"
        name="firstName"
        type="firstName"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
        {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
        <label htmlFor="lastName">Nazwisko</label>
        <input
            id="lastName"
            name="lastName"
            type="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
        />
        {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
        <label htmlFor="city">Miejscowość</label>
        <input
            id="city"
            name="city"
            type="city"
            onChange={formik.handleChange}
            value={formik.values.city}
        />
        {/*{formik.errors.city ? <div>{formik.errors.lastName}</div> : null}*/}
        <label htmlFor="postalCode">Kod pocztowy</label>
        <input
            id="postalCode"
            name="postalCode"
            type="postalCode"
            onChange={formik.handleChange}
            value={formik.values.postalCode}
        />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Summary;
