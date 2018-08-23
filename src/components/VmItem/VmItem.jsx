import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// utils & config
import APP_CONFIG from '../../APP_CONFIG';

const propTypes = {
  vmInfo: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  isSelected: PropTypes.bool,
  selectVm: PropTypes.func.isRequired,
  switchPage: PropTypes.func.isRequired,
};

const defaultProps = {
  isSelected: false,
};

class VmItem extends PureComponent {
  render() {
    const {
      vmInfo: { id, name },
      isSelected,
      selectVm,
      switchPage,
    } = this.props;

    return (
      <div
        onClick={selectVm(id)}
        onKeyPress={switchPage(1)}
        onDoubleClick={switchPage(1)}
        onFocus={selectVm(id)}
        className={`vm-item ${isSelected ? 'vm-item--selected' : ''}`}
        role="button"
        tabIndex={0}
      >
        <div className="vm-item__id">{id}</div>
        <div className="vm-item__name">{name}</div>

        {/* language=SCSS */}
        <style jsx>
          {`
            .vm-item {
              width: 100%;
              min-height: 40px;
              padding: 0 15px;
              background-color: #f9f9f9;
              border-radius: 5px;
              border: 1px grey solid;
              margin-bottom: 3px;
              display: flex;
              justify-content: stretch;
              align-items: center;
              font-size: 0.9rem;

              &--selected {
                border: 2px solid #00c000;
              }

              &:focus {
                outline: none;
                outline: 0;
                background-color: #e8e8e8;
              }

              &:hover {
                background-color: #d9d9d9;
                cursor: pointer;
              }

              &__id {
                min-width: 110px;

                @media screen and (min-width: 520px) {
                  min-width: 140px;
                }
              }
            }
          `}
        </style>
      </div>
    );
  }
}

VmItem.propTypes = propTypes;
VmItem.defaultProps = defaultProps;

export default VmItem;
