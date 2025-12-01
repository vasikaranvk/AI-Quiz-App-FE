import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="min-h-screen flex flex-col">
      <header class="border-b border-[var(--border)] bg-[var(--card-bg)]">
        <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div class="font-semibold text-lg text-[var(--text-main)]">
            AI Quiz Arena
          </div>
          <nav class="text-sm text-[var(--text-muted)]">
            <a routerLink="/" class="hover:underline">Quiz Master</a>
          </nav>
        </div>
      </header>
      <main class="flex-1">
        <router-outlet></router-outlet>
      </main>
      <footer class="border-t border-[var(--border)] text-center text-xs text-[var(--text-muted)] py-3 bg-[var(--card-bg)]">
        AI Quiz App &middot; Demo implementation
      </footer>
    </div>
  `,
  styles: [`
    .min-h-screen { min-height: 100vh; }
  `]
})
export class AppComponent { }
