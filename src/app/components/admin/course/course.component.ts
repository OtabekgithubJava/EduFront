import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../services/CRUDs/crud.service';
import { Course } from '../../../models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent implements OnInit {

  courseName: string = '';
  description: string = '';
  totalTime: number = 0;
  price: number = 0;
  language: string = '';
  teacherName: string = '';
  selectedCoupon: string = '';
  selectedCategory: string = '';
  coupons: any[] = [];
  categories: any[] = [];
  data: Course = {
    courseName: '',
    description: '',
    totalTime: 0,
    price: 0,
    language: '',
    teacherName: '',
    couponId: '',
    categoryId:''
  };

  constructor(private crudService: CrudService) { }
  ngOnInit(): void {
    try{
      this.crudService.GetAllCoupons().subscribe(res => {
        console.log(res)
        this.coupons = res;
      })
    }
    catch(error){
      console.log(error);
    }

    try{
      this.crudService.GetAllCategorys().subscribe(res => {
        console.log(res)
        this.categories = res;
      })
    }
    catch(error){
      console.log(error);
    }

    // console.log(this.coupons, this.categories);
  }

  submit() {
    this.data = {
      courseName: this.courseName,
      description: this.description,
      totalTime: this.totalTime,
      price: this.price,
      language: this.language,
      teacherName: this.teacherName,
      couponId: this.selectedCoupon,
      categoryId: this.selectedCategory
    }
    // Add your submit logic here
    try{
      this.crudService.CreateCourse(this.data).subscribe(res => {
        if(res.isSuccess){
          alert('Succesful')
        }
        else{
          alert('Unsuccesful')
        }
        console.log(res)
      })
    }
    catch(error){
      console.log(error);
    }
    this.courseName = '';
    this.description = '';
    this.totalTime = 0;
    this.price = 0;
    this.language = '';
    this.teacherName = '';
  }
}
