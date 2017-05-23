import { Component, OnInit } from '@angular/core';
import {ThreadsService} from "../services/threads.service";
import {Store} from "@ngrx/store";
import {ApplicationState} from "../store/application-state";
import {LoadUserThreadAction} from "../store/actions";
import {Observable} from "rxjs/Observable";
import {Thread} from "../../../shared/model/thread";
import {ThreadSummaryVM} from "./thread-summary.vm";
import * as _ from 'lodash';

@Component({
  selector: 'app-thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.css'],

})
export class ThreadSectionComponent implements OnInit {
  mapUnreadMessagesCounter: any;
  mapStateToUserName: any;
  userName$:Observable<string>;
  unreadMessage$:Observable<number>;
  threadSummary$:Observable<ThreadSummaryVM[]>;

  constructor(private threadService:ThreadsService,
                private store:Store<ApplicationState>) {
    this.userName$=store
      .skip(1)
      .map(this.mapStateToUserName);
    this.unreadMessage$=store
      .skip(1)
      .map(this.mapUnreadMessagesCounter);

    this.threadSummary$ = store.select( state => {
      const threads = _.values<Thread>(state.storeData.threads);
      return threads.map(thrd => {
        return {
          participantNames : null,
          id: thrd.id,
          lastMessageText:null,
        }
      });
    })
  }

  ngOnInit() {
    this.threadService.loadUserThreads().subscribe(allUserData => {
      this.store.dispatch(new LoadUserThreadAction(allUserData));
    });
  }
}
