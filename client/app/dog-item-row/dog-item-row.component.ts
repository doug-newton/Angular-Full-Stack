import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dog } from '../shared/models/dog.model';

@Component({
  selector: 'tr[appDogItemRow]',
  templateUrl: './dog-item-row.component.html',
  styleUrls: ['./dog-item-row.component.scss']
})
export class DogItemRowComponent {
  @Input() dog: Dog = new Dog()
  @Output() editDog: EventEmitter<undefined> = new EventEmitter()
  @Output() cancelEditing: EventEmitter<undefined> = new EventEmitter()
}
