import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap2CardComponent } from './baitap2-card.component';

describe('Baitap2CardComponent', () => {
  let component: Baitap2CardComponent;
  let fixture: ComponentFixture<Baitap2CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Baitap2CardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap2CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
