import { Component, OnInit } from '@angular/core';
import {ThreadsService} from "../services/threads.service";
import {Store} from "@ngrx/store";
import {ApplicationState} from "../store/application-state";
import {LoadUserThreadAction} from "../store/actions";

@Component({
  selector: 'app-thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.css'],

})
export class ThreadSectionComponent implements OnInit {
  constructor(private threadService:ThreadsService,
                private store:Store<ApplicationState>) {
    store.subscribe( state => {
      console.log("Thread Section received new state",state);
    });
  }
  ngOnInit() {
    this.threadService.loadUserThreads().subscribe(allUserData => {
      this.store.dispatch(new LoadUserThreadAction(allUserData));
    });
  }
}
