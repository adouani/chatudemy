/**
 * Created by radouani on 22/05/17.
 */


export interface UiState {
  userId:number;
  currentThreadId:number;
}

export const INITIAL_UI_STATE : UiState= {
  userId : undefined,
  currentThreadId:undefined
};
