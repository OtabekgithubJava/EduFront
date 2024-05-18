import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/CRUDs/user.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss',
})
export class LeaderboardComponent implements OnInit {
  user: any;
  
  constructor(private userService: UserService) {
    localStorage.getItem('user');
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }
  
  selected1: string = 'Alltime';
  selected2: string = 'Alltime';
  selected3: string = 'Alltime';
  topStudents: any;
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((res) => {
      console.log(res);
      this.topStudents = res;
    });
  }
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
