import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MoreInfoComponent } from '../shared/more-info/more-info.component';
import { Tab1Page } from '../tab1/tab1.page';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;
  @Input() pokemons: any
  constructor(  private modalCtrl: ModalController) {

   }

  ngOnInit() {
  }

  async openModal(pokemon: any) {
    const modal = await this.modalCtrl.create({
      component: MoreInfoComponent,
      componentProps: {
        pokemon
      }
      
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();
  }
}
