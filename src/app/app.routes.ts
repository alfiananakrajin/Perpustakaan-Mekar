import { Routes } from '@angular/router';
import { Beranda } from './beranda/beranda';
import { DaftarBuku } from './daftar-buku/daftar-buku';
import { Favorit } from './favorit/favorit';
import { Informasi } from './informasi/informasi';
import { Peminjaman } from './peminjaman/peminjaman';
import { Pengembalian } from './pengembalian/pengembalian';

export const routes: Routes = [
{ path: '', redirectTo: 'beranda', pathMatch: 'full' },
  { path: 'beranda', component: Beranda },
  { path: 'daftar buku', component: DaftarBuku },
  { path: 'favorit', component: Favorit },
  { path: 'peminjaman', component: Peminjaman },
  { path: 'pengembalian', component: Pengembalian },
  { path: 'informasi', component: Informasi },
];
