import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 5rem 10rem;
  font-family: sans-serif;
`;

export const Container = styled.div`
  background: #fff;
  width: 60rem;
  padding: 5rem;
  border-radius: 20px;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.1);
`;

export const ListItemWrapper = styled.div`
  display: flex;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 5px;
  background-color: rgba(0, 0, 0, 0.02);
  border-bottom: 3px solid #eee;
  justify-content: space-between;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  color: teal;
`;
