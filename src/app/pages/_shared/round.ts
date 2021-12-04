export class Round {
  id?: number;
  block_id: number;
  name?: string;
  setting?: string;
  ruleset?: string;
  des?: string;
  table_num?: number;
  own_char?: boolean;
  max_online_pl?: number;
  max_pl?: number;
  gm?: string;
  players?: string[];

  constructor(blockId: number) {
    this.block_id = blockId;
  }
}
