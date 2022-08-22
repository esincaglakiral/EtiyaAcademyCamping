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

}



// [
//   {
//     "id": 1,
//     "customerId": 1,
//     "firstName": "Prudi",
//     "middleName": "Meta",
//     "lastName": "Gronw",
//     "birthDate": "4/15/1998",
//     "gender": "Female",
//     "nationalityId": 48776304564,
//     "role": "cooperative",
//     "motherName": "Hanna",
//     "fatherName": "Chris",
//   }
// ]

//   "addresses": [
//     {
//       "id": 1,
//       "city": {
//         "id": 1,
//         "name": "New York"
//       },
//       "street": "Granby",
//       "flatNumber": 6,
//       "description": "6128 Jay Alley"
//     },
//     {
//       "id": 2,
//       "city": {
//         "id": 1,
//         "name": "New York"
//       },
//       "street": "Oak Valley",
//       "flatNumber": 18,
//       "description": "68 Hudson Street"
//     }
//   ],


//   "contactMedium": {
//     "email": "cgronw0@imgur.com",
//     "homePhone": "391 151 6866",
//     "mobilePhone": "+420 139 504 9728",
//     "fax": "424-325-3276"
//   },
//   "billingAccounts": [
//     {
//       "id": 1,
//       "accountNumber": "5701683834",
//       "accountName": "luctus",
//       "description": "Pellentesque at nulla.",
//       "status": "active",
//       "addresses": [
//         {
//           "city": {
//             "id": 3,
//             "name": "Chicago"
//           },
//           "street": "Sachtjen",
//           "flatNumber": 13,
//           "description": "54381 Loeprich Plaza"
//         }
//       ],
//       "orders": [
//         {
//           "id": 1,
//           "offers": [
//             {
//               "id": 1,
//               "type": {
//                 "id": 4,
//                 "typeName": "campaign",
//                 "name": "New Customers"
//               },
//               "name": "32 Mbps ADSL Internet For New Customers",
//               "products": [
//                 {
//                   "id": 3,
//                   "name": "32 Mbps ADSL",
//                   "description ": "Duis ac nibh.",
//                   "amount": 57
//                 },
//                 {
//                   "id": 6,
//                   "name": "EtiMaster Data Modem",
//                   "description ": "Nunc nisl.",
//                   "amount": 50
//                 },
//                 {
//                   "id": 7,
//                   "name": "Activation",
//                   "description ": "Duis consequat dui nec nisi volutpat eleifend.",
//                   "amount": 30
//                 }
//               ]
//             }
//           ]
//         }
//       ]
//     },
