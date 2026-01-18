export interface Pokemon {
  name: string;
  url: string;
}


export interface Stat {
  base_stat:number,
  stat: {name:string}
}

export class BarChartStats {
  name: string;
  value: number;

  constructor(name: string, value: number) {
    this.name = name;
    this.value = value;
  }
}