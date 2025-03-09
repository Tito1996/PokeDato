import { TestBed } from '@angular/core/testing';

import { GptPokeApiService } from './gpt-poke-api.service';

describe('GptPokeApiService', () => {
  let service: GptPokeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GptPokeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
