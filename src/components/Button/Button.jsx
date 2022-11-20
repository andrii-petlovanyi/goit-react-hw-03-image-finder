import { Box } from 'components/Box';
import { ButtonStyled } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <>
      <Box display="flex" justifyContent="center" py="20px">
        <ButtonStyled type="button" onClick={() => onClick()}>
          Load more
        </ButtonStyled>
      </Box>
    </>
  );
};
