import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService } from '../services/dialog.service';
import { DogService } from '../services/dog.service';
import { Dog } from '../shared/models/dog.model';
import { ToastComponent } from '../shared/dialogs/toast/toast.component';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {

  isLoading = true;
  dogs: Dog[] = []
  isEditing = false;
  dog = new Dog();

  constructor(
    private dogService: DogService,
    private dialogService: DialogService
  ) {
  }

  ngOnInit(): void {
    this.loadDogs()
  }

  loadDogs() {
    this.dogService.getDogs().subscribe({
      next: dogs => {
        this.dogs = dogs
      },
      error: error => this.dialogService.toastNotify('unable to load dogs!', 'danger'),
      complete: () => {
        this.isLoading = false
      }
    })
  }

  removeDog(dog: Dog) {
    this.dogs = this.dogs.filter(item => item._id !== dog._id)
  }


}
