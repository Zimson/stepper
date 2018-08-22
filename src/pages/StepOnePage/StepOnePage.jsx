import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import SearchInput from '../../components/SearchInput';
import Button from '../../components/Button';
import VmList from '../../components/VmList';
import Divider from '../../components/Divider/Divider';

const propTypes = {
  snapshots: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      startStatus: PropTypes.bool,
      size: PropTypes.number,
    })
  ),
  updateSnapshots: PropTypes.func.isRequired,
  selectedItem: PropTypes.number,
  switchPage: PropTypes.func.isRequired,
  selectVm: PropTypes.func.isRequired,
};

const defaultProps = {
  snapshots: [],
  selectedItem: 0,
};

class StepOnePage extends PureComponent {
  handleSearch = value => {
    this.props.updateSnapshots(value);
  };

  render() {
    const { snapshots, switchPage, selectVm, selectedItem } = this.props;

    return (
      <Fragment>
        <SearchInput onChange={this.handleSearch} />

        <VmList
          snapshots={snapshots}
          selectVm={selectVm}
          selectedItem={selectedItem}
          switchPage={switchPage}
        />

        <Divider />

        <div className="button-container">
          <Button onClick={switchPage(1)} title="Возврат">
            Выбрать
          </Button>
        </div>

        {/* language=SCSS */}
        <style jsx>
          {`
            .button-container {
              flex: 0 0 auto;
              margin-bottom: 20px;
              display: flex;
              justify-content: center;
            }
          `}
        </style>
      </Fragment>
    );
  }
}

StepOnePage.propTypes = propTypes;
StepOnePage.defaultProps = defaultProps;

export default StepOnePage;
