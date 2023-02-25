import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DogService } from '../services/dog.service';
import { Dog } from '../shared/models/dog.model';
import { ToastComponent } from '../shared/toast/toast.component';

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
    public toast: ToastComponent
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
      error: error => this.toast.setMessage('unable to load dogs!', 'danger'),
      complete: () => {
        this.isLoading = false
      }
    })
  }

  enableEditing(dog: Dog){
    this.isEditing = true
    this.dog = dog
  }

  cancelEditing() {
    this.isEditing = false
    this.dog = new Dog
    this.toast.setMessage( 'editing cancelled', 'warning')
  }

  editDog() {
    this.dogService.updateDog(this.dog).subscribe({
      next: result => {
        this.isEditing = false;
        this.toast.setMessage('dog updated!', 'success');
      },
      error: error => {
        this.toast.setMessage(`something went wrong ${error}`, 'danger');
      }
    })
  }

  deleteDog(dog: Dog) {
    if (!window.confirm(`Are you sure you want to delete '${dog.name}'?`)) {
      return;
    }
    this.dogService.deleteDog(dog).subscribe({
      next: result => {
        this.dogs = this.dogs.filter(item => item._id !== dog._id)
        this.toast.setMessage('dog deleted!', 'success')
      },
      error: error => {
        this.toast.setMessage(`error: ${error}`, 'danger')
      }
    })
  }

}
