import { Component, OnInit, Input, Output, EventEmitter,  } from '@angular/core';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})
export class PostComponent implements OnInit {
  newArray : Array<any> = [];
  // title: string = 'title';
  // @Input() parentMessage: string = '';
  // public messageForChild: string = 'Message from Post to Child Postlist';
  // public childMessage:string = "From Child Component";
  // public outPutChildMessage: string = "Message from child component via Output ";
  // @Output() messageEvent = new EventEmitter<string>();

  constructor( private postService: PostService ) {
    this.newArray = postService.postList;

  }
  ngOnInit(): void {}

  // sendMessage(){
  //   this.messageEvent.emit(this.outPutChildMessage);
  // }


}
