import { NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import * as AOS from 'aos';
import { SharedModule } from '../../shared/shared.module';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  //start variables
  mainColor: string = "#ec1c23"
  languageService = inject(LanguageService);
  currentLang: string = "ar"
  backgroundImage: string = 'assets/images/about-us.jpg';
  //end variables

  ngAfterViewInit(): void {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
    });
  }

  ngOnInit(): void {
    this.languageService.lang$.subscribe(lang => {
      this.currentLang = lang
    });
  }
}
