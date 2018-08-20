import {
    Component
} from '@angular/core';
import {
    TaskBaseMagicComponent,
    magicProviders
} from "@magic-xpa/angular";
@Component({
    selector: 'mga-Test2',
    providers: [...magicProviders],
    styleUrls: ['./Test2.component.css'],
    templateUrl: './Test2.component.html'
}) export class Test2 extends TaskBaseMagicComponent {}