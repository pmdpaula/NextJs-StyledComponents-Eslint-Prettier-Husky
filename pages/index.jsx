import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <Title>My page</Title>;
}
