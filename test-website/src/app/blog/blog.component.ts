import { Component, OnInit } from '@angular/core';
import { ConfigService }    from '../services/config.service';
import { PagerService }     from '../services/pager.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog: any = {};
  allItems: any[];
  pages: any[];
  pageSize = 4;
  pager: any = {};
  constructor(
    private config: ConfigService,
    private pagerService: PagerService
  ) { }

  ngOnInit() {
    this.blog = this.getBlog();
    this.allItems = this.blog.posts;
    this.setPage(3);
  }

  getBlog() {
    return this.config.getConfig().blog;
  }

  setPage(pageNumber: number) {
    console.log(pageNumber);
    //create a pager using pager service
    this.pager = this.pagerService.getPager(this.allItems.length, pageNumber, this.pageSize);
    console.log(this.pager);

    //current page posts
    this.pages = this.allItems.slice(this.pager.startIndex, this.pager.endIndex);

  }

}