import { UserService } from './../../../services/CRUDs/user.service';
import { Component } from '@angular/core';
import { STUDENTS, Student } from '../../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  constructor(private UserService: UserService) {}
  students: Student[] = STUDENTS;
  topStudents: any;
  user: any;

  ngOnInit(): void {
    this.UserService.getAllUsers().subscribe((res) => {
      console.log(res);
      this.topStudents = res;

      this.user = res.find(
        (user: any) => user.id === 'a2ba924a-4ae0-4220-a08b-5aa1ecf359d6'
      );

      localStorage.setItem('user', JSON.stringify(this.user));

      console.log(this.user.photoPath);
    });
  }

  selected1: string = 'Alltime';
  selected2: string = 'Alltime';
  selected3: string = 'Alltime';

  addClass() {
    this.selected1 = 'weekly';
    this.selected2 = 'Alltime';
    this.selected3 = 'Alltime ';
  }
  addClass2() {
    this.selected2 = 'weekly';
    this.selected1 = 'Alltime';
    this.selected3 = 'Alltime ';
  }
  addClass3() {
    this.selected3 = 'weekly';
    this.selected2 = 'Alltime';
    this.selected1 = 'Alltime ';
  }
}
