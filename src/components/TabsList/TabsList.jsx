import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import Tab from '../Tab';

const propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTab: PropTypes.number.isRequired,
};

const defaultProps = {};

class TabsList extends PureComponent {
  render() {
    const { activeTab, tabs } = this.props;

    return (
      <ul>
        {/* non-dynamic list, unique key not important */}
        {tabs.map((tab, id) => (
          <Tab key={id} isActive={activeTab === id}>
            {id + 1}. {tab}
          </Tab>
        ))}
      </ul>
    );
  }
}

TabsList.propTypes = propTypes;
TabsList.defaultProps = defaultProps;

export default TabsList;
