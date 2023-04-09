import { DioAccount } from "./DioAccount";

export class NewAccount extends DioAccount {
    constructor(name: string, accountNumber: string) {
        super(name, accountNumber);
    }

    deposit = (valor: number): void => {
        if(this.validateStatus()) {
            this.setBalance(valor + 10);
            console.log(
                `Depósito efetuado com sucesso. Saldo atual: R$${this.returnBalance()} `
            );
        } else {
            console.log("Depósito não efetuado, conta inativa.");
        }
    }
}