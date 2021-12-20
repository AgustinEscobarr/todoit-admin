import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Travels, InfoTravelChange } from '../../models/travels-byModify-data';
import { States } from '../../pages/travels/travels.component';
import { UserComplete } from '../../models/user-structure';
import { DecisionList } from '../../models/decision-list';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
  

  @Input() nameSelect :string='';
  @Input() states :States[]=[];
  @Input() nameButton: string='';
  @Input() buttonEnable :string='';
  @Input() buttonsEdit:string='';
  @Input() displayedColumns: string[] = [];
  @Input() dataSource :MatTableDataSource<any>=new MatTableDataSource();
  @Output() onStateChange: EventEmitter<InfoTravelChange>=new EventEmitter();
  @Output() onEditUser: EventEmitter<DecisionList>=new EventEmitter();
  select :number=1
   
   @ViewChild(MatPaginator) paginator!: MatPaginator;
   @ViewChild(MatSort) sort: MatSort=new MatSort();
   
  constructor() {
    
   }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  sendNewState(state:number, elementTravel :Travels ){
    let object :InfoTravelChange={
      newStatus:state,
      elementTravel: elementTravel
    }
    this.onStateChange.emit(object);
    
  }
  editUser(element:UserComplete, choose:boolean){
    let edit :DecisionList={
      user:element,
      choose:choose
    };
    this.onEditUser.emit(edit);
  }
  deleteUser(element:UserComplete, choose:boolean){
    let del :DecisionList={
      user:element,
      choose:choose
    };
    this.onEditUser.emit(del);

  }

  
}
