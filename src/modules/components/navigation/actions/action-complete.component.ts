import { Component } from '@govuk/angularjs-devtools';
import { ActionComponent } from './action.component';

@Component({
  bindings: {
    editLabel:      '@',
    highlight:      '<',
    highlightLabel: '@',
    label:          '@',
    onEdit:         '&?'
  },
  require: {
    actionCtrl: '^?pdkAction'
  },
  transclude: true,
  $$tlb: true,
  template: `
    <div class="action-bar action-bar-completed">
      <div class="action-bar-header">
        <span class="action-bar-title" data-ng-bind="$ctrl.label"></span>
        <span class="action-bar-options">
          <span class="action-bar-status" 
              data-ng-class="{'action-bar-status-saved': $ctrl.highlight}">
           <span data-ng-if="$ctrl.highlight"
                 data-ng-bind="$ctrl.highlightLabel || 'Saved'"></span>    
          </span>     
          <a href=""
             class="action-bar-action" 
             data-ng-click="$ctrl.onEdit({$event: $event})"
             data-ng-bind="$ctrl.editLabel || 'Amend'"></a>
        </span>
      </div>
      <ng-transclude></ng-transclude> 
    </div>
  `
})
export class ActionCompleteComponent {

  actionCtrl: ActionComponent;
  onEdit: Function;

  action($event) {
    this.onEdit ? this.onEdit({$event}) : this.actionCtrl.action($event);
  }
}