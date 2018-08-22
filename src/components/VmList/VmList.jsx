import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import VmItem from '../VmItem';

const propTypes = {
  snapshots: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
  selectVm: PropTypes.func.isRequired,
  switchPage: PropTypes.func.isRequired,
  selectedItem: PropTypes.number.isRequired,
};

const defaultProps = {};

class VmList extends PureComponent {
  render() {
    const { snapshots, selectVm, selectedItem, switchPage } = this.props;

    return (
      <div className="vm-list">
        {snapshots.length
          ? snapshots.map((vm, idx) => (
              <VmItem
                key={vm.id}
                vmInfo={vm}
                selectVm={selectVm}
                isSelected={selectedItem === idx}
                switchPage={switchPage}
              />
            ))
          : 'Виртуальных машин не найдено'}
      </div>
    );
  }
}

VmList.propTypes = propTypes;
VmList.defaultProps = defaultProps;

export default VmList;