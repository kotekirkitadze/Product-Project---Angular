import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";

import { Item } from "../models/item"
// AngularFireStoreDocument - represents single documents



@Injectable()
export class ItemService {
  itemsCollection: AngularFirestoreCollection<Item>;

  constructor(public afs: AngularFirestore) { }
}
