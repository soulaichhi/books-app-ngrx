import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from './store/books.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffect } from './store/books.effect';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    StoreModule.forFeature('mybooks', booksReducer),
    EffectsModule.forFeature([BooksEffect]),
  ],
})
export class BooksModule {}
