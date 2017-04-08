import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'logo',
  templateUrl: 'logo.component.html',
  styleUrls: ['logo.component.css']
})
export class LogoComponent {
  @Input('color') color: string;
  title = 'KATIE KLEIGER';
}
