import { Component } from '@angular/core';
import * as CS from '../cosmos-service';
import * as Model from '../../models/todoItem';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  service: CS.CosmosService;
  public things: Model.Todo[];
  constructor() {
    this.service = CS.CosmosService.getInstance();
    this.onRefresh();
  }

  async onRefresh() {

    // Design time data
    // this.things = [
    //   { description: "Buy milk", completed: false, userId: "pvc" },
    //   { description: "Paint garage", completed: true, userId: "pvc" }
    // ];

    //TODO: uncomment this to hook with cosmos
    this.things = await this.service.listCollections();
  }
}
