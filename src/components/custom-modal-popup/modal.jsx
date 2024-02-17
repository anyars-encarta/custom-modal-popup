import PropTypes from 'prop-types';

const Modal = ({
  id, header, body, footer, onClose,
}) => (
  <div id={id || 'Modal'} className="modal">
    <div className="modal-content">
      <div className="header">
        <span role="none" onClick={onClose} className="close-modal-icon">&times;</span>

        {
          header || <h2>Header</h2>
        }

      </div>

      <div className="body">
        {
          body || (
            <div>
              <p>This is our Modal Body</p>
            </div>
          )
        }
      </div>

      <div className="footer">
        {
          footer || <h2>Footer</h2>
        }
      </div>

    </div>
  </div>
);

Modal.propTypes = {
  // eslint-disable-next-line
  id: PropTypes.number,
  header: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  onClose: PropTypes.bool.isRequired,
};

export default Modal;
