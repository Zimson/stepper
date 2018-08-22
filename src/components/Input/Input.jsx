import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

//utils
import uniqueId from '../../utils/uniqueId';

const propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  isError: PropTypes.bool,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
};

const defaultProps = {
  type: 'text',
  label: 'Описание',
  value: '',
  isError: false,
  required: false,
  placeholder: 'Windows 7',
  disabled: false,
};

class Input extends PureComponent {
  constructor(props) {
    super(props);
    this.inputId = uniqueId();
    this.refInput = null;
  }

  state = {
    value: this.props.value,
    isError: false,
  };

  onChange = event => {
    const { value } = event.target;
    const { value: currentValue } = this.state;

    if (value !== currentValue) {
      this.setState({
        ...this.state,
        value,
      });
    }
  };

  setError = () => {
    this.setState({
      ...this.state,
      isError: true,
    });
  };

  onFocus = () => {
    if (this.state.isError) {
      this.setState({
        ...this.state,
        isError: false,
      });
    }
  };

  render() {
    const { type, label, required, placeholder, name, disabled } = this.props;
    const { value, isError } = this.state;

    return (
      <div className={`form-input ${disabled ? 'form-input--disabled' : ''}`}>
        <label htmlFor={this.inputId}>{label}</label>
        <input
          name={name}
          type={type}
          id={this.inputId}
          className={`input ${isError ? 'input--with-error' : ''}`}
          value={value}
          onChange={this.onChange}
          onFocus={this.onFocus}
          required={required}
          ref={input => (this.refInput = input)}
          placeholder={placeholder}
          disabled={disabled}
        />

        {/* language=SCSS */}
        <style jsx>
          {`
            .form-input {
              .input {
                &--with-error {
                  background-color: pink;
                }
              }

              &--disabled {
                opacity: 0.7;
                pointer-events: none;
              }
            }
          `}
        </style>
      </div>
    );
  }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
