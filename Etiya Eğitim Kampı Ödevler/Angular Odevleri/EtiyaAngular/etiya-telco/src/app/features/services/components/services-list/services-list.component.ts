import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Service } from '../../models/services-model';
import { ServiceService } from '../../services/service.service';


@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})

export class ServicesListComponent implements OnInit {

  services!: Service[];
  firstList: number =1;
  finalList: number= 3;
  tempServices!: Service[];
  listOfAllServices:number[] = [];

  constructor(private serviceService: ServiceService, private router:Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.serviceService.getList().subscribe(d => {
      this.tempServices = d;
      let allServicesDataCount = Math.ceil(d.length / 5);
      for (let i = 1; i <= allServicesDataCount; i++) {
        this.listOfAllServices.push(i)
      }
      this.fullList(1);
    });
  }

  fullList(i:number) {
    this.services =  this.tempServices.slice((i-1)*5, 5*i)
  }

  
  editServiceId(editService: Service): void{
    this.router.navigateByUrl(`service/${editService.id}`);
  }

  cancelService(id:number){
    if(confirm("Are you sure you want to delete this service?")){
      this.serviceService.removeService(id).subscribe()
      this.toastr.success("Service successfuly delete!!", "Delete");
      setTimeout(() => {
        this.getList();
      }, 1000);
    } 
  }

}
