import styled from "styled-components";

export const Forma = styled.form`
  width: 518px;
  height: 481px;
  border: 3px solid rgba(170, 170, 170, 0.2);
  background: #f2eeee;
  position: relative;
  padding-top: 21px;
  h3 {
    color: #323236;
    text-align: center;
    font-family: "PT Sans", sans-serif;
    font-size: 30px;
    font-weight: 400;
    /* display: flex; */
    /* margin-left: 55px; */
  }
  label {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin-left: 55px;
    gap: 16px;
  }
  input {
    display: flex;
    width: 348px;
    padding: 22px 28px;
    align-items: flex-start;
    gap: 56px;
    border: 2px solid var(--gray-300, #90a4ae);
    background: var(--neutral-white, #fff);
  }
  button {
    width: 518px;
    height: 104px;
    background: #444765;
    color: #fff;
    text-align: center;
    font-family: "PT Sans", sans-serif;
    font-size: 36px;
    font-weight: 400;
    outline: none;
    border: none;
    position: absolute;
    bottom: 0;
  }
`;

export const Title = styled.h2`
  color: #414141;
  margin-bottom: 31px;
  text-align: center;
  font-family: "PT Sans", sans-serif;
  font-size: 36px;
  font-weight: 400;
`;
