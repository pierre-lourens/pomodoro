import styled from 'styled-components';

const Title = styled.h1`
  color: red;
`;

type HeaderProps = { title: string };

export const Header = ({ title }: HeaderProps) => {
  return (
    <div>
      <Title>{title}</Title>
    </div>
  );
};
