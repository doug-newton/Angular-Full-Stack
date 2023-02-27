import { Component } from '@angular/core';
import { DialogService } from 'client/app/services/dialog.service';
import { combineLatest, map, Observable } from 'rxjs';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {

  constructor(
    private dialogService: DialogService
  ) { }

  open$: Observable<boolean> = this.dialogService.confirmDialogOpen$
  content$: Observable<any> = this.dialogService.confirmContent$

  modalState$ = combineLatest([
    this.open$,
    this.content$
  ]).pipe(map(([open, content]) => ({open, content})))

  dismiss() {
    this.dialogService.confirmDismiss()
  }

  confirmYes() {
    this.dialogService.confirmYes()
  }

  confirmNo(){
    this.dialogService.confirmNo()
  }

}
