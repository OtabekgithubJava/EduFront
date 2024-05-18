import { Component, Input, OnInit } from '@angular/core';
import { CrudService } from '../../../../../services/CRUDs/crud.service';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrl: './get-all.component.scss'
})
export class GetAllComponent implements OnInit {
  @Input() items: { name: string, id: string }[] = [];

  constructor(private crudService: CrudService) { }
  ngOnInit(): void {
    this.crudService.GetAllCategorys().subscribe(res => {
      this.items = res
      console.log(this.items)
    })
  }

}

