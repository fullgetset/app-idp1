import './modal.style.scss';

export const Modal = ({ reject, id, children }) => {
  return (
    <div>
      <div className='modal'>
        <div
          className='modal__overlay'
          onClick={() => reject(id)}
        />

        <div className='modal__content'>{children}</div>
      </div>
    </div>
  );
};
