import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private readonly router:Router) { }

  ngOnInit(): void {
  }

  redirigeReactivo():void {
    this.router.navigate(['contacto-reactivo'],{queryParams:{name: 'WISTHONG', telefono: '3205422263'}})
  }

  redirigeTemplate():void{
    this.router.navigate(['contacto','97']);
  }

}
