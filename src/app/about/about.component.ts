import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent {
  title = 'KATIE KLEIGER';

  bio = `Katie Kleiger is an actor based in New York City, 
         and is a graduate of the University of Minnesota/Guthrie 
         BFA Actor Training Program. Before attending the U of 
         MN/Guthrie Program, she spent two years at the Interlochen 
         Arts Academy, where she received a Young Artist Award in 
         Theatre. 
         <br><br>
         In 2011, she was chosen as a YoungArts Theater Finalist, 
         and has since gone back to work with the YoungArts foundation 
         as an actor in their Alumni Backyard Gala under the direction 
         of Bill T. Jones.
         <br><br>
         Over the course of her training, she has had the pleasure of 
         learning with The Globe Theater Education program, and has had 
         workshops with such notables as John Barton, Barbara Houseman, 
         and Ken Washington.`;
}
