import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  type: 'button',
  disabled: false,
};

class Button extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.disabled !== nextProps.disabled;
  }

  handlePressButton = event => {
    const { type, key } = event;
    const isPressEvent =
      type === 'click' || (type === 'keypress' && key === 'Enter');

    if (isPressEvent) {
      this.props.onClick(event);
    }
  };

  render() {
    const { type, disabled, title, children } = this.props;
    return (
      <button
        type={type}
        disabled={disabled}
        title={title}
        onClick={this.handlePressButton}
        onKeyPress={this.handlePressButton}
        tabIndex={0}
      >
        {children}
      </button>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
