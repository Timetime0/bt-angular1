import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap2WwdComponent } from './baitap2-wwd.component';

describe('Baitap2WwdComponent', () => {
  let component: Baitap2WwdComponent;
  let fixture: ComponentFixture<Baitap2WwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Baitap2WwdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap2WwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
