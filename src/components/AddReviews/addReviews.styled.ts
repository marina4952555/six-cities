import styled from 'styled-components';

export const FormSection = styled.section`
  margin: 20px auto;
  max-width: 900px;
`;

export const Form = styled.form`
  margin-top: 20px;
  display: grid;
  gap: 10px;
`;

export const FormLabel = styled.label``;

export const FormLabelRadio = styled.label`
  display: flex;
  gap: 5px;
`;

export const FormTextarea = styled.textarea`
  padding: 5px 10px;
  width: 500px;
  height: 50px;
  border: 1px solid gray;
  border-radius: 10px;
`;

export const FormTitle = styled.h2``;

export const FormButton = styled.input`
  width: 200px;
  padding: 10px 20px;
  text-align: center;
  border: none;
  border-radius: 15px;
  background-color: #4481c3;
  font-size: 16px;
  color: #fff;
`;

export const FormRadio = styled.input`
  font-size: 12px;
`;
