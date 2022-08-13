import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Service } from '../../models/services-model';
import { ServiceService } from '../../services/service.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css'],
  styles: [`
  :host ::ng-deep .p-dialog .product-image {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
  }
`],
})

export class ServicesListComponent implements OnInit {

  services!: Service[];
  firstList: number =1;
  finalList: number= 5;
  tempServices!: Service[];
  listOfAllServices:number[] = [];
  fetchStatus = 'loading';
  emptyArray:number[] = [1,2,3,4,5];


  constructor(
    private serviceService: ServiceService, 
    private router:Router, 
    private toastr: ToastrService,
    private messageService: MessageService, 
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.fetchStatus = 'loading';
    setTimeout(() => {

      this.serviceService.getList().subscribe(d => {
      this.tempServices = d;
      let allServicesDataCount = Math.ceil(d.length / 5);
      for (let i = 1; i <= allServicesDataCount; i++) {
        this.listOfAllServices.push(i)
      }   this.fullList(1);
      this.fetchStatus = 'loaded';

    },
    (error) => {this.fetchStatus = 'error';}
    );
    }, 1500);
  }

  fullList(i:number) {
    this.services =  this.tempServices.slice((i-1)*5, 5*i)
  }

  
  editServiceId(editService: Service): void{
    this.router.navigateByUrl(`service/${editService.id}`);
  }



 cancelService(id:number){
   this.confirmationService.confirm({
       message: 'Are you sure you want to delete this service?',
       accept: () => {
          this.serviceService.removeService(id).subscribe()
          this.toastr.success("Service successfuly delete!!", "Delete");
          this.getList();
           
       }
   });
}


}