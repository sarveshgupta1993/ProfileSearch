import {Injectable} from '@angular/core';
import {Headers,Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService{

private username='bradtraversy';
private _client_id='937769c67387227d6212';
private _client_secret='9ce54634aa18a0dc11be95c4d35fb3bf9e62e0ba';

constructor(private _http:Http)
{
console.log('Github service Ready..');
    
}


getuser(){
   return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this._client_id+'&client_secret='+this._client_secret).map(res => res.json());
}

getRepos(){
   return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this._client_id+'&client_secret='+this._client_secret).map(res => res.json());
}

updateusername(username:string)
{

    this.username=username;
}
//{
//return this._http.get('http://api.github.com/users/'+this.username)
//.map(res=>res.json())

}

