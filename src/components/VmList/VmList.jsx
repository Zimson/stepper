import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import VmItem from '../VmItem';
import APP_CONFIG from '../../APP_CONFIG';

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
  handleKeyDown = event => {
    const { keyCode } = event;
    const { snapshots, selectedItem } = this.props;
    const vmId = snapshots[selectedItem].id;

    if (keyCode === 38) {
      this.props.selectVm(vmId, 'up')();
    }

    if (keyCode === 40) {
      this.props.selectVm(vmId, 'down')();
    }
  };

  render() {
    const { snapshots, selectVm, selectedItem, switchPage } = this.props;

    return (
      <div className="vm-list" onKeyDown={this.handleKeyDown}>
        {snapshots.length ? (
          snapshots.map((vm, idx) => (
            <VmItem
              key={vm.id}
              vmInfo={vm}
              selectVm={selectVm}
              isSelected={selectedItem === idx}
              switchPage={switchPage}
            />
          ))
        ) : (
          <p>Виртуальных машин не найдено</p>
        )}

        {/* language=SCSS */}
        <style jsx>
          {`
            .vm-list {
              min-height: 280px;
              overflow: hidden;
              overflow-y: scroll;
              margin-bottom: 20px;
              padding-right: 10px;
            }
          `}
        </style>
      </div>
    );
  }
}

VmList.propTypes = propTypes;
VmList.defaultProps = defaultProps;

export default VmList;
