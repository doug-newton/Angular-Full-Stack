import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }

  confirmDialogOpen$ : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)
  openConfirmDialog() { this.confirmDialogOpen$.next(true); }
  closeConfirmDialog() { this.confirmDialogOpen$.next(false); }

  confirmResponse$: Subject<boolean> = new Subject

  confirmNo() {
    this.confirmResponse$.next(false);
    this.closeConfirmDialog();
  }

  confirmYes() {
    this.confirmResponse$.next(false);
    this.closeConfirmDialog();
  }

  confirmDismiss() {
    this.confirmResponse$.next(false);
    this.closeConfirmDialog();
  }

}
