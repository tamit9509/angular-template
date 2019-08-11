import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { SidebarItem } from 'src/app/sidebar.items';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() sidebarItems: SidebarItem[];
  open: boolean;

  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {
    this.sidebarService.change.subscribe(obj => {
      this.open = obj;
    })
  }

}
