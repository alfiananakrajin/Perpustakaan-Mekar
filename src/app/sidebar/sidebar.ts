import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  isSidebarCollapsed = input.required<boolean>();
  changeIsSidebarCollapsed = output<boolean>();
  items = [
    {
      routeLink: 'beranda',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10zm-2 2V9l8-6l8 6v12h-7v-6h-2v6zm8-8.75"/></svg>',
      label: 'Beranda',
    },
    {
      routeLink: 'daftar buku',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 12c2.5 0 4.5 2 4.5 4.5c0 .88-.25 1.71-.69 2.4l3.08 3.1L21 23.39l-3.12-3.07c-.69.43-1.51.68-2.38.68c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5m0 2a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5M13 4v8l-2.5-2.25L8 12V4H6v16h4c.54.81 1.23 1.5 2.03 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7.81c-.58-.55-1.25-1-2-1.31V4z"/></svg>',
      label: 'Daftar Buku',
    },
    {
      routeLink: 'favorit',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19 23.3l-.6-.5c-2-1.9-3.4-3.1-3.4-4.6c0-1.2 1-2.2 2.2-2.2c.7 0 1.4.3 1.8.8c.4-.5 1.1-.8 1.8-.8c1.2 0 2.2.9 2.2 2.2c0 1.5-1.4 2.7-3.4 4.6zM18 2c1.1 0 2 .9 2 2v9.08L19 13l-1 .08V4h-5v8l-2.5-2.25L8 12V4H6v16h7.08c.12.72.37 1.39.72 2H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2z"/></svg>',
      label: 'Favorit',
    },
    {
      routeLink: 'peminjaman',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6M8 3v9l3-3l3 3V3M8 3h6m0 0h4a2 2 0 0 1 2 2v7m-1 4v3m0 3v-3m0 0h3m-3 0h-3"/></svg>',
      label: 'Peminjaman',
    },
    {
      routeLink: 'pengembalian',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13.5 20c.31.75.76 1.42 1.32 2H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7.03c-.16-.03-.33-.03-.5-.03c-.5 0-1 .07-1.5.18V4h-5v8l-2.5-2.25L8 12V4H6v16zm5.5 0a2.5 2.5 0 0 1-2.5-2.5c0-.4.09-.78.26-1.12l-1.09-1.09c-.42.63-.67 1.39-.67 2.21c0 2.21 1.79 4 4 4V23l2.25-2.25L19 18.5zm0-6.5V12l-2.25 2.25L19 16.5V15a2.5 2.5 0 0 1 2.5 2.5c0 .4-.09.78-.26 1.12l1.09 1.09c.42-.63.67-1.39.67-2.21c0-2.21-1.79-4-4-4"/></svg>',
      label: 'Pengembalian',
    },
    {
      routeLink: 'informasi',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16 2H4c-1.1 0-2 .9-2 2v16a2 2 0 0 0 2 2h12c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2m0 18H4V4h2v8l2.5-2.25L11 12V4h5zm4-5h2v2h-2zm2-8v6h-2V7z"/></svg>',
      label: 'Informasi perpustakaan',
    },
  ];

  toggleCollapse(): void {
    this.changeIsSidebarCollapsed.emit(!this.isSidebarCollapsed());
  }

  closeSidenav(): void {
    this.changeIsSidebarCollapsed.emit(true);
  }
}