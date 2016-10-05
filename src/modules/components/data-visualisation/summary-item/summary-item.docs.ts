import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./summary-item.docs.html')
})
export class SummaryItemDocs {

  items = [
    { count: 3,  label: 'Statements' },
    { count: 24, label: 'Supervisor comments provided' },
    { count: 2,  label: 'Defendants' }
  ];
}