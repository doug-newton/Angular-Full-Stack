import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Dog } from '../shared/models/dog.model';

@Component({
  selector: 'tr[appEditDogForm]',
  templateUrl: './edit-dog-form.component.html',
  styleUrls: ['./edit-dog-form.component.scss']
})
export class EditDogFormComponent {
  @Input() dog: Dog = new Dog()
  @Output() editDog: EventEmitter<undefined> = new EventEmitter()
  @Output() cancelEditing: EventEmitter<undefined> = new EventEmitter()
}
