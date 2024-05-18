import { Component, Input } from '@angular/core';
import { CrudService } from '../../../../../services/CRUDs/crud.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class DeleteComponent {
  inputValue: string = '';
  isFocused: boolean = false;
  placeholder: string = 'Category name';
  categoryId: string = '';
  values: any;
  @Input() items: { name: string, id: string }[] = [];

  constructor(private crudService: CrudService) { }


  onInputFocus() {
    this.isFocused = true;
  }

  onInputBlur() {
    if (!this.inputValue) {
      this.isFocused = false;
    }
  }

  Delete() {
    this.crudService.DeleteCategory(this.categoryId).subscribe(res => {
      if (res.isSuccess) {
        alert('Succesful')
      } else {
        alert('Unsuccesful')
      }
      console.log(res)
    })
  }

  Search() {
    this.crudService.GetAllCategorys().subscribe(res => {
      // this.items = res
      for (let i = 0; i < res.length; i++) {
        if (res[i].name == this.inputValue) {
          this.categoryId = res[i].id
        }
      }
    })

    this.crudService.GetCategoryById(this.categoryId).subscribe(res => {
      console.log(res)
      this.values = res
      console.log(this.values)
      this.items.push(this.values)
    })

  }








}

