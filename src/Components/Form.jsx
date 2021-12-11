import React from "react";
import styled from "styled-components";

const FormConatiner = styled.div`
  height: 450px;
  width: 300px;
  background: whitesmoke;
  color: gray;
  padding-left: 10px;
  border-radius: 10px;
`;

const PaymentDetail = styled.div`
  height: 50px;
  text-align: left;
  font-weight: 500;
  font-size: 20px;
  /* margin: 0px 0px 0px 20px; */
  padding-top: 10px;
`;

const Label = styled.div`
  font-size: 12px;
  text-align: left;
  margin-top: 30px;
  /* background: yellow; */
`;

const Input = styled.input`
  border: none;
  border-bottom: 2px solid red;
  background: whitesmoke;
  width: 290px;
  padding-top: 10px;
  font-size: 18px;
  color: black;
`;

const Div = styled.div`
  color: gray;
  display: flex;
  gap: 2rem;
`;

const PayBtn = styled.button`
  height: 40px;
  width: 150px;
  color: white;
  background: red;
  font-size: 18px;
  border: 1px solid red;
  border-radius: 10px;
`;

const Form = () => {
  return (
    <>
      <FormConatiner>
        <PaymentDetail>Payment details</PaymentDetail>
        <Label>CARD HOLDER NAME</Label>
        <Input placeholder="🔏 John Smith" />
        <Label>CARD HOLDER NAME</Label>
        <Input placeholder="📁 4256 7890 5678 4532" />
        <Div>
          <Label>EXPIRY MONTH</Label>
          <Label>EXPIRY YEAR</Label>
          <Label>CVC</Label>
        </Div>
        <Div>
          <Input placeholder="📆 09" style={{ width: "80px" }} />
          <Input placeholder="📅 2020" style={{ width: "80px" }} />
          <Input placeholder="🔒 345" style={{ width: "60px" }} />
        </Div>
        <Div
          style={{ gap: "1rem", marginTop: "20px", justifyContent: "center" }}
        >
          <PaymentDetail>Payment amount: </PaymentDetail>
          <PaymentDetail style={{ color: "red" }}>12 300P</PaymentDetail>
        </Div>
        <Div
          style={{ gap: "1rem", marginTop: "20px", justifyContent: "center" }}
        >
          <PayBtn>PAY</PayBtn>
        </Div>
      </FormConatiner>
    </>
  );
};

export default Form;
