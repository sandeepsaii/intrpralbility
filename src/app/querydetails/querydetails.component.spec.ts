import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuerydetailsComponent } from './querydetails.component';

describe('QuerydetailsComponent', () => {
  let component: QuerydetailsComponent;
  let fixture: ComponentFixture<QuerydetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuerydetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuerydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
