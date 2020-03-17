import axe from '../resources/img/axe.jpg'
import bandsaw from '../resources/img/bandsaw.jpg'
import chisel from '../resources/img/chisel.jpg'
import hacksaw from '../resources/img/hacksaw.jpg'
import sledgehammer from '../resources/img/sledgehammer.jpg'

export interface Iproducts {
  id: string;
  thumbnail: string;
  name: string;
  unitPrice: number;
}

export const products = [
  {
    id: 'item-id-sledgehammer',
    thumbnail: sledgehammer,
    name: 'Sledgehammer',
    unitPrice: 125.76,
  },
  {
    id: 'item-id-axe',
    thumbnail: axe,
    name: 'Axe',
    unitPrice: 190.51,
  },
  {
    id: 'item-id-bandsaw',
    thumbnail: bandsaw,
    name: 'Bandsaw',
    unitPrice: 562.14,
  },
  {
    id: 'item-id-hacksaw',
    thumbnail: hacksaw,
    name: 'Hacksaw',
    unitPrice: 19.45,
  },
  {
    id: 'item-id-chisel',
    thumbnail: chisel,
    name: 'Chisel',
    unitPrice: 13.9,
  }

]
