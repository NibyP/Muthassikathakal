import { createStore,combineReducers } from 'redux';
import globalReducer from './reducers/globalReducer';

const rootReducer = combineReducers({
    globalReducer : globalReducer
});
const configureStore = () => createStore(rootReducer);
//console.log(configureStore.getState());
export default configureStore;