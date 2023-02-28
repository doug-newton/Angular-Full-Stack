import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CatService } from 'client/app/services/cat.service';
import { DialogService } from 'client/app/services/dialog.service';
import { Cat } from 'client/app/shared/models/cat.model';
import { ToastComponent } from 'client/app/shared/dialogs/toast/toast.component';

@Component({
  selector: 'tr[appCatItemRow]',
  templateUrl: './cat-item-row.component.html',
  styleUrls: ['./cat-item-row.component.scss']
})
export class CatItemRowComponent {

  @Input() cat = new Cat()
  @Output() catDeleted: EventEmitter<Cat> = new EventEmitter()

  constructor(
    private catService: CatService,
    private dialogService: DialogService
  ){
  }
  
  isEditing = false
  editCatForm = new FormGroup({
    _id: new FormControl<string>(''),
    name: new FormControl<string>('', {nonNullable:true, validators: [Validators.required]}),
    age: new FormControl<number>(0, {nonNullable:true, validators: [Validators.required]}),
    weight: new FormControl<number>(0, {nonNullable:true, validators: [Validators.required]}),
  })

  enableEditing() {
    this.editCatForm.patchValue(this.cat)
    this.isEditing = true
  }

  cancelEditing(){
    this.isEditing = false
    this.dialogService.toastNotify('editing cancelled', 'warning');
  }

  save(){
    this.cat = this.editCatForm.value as Cat
    this.catService.editCat(this.cat).subscribe({
      next: result => {
        this.dialogService.toastNotify('cat edited successfully', 'success');
      },
      error: error => {
        this.dialogService.toastNotify(`error: ${error}`, 'danger');
      },
      complete: () => {
        this.isEditing = false
      }
    })
  }

  async deleteCat() {
    this.dialogService.confirm({
      title: 'Confirm',
      body: `Are you sure you want to delete '${this.cat.name}'?`
    }, () => {
      this.catService.deleteCat(this.cat).subscribe({
        next: result => {
          this.dialogService.toastNotify('cat deleted successfully', 'success');
          this.catDeleted.emit(this.cat);
        },
        error: error => {
          this.dialogService.toastNotify(`error: ${error}`, 'danger');
        }
      })
    }, () => { });
  }
}