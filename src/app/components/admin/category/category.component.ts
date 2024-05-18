import { UserService } from './../../../services/CRUDs/user.service';
import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../services/CRUDs/crud.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent implements OnInit {
  name = '';
  // students: Student[] = STUDENTS;
  topStudents: any;
  user: any;
  constructor(
    private crudService: CrudService,
    private UserService: UserService
  ) {}


  currentComponent: string = 'create';

  showCreateComponent() {
    this.currentComponent = 'create';
  }

  showUpdateComponent() {
    this.currentComponent = 'update';
  }

  showGetAllComponent() {
    this.currentComponent = 'get-all';
  }

  showDeleteComponent() {
    this.currentComponent = 'delete';
  }


  ngOnInit(): void {
    this.UserService.getAllUsers().subscribe((res) => {
      console.log(res);
      this.topStudents = res;

      this.user = res.find(
        (user: any) => user.id === localStorage.getItem('userId')
      );

      // Number("23")

      localStorage.setItem('user', JSON.stringify(this.user));

      console.log(this.user.photoPath);
    });
  }
  
  // submit() {
  //   // Add your submit logic here
  //   console.log('Keldi');

  //   try {
  //     this.crudService.CreateCategory(this.name).subscribe((res) => {
  //       if (res.isSuccess) {
  //         alert('Succesful');
  //       } else {
  //         alert('Unsuccesful');
  //       }
  //       console.log(res);
  //     });
  //     this.name = '';
  //   } catch (error) {
  //     console.log(error);
  //     alert('error');
  //   }
  // }
}
