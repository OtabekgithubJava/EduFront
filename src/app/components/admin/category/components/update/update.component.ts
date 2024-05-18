import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../../../services/CRUDs/crud.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent implements OnInit{
  newName = '';
  selectedCategory: any;
  categories: any[] = [];
  constructor(private crudService: CrudService) {}
  ngOnInit(): void {
    this.crudService.GetAllCategorys().subscribe(res => {
      this.categories = res;
      console.log(this.categories);
    })
  }
  submit() {
    this.crudService.UpdateCategory(this.selectedCategory, this.newName).subscribe(res => {
      console.log(res)
      return res;


    })

  }
}
