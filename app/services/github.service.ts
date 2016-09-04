import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username: string;
    private client_id = '8525a395563ba6f286a9';
    private client_secret = 'dd9c02d2e36568cd390268c0c5a2a7751e7a025b';

    constructor(private _http:Http) {
        console.log('Github Service Ready');
        this.username = 'angular';
    }

    getUser() {
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_scret='+this.client_secret)
            .map(res => res.json())
    }

    getRepos() {
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_scret='+this.client_secret)
            .map(res => res.json())
    }

    updateUser(username:string) {
        this.username = username;
    }
}
