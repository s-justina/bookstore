import React from "react";
import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { AppState } from "../../reducers/root.reducer";
import {BookSummary, OrderSummary} from "../../reducers/order.reducer";
import { sendOrder } from "../../utils/API_network_functions";

interface FormData {
  first_name: string;
  last_name: string;
  city: string;
  zip_code: string;
}

export interface OrderToSend extends FormData{
  order: BookSummary[];
}

const Summary = () => {
  const orderSummary = useSelector<AppState, OrderSummary>(
    (state) => state.orderSummary
  );
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
        const { firstName, lastName, city, postalCode } = values;
        const dataToSend = {
          first_name: firstName,
          last_name: lastName,
          city,
          zip_code: postalCode,
          order: orderSummary.books,
        };
        sendOrder(dataToSend)
          .then((res) => {
            const { data } = res.data;
            console.log("response", data);
          })
          .catch(function (error) {
            console.log("error", error);
          });
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
