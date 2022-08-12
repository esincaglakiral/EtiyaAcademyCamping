import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../../models/services-model';
import { ServiceService } from '../../services/service.service';
import { MessageService } from 'primeng/api';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-services-update',
  templateUrl: './services-update.component.html',
  styleUrls: ['./services-update.component.css']
})
export class ServicesUpdateComponent implements OnInit {

  serviceUpdate!: FormGroup;
  service!: Service;
  constructor(
    private formBuilder:FormBuilder,
    private activatedRoute:ActivatedRoute,
    private servicesService:ServiceService,
    private router:Router, 
    private messageService:MessageService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.getProductsIdRoute();
  }

  getProductsIdRoute(){
    this.activatedRoute.params.subscribe((param) => {
      if (param['id']) this.getServicesById(param['id']);
      else{
        this.newCreateServiceForm();
      };
    });
  }

  newCreateServiceForm(): void{
    this.serviceUpdate = this.formBuilder.group({
      name: [this.service?.name  || '',Validators.required]
    })   
  }

  
  getServicesById(id:number) {
    this.servicesService.getById(id).subscribe((d) => {
      this.service = d;
      this.newCreateServiceForm();
    });
  }

  saveAll(){
    if(this.service) this.updateServices();
    else{
      this.addNewService();
    }
  }

  addNewService() {
    if(!this.serviceUpdate.valid){
      this.toastr.warning("please fill in the required fields!", "Empty Fields")
      return;
    }
    const service:Service = {
      ...this.serviceUpdate.value,
    }

    this.servicesService.addService(service).subscribe(response  =>{
      setTimeout(() => {
        this.toastr.success("New service succesfully add!","Add")
        this.router.navigateByUrl("/services");
      }, 1000);
    })
  }


  updateServices() {
      const service:Service = Object.assign({id:this.service.id}, this.serviceUpdate.value); 
      this.servicesService.updateService(service).subscribe(() => {
        setTimeout(() => {
          this.router.navigateByUrl("/services");
          this.messageService.add({severity:'success', summary:'Update', detail:'Service succesfully updated!'});
        }, 1000);
      });
  }

}
