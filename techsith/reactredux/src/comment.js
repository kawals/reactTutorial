To learn redux state, we are going to store state locally first.
Then we will manage state using redux

First of all create a project
create-react-app reactredux and write code in app.js file
& manage state locally

Install redux & react-redux

npm install redux --save
npm install react-redux --save

reducers are used to change the state
create a folder & name it store, and create a file & name it reducer.js

import provider & wrap <APP/> tag inside <Provider> tag
Provider help to inject the global store, store will be available to the entire application
import {Provider} from 'react-redux';

Redux allows only one reducer, in store only pass one reducer,
but we can split into multiple reducers and combine them before passing to the store
