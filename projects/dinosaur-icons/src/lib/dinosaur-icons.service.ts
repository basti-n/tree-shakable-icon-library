import { Injectable } from '@angular/core';
import { icons } from './icons/icons';

@Injectable({
  providedIn: 'root',
})
export class DinosaurIconsService {
  constructor() {}

  get(iconName: string) {
    return icons[iconName] || null;
  }
}
