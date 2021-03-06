import { Course } from './course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  private coursesUrl: string = 'http://localhost:3100/api/courses';

  constructor(private httpClient: HttpClient){}

  retrieveAll() : Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.coursesUrl);
  }

  retrieveById(id: number): Observable<Course> {
    return this.httpClient.get<Course>(`${this.coursesUrl}/${id}`);
  }

  save(course: Course): Observable<Course> {
    if(course.id){
      return this.httpClient.put<Course>(`${this.coursesUrl}/${course.id}`,course);
    } else{
      return this.httpClient.post<Course>(`${this.coursesUrl}`,course);
    }
  }

  deleteById(id: number): Observable<any> { //any indica que pode ser qualquer tipo
    return this.httpClient.delete<any>(`${this.coursesUrl}/${id}`);
  }
}

var COURSES: Course[] = [
  {
    id: 1,
    name: 'Formulários',
    imageUrl: '/assets/images/forms.png',
    price: 99.99,
    code: 'XPS-8796',
    duration: 120,
    rating: 5,
    releaseDate: '10/11/2020',
    description: ""
  },
  {
    id: 2,
    name: 'Requisição HTTP',
    imageUrl: '/assets/images/http.png',
    price: 45.99,
    code: 'LKL-1094',
    duration: 80,
    rating: 3,
    releaseDate: '02/10/2020',
    description: ""
  },
  {
    id: 3,
    name: 'Animação',
    imageUrl: '/assets/images/animations.png',
    price: 35.99,
    code: 'LKL-1094',
    duration: 80,
    rating: 4,
    releaseDate: '02/10/2020',
    description: ""
  },
  {
    id: 4,
    name: 'Terminal CLI',
    imageUrl: '/assets/images/cli.png',
    price: 20.55,
    code: 'LKL-1094',
    duration: 80,
    rating: 1,
    releaseDate: '02/10/2020',
    description: ""
  },
  {
    id: 5,
    name: 'Roteamento',
    imageUrl: '/assets/images/router.png',
    price: 30.99,
    code: 'LKL-1094',
    duration: 80,
    rating: 2,
    releaseDate: '02/10/2020',
    description: ""
  }
]
