import { HTMLAttributes } from 'preact/compat';
import { StyledCard } from './Card.styles';

export const Card = (props: HTMLAttributes<HTMLDivElement>) => {
  return <StyledCard {...props} />;
};
