import { Component, OnInit } from '@angular/core';
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

}
