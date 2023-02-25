import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DogService } from '../services/dog.service';
import { Dog } from '../shared/models/dog.model';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-add-dog-form',
  templateUrl: './add-dog-form.component.html',
  styleUrls: ['./add-dog-form.component.scss']
})
export class AddDogFormComponent {

  @Input() dogs!: Dog[]
  addDogForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dogService: DogService,
    public toast: ToastComponent,
  ){
    this.addDogForm = this.formBuilder.group({
      name: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]}),
      age: new FormControl<number>(0, {nonNullable: true, validators: [Validators.required]}),
      weight: new FormControl<number>(0, {nonNullable: true, validators: [Validators.required]}),
      favouriteToy: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]})
    })
  }

  addDog() {
    this.dogService.addDog(this.addDogForm.value).subscribe({
      next: dog => {
        this.dogs.push(dog);
        this.addDogForm.reset();
        this.toast.setMessage('dog added successfully', 'success')
      },
      error: error => {
        this.toast.setMessage('something went wrong', 'danger')
      }
    })
  }

}
