import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserTypesService } from '../../services/user-types.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  clients :MatTableDataSource<any>=new MatTableDataSource();
  cadetes :MatTableDataSource<any>=new MatTableDataSource();
  admins :MatTableDataSource<any>=new MatTableDataSource();
  constructor(private userTypesService:UserTypesService) { }

  ngOnInit(): void {
  }

}
