export class Round {
  id?: number;
  block_id: number;
  name?: string;
  setting?: string;
  ruleset?: string;
  desc?: string;
  table_num?: number;
  premade_char?: boolean;
  max_online_pl?: number;
  max_pl?: number;
  gm?: string;
  players?: string[];

  constructor(blockId: number) {
    this.block_id = blockId;
  }
}
