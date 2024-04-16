import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesService } from '../core/services/recipes.service';
import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { from, of, catchError, map } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [
    CommonModule,
    DataViewModule,
    PanelModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    RatingModule,
    FormsModule,
  ],
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipesListComponent implements OnInit {
  recipes$ = this.service.recipes$;
  constructor(private service: RecipesService) {}

  ngOnInit() {
    const stream$ = from(['5', '10', '6', 'Hello', '2']);

    stream$
      .pipe(
        map((value) => {
          if (isNaN(value as never)) {
            throw new Error('This is not a number');
          }
          return parseInt(value);
        }),
        catchError((error) => {
          console.log('Caught Error', error);
          return of();
        })
      )
      .subscribe({
        next: (res) => console.log('Value Emitted', res),
        error: (err) => console.log('Error Occurred', err),
        complete: () => console.log('Stream Completed'),
      });
  }
}
