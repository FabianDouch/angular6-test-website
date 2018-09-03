import { Injectable } from '@angular/core';
import { configuration } from '../configuration';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  config = configuration;

  constructor() { }

  getConfig() {
    return this.config;
  }

  getPostById(id: number ) {
    return this.config.blog.posts[id - 1];
  }
}
