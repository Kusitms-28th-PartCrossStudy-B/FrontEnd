import styled from 'styled-components';

interface buttonProps {
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const Button = ({ children, onClick, style }: buttonProps) => {
  return (
    <ButtonStyle onClick={onClick} style={style}>
      {children}
    </ButtonStyle>
  );
};

export default Button;

const ButtonStyle = styled.div`
  background: transpart;
  border: 1px solid #d4e6ff;
  border-radius: 3px;
  font-size: 1rem;
  cursor: pointer;
  color: #d4e6ff;
  padding: 0.2rem 0.4rem;

  &:hover {
    border: 1px solid white;
    color: white;
  }
`;
