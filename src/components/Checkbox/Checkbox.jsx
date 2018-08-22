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
  label: 'Запустить при создании',
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
    if (
      event.type === 'change' ||
      (event.type === 'keypress' && event.key === 'Enter')
    ) {
      event.preventDefault();

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
        <label htmlFor={this.checkbox}>{label}</label>
        <input
          name={name}
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
