import { TestBed, inject } from '@angular/core/testing';

import { StoriesService } from './stories.service';

describe('StoriesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoriesService]
    });
  });

  it('should be created', inject([StoriesService], (service: StoriesService) => {
    expect(service).toBeTruthy();
  }));
});
