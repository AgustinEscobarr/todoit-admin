import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  name: string =JSON.parse(localStorage.getItem('userLoged')||'').fullName

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  cerrarSesion(){
    localStorage.clear();
    this.route.navigate(['auth']);
    
  }

}
