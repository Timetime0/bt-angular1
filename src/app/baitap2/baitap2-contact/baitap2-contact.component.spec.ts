import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap2ContactComponent } from './baitap2-contact.component';

describe('Baitap2ContactComponent', () => {
  let component: Baitap2ContactComponent;
  let fixture: ComponentFixture<Baitap2ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Baitap2ContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap2ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
