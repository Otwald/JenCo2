import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Round } from '../../_shared/round';
import { Timeblock } from '../../_shared/timeblock';
import { RoundService } from '../_services/round.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  timeBlocks?: Timeblock[] = [];
  rounds?: { [key: string]: Round[] } = {};
  roundCount?: { [key: string]: number } = {};
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

  constructor(private fb: FormBuilder, private rS: RoundService) {}

  ngOnInit(): void {
    this.timeBlocks = this.rS.getTimeBlockJson();
    this.rounds = this.rS.getRoundJson();
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

  onSubmit() {
    this.rS.setRoundJson(this.roundForm.value as Round);
  }
}
