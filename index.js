import { broadCastEvent, useSaint } from "./core/store";
import { createStore } from "./react-hooks";
import { Provider } from "./components";

const actions = {};
const updateActions = function (newActions) {
  for (const item in newActions) {
    actions[item] = newActions[item];\
  }
};

export {
  actions,
  broadCastEvent,
  useSaint,
  updateActions,
  createStore,
  Provider,
};
