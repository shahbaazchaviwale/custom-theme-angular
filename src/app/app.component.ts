import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  theme = localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark-theme";
  menuOpen : object;
  menuStatus = 'close';
  mainContent : object;
  constructor() {}
  ngOnInit() {
    
  }
  themeChange(checkTheme) {
    if (checkTheme === "dark-theme") {
      this.theme = "light-theme";
      localStorage.setItem("theme", "light-theme");
    } else {
      this.theme = "dark-theme";
      localStorage.setItem("theme", "dark-theme");
    }
  }

  toggleMenu(menuStatus){
    if (menuStatus === 'close'){
      this.menuOpen = { 'width': "250px" };
      this.mainContent = { "margin-left": "250px" };
      this.menuStatus = "open";
    }else{
      this.menuOpen = { 'width': '50px'};
      this.mainContent = { "margin-left": "50px" };
      this.menuStatus = "close";
    }
  }
}
