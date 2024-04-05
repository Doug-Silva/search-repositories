import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  padding: 0 2rem;
`;

export const Logo = styled.img`
  width: 180px;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  color: ${(props) => props.theme.colors.primary};
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 583px;
`;

export const Input = styled.input`
  background: #DEE9E6;
  width: 100%;
  height: 64px;
  line-height: 64px;
  border: none;
  font-size: 24px;
  margin-right: 24px;
  padding: 0 24px;
  border-radius: 50px;

  &::placeholder {
    color: ${(props) => props.theme.colors.metalDark};
  }
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #DEE2f6;
  width: 80px;
  height: 64px;
  border: none;
  transition: transform 0.3s;
  border-radius: 50px;

  &:hover {
    background: ${(props) => props.theme.colors.primary};
  }
`;
