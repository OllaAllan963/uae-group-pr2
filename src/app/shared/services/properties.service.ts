import { Injectable } from '@angular/core';
import { Property } from '../../app.component.models';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  constructor() { }

  properties: Array<Property> = [
    {
      id: 1,
      name: 'Apartments',
      nameAr: 'شقق سكنيّة',
      price: '1.3',
      image: 'assets/images/properties/img4.jpg'
    },
    {
      id: 2,
      name: 'Houses',
      nameAr: 'بيوت سكنيّة',
      price: '1.3',
      image: 'assets/images/properties/img5.jpg'
    },
    {
      id: 3,
      name: 'Townhouses',
      nameAr: 'منازل',
      price: '1.3',
      image: 'assets/images/properties/img6.jpg'
    },
    {
      id: 4,
      name: 'Villas',
      nameAr: 'فلل',
      price: '1.3',
      image: 'assets/images/properties/img7.jpg'
    },
    {
      id: 5,
      name: 'Offices',
      nameAr: 'مكاتب',
      price: '1.3',
      image: 'assets/images/properties/img8.jpg'
    },
    {
      id: 6,
      name: 'Playgrounds',
      nameAr: 'ملاعب',
      price: '1.3',
      image: 'assets/images/properties/img9.jpg'
    },
    {
      id: 7,
      name: 'Warehouses',
      nameAr: 'مستوعات',
      price: '1.3',
      image: 'assets/images/properties/img10.jpg'
    },
    {
      id: 8,
      name: 'Restaurants',
      nameAr: 'مطاعم',
      price: '1.3',
      image: 'assets/images/properties/img11.jpg'
    },
    {
      id: 9,
      name: 'Hotels',
      nameAr: 'فنادق',
      price: '1.3',
      image: 'assets/images/properties/img12.jpg'
    },
    {
      id: 10,
      name: 'Whole Buildings',
      nameAr: 'أبنية كاملة',
      price: '1.3',
      image: 'assets/images/properties/img13.jpg'
    },
    {
      id: 11,
      name: 'Compounds',
      nameAr: 'مجمعات',
      price: '1.3',
      image: 'assets/images/properties/img14.jpg'
    },
    {
      id: 12,
      name: 'Lands',
      nameAr: 'أراضي',
      price: '1.3',
      image: 'assets/images/properties/img15.jpg'
    }
  ];

  getProperties(): Array<Property> {
    return this.properties
  }
}
