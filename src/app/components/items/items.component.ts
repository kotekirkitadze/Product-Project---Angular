import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Item } from "../../models/item"


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[];
  editState: boolean = false;
  itemToEdit: Item;

  //constructor mostly is used for injecting
  constructor(private itemService: ItemService) { }

  //ngOnitin is used mostly for initialization
  ngOnInit(): void {
    this.itemService.getItems().subscribe((items)=> {
      // console.log(items);
      
      //items are fetched as array of objects
      this.items = items;
    });
  }

  deleteItem(event, item){
    //state imitom unda gamovidzaxot, washlis mere
    //state rom gavaqrot da zed gamodzaxebuli funqciebi erorshi
    //ar gamovidesa an itemToEditze ar sherches washlili mnishvneloba
    this.clearState(); 
    this.itemService.deleteItemCollection(item);
  }

  editItem(event, item: Item){
    this.editState = true;
    this.itemToEdit = item;
  }

  updateItem(item: Item){
    this.itemService.updateItem(item);
    this.clearState();
  }

  clearState() {
    this.editState = false;
    this.itemToEdit = null;
  }
}
