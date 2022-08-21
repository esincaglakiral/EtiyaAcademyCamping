import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  categoryId!: number;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getById();
  }
  getById() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.categoryId = params['categoryId'];
    });
  }
}
