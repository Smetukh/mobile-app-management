const Index = () => (
    <div>
      <p>Hello Next.js</p>
    </div>
  );
  
  export default Index;


{/* <div class="container-fluid">
  <ul *ngIf="this.deviceArray.length > 1" class="nav nav-tabs nav-pills nav-justified mb-3" id="pills-tab" role="tablist">  <li class="nav-item">
      <a
        class="nav-link"
        [ngClass]="{ active: !(this.activeParams.includes('android') && this.deviceArray.length > 1 || this.deviceArray[0].deviceType == 'Android') }"
        id="pills-ios-tab"
        data-toggle="pill"
        href="#pills-ios"
        role="tab"
        aria-controls="pills-ios"
        aria-selected="true">
        <i class="fa fa-apple"></i>
        Apple iOS
      </a>
    </li>

    <li class="nav-item">
      <a
        class="nav-link"
        [ngClass]="{ active: this.activeParams.includes('android') && this.deviceArray.length > 1 || this.deviceArray[0].deviceType == 'Android' }"
        id="pills-android-tab"
        data-toggle="pill"
        href="#pills-android"
        role="tab"
        aria-controls="pills-android"
        aria-selected="false">
        <i class="fa fa-android"></i>
        Android
      </a>
    </li>
  </ul>
  <div class="panel-body">
    <div class="tab-content" id="pills-tabContent">
      <div
        *ngIf="this.deviceArray[0].deviceType == 'iOS' || this.deviceArray.length > 1"
        class="tab-pane show"
        [ngClass]="{ active: !(this.activeParams.includes('android') && this.deviceArray.length > 1 || this.deviceArray[0].deviceType == 'Android') }"
        id="pills-ios"
        role="tabpanel"
        aria-labelledby="pills-ios-tab">

        <app-list path = "api/ios-apps"></app-list>

      </div>

      <div
        *ngIf="this.deviceArray[0].deviceType == 'Android' || this.deviceArray.length > 1"
        class="tab-pane show"
        [ngClass]="{ active: this.activeParams.includes('android') && this.deviceArray.length > 1 || this.deviceArray[0].deviceType == 'Android' }"
        id="pills-android"
        role="tabpanel"
        aria-labelledby="pills-android-tab">

        <app-list path = "api/android-apps"></app-list>

      </div>
    </div>
  </div>
</div> */}