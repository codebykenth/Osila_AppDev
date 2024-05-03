import { Timestamp } from "firebase/firestore";

export class Customer {
    id: string = "";
    cust_name: string = "";
    cust_contact: number = 0;
    cust_address: any = "";
    // cust_payment: any;
    cust_gender: [] = []
    isVerified: boolean = false;
    date_created: Timestamp = Timestamp.now();
}

export interface iCustomer {
    id: string,
    cust_name: string,
    cust_contact: number,
    cust_address: any,
    cust_gender: [],
    isVerified: boolean,
    date_created: Timestamp
}