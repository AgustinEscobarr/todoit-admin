import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  mode:string='';
  constructor(private observer: BreakpointObserver) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.observer.observe(['(max-width: 800px)']).subscribe((res)=>{
      if(res.matches){
        this.sidenav.mode='over';
        this.mode='over'
        this.sidenav.close();
      }else{
        this.mode='side';
        this.sidenav.mode='side';
        this.sidenav.open();
      }
    })
    
  }

}
