import { NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SharedModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  mainColor: string = "#ec1c23"
  languageService = inject(LanguageService);
  currentLang: string = "ar"
  tel: number = +97142570022;
  Fax: number = +97142570033;
  Mod: number = +971508877990

  ngOnInit(): void {
    this.languageService.lang$.subscribe(lang => {
      this.currentLang = lang
    });
  }
}
