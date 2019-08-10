import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  public data: any;
  public loaded = false;
  public error = false;
  private route: ActivatedRoute;
  private http: HttpClient;
  public create = false;
  private formBuilder: FormBuilder;
  public auth: AuthService;
  public editForm: FormGroup;
  private router: Router;

  constructor(route: ActivatedRoute, http: HttpClient, formBuilder: FormBuilder, auth: AuthService, router: Router) {
    this.route = route;
    this.http = http;
    this.formBuilder = formBuilder;
    this.auth = auth;
    this.router = router;
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      title: [''],
      body: ['']
    });
    const id = this.route.snapshot.paramMap.get('id');
    if (id == 'new') {
      this.create = true;
      this.loaded = true;
      return;
    }

    this.http.get(`http://localhost:3000/document/${id}/find`).subscribe((data: any) => {
      this.data = data;
      if (!data) {
        this.error = true;
      }
      this.loaded = true;
      this.editForm.controls.title.setValue(this.data.title);
      this.editForm.controls.body.setValue(this.data.body);
    });
  }

  save() {
    const data = {
      title: this.editForm.controls.title.value,
      body: this.editForm.controls.body.value,
      owner: this.auth.username,
      sharedWith: [{
        name: 'admin',
        read: true,
        write: true
      }]
    };

    this.http.post(`http://localhost:3000/document/create`, data).subscribe((data: any) => {
      this.router.navigate(['/']);
    });
  }

  update() {
    this.data.title = this.editForm.controls.title.value;
    this.data.body = this.editForm.controls.body.value;
    const id = this.route.snapshot.paramMap.get('id');
    this.http.put(`http://localhost:3000/document/${id}/update`, this.data).subscribe((data: any) => {
      this.router.navigate(['/']);
    });
  }

}
