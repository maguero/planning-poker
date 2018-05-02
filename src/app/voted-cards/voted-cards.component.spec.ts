import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotedCardsComponent } from './voted-cards.component';

describe('VotedCardsComponent', () => {
  let component: VotedCardsComponent;
  let fixture: ComponentFixture<VotedCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotedCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotedCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
