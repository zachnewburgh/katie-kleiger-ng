import { Component, Input, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.css']
})
export class NavComponent implements OnInit {
  @Input('color') color: string;
  @Input('hover') hover: string;
  @Input('background') background: string;

  links = {
      home: [],
      about: [],
      media: ['headshots', 'resume', 'stills', 'reels', 'voiceover'],
      news: [],
      contact: []
    };

  headerLinks: string[];

  ngOnInit() {
    this.headerLinks = Object.keys(this.links);
  }

  toggleColor(id: string) {
    const el = document.getElementById(id);
    el.style.color = el.style.color === this.color ? this.hover : this.color;
  }
}