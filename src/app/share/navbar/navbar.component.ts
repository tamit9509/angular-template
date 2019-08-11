import { SidebarService } from './../../services/sidebar.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  toggle: boolean = true;
  open: boolean = false;

  @Output() showSidebar = new EventEmitter<boolean>();
  sidebarClass = {
    'close-sidebar': true
  }
  constructor(private modalService: NgbModal, private sidebarService: SidebarService) { }

  ngOnInit() {
    this.sidebarService.change.subscribe(obj => {
      this.open = obj;
    })
  }

  openSidebar() {
    this.sidebarClass["close-sidebar"] = true;
  }
  toggleSidebarBar() {
    this.showSidebar.emit(true);
  }
  openNav() {
    this.sidebarService.toggle();
  }
}
