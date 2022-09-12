import React from "react";
import "../styles/Tabs.css";
import { connect } from "react-redux";
import { mapState, mapDispatch } from "../stores/maps";

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  getTabStyle = () => {
    return {
      style: {
        left: `calc(calc(calc(25% - 5px) * ${this.props.tab} ) + 10px)`,
      },
    };
  };

  render() {
    const { tab, setTab } = this.props;

    return (
      <div className="tabs">
        {tab < 4 ? (
          <>
            <div className="tabs-header">
              <div onClick={() => setTab(0)}>tab1</div>
              <div onClick={() => setTab(1)}>tab2</div>
              <div onClick={() => setTab(2)}>tab3</div>
              <div onClick={() => setTab(3)}>tab4</div>
            </div>
            <div className="tabs-slider" {...this.getTabStyle()} />
          </>
        ) : (
          <div onClick={() => setTab(4)}>Search Results:</div>
        )}
      </div>
    );
  }
}

export default connect(mapState, mapDispatch)(Tabs);
