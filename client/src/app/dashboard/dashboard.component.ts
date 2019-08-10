import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private http: HttpClient;
  public articles: object;
  private auth: AuthService;
  private router: Router;


  constructor(http: HttpClient, router: Router, auth: AuthService) {
    this.http = http;
    this.auth = auth;
    this.router = router;
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.http.get(`http://localhost:3000/document/all/${this.auth.username}`).subscribe((data: any) => {
      this.articles = data;
    });
  }

  create() {
    this.router.navigate(['/document/new']);
  }

  edit(id) {
    this.router.navigate([`/document/${id}`]);
  }

  canEdit(doc) {
    const sharedDocWithUser = doc.sharedWith.find((user) => user.name === this.auth.username);
    return sharedDocWithUser ? sharedDocWithUser.write : false ;
  }

  remove(id) {
    this.http.delete(`http://localhost:3000/document/${id}/delete`).subscribe((data: any) => {
      this.getAll()
    });
  }

}
