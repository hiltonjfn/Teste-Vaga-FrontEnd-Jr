import React from 'react';
import ReactDOM from 'react-dom';
import './css/Modal.scss';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.el.className = 'modal-overlay';
  }

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    const { children } = this.props;

    return ReactDOM.createPortal(
      <div className="modal">
        <div className="modal-content">{children}
        </div>
      </div>,
      this.el
    );
  }
}

export default Modal;
