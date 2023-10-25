const subscriberList = {};
const store = {
  data: {},
  getData: function (key = false) {
    return key ? this.data[key] : this.data;
  },
  setData: function (key, data) {
    this.data[key] = data;
  },
  actions: {},
  getActions: function (key = false) {
    return key ? this.actions[key] : this.actions;
  },
  setActions: function (key, func) {
    this.actions[key] = func;
  },
};
export function broadCastEvent (key, value) {
  Object.keys(subscriberList).forEach((ele) => {
    if (ele === key) {
      subscriberList[ele](value);
    }
  });
}
export function subscriber(key, cb) {
  subscriberList[key] = cb;
}
export function useSaint (key) {
  return store.actions[key]();
}

const _store = store;
export { _store as store };
