// Dio Banking
import { PersonAccount } from "./class/PersonAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { NewAccount } from "./class/NewAccount";

const personAccount: PersonAccount = new PersonAccount("123456", "Mateus Lopes", "1");
personAccount.deposit(100);
personAccount.withdraw(20);

const companyAccount: CompanyAccount = new CompanyAccount("Mateus Lopes", "1");
companyAccount.getLoan(100);

const newAccount: NewAccount = new NewAccount("Mateus Lopes", "1");
newAccount.deposit(100);