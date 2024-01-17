import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export interface SelectorTableElement {
  icon: SafeHtml; // Change 'string' to 'SafeHtml'
  name: string;
  weight: number;
  symbol: number;
  arrow: string;
}

const SELECTOR_ELEMENT_DATA: SelectorTableElement[] = [
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" class="my-3 icon icon-tabler icon-tabler-bolt" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />
      </svg>
    `,
    name: 'Energy',
    weight: 90,
    symbol: 1,
    arrow: 'down'
  },
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" class="my-3 icon icon-tabler icon-tabler-beach" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M17.553 16.75a7.5 7.5 0 0 0 -10.606 0" />
        <path d="M18 3.804a6 6 0 0 0 -8.196 2.196l10.392 6a6 6 0 0 0 -2.196 -8.196z" />
        <path d="M16.732 10c1.658 -2.87 2.225 -5.644 1.268 -6.196c-.957 -.552 -3.075 1.326 -4.732 4.196" />
        <path d="M15 9l-3 5.196" />
        <path d="M3 19.25a2.4 2.4 0 0 1 1 -.25a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 1 .25" />
      </svg>
    `,
    name: 'Tourism & Hospitality',
    weight: 80,
    symbol: 2,
    arrow: 'down'
  },
  {
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" class="my-3 icon icon-tabler icon-tabler-axe" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M13 9l7.383 7.418c.823 .82 .823 2.148 0 2.967a2.11 2.11 0 0 1 -2.976 0l-7.407 -7.385" />
    <path d="M6.66 15.66l-3.32 -3.32a1.25 1.25 0 0 1 .42 -2.044l3.24 -1.296l6 -6l3 3l-6 6l-1.296 3.24a1.25 1.25 0 0 1 -2.044 .42z" />
    </svg>
    `,
    name: 'Mining',
    weight: 66,
    symbol: 3,
    arrow: 'down'
  },
  {
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" class="my-3 icon icon-tabler icon-tabler-school" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
      <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
    </svg>
    `,
    name: 'Education',
    weight: 80,
    symbol: 4,
    arrow: 'down'
  },
  {
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" class="my-3 icon icon-tabler icon-tabler-truck" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
    </svg>
    `,
    name: 'Transportation & Warehousing',
    weight: 66,
    symbol: 5,
    arrow: 'down'
  },
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" class="my-3 icon icon-tabler icon-tabler-backpack" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M5 18v-6a6 6 0 0 1 6 -6h2a6 6 0 0 1 6 6v6a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3z" />
        <path d="M10 6v-1a2 2 0 1 1 4 0v1" />
        <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
        <path d="M11 10h2" />
      </svg>
    `,
    name: 'Company',
    weight: 52,
    symbol: 6,
    arrow: 'down'
  },
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" class="my-3 icon icon-tabler icon-tabler-brand-linktree" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M9 3l-7 12h3v5h5v-5h-2l4 -7z" />
        <path d="M15 3l7 12h-3v5h-5v-5h2l-4 -7z" />
      </svg>
    `,
    name: 'T-series',
    weight: 93,
    symbol: 7,
    arrow: 'down'
  },
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" class="my-3 icon icon-tabler icon-tabler-crystal-ball" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M6.73 17.018a8 8 0 1 1 10.54 0" />
        <path d="M5 19a2 2 0 0 0 2 2h10a2 2 0 1 0 0 -4h-10a2 2 0 0 0 -2 2z" />
        <path d="M11 7a3 3 0 0 0 -3 3" />
      </svg>
    `,
    name: 'China Global',
    weight: 46,
    symbol: 8,
    arrow: 'down'
  },
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" class="my-3 icon icon-tabler icon-tabler-lighter" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M10 3v16a2 2 0 0 0 2 2h5a2 2 0 0 0 2 -2v-7h-12a2 2 0 0 1 -2 -2v-5a2 2 0 0 1 2 -2h3z" />
        <path d="M16 4l1.465 1.638a2 2 0 1 1 -3.015 .099l1.55 -1.737z" />
      </svg>
    `,
    name: 'ween',
    weight: 75,
    symbol: 9,
    arrow: 'down'
  },
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" class="my-3 icon icon-tabler icon-tabler-mailbox" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M10 21v-6.5a3.5 3.5 0 0 0 -7 0v6.5h18v-6a4 4 0 0 0 -4 -4h-10.5" />
        <path d="M12 11v-8h4l2 2l-2 2h-4" />
        <path d="M6 15h1" />
      </svg>
    `,
    name: 'CNW',
    weight: 38,
    symbol: 10,
    arrow: 'down'
  },
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" class="my-3 icon icon-tabler icon-tabler-sandbox" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M19.953 8.017l1.047 6.983v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-2l1.245 -8.297a2 2 0 0 1 1.977 -1.703h3.778" />
        <path d="M3 15h18" />
        <path d="M13 3l5.5 1.5" />
        <path d="M15.75 3.75l-2 7" />
        <path d="M7 10.5c1.667 -.667 3.333 -.667 5 0c1.667 .667 3.333 .667 5 0" />
      </svg>
    `,
    name: 'Global India',
    weight: 86,
    symbol: 11,
    arrow: 'down'
  },
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" class="mt-3 icon icon-tabler icon-tabler-umbrella" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M4 12a8 8 0 0 1 16 0z" />
        <path d="M12 12v6a2 2 0 0 0 4 0" />
      </svg>
    `,
    name: 'Quera',
    weight: 63,
    symbol: 12,
    arrow: 'down'
  },
];

@Component({
  selector: 'app-selector-table',
  templateUrl: './selector-table.component.html',
  styleUrls: ['./selector-table.component.css']
})
export class SelectorTableComponent {
  displayedColumns: string[] = ['imgAndName', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<SelectorTableElement>(SELECTOR_ELEMENT_DATA);

  constructor(private sanitizer: DomSanitizer) {}

  // Function to sanitize the SVG code
  sanitizeSvg(svgCode: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgCode);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
