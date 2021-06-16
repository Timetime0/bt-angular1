import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap2ListcardComponent } from './baitap2-listcard.component';

describe('Baitap2ListcardComponent', () => {
  let component: Baitap2ListcardComponent;
  let fixture: ComponentFixture<Baitap2ListcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Baitap2ListcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap2ListcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
