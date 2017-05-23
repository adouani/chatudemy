import {ApplicationState} from "../store/application-state";
import * as _ from 'lodash';

export function mapStateToUserName(state:ApplicationState):string {
  return  state.storeData.participants[state.uiState.userId].name;
}
export function mapUnreadMessagesCounter(state:ApplicationState):number {
  const currentUserId = state.uiState.userId;
  return _.values<Thread>(state.storeData.threads)
    .reduce((acc,thread) =>
      acc+ thread.participants[currentUserId]
      ,0);
}
