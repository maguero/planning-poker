import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningRoomComponent } from './planning-room.component';

describe('PlanningRoomComponent', () => {
  let component: PlanningRoomComponent;
  let fixture: ComponentFixture<PlanningRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanningRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
