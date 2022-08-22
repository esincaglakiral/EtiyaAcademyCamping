export interface Customer{
  id:number;
  customerId:number;
  firstName:string;
  middleName:string;
  lastName:string;
  birthDate:string;
  gender:string;
  nationalityId:number;
  role:string;
  motherName:string;
  fatherName:string;
  addresses: Array<Address>;
  contactMedium :ContactMedium;
  billingAccounts: Array<BillingAccount>;
}


export interface Address{
  id:number;
  city: City
  street:string;
  flatNumber:number;
  description:string;
}

export interface City{
  id:number;
  name:string;
}

export interface ContactMedium{
  email: string,
  homePhone: string,
  mobilePhone: string,
  fax: string,
}

export interface BillingAccount{
  id:number;
  accountNumber:string;
  accountName:string;
  description:string;
  status: boolean;
  addresses: Array<Address>;
  orders: Array<Order>;

}

export interface Order{
  id:number;
  offers: Array<Offer>;
}

export interface Offer{
  id:number;
  type: Type;
  name: string;
  products: Array<Product>;
}

export interface Type{
  id:number;
  typeName: string;
  name: string;
}

export interface Product{
  id:number;
  name: string;
  description: string;
  amount: number;
}

