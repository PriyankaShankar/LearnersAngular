import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  coursename = 'Angular';

  constructor() { }

  ngOnInit() {
  }
  changecourse()
// tslint:disable-next-line:one-line
{
  this.coursename = 'Typescript';
}
}
