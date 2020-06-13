import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { DinosaurIconsService } from './dinosaur-icons.service';

@Component({
  selector: 'lib-dinosaur-icons',
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host::ng-deep svg {
        height: 100px;
        width: 100px;
        display: inline-block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DinosaurIconsComponent implements OnInit {
  @Input() name: string;

  constructor(
    private dinosaurService: DinosaurIconsService,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    this.elementRef.nativeElement.innerHTML = this.dinosaurService.get(
      this.name
    );
  }
}
