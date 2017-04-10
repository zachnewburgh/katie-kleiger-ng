import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  selector: 'videos',
  templateUrl: 'videos.component.html',
  styleUrls: ['videos.component.css']
})
export class VideosComponent {
    title = "videos";
    videos = [
      'https://player.vimeo.com/video/211348128',
      'https://player.vimeo.com/video/149598220',
      'https://player.vimeo.com/video/146698813'
    ];

    constructor(private sanitizer: DomSanitizer) {};
}
