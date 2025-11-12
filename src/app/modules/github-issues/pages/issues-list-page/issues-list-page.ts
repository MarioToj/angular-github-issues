import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IssuesService } from '../../services/issues.service';
import { LabelsSelector } from '../../components/labels-selector/labels-selector';

@Component({
  selector: 'app-issues-list-page',
  imports: [RouterLink, LabelsSelector],
  templateUrl: './issues-list-page.html',
})
export default class IssuesListPage {
  issuesService = inject(IssuesService);

  get labelsQuery() {
    return this.issuesService.labelsQuery;
  }
}
