import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'client/app/services/dialog.service';
import { DogService } from '../../services/dog.service';
import { Dog } from '../../shared/models/dog.model';
import { ToastComponent } from '../../shared/dialogs/toast/toast.component';

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
    private dialogService: DialogService,
  ){
    this.addDogForm = this.formBuilder.group({
      name: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]}),
      age: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]}),
      weight: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]}),
      favouriteToy: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]})
    })
  }

  addDog() {
    this.dogService.addDog(this.addDogForm.value).subscribe({
      next: dog => {
        this.dogs.push(dog);
        this.addDogForm.reset();
        this.dialogService.toastNotify('dog added successfully', 'success')
      },
      error: error => {
        this.dialogService.toastNotify('something went wrong', 'danger')
      }
    })
  }

}
