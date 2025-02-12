import { ReactNode } from 'preact/compat';
import { StyledCard } from './Card.styles';

export const Card = ({
  children,
  className = '',
  onClick
}: {
  children: ReactNode | ReactNode[];
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <StyledCard className={className} onClick={onClick}>
      {children}
    </StyledCard>
  );
};
