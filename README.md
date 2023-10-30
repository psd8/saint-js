# ![Saint-JS-Logo!](logo.png) Saint JS

This is another react hook which make life simpler in terms of frontend state management. It will automatically generate hook functions which contains latest updated value of that key and action creator which will update data in store and will be catch by same copy variable which eventually rerender the functional component where state management variable are used.

This is is very lightweight lib having no dependencies and react 16.8 and above as peer dependencies.

## Features

- Reduce overhead of managing actions and reducers in codebase
- Very easy to use
- Improve code readability
- Reduce final bundle size
- Reduce compile time as there is lesser file then any state management library

## Install

```
npm i saint-js
```

## Setup

After installing saint-js, in your react app's index file you need to import Provider component and pass initial state to it as we do with redux or any other state management library.

```bash
import React from 'react';
import { Provider } from "saint-js";
const initialStore = {
  user: {},
  agent: {},
  student: {},
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider initialStore={initialStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

## Use

- once setup is done, it will generate data variables and actions to update store data based individual key defined in initialStore object

1. If you need to access multiple keys in single component then below method is recommended

```bash
import { actions } from "saint-js";

//1st way you can extract actions and data variables via destructuring actions object, based on initialStore which we defined on above setup step it will generate individual hook functions for each key with use word appended as per standard naming convention of any normal hook

    const {useUsers, useAgent, useStudent} = actions; // after extracting required hook functions we can call to get those keys value and action creator function like

    const { userData, setUserData } = useUser(); // keyname with 'Data' word appended to it
    const { agentData, setAgentData } = useAgent(); // keyname with 'Data' word appended to it
    const { studentData, setStudentData } = useStudent(); // keyname with 'Data' word appended to it

);
```

2. If you find only couple of actions need to be used inside of component then useSaint() hook is recommended way

```bash
    import { useSaint } from "saint-js";

    const { userData, setUserData } = useSaint('user'); // keyname with 'Data' word appended to it
    const { agentData, setAgentData } = useSaint('agent'); // keyname with 'Data' word appended to it
    const { studentData, setStudentData } = useSaint('student'); // keyname with 'Data' word appended to it 

    // show data using state variable extracted from action hook function

    <div>{userData}</div>
```

Once you done with above things you can use variable and setter methods as similar as any other useState hook just here we are doing object destructuring in above step instead of Array Destructuring and use them like following way

```bash

useEffect(() => {
     setAgentData("new Data...');
    setStudentData("new Data...');
}, [userData, setUserData]);

```

## Upcoming features

- Typescript support
- API management hooks
- Improve framework support

## License

## MIT

> GitHub [@PrashantShah(psd8)](https://github.com/psd8) &nbsp;&middot;&nbsp;
> LinkedIn [@PrashantShah(psd8)](https://www.linkedin.com/in/prashant-shah-42974aa9/) &nbsp;&middot;&nbsp;
> Stack-Overflow [@PrashantShah(psd8)](https://stackoverflow.com/users/11953446/prashant-shah?tab=profile)
