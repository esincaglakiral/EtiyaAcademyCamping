import { Component, OnInit } from '@angular/core';
import { Categories } from '../../models/categories';
import { CategoriesService } from '../../services/categories/categories.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {
  categoryList!:Categories[];
 

  constructor(private categoriesService:CategoriesService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getCategories();
    }, 1000);
  }

  getCategories(){
    this.categoriesService.getCategoryList().subscribe((response) => {
      this.categoryList = response;
    })
  }

  getCategoriesById(categories:Categories){
    console.log(categories)
  }

}

