import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    onAction: '&',
    outcome:  '<'
  },
  transclude: true,
  template: `<ng-transclude></ng-transclude>`
})
export class ActionComponent {

  onAction: Function;
  outcome: any;

  action($event) {
    this.onAction({$event});
  }
}