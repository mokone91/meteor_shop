import React from "react";
import { connect } from "react-redux";
import EntityCreateEdit from "../components/forms/EntityCreateEdit";
import { createEntity } from "../actions";

function EntityCreate ({createEntity}) {
  return (
    <div>
      <h1>{"EntityCreate"}</h1>
      <EntityCreateEdit
        onSubmit={createEntity}
      />
    </div>
  );
}

export default connect(null,{createEntity})(EntityCreate);
