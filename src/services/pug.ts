export class PugService {
  public pugSize: number;
  public puggers: string[];

  public teamNsf: string[];
  public teamJinrai: string[];

  constructor() {
    this.pugSize = 10;
    this.puggers = [];
    this.teamNsf = [];
    this.teamJinrai = [];
  }

  public addPugger(pugger: string) {
    if (this.puggers.length < 10) {
      this.puggers.push(pugger);
    }
  }

  public removePugger(pugger: string) {
    this.puggers = this.puggers.filter((p: string) => p === pugger);
  }

  public scrambleTeams() {
    if (this.puggers.length == this.pugSize) {
      this.generateRandomTeams();
    }
  }

  private generateRandomTeams() {
    const puggersBackup: string[] = this.puggers;
    this.teamJinrai = [];
    this.teamNsf = [];
    let assignToNsf = true;

    while (this.puggers.length !== 0) {
      const index = Math.floor(Math.random() * this.puggers.length);

      if (assignToNsf) {
        this.teamNsf.push(this.puggers[index]);
      } else {
        this.teamJinrai.push(this.puggers[index]);
      }

      this.puggers.splice(index, 1);
      assignToNsf = !assignToNsf;
    }

    this.puggers = puggersBackup;
  }
}
