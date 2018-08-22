import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  path:any = 'http://www.pngnames.com/files/1/Josh-Name-Free-PNG-Logo.png';
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
