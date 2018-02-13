import {Component, Input, OnChanges} from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['star.component.css']
})
export class StarComponent implements OnChanges {
    starWidth: number;
    @Input() starRating: number;

    ngOnChanges(): void {
        this.starWidth = this.starRating * 100 / 5;
    }
}
