import { Injectable } from '@angular/core';
import { DinosaurIcon } from './defs';

@Injectable({
  providedIn: 'root',
})
export class DinosaurIconRegistry {
  private registry = new Map<string, string>();

  register(icons: DinosaurIcon[]): void {
    icons.forEach((icon) => this.registry.set(icon.name, icon.data));
  }

  getIcon(iconName: string): string | undefined {
    if (!this.registry.has(iconName)) {
      return `No icon found. You need to first register the ${iconName} by calling register before using it`;
    }

    return this.registry.get(iconName);
  }

  constructor() {}
}
