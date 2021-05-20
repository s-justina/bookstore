import styled from "styled-components";
import { Field, Form } from "formik";

export const SummarySection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5rem;
  margin-bottom: 3rem;
  text-align: center;
`;

export const FormTitle = styled.h1`
  font-weight: 700;
  color: #4d4d4d;
  font-size: 2.2em;

  @media (max-width: 700px) {
    font-size: 1.5em;
  }
`;

export const FormArea = styled.div`
  margin-top: 3rem;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledField = styled(Field)`
  padding: 0.5rem 1rem;
  width: 300px;
  height: 35px;
  border: 1px solid #ccc;
  background-color: #fff;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  color: #777;
  font-size: 0.8em;
  margin: 0.5em 0;
  position: relative;
`;

export const Text = styled.p`
  margin-top: 0.4rem;
  margin-bottom: 1rem;
  font-style: italic;
  font-size: 0.8rem;
  color: red;
`;

export const SubmitButton = styled.button`
  margin-top: 2rem;
  border-radius: 3px;
  width: 300px;
  height: 35px;
  background-color: #5995ef;
  color: #fff;
`;
