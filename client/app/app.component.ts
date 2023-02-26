import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ToastComponent } from './shared/toast/toast.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewChecked {

  constructor(public auth: AuthService,
              private changeDetector: ChangeDetectorRef,
              public toast: ToastComponent) { }

  // This fixes: https://github.com/DavideViolante/Angular-Full-Stack/issues/105
  ngAfterViewChecked(): void {
    this.changeDetector.detectChanges();
  }

}
