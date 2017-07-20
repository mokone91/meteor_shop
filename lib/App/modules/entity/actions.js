import Entity from "./api/Entity";

export const CREATE_ENTITY_SUCCESS = "CREATE_ENTITY_SUCCESS";
export const CREATE_ENTITY_FAILED= "CREATE_ENTITY_FAILED";

export function createEntity () {
  return (dispatch, getState) => {
    const { form: {EntityCreateEdit: {values}} } = getState();

    const status = Entity.insert(values);

    console.log(status);

    return dispatch({
      type: CREATE_ENTITY_SUCCESS
    });
  };
}
