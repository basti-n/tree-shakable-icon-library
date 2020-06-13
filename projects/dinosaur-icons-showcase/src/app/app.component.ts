import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DinosaurIconRegistry } from 'projects/dinosaur-icons/src/lib/dinosaur-icon-registry';
import {
  chefIcon,
  painterIcon,
  bodybuilderIcon,
} from 'projects/dinosaur-icons/src/lib/icons/icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'Rawrsome';

  constructor(private iconRegistry: DinosaurIconRegistry) {
    this.iconRegistry.register([chefIcon, painterIcon, bodybuilderIcon]);
  }
}
