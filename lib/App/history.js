import { Meteor } from "meteor/meteor";
import createHistory from "history/createBrowserHistory";

const history = Meteor.isClient ? createHistory() : false;

export default history;
