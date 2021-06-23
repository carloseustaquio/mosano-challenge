import {Container} from './actions-styles';
import {DeleteIcon} from './icons/delete';
import {EditIcon} from './icons/edit';

type Props = {
  onEdit: () => void
  onDelete: () => void
}

export const Actions = ({onEdit, onDelete}: Props ) => {
  return (
    <Container>
      <EditIcon onClick={onEdit} />
      <DeleteIcon onClick={onDelete} />
    </Container>
  );
};
