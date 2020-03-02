import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { addItem, removeItem } from "./action"; // ACTION CREATORS

import { connect } from "react-redux";
const App = props => {
  console.log("App", props);
  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeItem(item);
  };

  const addFeature = item => {
    // dipsatch an action here to add an item
    props.addItem(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures items={props.items} addFeature={addFeature} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log("mSTP", state);
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    items: state.items
  };
};

// 'connect' is a function that gets called twice (function, {Action Creators})(App)
export default connect(mapStateToProps, { addItem, removeItem })(App);
