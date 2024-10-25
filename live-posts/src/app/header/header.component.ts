import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../back-end.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  constructor(private backEndService: BackEndService) {}

  ngOnInit(): void {}

  onSave() {
    console.log("onSave() called");
    this.backEndService.saveData();
  }

  onFetch() {
    console.log("onFetch() called");
    this.backEndService.fetchData();
  }
}
