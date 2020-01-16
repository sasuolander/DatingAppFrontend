/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlertifyjsService } from './alertify.service';

describe('Service: Alertifyjs', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertifyjsService]
    });
  });

  it('should ...', inject([AlertifyjsService], (service: AlertifyjsService) => {
    expect(service).toBeTruthy();
  }));
});
