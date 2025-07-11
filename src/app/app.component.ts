import { Component, inject } from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  RouterOutlet,
} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'uaegroupProject';
  isLoading: boolean = true;

  private router = inject(Router);
  translateService = inject(TranslateService);

  ngOnInit() {
    this.translateService.setDefaultLang('ar');

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      }

      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.waitForMediaToPlay().then(() => {
          this.isLoading = false;
        });
      }
    });
  }

  private waitForMediaToPlay(): Promise<void> {
    return new Promise((resolve) => {
      const images = Array.from(document.querySelectorAll('img')) as HTMLImageElement[];
      const videos = Array.from(document.querySelectorAll('video')) as HTMLVideoElement[];

      const total = images.length + videos.length;
      let completed = 0;

      const checkDone = () => {
        completed++;
        if (completed >= total) {
          resolve();
        }
      };

      if (total === 0) {
        resolve();
        return;
      }

      // Handle images
      images.forEach((img) => {
        if (img.complete) {
          checkDone();
        } else {
          img.onload = img.onerror = checkDone;
        }
      });

      // Handle videos
      videos.forEach((video) => {
        const onPlay = () => {
          video.removeEventListener('play', onPlay);
          checkDone();
        };

        if (!video.paused && !video.ended) {
          checkDone();
        } else {
          video.addEventListener('play', onPlay);

          // Try to force autoplay
          const playPromise = video.play();
          if (playPromise && typeof playPromise.then === 'function') {
            playPromise.catch(() => {
              // Autoplay blocked — wait for user interaction
            });
          }
        }
      });

      // Fallback timeout in case media fails
      setTimeout(() => resolve(), 15000); // 15 seconds max wait
    });
  }
}
