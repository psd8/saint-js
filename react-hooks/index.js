import { useCallback, useState } from "react";
import { store, broadCastEvent, subscriber } from "../core/store";
import { updateActions } from "../index";

const useUpdate = (key, data, setData) => {
  const handleChangeData = useCallback(
    (data) => {
      setData({ ...data });
      broadCastEvent(key, data);
    },
    [key, setData]
  );

  return {
    [key + "Data"]: data,
    ["set" + key.charAt(0).toLocaleUpperCase() + key.substring(1) + "Data"]:
      handleChangeData,
  };
};

const useHookWrapper = (key) => {
  const [data, setData] = useState(store.getData(key));
  subscriber(key, (val) => {
    setData(val);
  });
  // Todo to optimise this setData and accomodate useUpate logic over here
  return useUpdate(key, data, setData);
};

const createStore = (initialState, keyPrefix) => {
  const obj = {};
  return new Promise((res) => {
    for (const key in initialState) {
      const hookKey =
        keyPrefix + key.charAt(0).toLocaleUpperCase() + key.substring(1);
      store.setData(key, {
        ...initialState[key],
      });
      let useHookCallback = () => useHookWrapper(key);
      store.setActions(key, useHookCallback);
      obj[hookKey] = useHookCallback;
    }
    updateActions(obj);
    res();
  });
};

export { createStore };
