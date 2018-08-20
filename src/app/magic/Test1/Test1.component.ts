import {
    Component
} from '@angular/core';
import {
    TaskBaseMagicComponent,
    magicProviders
} from "@magic-xpa/angular";
@Component({
    selector: 'mga-Test1',
    providers: [...magicProviders],
    styleUrls: ['./Test1.component.css'],
    templateUrl: './Test1.component.html'
}) export class Test1 extends TaskBaseMagicComponent {}