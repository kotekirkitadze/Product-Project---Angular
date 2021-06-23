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
    this.itemService.deleteItemCollection(item);
  }

}
