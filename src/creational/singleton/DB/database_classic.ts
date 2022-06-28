interface User {
  name: string;
  age: number;
}

export class database_classic {
  private static _instance?: database_classic | null = null;
  private users?: User[];

  private constructor() {
    this.users = [];
  }

  public static getInstance() {
    if (this._instance === null) {
      this._instance = new database_classic();
    }
    return this._instance;
  }

  add(user: User) {
    this.users?.push(user);
  }

  remove(index: number) {
    this.users?.splice(index, 1); // Remove 1 usuário a partir do índice
  }

  show(): void {
    if (this.users != null) {
      for (const user of this.users) {
        console.log(user);
      }
    }
  }
}
