import { combineReducers } from "redux";
import data_reducer from "../pages/dashboard/state/reducer";
import table_data_reducer from "../components/page/pagination/store/reducer";
import filter_no_of_items_reducer from "../pages/dashboard/component/data/store/reducer";
const createRootReducer = combineReducers({
  data: data_reducer,
  table_data: table_data_reducer,
  items_per_page: filter_no_of_items_reducer,
});
export default createRootReducer;
