import React from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { AppState } from "../../reducers/root.reducer";
import { BookSummary, OrderSummary } from "../../reducers/order.reducer";
import { sendOrder } from "../../utils/API_network_functions";
import {
  FormArea,
  FormTitle,
  StyledField,
  StyledForm,
  StyledLabel,
  SubmitButton,
  SummarySection,
  Text,
} from "../../components/Summary/Summary.styles";

interface FormData {
  first_name: string;
  last_name: string;
  city: string;
  zip_code: string;
}

export interface OrderToSend extends FormData {
  order: BookSummary[];
}

const Summary = () => {
  const orderSummary = useSelector<AppState, OrderSummary>(
    (state) => state.orderSummary
  );

  return (
    <>
      <SummarySection>
        <FormTitle>
          W celu realizacji zamówienia uzupełnij dane do wysyłki:
        </FormTitle>
        <FormArea>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              city: "",
              postalCode: "",
            }}
            validationSchema={Yup.object({
              firstName: Yup.string().required("Pole wymagane"),
              lastName: Yup.string().required("Pole wymagane"),
              city: Yup.string()
                .min(2, "Pole wymaga podania min. 2 znaków")
                .required("Pole wymagane"),
              postalCode: Yup.string()
                .required("Pole wymagane")
                .matches(
                  /[0-9]{2}\-[0-9]{3}/,
                  "Kod pocztowy musi mieć poprawny format: NN-NNN"
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
                  toast.success("✔️ Zamówienie zrealizowane pomyślnie!", {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                })
                .catch(function (error) {
                  console.log("error", error);
                  toast.error(
                    "❌️Coś poszło nie tak! Spróbuj ponownie później.",
                    {
                      position: "bottom-center",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    }
                  );
                });
            }}
          >
            <StyledForm>
              <StyledLabel htmlFor="firstName">Imię</StyledLabel>
              <StyledField name="firstName" type="text" placeholder="Imię..." />
              <ErrorMessage name="firstName">
                {(msg) => <Text>{msg}</Text>}
              </ErrorMessage>

              <StyledLabel htmlFor="lastName">Nazwisko</StyledLabel>
              <StyledField
                name="lastName"
                type="text"
                placeholder="Nazwisko..."
              />
              <ErrorMessage name="lastName">
                {(msg) => <Text>{msg}</Text>}
              </ErrorMessage>

              <StyledLabel htmlFor="city">Miejscowość</StyledLabel>
              <StyledField
                name="city"
                type="city"
                placeholder="Miejscowość..."
              />
              <ErrorMessage name="city">
                {(msg) => <Text>{msg}</Text>}
              </ErrorMessage>

              <StyledLabel htmlFor="postalCode">Kod pocztowy</StyledLabel>
              <StyledField
                name="postalCode"
                type="postalCode"
                placeholder="Kod pocztowy..."
              />
              <ErrorMessage name="postalCode">
                {(msg) => <Text>{msg}</Text>}
              </ErrorMessage>

              <SubmitButton type="submit">Submit</SubmitButton>
              <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </StyledForm>
          </Formik>
        </FormArea>
      </SummarySection>
    </>
  );
};

export default Summary;
