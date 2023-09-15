import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = $localize`secure-id-localize`;
  value = window.location.href.toLowerCase().includes('ar-ae') ? 'ar' : 'en';

  languages = [
    { code: 'en-US', label: 'English' },
    { code: 'ar-AE', label: 'Arabic' },
  ];

  onChange(event: any) {
    let value = 'en-US';
    if (event.target.value === 'ar') {
      value = 'ar-AE';
    }

    window.open(`${location.origin}/${value}/`, '_self');
  }

  constructor(@Inject(LOCALE_ID) protected localeId: string) {}
}
