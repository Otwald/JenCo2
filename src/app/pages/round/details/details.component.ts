import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Round } from '../../_shared/round';
import { RoundService } from '../_services/round.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  public roundId: number = 0;
  public rounds?: any;
  public round?: Round;

  constructor(private route: ActivatedRoute, private rS: RoundService) {}

  ngOnInit(): void {
    this.roundId = Number(this.route.snapshot.paramMap.get('id'));
    this.rounds = this.rS.getRoundJson();
    if (this.rounds) {
      Object.keys(this.rounds).forEach((index) => {
        this.rounds[index].map((data: any) => {
          if (Number(data.id) === this.roundId) {
            this.round = data;
          }
        });
      });
    }
  }
}
