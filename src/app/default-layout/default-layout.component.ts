import { SIDEBAR_ITEMS } from './../sidebar.items';
import { SidebarService } from './../services/sidebar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {
  open: boolean;
  sidebarItems = SIDEBAR_ITEMS;
  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {
    this.sidebarService.change.subscribe(obj => {
      this.open = obj;
    })
  }

}
