import { Component, OnInit } from '@angular/core';
import { ConfigService }  from '../services/config.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footer = {};
  social = {};
  constructor(
    private config: ConfigService
  ) { }

  ngOnInit() {
    this.footer = this.getFooter();
    this.social = this.getSocial();
  }

  getFooter() {
    return this.config.getConfig().footer;
  }

  getSocial() {
    return this.config.getConfig().social;
  }

}
