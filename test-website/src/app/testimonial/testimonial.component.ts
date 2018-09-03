import { Component, OnInit } from '@angular/core';
import { ConfigService }    from '../services/config.service';
@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  testimonals = {};

  constructor(
    private config: ConfigService
  ) { }

  ngOnInit() {
    this.testimonals = this.getTestimonials();
    
  }

  getTestimonials() {
    return this.config.getConfig().testimonials;
  }

}
