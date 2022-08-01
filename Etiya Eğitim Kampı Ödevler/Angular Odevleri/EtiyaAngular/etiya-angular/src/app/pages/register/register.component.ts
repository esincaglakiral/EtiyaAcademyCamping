import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customers';
import { CustomersService } from 'src/app/services/customers/customers.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;  //state
  // companyName = new FormControl('', Validators.required);

  constructor(private formBuilder: FormBuilder, private customerService: CustomersService) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }
  createRegisterForm(): void{
    this.registerForm = this.formBuilder.group(
      {
          companyName: [
            '', //default değer
            // Validators.required  -> bu alan gerekli demek 
            [Validators.required, Validators.minLength(2)]
          ],
          contactName: ['', //default değer
          [Validators.required, Validators.minLength(2)] //bu alan gerekli (doğrulama)

        ],
        contactTitle: ['', //default değer
          [Validators.required, Validators.minLength(2)] //bu alan gerekli (doğrulama)

        ],
        street: ['', //default değer
          [Validators.required, Validators.minLength(2)] //bu alan gerekli (doğrulama)

        ],
        city: ['', //default değer
          [Validators.required, Validators.minLength(2)] //bu alan gerekli (doğrulama)

        ],
        region: ['', //default değer
          [Validators.required, Validators.minLength(2)] //bu alan gerekli (doğrulama)

        ],
        postalCode: ['', //default değer
          [Validators.required, Validators.minLength(2)] //bu alan gerekli (doğrulama)

        ],
        country: ['', //default değer
          [Validators.required, Validators.minLength(2)] //bu alan gerekli (doğrulama)

        ],
        phone: ['', //default değer
          [Validators.required, Validators.minLength(2)] //bu alan gerekli (doğrulama)

        ],
        customerKey: ['', //default değer
          [Validators.required, Validators.minLength(2)] //bu alan gerekli (doğrulama)

        ]
        
      }
    );
  }

register(): void
{
  if(this.registerForm.invalid){
    //veya --> !this.registerForm.valid diyebiliriz. Bu geçersiz anlamına gelir

    console.warn("Gerekli alanları doldurunuz!!");
    return;
  }

  const customer: Customer = {
    ...this.registerForm.value,
    city: this.registerForm.value.city.toUpperCase()

  };

  this.customerService.addCustomer(customer).subscribe(response =>{
    console.info(response);
    setTimeout(() => {
      location.reload();
      location.href="/dashboard-customers"
      alert("Customer added!")
    }, 1000);
  });
  // console.log(this.registerForm.value);
}
}
