import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public router: Router) {}

  public menuItems = [
    {url:"/characters", icon: "../assets/group.png", text:"Characters", isActive: false},
    {url:"/new-character", icon: "../assets/add_person.png", text:"New Character", isActive: false},
    {url:"/fight", icon: "../assets/sword-cross.png", text:"Fight", isActive: false},
  ]

  ngOnInit() {
    // var item = this.menuItems.find(i => i.url == this.router.getCurrentNavigation()?.extractedUrl.toString())
    // if(item) item.isActive = true;
  }

  activate(item:any) {
    item.isActive = true;
  }

  disable(item:any) {
    item.isActive = false;
  }
}
