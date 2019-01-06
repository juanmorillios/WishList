import { Injectable } from '@angular/core';
import { List } from '../models/list.model';
import { listeners } from 'cluster';


@Injectable()
export class WishlistService {

  list: List[] = [];

  constructor() {

    const list1 = new List('Tomorrow go to the cinema to see the movie of spiderman');
    const list2 = new List('GToday, the day of kings, ask for pizza');
    this.list.push(list1, list2);
    console.log(this.list);

  }

}
