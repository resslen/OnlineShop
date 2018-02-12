import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-not-found',
    template: '<div *ngIf="visible">\n' +
    '<h1 class="text-center font-weight-bold" style="font-size: 100px">404</h1>\n' +
    '<h1 class="text-center font-weight-bold" style="font-size: 100px">NOT</h1>\n' +
    '<h1 class="text-center font-weight-bold" style="font-size: 100px">FOUND</h1>\n' +
    '</div>'

})

export class NotFoundComponent {
    @Input() visible: boolean;
}
