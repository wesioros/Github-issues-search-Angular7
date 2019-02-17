import { TestBed } from '@angular/core/testing';

import { GitHubIssuesAPIService } from './git-hub-issues-api.service';

describe('GitHubIssuesAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitHubIssuesAPIService = TestBed.get(GitHubIssuesAPIService);
    expect(service).toBeTruthy();
  });
});
