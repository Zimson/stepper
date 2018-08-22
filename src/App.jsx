import React, { PureComponent } from 'react';

// components
import TabsList from './components/TabsList';
import Loader from './components/Loader';
import Divider from './components/Divider';
import StepOnePage from './pages/StepOnePage';
import StepTwoPage from './pages/StepTwoPage';

// utils and configs
import APP_CONFIG from './APP_CONFIG';
import makeRequest from './utils/makeRequest';

class App extends PureComponent {
  constructor() {
    super();
    this.vmSnapshots = [];
    this.tabs = ['Образ диска', 'Параметры'];
  }

  state = {
    activeTab: 0,
    snapshots: [],
    selectedItem: 0,
    isLoaded: false,
    step: 0,
  };

  componentDidMount() {
    makeRequest(APP_CONFIG.SNAPSHOT_URL).then(data => {
      this.vmSnapshots = data;
      this.setState({
        ...this.state,
        snapshots: data,
        isLoaded: true,
      });
    });
  }

  filterSnapshotList = data => {
    const filteredSnapshot = this.vmSnapshots.filter(
      vm =>
        vm.name.toLowerCase().includes(data) ||
        vm.id.toLowerCase().includes(data)
    );

    this.setState({
      ...this.state,
      selectedItem: 0,
      snapshots: filteredSnapshot,
    });
  };

  switchPage = step => () => {
    this.setState({
      ...this.state,
      snapshots: !step ? this.vmSnapshots : this.state.snapshots,
      activeTab: step,
      selectedItem: !step ? 0 : this.state.selectedItem,
      step,
    });
  };

  selectVm = vmId => () => {
    const { snapshots: currentSnapshotList } = this.state;

    const selectedItem = currentSnapshotList.findIndex(vm => vm.id === vmId);

    this.setState({
      ...this.state,
      selectedItem,
    });
  };

  updateVm = newVm => {
    this.vmSnapshots = this.vmSnapshots.map(
      vm => (vm.id === newVm.id ? newVm : vm)
    );
  };

  render() {
    const { activeTab, snapshots, selectedItem, step } = this.state;
    const selectedVm = snapshots.filter((vm, idx) => selectedItem === idx)[0];
    let CurrentStep = null;

    switch (step) {
      case 1:
        CurrentStep = (
          <StepTwoPage
            switchPage={this.switchPage}
            selectedVm={selectedVm}
            updateVm={this.updateVm}
          />
        );
        break;

      default:
        CurrentStep = this.state.isLoaded ? (
          <StepOnePage
            snapshots={snapshots}
            updateSnapshots={this.filterSnapshotList}
            selectedItem={selectedItem}
            switchPage={this.switchPage}
            selectVm={this.selectVm}
          />
        ) : (
          <Loader />
        );
    }

    return (
      <div className="stepper-app">
        <div className="stepper-app__tabs">
          <TabsList tabs={this.tabs} activeTab={activeTab} />
        </div>

        <Divider />

        <div className="stepper-app__page">{CurrentStep}</div>

        {/* language=SCSS */}
        <style jsx>
          {`
            .stepper-app {
              width: 100%;
              max-width: 960px;
              height: 100%;
              max-height: 768px;
              min-height: 384px;
              margin: 0 auto;
              display: flex;
              flex-direction: column;
              flex-wrap: nowrap;
              justify-content: stretch;

              &__tabs {
                min-height: 70px;
              }

              &__page {
                width: 100%;
                margin-top: 10px;
                padding: 0 5px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                @media screen and (min-width: 480px) {
                  padding: 0 20px;
                }
              }

              @media screen and (min-width: 480px) {
                border: 5px solid #3d82ff;
              }
            }
          `}
        </style>
      </div>
    );
  }
}

export default App;
