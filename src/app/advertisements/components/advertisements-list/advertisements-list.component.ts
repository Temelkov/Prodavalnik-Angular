import { Component, OnInit } from '@angular/core';
import { Advertisement } from '../../models/advertisement.model';
import { AdvertisementsService } from '../../services/advertisements.service';

@Component({
  selector: 'app-advertisements-list',
  templateUrl: './advertisements-list.component.html',
  styleUrls: ['./advertisements-list.component.scss']
})
export class AdvertisementsListComponent implements OnInit {

  advertisements!: Advertisement[];

  constructor(private advertisementsService: AdvertisementsService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll(): void {
    this.advertisementsService.getAll$().subscribe({
      next: (response) => {
        this.advertisements = response;
      }
    })
  }

}
