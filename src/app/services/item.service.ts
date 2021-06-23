import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { Observable } from 'rxjs';

import { Item } from "../models/item"
// AngularFireStoreDocument - represents single documents



@Injectable()
export class ItemService {
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  constructor(public afs: AngularFirestore) { 
    //valueChanges returns our collection as observable
    //but valuchanges does nt rerun id, later we get id by snapshot method
    this.items = this.afs.collection('items').valueChanges();
  }


  getItems(){
    return this.items;
  }
}
