import React from "react";
import styled from "styled-components";

const Card = styled.div`
  height: 280px;
  width: 400px;
  border: 1px solid red;
  background: red;
  border-radius: 10px;
  box-shadow: 50px 50px 0px 10px rgb(230, 227, 230);
`;

const CardComponents = styled.div`
  height: 50px;
  color: white;
  font-weight: 900;
  font-size: 24px;
  text-align: right;
  padding: 20px 30px 0px 10px;
`;

const Chip = styled.div`
  height: 30px;
  width: 40px;
  border-radius: 5px;
  background: palegoldenrod;
  margin: 0px 0px 10px 20px;
`;

const CardNumber = styled.div`
  text-align: center;
  color: white;
`;

const CreditCard = () => {
  return (
    <>
      <Card>
        <CardComponents>VISA</CardComponents>
        <CardComponents style={{ textAlign: "left", padding: "0px" }}>
          <Chip />
        </CardComponents>
        <CardComponents
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            padding: "0px",
            fontFamily: "digital"
          }}
        >
          <CardNumber>4256</CardNumber>
          <CardNumber>7890</CardNumber>
          <CardNumber>5678</CardNumber>
          <CardNumber>4532</CardNumber>
        </CardComponents>
        <CardComponents
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            padding: "0px",
            fontWeight: "400",
            fontSize: "14px"
          }}
        >
          <CardNumber>CARD HOLDER</CardNumber>
          <CardNumber>EXPIRES</CardNumber>
          <CardNumber>CVC</CardNumber>
        </CardComponents>
        <CardComponents
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            padding: "0px",
            fontWeight: "500",
            fontSize: "20px"
          }}
        >
          <CardNumber>John Smith</CardNumber>
          <CardNumber>09/20</CardNumber>
          <CardNumber>345</CardNumber>
        </CardComponents>
      </Card>
    </>
  );
};

export default CreditCard;
