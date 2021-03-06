import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCardsComponent } from './my-cards.component';

describe('MyCardsComponent', () => {
  let component: MyCardsComponent;
  let fixture: ComponentFixture<MyCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
