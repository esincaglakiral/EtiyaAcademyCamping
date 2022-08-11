import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../../models/services-model';
import { ServiceService } from '../../services/service.service';


@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})

export class ServicesListComponent implements OnInit {

  services!: Service[];

  constructor(private serviceService: ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.serviceService.getList().subscribe(serviceParameter => this.services = serviceParameter);
  }

  editServiceId(editService: Service): void{
    this.router.navigateByUrl(`service/${editService.id}`);
  }

  cancelService(id:number){
    if(confirm("Are you sure you want to delete this service?")){
      this.serviceService.removeService(id).subscribe(()=>{
        this.getList();
      })
    } 
  }

}
