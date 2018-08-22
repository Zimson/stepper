import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

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
        <div>{id}</div>
        <div>{name}</div>

        {/* language=SCSS */}
        <style jsx>
          {`
            .vm-item {
              &--selected {
                border: 1px red solid;
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
