import { Component } from '@angular/core';
import { CrudService } from '../../../services/CRUDs/crud.service';
import { LessonModel } from '../../../models/lesson-model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.scss',
})
export class LessonComponent {
  constructor(private crudService: CrudService, private http: HttpClient) {}
  title: string = '';
  expForWaatching: number = 5;
  selectedFile: File | null = null;
  // courseId: string = 'a1892ffc-bfeb-4913-a2b7-c9d3e50a1155';
  videoFile: any;

  lesson: LessonModel = {
    Title: '',
    CourseId: 'a1892ffc-bfeb-4913-a2b7-c9d3e50a1155',
    ExpForWatching: 0,
    Video: null,
  };

  private base64textString: String = '';

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  // name = 'Angular';

  handleFileInput(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  uploadVideo(): void {
    if (!this.selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append('Video', this.selectedFile);
    formData.append('CourseId', 'dd62fbd0-df18-4e9f-a80d-a94993a515f9');
    formData.append('Title', "Kirish");
    formData.append('ExpForWatching', "5");

    this.http
      .post('https://edu-api.tohirjon.uz/api/Lesson/CreateLesson', formData)
      .subscribe(
        (response) => {
          console.log('Video uploaded successfully:', response);
        },
        (error) => {
          console.error('Error uploading video:', error);
        }
      );
  }

  // onSubmit() {
  //   if (this.selectedFile) {
  //     const formData = new FormData();
  //     formData.append('photo', this.selectedFile);

  //     // Send the photo to the server
  //     this.http
  //       .post<any>(
  //         'https://edu-api.tohirjon.uz/api/Lesson/CreateLesson',
  //         formData
  //       )
  //       .subscribe(
  //         (response) => {
  //           console.log('Photo uploaded successfully!', response);
  //         },
  //         (error) => {
  //           console.error('Error uploading photo:', error);
  //         }
  //       );
  //   }
  // }
}
