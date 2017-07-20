import { Mongo } from "meteor/mongo";

const Entity = new Mongo.Collection("entity");

Entity.schema = new SimpleSchema({
  firstName: {
    type: String,
    label: "Title",
    max: 3
  },
  notes: {
    type: String,
    label: "Notes",
    defaultValue: "test"
  }
});

Entity.attachSchema(Entity.schema);

export default Entity;
