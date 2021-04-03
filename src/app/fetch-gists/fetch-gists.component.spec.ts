import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchGistsComponent } from './fetch-gists.component';

describe('FetchGistsComponent', () => {
  let component: FetchGistsComponent;
  let fixture: ComponentFixture<FetchGistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchGistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchGistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
