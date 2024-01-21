import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReversibleComponent } from './card-reversible.component';

describe('CardReversibleComponent', () => {
  let component: CardReversibleComponent;
  let fixture: ComponentFixture<CardReversibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardReversibleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardReversibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
