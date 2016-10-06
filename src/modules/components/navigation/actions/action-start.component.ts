import { Component } from '@govuk/angularjs-devtools';
import { ActionComponent } from './action.component';

@Component({
  bindings: {
    invert:  '<',
    label:   '@',
    onStart: '&?'
  },
  require: {
    actionCtrl: '^?pdkAction'
  },
  template: `
    <div class="action-bar action-bar-start">
      <a class="action-bar-header" href=""
         data-ng-class="{'action-bar-header-secondary': $ctrl.invert}"
         data-ng-click="$ctrl.action($event)">
        <span class="action-bar-title" data-ng-bind="$ctrl.label"></span>
      </a>
    </div>
  `
})
export class ActionStartComponent {

  actionCtrl: ActionComponent;
  onStart: Function;

  action($event) {
    this.onStart ? this.onStart({$event}) : this.actionCtrl.action($event);
  }
}