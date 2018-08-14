import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { user } from '../DTO/user'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  userId: number;
  user: Object = new Object();

  constructor(private route: ActivatedRoute, private datas: DataService) {
    this.route.params.subscribe(params => this.userId = params.id);
    //this.userId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    console.log(this.user);
    this.datas.getUser(this.userId).subscribe(
      data => {
        this.user = data;
        console.log(data);
      }
    );
  }

}
