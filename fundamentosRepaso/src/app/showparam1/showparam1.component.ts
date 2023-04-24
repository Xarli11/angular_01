import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-showparam1',
  templateUrl: './showparam1.component.html',
  styleUrls: ['./showparam1.component.css']
})
export class Showparam1Component {
  id:number;

  constructor(private router:Router, private route:ActivatedRoute){
    this.id = this.route.snapshot.params['id'];
  }
}
