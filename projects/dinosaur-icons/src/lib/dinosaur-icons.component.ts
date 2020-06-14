import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ChangeDetectionStrategy,
  Optional,
  Inject,
} from '@angular/core';
import { DinosaurIconRegistry } from './dinosaur-icon-registry';
import { DOCUMENT } from '@angular/common';

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
  @Input() set name(iconName: string) {
    if (this.svgIcon) {
      this.elementRef.nativeElement.removeChild(this.svgIcon);
    }

    const svgData = this.dinosaurRegistry.getIcon(iconName);
    this.svgIcon = this.createElementFromString(svgData);
    this.elementRef.nativeElement.appendChild(this.svgIcon);
  }

  private svgIcon: SVGElement;

  constructor(
    private dinosaurRegistry: DinosaurIconRegistry,
    private elementRef: ElementRef,
    @Optional() @Inject(DOCUMENT) private document: any
  ) {}

  ngOnInit() {}

  private createElementFromString(content: string): SVGElement {
    const div = this.document.createElement('div');
    div.innerHTML = content;

    return (
      div.querySelector('svg') ||
      this.document.createElementNS('http://www.w3.org/2000/svg', 'path')
    );
  }
}
