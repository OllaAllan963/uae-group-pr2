import { Component, inject } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isLoading: boolean = true;
  private router = inject(Router);
  translateService = inject(TranslateService);

  ngOnInit() {
    this.translateService.setDefaultLang('ar');

    // Listen to router events
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      }

      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        // Wait for images and videos to load on the new route
        this.waitForMediaToLoad().then(() => {
          this.isLoading = false;
        });
      }
    });
  }

  private waitForMediaToLoad(): Promise<void> {
    return new Promise(resolve => {
      const mediaElements = Array.from(document.querySelectorAll('img, video')) as (HTMLImageElement | HTMLVideoElement)[];
      let loadedCount = 0;

      const checkLoaded = () => {
        loadedCount++;
        if (loadedCount === mediaElements.length) {
          resolve();
        }
      };

      if (mediaElements.length === 0) {
        resolve();
        return;
      }

      mediaElements.forEach(el => {
        if (el.tagName === 'IMG') {
          const img = el as HTMLImageElement;
          if (img.complete) {
            checkLoaded();
          } else {
            img.onload = img.onerror = checkLoaded;
          }
        } else if (el.tagName === 'VIDEO') {
          const video = el as HTMLVideoElement;
          if (video.readyState >= 3) {
            checkLoaded();
          } else {
            video.onloadeddata = video.onerror = checkLoaded;
          }
        }
      });
    });
  }
}
