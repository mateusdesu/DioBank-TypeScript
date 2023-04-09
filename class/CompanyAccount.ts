import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: string) {
    super(name, accountNumber);
  }
  getLoan = (value: number): void => {
    if (this.validateStatus()) {
      this.setBalance(value);
      console.log(
        `Empréstimo efetuado com sucesso. Saldo atual: R$${this.returnBalance()}; `
      );
    }
    else{
      console.log("Empréstimo não efetuado, conta inativa.");
    }
  };
}
