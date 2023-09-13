import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = $localize`secure-id-localize`;
  value = window.location.href.includes('ar-AE') ? 'ar' : 'en';

  onChange(event: any) {
    let value = 'en-US';
    if (event.target.value === 'ar') {
      value = 'ar-AE';
    }

    window.open(`${location.origin}/${value}/`, '_self');
  }
}
