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
      <ul className="tab-list">
        {/* non-dynamic list, unique key not important */}
        {tabs.map((tab, id) => (
          <Tab key={id} isActive={activeTab === id}>
            {id + 1}. {tab}
          </Tab>
        ))}

        {/* language=SCSS */}
        <style jsx>
          {`
            .tab-list {
              width: 98%;
              margin: 0 auto;
              display: flex;
              flex-wrap: nowrap;
              justify-content: stretch;
              align-items: flex-end;
              min-height: 70px;
              list-style-type: none;
            }
          `}
        </style>
      </ul>
    );
  }
}

TabsList.propTypes = propTypes;
TabsList.defaultProps = defaultProps;

export default TabsList;
