import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DialogService } from 'client/app/services/dialog.service';
import { DogService } from '../../services/dog.service';
import { Dog } from '../../shared/models/dog.model';
import { ToastComponent } from '../../shared/dialogs/toast/toast.component';

@Component({
  selector: 'tr[appDogItemRow]',
  templateUrl: './dog-item-row.component.html',
  styleUrls: ['./dog-item-row.component.scss']
})
export class DogItemRowComponent {

  @Input() dog: Dog = new Dog()
  @Output() dogDeleted: EventEmitter<Dog> = new EventEmitter()

  constructor(
    private dogService: DogService,
    private dialogService: DialogService
  ){
  }

  form = new FormGroup({
    _id: new FormControl<string>('', { nonNullable: true }),
    name: new FormControl<string>('', { nonNullable: true }),
    age: new FormControl<number>(0, { nonNullable: true }),
    weight: new FormControl<number>(0, { nonNullable: true }),
    favouriteToy: new FormControl<string>('', { nonNullable: true })
  })

  isEditing = false

  enableEditing() {
    this.form.patchValue(this.dog)
    this.isEditing = true
  }

  cancelEditing() {
    this.dialogService.toastNotify('editing cancelled', 'warning');
    this.isEditing = false
  }

  save() {
    this.dog = this.form.value
    this.dogService.updateDog(this.dog).subscribe({
      next: result => {
        this.isEditing = false;
        this.dialogService.toastNotify('dog updated!', 'success');
      },
      error: error => {
        this.dialogService.toastNotify(`something went wrong ${error}`, 'danger');
      }
    })
  }

  deleteDog() {
    this.dialogService.confirm({
      title: 'Confirm',
      body: `Are you sure you want to delete '${this.dog.name}'?`
    },
      () => {
        this.dogService.deleteDog(this.dog).subscribe({
          next: result => {
            this.dogDeleted.emit(this.dog)
            this.dialogService.toastNotify('dog deleted!', 'success')
          },
          error: error => {
            this.dialogService.toastNotify(`error: ${error}`, 'danger')
          }
        })
      },
      () => { }
    )
  }

}
