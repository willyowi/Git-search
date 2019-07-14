import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment';
import { Users } from './users';
import { Repo } from './repo';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {
   public users: Users;
   public username: string;
  

   constructor(private http: HttpClient) {
     this.users= new Users('','','',0,0,0,0);
   }

   GetUserName (username: string) {
      this.username = username;
   }

   getUsers () {

     interface ApiResponse {
       login: string,
       name: string,
       html_url: string,
       public_repos: number,
       public_gists: number,
       followers: number,
       following: number
     }

     let promise = new Promise ((resolve,reject) =>{
         this.http.get<ApiResponse>(`https://api.github.com/users/${this.username}?access_token=` + '3d805bf6761c1dafe17d3617f1968c94009181a2').toPromise().then(response =>{
           this.users.login=response.login;
           this.users.html_url=response.html_url;
           this.users.name=response.name;
           this.users.public_gists=response.public_gists;
           this.users.public_repos=response.public_repos;
           this.users.followers=response.followers;
           this.users.following=response.following;

           resolve(this.users)
         },
         error=> {
           this.users.login='unavailable';
           this.users.name='user unavailable';
           this.users.public_repos=0;
           this.users.public_gists=0;
           this.users.followers=0;
           this.users.following=0;
           reject(error)
         }
       )
      })
      // console.log(this.users)
      return this.users
     }
   }
