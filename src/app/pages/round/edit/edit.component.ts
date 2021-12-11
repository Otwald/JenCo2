import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Round } from '../../_shared/round';
import { Timeblock } from '../../_shared/timeblock';
import { RoundService } from '../_services/round.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  @Output() editClose = new EventEmitter();
  timeBlocks?: Timeblock[] = [];
  rounds?: { [key: string]: Round[] } = {};
  roundCount?: { [key: string]: number } = {};
  public roundId: number = 0;
  public round?: Round;
  public buildRound: Array<{ name: string; value: string | number }> = [];
  public roundForm = this.fb.group({
    block_id: [0],
    name: [''],
    setting: [''],
    ruleset: [''],
    desc: [''],
    premade_char: [false],
    max_online_pl: [0],
    max_pl: [0],
  });
  public roundItems = [
    { name: 'Runden Name', value: 'name', type: 'text' },
    { name: 'Setting', value: 'setting', type: 'text' },
    { name: 'Regelwerk', value: 'ruleset', type: 'text' },
    { name: 'maximale Spieler', value: 'max_pl', type: 'number' },
    {
      name: 'maximale OnlineAnmeldung',
      value: 'max_online_pl',
      type: 'number',
    },
  ];
  public radioChar = [
    { name: 'Ja', value: true },
    { name: 'Nein', value: false },
  ];
  // TODO fill with response from API, Form = {name:timeBlock.name , value:timeBlock.id}
  public createBlockItems = [
    { name: 'Test1', value: 1 },
    { name: 'Test2', value: 2 },
    { name: 'Test3', value: 3 },
  ];

  constructor(
    private fb: FormBuilder,
    private rS: RoundService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.roundId = Number(this.route.snapshot.paramMap.get('id'));
    this.rounds = this.rS.getRoundJson();
    if (this.roundId) {
      if (this.rounds) {
        Object.keys(this.rounds).forEach((index) => {
          (this.rounds as { [key: string]: Round[] })[index].map(
            (data: any) => {
              if (Number(data.id) === this.roundId) {
                this.round = data;
              }
            }
          );
        });
      }
      this.roundForm.setValue({
        block_id: this.round?.block_id,
        name: this.round?.name,
        setting: this.round?.setting,
        ruleset: this.round?.ruleset,
        desc: this.round?.desc,
        premade_char: this.round?.premade_char,
        max_online_pl: this.round?.max_online_pl,
        max_pl: this.round?.max_pl,
      });
    }
  }

  ngOnInit(): void {
    this.timeBlocks = this.rS.getTimeBlockJson();
    this.roundCount = this.getRoundPBlockCount();
  }

  /**
   * //TODO desc
   * @returns
   */
  getRoundPBlockCount(): { [key: string]: number } {
    let out: { [key: string]: number } = {};
    Object.keys(this.rounds as Object).forEach((index) => {
      out[index] = (this.rounds as { [key: string]: Round[] })[index].length;
    });
    return out;
  }

  onCancel() {
    if (this.roundId) {
      this.router.navigate(['../../'], { relativeTo: this.route });
      return;
    }
    this.editClose.emit();
  }

  onSubmit() {
    if (!this.roundId) {
      this.rS.setRoundJson(this.roundForm.value as Round);
      this.editClose.emit();
      return;
    }
    (this.round as Round).block_id = this.roundForm.value['block_id'];
    (this.round as Round).name = this.roundForm.value['name'];
    (this.round as Round).setting = this.roundForm.value['setting'];
    (this.round as Round).ruleset = this.roundForm.value['ruleset'];
    (this.round as Round).premade_char = this.roundForm.value['premade_char'];
    (this.round as Round).max_online_pl = this.roundForm.value['max_online_pl'];
    (this.round as Round).max_pl = this.roundForm.value['max_pl'];
    this.rS.setRoundJson(this.round as Round);
    this.router.navigate(['../../'], { relativeTo: this.route });
  }
}
