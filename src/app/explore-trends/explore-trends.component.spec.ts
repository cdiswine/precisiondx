import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreTrendsComponent } from './explore-trends.component';

describe('ExploreTrendsComponent', () => {
  let component: ExploreTrendsComponent;
  let fixture: ComponentFixture<ExploreTrendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreTrendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
