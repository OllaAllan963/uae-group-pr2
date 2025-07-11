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
  isFullLoading: boolean = true;    // Full screen loader on initial load
  isSectionLoading: boolean = false; // Inline loader on route navigation

  private router = inject(Router);
  private translateService = inject(TranslateService);

  private firstLoadDone = false;

  ngOnInit(): void {
    this.translateService.setDefaultLang('ar');

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.firstLoadDone) {
          // Show inline loader on navigation
          this.isSectionLoading = true;
        }
      }

      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        if (!this.firstLoadDone) {
          this.handleInitialLoading();
        } else {
          this.handleNavigationLoading();
        }
      }
    });

    // Run initial load loader at start
    this.handleInitialLoading();
  }

  private async handleInitialLoading(): Promise<void> {
    const wait5Seconds = new Promise(resolve => setTimeout(resolve, 5000));
    const waitMedia = this.waitForMediaToRender();

    await Promise.all([wait5Seconds, waitMedia]);

    this.isFullLoading = false;
    this.firstLoadDone = true;
  }

  private async handleNavigationLoading(): Promise<void> {
    const wait2Seconds = new Promise(resolve => setTimeout(resolve, 2000));
    const waitMedia = this.waitForMediaToRender();

    await Promise.all([wait2Seconds, waitMedia]);

    this.isSectionLoading = false;
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

      images.forEach(img => {
        if (img.complete) {
          checkDone();
        } else {
          img.onload = img.onerror = checkDone;
        }
      });

      videos.forEach(video => {
        const onPlaying = () => {
          video.removeEventListener('playing', onPlaying);
          checkDone();
        };

        if (!video.paused && !video.ended && video.readyState >= 2) {
          checkDone();
        } else {
          video.addEventListener('playing', onPlaying);
          const playPromise = video.play();
          if (playPromise && typeof playPromise.then === 'function') {
            playPromise.catch(() => { });
          }
        }
      });

      setTimeout(() => {
        resolve();
      }, 15000);
    });
  }
}
