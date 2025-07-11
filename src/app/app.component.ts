import { Component, inject, OnInit } from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  RouterOutlet
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
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isLoading: boolean = true;

  private router = inject(Router);
  private translateService = inject(TranslateService);

  ngOnInit(): void {
    this.translateService.setDefaultLang('ar');

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      }

      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.handleLoading();
      }
    });

    // Run initially on first load (in case no route event happens)
    this.handleLoading();
  }

  private async handleLoading(): Promise<void> {
    const tenSecondsPassed = new Promise(resolve => setTimeout(resolve, 10000));
    const mediaLoaded = this.waitForMediaToRender();

    // Wait for both 10s and media to finish
    await Promise.all([tenSecondsPassed, mediaLoaded]);

    this.isLoading = false;
  }

  private waitForMediaToRender(): Promise<void> {
    return new Promise(resolve => {
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

      // Wait for images
      images.forEach(img => {
        if (img.complete) {
          checkDone();
        } else {
          img.onload = img.onerror = checkDone;
        }
      });

      // Wait for videos to play
      videos.forEach(video => {
        const onPlaying = () => {
          video.removeEventListener('playing', onPlaying);
          checkDone();
        };

        if (!video.paused && !video.ended && video.readyState >= 2) {
          checkDone(); // Already playing
        } else {
          video.addEventListener('playing', onPlaying);

          // Try autoplay
          const playPromise = video.play();
          if (playPromise && typeof playPromise.then === 'function') {
            playPromise.catch(() => {
              // autoplay blocked
            });
          }
        }
      });

      // Fallback: max 15s for media in case it never plays
      setTimeout(() => {
        resolve();
      }, 15000);
    });
  }
}
