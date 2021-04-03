import { Component, OnInit } from '@angular/core';
import { Gist, gists } from '../gist';

@Component({
  selector: 'app-fetch-gists',
  templateUrl: './fetch-gists.component.html',
  styleUrls: ['./fetch-gists.component.scss']
})
export class FetchGistsComponent implements OnInit {

  gists: any[] = [];
  terms: string = '';

  constructor() { }

  ngOnInit() {
    document.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        this.search(this.terms);
      }
    });
  }

  search(terms: string) {
    const searchTerms = terms.split(' ');
    const gistsCopy = gists;
    gistsCopy.forEach(g => g.termCount = this.countMatchingTerms(g.keywords, searchTerms));
    this.gists = gistsCopy.filter(g => g.termCount > 0).sort((a, b) => (a.termCount > b.termCount) ? 1 : -1);
  }

  countMatchingTerms(array: string[], terms: string[]) {
    let it = 0;
    array.forEach(e => {
      if (terms.find(t => t === e)) {
        it++;
      }
    });

    return it;
  }

  copyToClipboard(gist: Gist) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = gist.code;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

}
