import { Component } from '@angular/core';
import { Book } from './models/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-books';

  myBook: Book = {
    id: 1,
    author: "J. K. Rowling", 
    title: "Harry Potter and the goblet of fire",
    description: "Harry Potter finds himself competing in a hazardous tournament between rival schools of magic, but he is distracted by recurring nightmares.",
    cover: "https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    score: 7.7
  }
}
