import { Component, Input, OnInit } from '@angular/core';
import { PeriodicElement } from '../../pages/travel-history/travel-history.component';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  
  @Input() nameButton: string='';
  @Input() buttonEnable :string='';
  @Input() displayedColumns: string[] = [];

  @Input() dataSource: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  
}
