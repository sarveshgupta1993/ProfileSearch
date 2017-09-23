import { Component, OnInit } from '@angular/core';
import {GithubService } from '../Service/github.service';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map'; 

@Component({
  selector: 'git-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css'],
  providers:[GithubService]
})
export class ProfileComponentComponent  {
  user:any;
  repos:any;
  username:string;
  constructor(private _githubservice:GithubService) {
    console.log(_githubservice);



//this._githubservie.getuser().subscribe(user=>{
//this.result=user;//console.log(user);
 //this._githubservice.getuser().subscribe(result=>{this.result=result;
 


   

 

}
search()
{

this._githubservice.updateusername(this.username);

this._githubservice.getuser().subscribe(user=>{
  //console.log(users);
this.user=user;

})

this._githubservice.getRepos().subscribe(repos=>{
  //console.log(users);
this.repos=repos;

})
}
}
