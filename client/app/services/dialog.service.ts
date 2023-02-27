import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }

  confirmDialogOpen$ : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  openConfirmDialog() { this.confirmDialogOpen$.next(true); }
  closeConfirmDialog() { this.confirmDialogOpen$.next(false); }
}
