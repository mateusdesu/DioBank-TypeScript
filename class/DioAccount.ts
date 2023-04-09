export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: string;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: string) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  };

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.setBalance(value);
      console.log(
        `Depósito efetuado com sucesso. Saldo atual: R$${this.balance} `
      );
    } else {
      console.log("Depósito não efetuado, conta inativa.");
    }
  };

  withdraw = (value: number): void => {
    if (this.validateStatus()) {
      if (value <= this.balance) {
        this.balance -= value;
        console.log(
          `Saque efetuado com sucesso. Saldo atual: R$${this.balance} `
        );
      } else {
        console.log("Saque não efetuado, saldo insuficiente.");
      }
    } else {
      console.log("Conta inativa.");
    }
  };

  getBalance = (): void => {
    console.log(`Saldo atual: R$${this.balance}`);
  };

  setBalance = (value: number): void => {
    this.balance += value;
  };

  returnBalance = (): number => {
    return this.balance;
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inativa.");
  };
}
