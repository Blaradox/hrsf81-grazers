module.exports = {
  bindings: {
    user: '<',
    changeView: '<'
  },
  controller: function(groups) {
    this.event = 'Grazers Con';
    groups.get()
    .then(groups => this.groups = groups)
    .catch(console.error);
  },
  template: `
  <div class="control-panel col-md-2">
    <div class="active-user">{{$ctrl.user.firstName}} {{$ctrl.user.lastName}}</div>
    <ul class="control-panel-list">
      <control-panel-item label="$ctrl.event" view="broadcast" on-click="$ctrl.changeView"></control-panel-item>
      <control-panel-item ng-repeat="group in $ctrl.groups track by group.id"
        label="group.name"
        view="manageGroup"
        on-click="$ctrl.changeView"></control-panel-item>
    </ul>
  </div>
  `
}