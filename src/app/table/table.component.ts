import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface TableElement {
  img: string;
  name: string;
  weight: number;
  symbol: number;
  arrow: string;
}

const ELEMENT_DATA: TableElement[] = [
  { img: 'assets/img/company.jpg', name: 'OQ', weight: 90, symbol: 1, arrow: 'down' },
  { img: 'assets/img/company2.jpg', name: 'Oman Tourism Development', weight: 80, symbol: 2, arrow: 'down' },
  {img: 'assets/img/company3.jpg',name: 'Asayad', weight: 66, symbol: 3, arrow: 'down' },
  {img: 'assets/img/company4.jpg',name: 'Nama', weight: 80, symbol: 4, arrow: 'down' },
  {img: 'assets/img/company5.jpg',name: 'Fisheries Development Oman', weight: 66, symbol: 5, arrow: 'down' },
  {img: 'assets/img/company6.jpg',name: 'Company', weight: 52, symbol: 6, arrow: 'down' },
  {img: 'assets/img/company7.jpg',name: 'T-series', weight: 93, symbol: 7, arrow: 'down' },
  {img: 'assets/img/company8.jpg',name: 'China Global', weight: 46, symbol: 8, arrow: 'down' },
  {img: 'assets/img/company9.jpg',name: 'ween', weight: 75, symbol: 9, arrow: 'down' },
  {img: 'assets/img/company10.jpg',name: 'CNW', weight: 38, symbol: 10, arrow: 'down' },
  {img: 'assets/img/company11.jpg',name: 'Global India', weight: 86, symbol: 11, arrow: 'down' },
  {img: 'assets/img/company12.jpg',name: 'Quera', weight: 63, symbol: 12, arrow: 'down' },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns: string[] = ['imgAndName', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<TableElement>(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}