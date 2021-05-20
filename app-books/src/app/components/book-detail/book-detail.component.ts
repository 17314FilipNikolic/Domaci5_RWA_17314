import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { faStar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  @Input() book: Book = {
    id: 0,
    author: "", 
    title: "",
    description: "",
    cover: "",
    score: 0
  }

  iconStar = faStar;

  constructor() { }

  ngOnInit(): void {
  }

}
