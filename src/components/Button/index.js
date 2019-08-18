import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  min-height: 40px;
  min-width: 120px;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1.43;
  color: #fff;
  background-color: #0b0e12;
  padding: 6px 25px;
  border-radius: 5px;
  border: 1px solid #0b0e12;

  :focus,
  :active {
    outline: none !important;
    box-shadow: none;
  }
  
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export default Button;
