export class Product {
    id: string = "";
    prod_name: string = "";
    prod_price: number = 0;
    prod_qty: number = 0;
    prod_color: string = "";
    prod_isAvailable: boolean = false;
}

export interface iProduct {
    id: string,
    prod_name: string,
    prod_price: number,
    prod_qty: number,
    prod_color: string,
    prod_isAvailable: boolean
}