import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';

interface IConfirmContent {
  title: string
  body: string
}

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }

  toastNotify(message: string, status: string) {
  }

  confirm(content: IConfirmContent, onYes: () => void, onNo: () => void) {
    this.confirmContent$.next(content);
    this.confirmDialogOpen$.next(true);
    const sub: Subscription = this.confirmResponse$.subscribe({
      next: response => {
        if (response == true) {
          onYes();
        }
        else if (response == false) {
          onNo();
        }
        sub.unsubscribe();
      }
    })
  }

  confirmContent$: Subject<IConfirmContent> = new Subject

  confirmDialogOpen$ : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)

  openConfirmDialog() { this.confirmDialogOpen$.next(true); }
  closeConfirmDialog() { this.confirmDialogOpen$.next(false); }

  confirmResponse$: Subject<boolean> = new Subject

  confirmNo() {
    this.confirmResponse$.next(false);
    this.closeConfirmDialog();
  }

  confirmYes() {
    this.confirmResponse$.next(true);
    this.closeConfirmDialog();
  }

  confirmDismiss() {
    this.confirmResponse$.next(false);
    this.closeConfirmDialog();
  }

}
