import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMoiveComponent } from './item-moive.component';

describe('ItemMoiveComponent', () => {
  let component: ItemMoiveComponent;
  let fixture: ComponentFixture<ItemMoiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemMoiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMoiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
