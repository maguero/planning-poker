import { TestBed, inject } from '@angular/core/testing';

import { PlanningGuardService } from './planning-guard.service';

describe('PlanningGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanningGuardService]
    });
  });

  it('should be created', inject([PlanningGuardService], (service: PlanningGuardService) => {
    expect(service).toBeTruthy();
  }));
});
