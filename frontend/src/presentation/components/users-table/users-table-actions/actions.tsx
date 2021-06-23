import {Container} from './actions-styles';

type Props = {
  onEdit: () => void
  onDelete: () => void
}

export const Actions = ({onEdit, onDelete}: Props ) => {
  return (
    <Container>
      <svg
        onClick={onEdit}
        className="pen"
        enableBackground="new 0 0 29 30"
        height="30px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 29 30"
        width="29px"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <g>
          <rect
            fill="#231F20"
            height="22.68"
            transform="matrix(-0.7071 -0.7072 0.7072 -0.7071 10.4473 37.3449)"
            width="10.846"
            x="7.536"
            y="5.169"/>
          <path
            // eslint-disable-next-line max-len
            d="M27.638,3.996l-2.46-2.459c-1.357-1.358-3.56-1.358-4.917,0l-1.725,1.724l7.67,7.669l1.725-1.724   C29.288,7.848,28.997,5.354,27.638,3.996z"
            fill="#231F20"
          />
          <polygon
            fill="#231F20"
            points="0,30 7.088,30 0,22.28  "
          />
        </g>
      </svg>
      <svg
        onClick={onDelete}
        className="trash"
        fill="none"
        height="24"
        width="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <polyline points="3 6 5 6 21 6"/>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
        <line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/>
      </svg>
    </Container>
  );
};
