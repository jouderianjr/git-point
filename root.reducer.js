import { combineReducers } from 'redux';
import { authReducer } from 'auth';
import { userReducer } from 'user';
import { repositoryReducer } from 'repository';
import { organizationReducer } from 'organization';
import { issueReducer } from 'issue';
import { searchReducer } from 'search';
import { notificationsReducer } from 'notifications';

const initialState = {
  firstTimeOnNotificationScreen: false,
  firstTimeOnProfileScreen: false,
};

const tabReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ROUTE_CHANGE_NOTIFICATION':
      return {
        ...state,
        firstTimeOnNotificationScreen: true,
      };
    case 'ROUTE_CHANGE_PROFILE':
      return {
        ...state,
        firstTimeOnProfileScreen: true,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  lazyTabLoading: tabReducer,
  auth: authReducer,
  user: userReducer,
  repository: repositoryReducer,
  organization: organizationReducer,
  issue: issueReducer,
  search: searchReducer,
  notifications: notificationsReducer,
});
