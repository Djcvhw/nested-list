import styled from 'styled-components';

type ButtonProps = {
    onClick: () => void;
    children: React.ReactNode;
};

const StyledButton = styled.button`
  margin-left: 10px;
  padding: 4px 8px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
    return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
