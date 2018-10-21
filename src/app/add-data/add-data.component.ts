import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AddDataService } from './add-data.service';
import { forkJoin } from 'rxjs';

@Component({
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css'],
})
export class AddDataComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
