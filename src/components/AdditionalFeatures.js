import React from "react";
import AdditionalFeature from "./AdditionalFeature";

const AdditionalFeatures = props => {
  console.log("AdditionalFeatures:", props);
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.items.length ? (
        <ol type="1">
          {props.items.map(item => (
            <AdditionalFeature
              key={item.id}
              feature={item}
              addFeature={props.addFeature}
            />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
