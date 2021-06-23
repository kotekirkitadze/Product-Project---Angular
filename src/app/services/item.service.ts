import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Item } from "../models/item"
// AngularFireStoreDocument - represents single documents



@Injectable()
export class ItemService {
  // angfirestorecoll is for collection adn gives 
  // access to methods
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  //this is for deleting item
  itemDoc: AngularFirestoreDocument<Item>;

  constructor(public afs: AngularFirestore) { 
    //valueChanges returns our collection as observable
    //but valuchanges does not rerun id, later we get id by snapshot method
    // this.items = this.afs.collection('items').valueChanges();

    //second callback function for ordering by title in ascending order
    this.itemsCollection = this.afs.collection("items",
                ref => ref.orderBy('title', 'asc'));

    this.items = this.itemsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a =>{
        const data = a.payload.doc.data() as Item;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }


  getItems(){
    return this.items;
  }

  addItem(item: Item){
    this.itemsCollection.add(item);
  }

  deleteItemCollection(item: Item){
    this.itemDoc = this.afs.doc(`items/${item.id}`);
    this.itemDoc.delete();
  }
}
