import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

// type User = {
//   id: string,
//   name: string,
//   avatar: string
// }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) user!: User;
  @Input({required:true}) selected!: boolean;
  @Output() userSelected = new EventEmitter<string>();

   get imagePath() {
     return 'assets/users/' + this.user.avatar;
   }

  onSelectUser(){
    this.userSelected.emit(this.user.id);
  }
}
