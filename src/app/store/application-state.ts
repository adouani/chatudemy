import {INITIAL_UI_STATE, UiState} from "./ui-state";
import {StoreData, INITIAL_STORE_DATA} from "./store-data";

export interface ApplicationState
{
  uiState:UiState;
  storeData : StoreData;
}

export const INITIAL_APPLICATION_STATE : ApplicationState = {
  uiState:INITIAL_UI_STATE,
  storeData:INITIAL_STORE_DATA
};
