import { Component, Input } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators, UntypedFormBuilder } from '@angular/forms';
import { CatService } from '../../services/cat.service';
import { ToastComponent } from '../../shared/dialogs/toast/toast.component';
import { Cat } from '../../shared/models/cat.model';
import { DialogService } from 'client/app/services/dialog.service';

@Component({
  selector: 'app-add-cat-form',
  templateUrl: './add-cat-form.component.html',
  styleUrls: ['./add-cat-form.component.scss']
})

export class AddCatFormComponent {
  @Input() cats: Cat[] = [];

  addCatForm: UntypedFormGroup;
  name = new UntypedFormControl('', Validators.required);
  age = new UntypedFormControl('', Validators.required);
  weight = new UntypedFormControl('', Validators.required);

  constructor(private catService: CatService,
              private formBuilder: UntypedFormBuilder,
              private dialogService: DialogService) {
    this.addCatForm = this.formBuilder.group({
      name: this.name,
      age: this.age,
      weight: this.weight
    });
  }

  addCat(): void {
    this.catService.addCat(this.addCatForm.value).subscribe({
      next: res => {
        this.cats.push(res);
        this.addCatForm.reset();
        this.dialogService.toastNotify('Item added successfully.', 'success');
      },
      error: error => console.log(error)
    });
  }

}
