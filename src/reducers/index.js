import { combineReducers } from 'redux';
import fetchForFilter from './fetchForFilter';
import fetchDashoardInfos from './fetchDashoardInfos';
import fetchContentFromSidebar from './fetchContentFromSidebar';
import fetchSortInfoForFilter from './fetchSortInfoForFilter';

export default combineReducers({
    filterinfos:fetchForFilter,
    dashboardinfos:fetchDashoardInfos,
    contentinfos:fetchContentFromSidebar,
    sort:fetchSortInfoForFilter,
});