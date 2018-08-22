import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {};

class SearchInput extends PureComponent {
  constructor() {
    super();

    this.input = null;
  }

  componentDidMount() {
    this.input.focus();
  }

  handleInput = event => {
    const { value } = event.target;
    this.props.onChange(value.toLowerCase());
  };

  render() {
    return (
      <input
        type="text"
        onChange={this.handleInput}
        ref={input => (this.input = input)}
      />
    );
  }
}

SearchInput.propTypes = propTypes;
SearchInput.defaultProps = defaultProps;

export default SearchInput;
