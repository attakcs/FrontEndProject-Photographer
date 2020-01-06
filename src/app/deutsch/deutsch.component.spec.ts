import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeutschComponent } from './deutsch.component';

describe('DeutschComponent', () => {
  let component: DeutschComponent;
  let fixture: ComponentFixture<DeutschComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeutschComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeutschComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
