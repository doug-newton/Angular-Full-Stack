import { Component, OnInit } from '@angular/core';

import { CatService } from '../services/cat.service';
import { ToastComponent } from '../shared/dialogs/toast/toast.component';
import { Cat } from '../shared/models/cat.model';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {

  cats: Cat[] = [];
  isLoading = true;
  isEditing = false;

  constructor(private catService: CatService,
              private dialogService: DialogService) { }

  ngOnInit(): void {
    this.getCats();
  }

  getCats(): void {
    this.catService.getCats().subscribe({
      next: data => this.cats = data,
      error: error => console.log(error),
      complete: () => this.isLoading = false
    });
  }

  removeCat(cat: Cat) {
    this.cats = this.cats.filter(item => item._id !== cat._id)
  }

}
