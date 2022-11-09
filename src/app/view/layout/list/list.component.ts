import { Component, OnInit } from '@angular/core';
import { DashService } from 'src/app/services/dash.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  lists:any;
  userDetails:any;
  constructor(private _loginservice: LoginService , private _list_fillter:DashService) { 
    this.userDetails = this._loginservice.getLoggedInUser();
  }

  ngOnInit(): void {
    this.getDataOfDashData();
  }

  getDataOfDashData(){
    var ags = {
      sheet_id: this.userDetails.data.id,
    }

      this._list_fillter.voter_list_fillter(ags).subscribe({
        next: (data) => {
          this.lists=data;
          console.log(this.lists);
        }

      });
  }

}
