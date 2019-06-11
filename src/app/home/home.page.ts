import { Component } from '@angular/core';
import * as CS from '../cosmos-service';
import * as Model from '../../models/todoItem';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  service: CS.CosmosService;
  public things: Model.Todo[];
  constructor() {
    this.service = new CS.CosmosService();
  }

  async onRefresh() {
    this.things = await this.service.listCollections();
  }

  onNewItem() {

  }
}
