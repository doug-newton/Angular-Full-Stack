import { Component, Input } from '@angular/core';
import { DialogService } from 'client/app/services/dialog.service';
import { combineLatest, map, Observable } from 'rxjs';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {

  constructor(
    private dialogService: DialogService
  ) { }

  open$: Observable<boolean> = this.dialogService.toastOpen$
  content$: Observable<any> = this.dialogService.toastContent$
  state$ = combineLatest([
    this.open$,
    this.content$
  ]).pipe(map(([open, content])=>({open, content})))
}
