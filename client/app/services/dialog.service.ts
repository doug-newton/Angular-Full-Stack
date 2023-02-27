import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

interface IConfirmContent {
  title: string
  body: string
}

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }

  confirm(content: IConfirmContent): Observable<boolean> {
    this.confirmContent$.next(content);
    this.confirmDialogOpen$.next(true);
    return this.confirmResponse$
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
