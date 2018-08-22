import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardloginComponent } from './cardlogin.component';

describe('CardloginComponent', () => {
  let component: CardloginComponent;
  let fixture: ComponentFixture<CardloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
