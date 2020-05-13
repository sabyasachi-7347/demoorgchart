import { Component, OnInit } from '@angular/core';
import {ModalController,NavParams} from '@ionic/angular';
@Component({
  selector: 'app-pagemodal',
  templateUrl: './pagemodal.page.html',
  styleUrls: ['./pagemodal.page.scss'],
})
export class PagemodalPage implements OnInit {
  demodata: any;
  data: any;
  dataToSend: any;

  constructor( private modalController: ModalController,
    private navParams: NavParams) { }

  ngOnInit() {
    console.table(this.navParams);
    this.demodata = this.navParams.data.paramID;
    // this.modalTitle = this.navParams.data.paramTitle;
  }
takeData(){
  this.demodata = "";
}
async sendData(){
 this.dataToSend = this.data;
 await this.modalController.dismiss(this.dataToSend);
}
}
