import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import SearchIcon from './Search.svg';

const propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

const defaultProps = {
  placeholder: 'Поиск по имени или ID',
};

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
      <div className="search-container">
        <img
          className="search-container__icon"
          src={SearchIcon}
          alt="loupe"
          width="35"
          height="35"
        />
        <input
          className="search-input"
          type="text"
          onChange={this.handleInput}
          ref={input => (this.input = input)}
          placeholder={this.props.placeholder}
        />

        {/* language=SCSS */}
        <style jsx>
          {`
            .search-container {
              position: relative;
              width: 100%;
              min-height: 35px;
              margin-bottom: 15px;

              &__icon {
                position: absolute;
                left: 8px;
                top: 0px;
                width: 23px;
                pointer-events: none;
              }

              .search-input {
                width: 100%;
                min-height: 35px;
                border: 1px solid lightgray;
                border-radius: 2px;
                padding-left: 40px;
                font-size: 1.5rem;

                &:focus {
                  outline: 0;
                  outline: none;
                  border: 1px #393939 solid;
                }

                @media screen and (min-width: 480px) {
                  font-size: 1.2rem;
                }
              }
            }
          `}
        </style>
      </div>
    );
  }
}

SearchInput.propTypes = propTypes;
SearchInput.defaultProps = defaultProps;

export default SearchInput;
