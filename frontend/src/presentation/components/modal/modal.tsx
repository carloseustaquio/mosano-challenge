import {useAppDispatch, useAppSelector} from '#/state/hooks';
import {closeModalAction} from '#/state/slices/application';

import {Container, Background} from './modal-styles';

export const Modal = () => {
  const dispatch = useAppDispatch();
  const modal = useAppSelector(({applicationState}) => applicationState.modal);

  const handleClose = () => {
    dispatch(closeModalAction());
  };

  if (!modal) return <div />;
  return (
    <>
      <Background data-testid='modal-background' onClick={handleClose} show={modal.open} />
      <Container data-testid='modal-container' show={modal.open}>{modal.component}</Container>
    </>
  );
};
