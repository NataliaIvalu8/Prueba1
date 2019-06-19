import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerseriesComponent } from './verseries.component';

describe('VerseriesComponent', () => {
  let component: VerseriesComponent;
  let fixture: ComponentFixture<VerseriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerseriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
