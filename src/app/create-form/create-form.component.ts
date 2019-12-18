import { Component, OnInit } from '@angular/core';
import {Time} from '@angular/common';
import {Timestamp} from 'rxjs/internal-compatibility';

@Component({
  selector: 'cm-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: [
    './create-form.component.css'
  ]
})
export class CreateFormComponent implements OnInit {
  title: any;
  description: any;
  date: Date;
  startTime: Date;
  endTime: Date;
  location: any;

  constructor() { }

  ngOnInit() {
    this.clearForm();
  }

  onSave() {
    const meetings = JSON.parse(localStorage.getItem('meetings')) || [];
    const id = (parseInt(localStorage.getItem('meetingsLatestId'), 10) || 0) + 1;

    const startTime = new Date(this.date);
    startTime.setHours(this.startTime.getHours());
    startTime.setMinutes(this.startTime.getMinutes());

    const endTime = new Date(this.date);
    endTime.setHours(this.endTime.getHours());
    endTime.setMinutes(this.endTime.getMinutes());

    const meeting = {
      id,
      title: this.title,
      description: this.description,
      location: this.location,
      startTime,
      endTime,
    };
    meetings.push(meeting);
    localStorage.setItem('meetings', JSON.stringify(meetings));
    localStorage.setItem('meetingsLatestId', '' + id);
    this.clearForm();
    this.emitCreated(meeting);
  }

  emitCreated(meeting) {
    // const event = document.createEvent('HTMLEvents');
    const event = new CustomEvent('meeting:created', {
      detail: meeting
    });
    event.initEvent('meeting:created');
    window.dispatchEvent(event);
  }

  onClear() {
    this.clearForm();
  }

  clearForm() {
    this.title = '';
    this.description = '';
    this.location = '';
    this.date = new Date();
    this.startTime = new Date();
    this.endTime = new Date();
    this.endTime.setHours(this.endTime.getHours() + 1);
  }
}
