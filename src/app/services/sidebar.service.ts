import { Injectable, Output, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  isOpen: boolean = false;
  @Output() change = new EventEmitter<boolean>();
  constructor() { }

  toggle() {
    this.isOpen = !this.isOpen;
    this.change.emit(this.isOpen);
  }

}