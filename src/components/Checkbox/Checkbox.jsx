import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

//utils
import uniqueId from '../../utils/uniqueId';

const propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

const defaultProps = {
  label: 'Запустить при создании:',
  checked: false,
  disabled: false,
};

class Input extends PureComponent {
  constructor(props) {
    super(props);
    this.checkbox = uniqueId();
  }

  state = {
    checked: this.props.checked,
  };

  onChange = event => {
    const isEnter = event.type === 'keypress' && event.key === 'Enter';

    if (isEnter) {
      event.preventDefault();
    }

    if (event.type === 'change' || isEnter) {
      this.setState({
        checked: !this.state.checked,
      });
    }
  };

  render() {
    const { label, name, disabled } = this.props;
    const { checked } = this.state;

    return (
      <div
        className={`form-checkbox ${disabled ? 'form-checkbox--disabled' : ''}`}
      >
        <label className="form-checkbox__label" htmlFor={this.checkbox}>
          {label}
        </label>
        <input
          name={name}
          className="input"
          type="checkbox"
          id={this.checkbox}
          checked={checked}
          onChange={this.onChange}
          onKeyPress={this.onChange}
          disabled={disabled}
        />

        {/* language=SCSS */}
        <style jsx>
          {`
            .form-checkbox {
              width: 100%;
              display: flex;
              color: #525252;
              min-height: 35px;
              justify-content: stretch;
              align-items: center;
              flex-wrap: wrap;
              margin-bottom: 10px;

              &__label {
                font-size: 1.15rem;
                min-width: 200px;
                color: #a0a0a0;
                cursor: pointer;
              }

              &--disabled {
                opacity: 0.7;
                pointer-events: none;
              }

              @media screen and (min-width: 480px) {
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
