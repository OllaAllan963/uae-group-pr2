import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TranslateService } from '@ngx-translate/core';
import { SharedModule } from './shared/shared.module';
import { LoadingComponent } from './shared/components/loading/loading.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'uaegroupProject';

  translateService = inject(TranslateService);

  ngOnInit() {
    this.translateService.setDefaultLang('ar');
  }

  isLoading: boolean = true;

  ngAfterViewInit() {
    this.waitForMediaToLoad().then(() => {
      this.isLoading = false;
      console.log( this.isLoading)
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