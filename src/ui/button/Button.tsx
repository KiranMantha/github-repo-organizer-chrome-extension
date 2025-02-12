import { ReactNode } from 'preact/compat';
import { StyledButton } from './Button.styles';

export const Button = ({
  children,
  varient = 'default',
  className = '',
  onClick
}: {
  children: ReactNode | ReactNode[];
  varient?: 'default' | 'primary';
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <StyledButton className={`${className} ${varient === 'primary' ? 'primary' : ''}`} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
