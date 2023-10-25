import { useState, useEffect } from "react";
import { createStore } from "../react-hooks";

export const Provider = ({
  initialStore,
  loader = "loading",
  children,
  keyPrefix = "use",
}) => {
  const [isReduxLoaded, setIsReduxLoaded] = useState(false);
  useEffect(() => {
    const initialActions = async () => {
      await createStore(initialStore, keyPrefix);
      setIsReduxLoaded(true);
    };
    initialActions();
  }, [initialStore]);
  return isReduxLoaded ? children : loader;
};
