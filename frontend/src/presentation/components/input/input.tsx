import {Container} from './input-styles';

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Input = (props: Props) => {
  return (
    <Container>
      <input {...props} />
    </Container>
  );
};
