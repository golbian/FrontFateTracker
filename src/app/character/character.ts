import { Spell } from "./spell.dto";

export interface Character {
    _id?: string;
    name: string;
    avatar?: string;
    isServant: boolean;
    prana: number;
    pa: number;
    hp: number;
    spells: Spell[];
  }