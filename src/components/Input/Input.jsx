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
  label: 'Описание:',
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
        <label className="input-label" htmlFor={this.inputId}>
          {label}
        </label>
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
              width: 100%;
              display: flex;
              color: #525252;
              min-height: 35px;
              justify-content: stretch;
              align-items: center;
              flex-wrap: wrap;
              margin-bottom: 10px;

              .input-label {
                font-size: 1.15rem;
                min-width: 200px;
                margin-bottom: 5px;
                color: #a0a0a0;
                cursor: pointer;
              }

              .input {
                width: 100%;
                min-height: 40px;
                padding: 0 5px;
                border-radius: 3px;
                border: 1px solid lightgray;
                font-size: 1rem;

                &:focus {
                  outline: none;
                  outline: 0;
                  border: 1px #393939 solid;
                }

                &--with-error {
                  background-color: pink;
                }
              }

              &--disabled {
                opacity: 0.7;
                pointer-events: none;
              }

              @media screen and (min-width: 480px) {
                flex-wrap: nowrap;
                margin-bottom: 20px;

                &__label {
                  font-size: 1rem;
                }
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
