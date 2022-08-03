import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customers';
import { CustomersService } from 'src/app/services/customers/customers.service';

@Component({
  selector: 'app-update-customers',
  templateUrl: './update-customers.component.html',
  styleUrls: ['./update-customers.component.css']
})
export class UpdateCustomersComponent implements OnInit {

  customerForm!:  FormGroup;
  customer!: Customer;
  
  

  constructor(private formBuilder:FormBuilder,private activatedRoute:ActivatedRoute,
    private customerService:CustomersService,private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getCustomerIdFromRoute();
  }

  createCustomerForm(): void{
    this.customerForm  = this.formBuilder.group({
      // id:[this.customer.id,Validators.required],
      companyName: [this.customer?.companyName || '', Validators.required],
      contactName: [this.customer?.contactName || '', Validators.required],
      contactTitle: [this.customer?.contactTitle || '', Validators.required],
      street: [this.customer?.street || '', Validators.required],
      city: [this.customer?.city || '', Validators.required],
      region: [this.customer?.region || '', Validators.required],
      postalCode: [this.customer?.postalCode || '', Validators.required],
      country: [this.customer?.country || '', Validators.required],
      phone: [this.customer?.phone || '', Validators.required],
      customerKey: [this.customer?.customerKey || '', Validators.required],

    })
  }

  getCustomerIdFromRoute(){
    this.activatedRoute.params.subscribe((param) => {
      if(param['id']) this.getCustomerById(param['id']);
        // this.chooseId = param['id'];
      else{
        this.createCustomerForm();

      }
    });
  }


  // route params
  getCustomerById(id:number){
    console.log("getcustomerbyid çalıştı");
    this.customerService.getCustomerById(id).subscribe((c) =>{
      this.customer = c;
      this.createCustomerForm();
    });
  }


  save(){
    if(this.customer){
      this.updateList();
    } 
    else{
      this.addCustomer();
    }
  }

  updateList(){
    if(!this.customerForm.valid){
      alert("There are still empty fields, please fill in all required fields!!");
      return;
    }
    const customer: Customer = Object.assign({id: this.customer.id}, this.customerForm.value);
    console.log("🚀 ~ file: update-customers.component.ts ~ line 67 ~ UpdateCustomersComponent ~ updateList ~ customer", customer)
    // return
    
    this.customerService.updateList(customer).subscribe(() => {
      setTimeout(() => {
        this.router.navigateByUrl("/dashboard-customers/customers");
        this.toastr.success("Customer Update!!", "Update");
      }, 1000);
    });
  }


  addCustomer(){
    if (!this.customerForm.valid) {
      this.toastr.warning("please fill in the required fields!", "Empty Fields")
      return;
    }
  
    const customer:Customer = {
      ...this.customerForm.value,
    }
  
    this.customerService.addCustomer(customer).subscribe(response =>{
      setTimeout(() => {
        this.toastr.success("Customer succesfully add!","Add")
        this.router.navigateByUrl("/dashboard-customers/customers");
      }, 1000);
    })
  }
  



}


