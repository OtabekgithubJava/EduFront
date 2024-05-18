import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../services/CRUDs/user.service';

@Component({
  selector: 'app-overwiew',
  templateUrl: './overwiew.component.html',
  styleUrl: './overwiew.component.scss',
})
export class OverwiewComponent implements OnInit {
  constructor(private userService: UserService) {}

  @ViewChild('studentImg') studentImg!: ElementRef;
  topStudents: any;
  user: any;
  src = 'assets/images/kattamen.png';

  ngAfterViewInit() {
    this.studentImg.nativeElement.disabled = true;
    this.studentImg.nativeElement.src =
      'https://edu-api.tohirjon.uz/' + this.src;
      console.dir(this.studentImg.nativeElement, 'studentImg');
  }

  check() {
    console.log(this.studentImg.nativeElement.src, 'studentImg');
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((res) => {
      console.log(res);
      this.topStudents = res.slice(0, 5);

      // a2ba924a-4ae0-4220-a08b-5aa1ecf359d6 id'ga to'gragan userni topdan olib kelish
      this.user = res.find((user: any) => user.id === localStorage.getItem("userId"));

      localStorage.setItem('user', JSON.stringify(this.user));

      console.log(this.user.photoPath);
      
    });
  }
}
