import { DioAccount } from "./DioAccount";

export class PersonAccount extends DioAccount {
    doc_id: string;
  
    constructor(doc_id: string, name: string, accountNumber: string) {
      super(name, accountNumber);
      this.doc_id = doc_id;
    }
  }