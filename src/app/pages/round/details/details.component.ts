import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  public buildRound: Array<{ name: string; value: string | number }> = [];

  constructor(
    private route: ActivatedRoute,
    private rS: RoundService,
    private router: Router
  ) {}

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
    this.buildRound = [
      { name: 'Runden Name', value: this.round?.name as string },
      { name: 'Spielleiter', value: this.round?.gm as string },
      { name: 'Setting', value: this.round?.setting as string },
      { name: 'Regelwerk', value: this.round?.ruleset as string },
      { name: 'maximale Spieler', value: this.round?.max_pl as number },
      {
        name: 'maximale OnlineAnmeldung',
        value: this.round?.max_online_pl as number,
      },
      { name: 'Teilnehmer', value: this.round?.players?.toString() as string },
      {
        name: 'Vorgefertigte Charaktere',
        value: this.round?.own_char ? 'Nein' : 'Ja',
      },
      { name: 'Rundenbeschreibung', value: this.round?.dec as string },
    ];
  }

  deselectRound(): void {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }
}
