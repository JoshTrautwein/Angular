import {Component, OnInit, ViewChild} from '@angular/core';

export interface PeriodicElement {
  employee: string;
  assetId: number;
  assetAllocationDate: string;
  assetReturnDate: string;
  employeeEmail: string;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {employee: 'Candace Chandler', assetId: 1692009077980994657, assetAllocationDate: '09/21/2018', assetReturnDate: 'NA', employeeEmail: 'Candace.Chandler@semanticbits.com', actions: ''},
  {employee: 'Candace Chandler', assetId: 1692009077980994657, assetAllocationDate: '09/21/2018', assetReturnDate: 'NA', employeeEmail: 'Candace.Chandler@semanticbits.com', actions: ''},
  {employee: 'Candace Chandler', assetId: 1692009077980994657, assetAllocationDate: '09/21/2018', assetReturnDate: 'NA', employeeEmail: 'Candace.Chandler@semanticbits.com', actions: ''},
  {employee: 'Candace Chandler', assetId: 1692009077980994657, assetAllocationDate: '09/21/2018', assetReturnDate: 'NA', employeeEmail: 'Candace.Chandler@semanticbits.com', actions: ''},

];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-body-table',
  templateUrl: './body-table.component.html',
  styleUrls: ['./body-table.component.css'],
})
export class BodyTableComponent implements OnInit{
  displayedColumns: string[] = ['employee', 'assetId', 'assetAllocationDate', 'assetReturnDate', 'employeeEmail', 'actions'];
  dataSource = [
    {employee: 'Candace Chandler', assetId: 1692009077980994657, assetAllocationDate: '09/21/2018', assetReturnDate: 'NA', employeeEmail: 'Candace.Chandler@semanticbits.com', actions: ''},
    {employee: 'Candace Chandler', assetId: 1692009077980994657, assetAllocationDate: '09/21/2018', assetReturnDate: 'NA', employeeEmail: 'Candace.Chandler@semanticbits.com', actions: ''},
    {employee: 'Candace Chandler', assetId: 1692009077980994657, assetAllocationDate: '09/21/2018', assetReturnDate: 'NA', employeeEmail: 'Candace.Chandler@semanticbits.com', actions: ''},
    {employee: 'Candace Chandler', assetId: 1692009077980994657, assetAllocationDate: '09/21/2018', assetReturnDate: 'NA', employeeEmail: 'Candace.Chandler@semanticbits.com', actions: ''},
  ];

  constructor() { }

  ngOnInit() {
  }
}


