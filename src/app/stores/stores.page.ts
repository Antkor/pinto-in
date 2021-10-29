import { Component, OnInit } from '@angular/core';
import { getUserLocation, applyHaversine } from '../common/utils';
import { storeData } from '../common/data/storeData';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.page.html',
  styleUrls: ['./stores.page.scss'],
})
export class StoresPage implements OnInit {
  public stores = [];

  constructor() { }

  ngOnInit() {
    getUserLocation().then(location => {
      const storeDataWithDistance = applyHaversine(
        storeData,
        location.lat,
        location.long
      );

      const sortedStoreData = storeDataWithDistance.sort(
        (locationA, locationB) => locationA.distance - locationB.distance
      );

      this.stores = sortedStoreData;
    });
  }
}
