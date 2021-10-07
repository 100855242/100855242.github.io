(self["webpackChunkfront_end"] = self["webpackChunkfront_end"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _components_Patient_add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Patient/add-patient/add-patient.component */ 7657);
/* harmony import */ var _components_Patient_edit_patient_edit_patient_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Patient/edit-patient/edit-patient.component */ 1483);
/* harmony import */ var _components_Patient_search_patient_search_patient_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Patient/search-patient/search-patient.component */ 8508);
/* harmony import */ var _components_Patient_view_patient_view_patient_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Patient/view-patient/view-patient.component */ 5956);
/* harmony import */ var _components_alert_page_alert_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/alert-page/alert-page.component */ 5083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);








const routes = [
    { path: '', redirectTo: 'patient/search', pathMatch: 'full' },
    { path: 'patient/add-patient', component: _components_Patient_add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_0__.AddPatientComponent },
    { path: 'patient/edit-patient/:id', component: _components_Patient_edit_patient_edit_patient_component__WEBPACK_IMPORTED_MODULE_1__.EditPatientComponent },
    { path: 'patient/view/:id', component: _components_Patient_view_patient_view_patient_component__WEBPACK_IMPORTED_MODULE_3__.ViewPatientComponent },
    { path: 'patient/search', component: _components_Patient_search_patient_search_patient_component__WEBPACK_IMPORTED_MODULE_2__.SearchPatientComponent },
    { path: 'alerts', component: _components_alert_page_alert_page_component__WEBPACK_IMPORTED_MODULE_4__.AlertPageComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ 6608);
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ 4726);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);




class AppComponent {
    constructor() { }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [["mode", "side", "opened", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-sidenav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__.MatSidenav, _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__.NavBarComponent, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__.MatSidenavContent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: ["mat-sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nmat-sidenav[_ngcontent-%COMP%], mat-sidenav-content[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  background-color: #1464b4;\n  border: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVFLFlBQUE7QUFERjs7QUFJQTtFQUVFLHVCQUFBO0FBRkY7O0FBS0E7RUFFRSx5QkFBQTtFQUNBLG1CQUFBO0FBSEYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tIE5hdiBCYXIgcHJvcGVydGllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG5tYXQtc2lkZW5hdi1jb250YWluZXJcclxue1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxubWF0LXNpZGVuYXYsIG1hdC1zaWRlbmF2LWNvbnRlbnRcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdlxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0NjRiNDtcclxuICBib3JkZXI6dHJhbnNwYXJlbnQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ 4726);
/* harmony import */ var _components_Patient_search_patient_search_patient_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Patient/search-patient/search-patient.component */ 8508);
/* harmony import */ var _components_Patient_add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Patient/add-patient/add-patient.component */ 7657);
/* harmony import */ var _components_Patient_view_patient_view_patient_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Patient/view-patient/view-patient.component */ 5956);
/* harmony import */ var _components_Patient_edit_patient_edit_patient_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Patient/edit-patient/edit-patient.component */ 1483);
/* harmony import */ var _components_Staff_add_staff_add_staff_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Staff/add-staff/add-staff.component */ 8595);
/* harmony import */ var _components_Staff_viewedit_staff_viewedit_staff_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Staff/viewedit-staff/viewedit-staff.component */ 6621);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ 4302);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sidenav */ 6608);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _components_alert_page_alert_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/alert-page/alert-page.component */ 5083);
/* harmony import */ var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/alert/alert.component */ 9803);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2316);












//routing

//api module for http get put and post requests


//Materials


//side nav

//buttons




class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__.AppRoutingModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__.MatSidenavModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__.BrowserAnimationsModule,
        ], _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__.NavBarComponent,
        _components_Patient_search_patient_search_patient_component__WEBPACK_IMPORTED_MODULE_2__.SearchPatientComponent,
        _components_Patient_add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_3__.AddPatientComponent,
        _components_Patient_view_patient_view_patient_component__WEBPACK_IMPORTED_MODULE_4__.ViewPatientComponent,
        _components_Patient_edit_patient_edit_patient_component__WEBPACK_IMPORTED_MODULE_5__.EditPatientComponent,
        _components_Staff_add_staff_add_staff_component__WEBPACK_IMPORTED_MODULE_6__.AddStaffComponent,
        _components_Staff_viewedit_staff_viewedit_staff_component__WEBPACK_IMPORTED_MODULE_7__.VieweditStaffComponent,
        _components_alert_page_alert_page_component__WEBPACK_IMPORTED_MODULE_9__.AlertPageComponent,
        _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_10__.AlertComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__.AppRoutingModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__.MatSidenavModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__.BrowserAnimationsModule], exports: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__.NavBarComponent,
        _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule] }); })();


/***/ }),

/***/ 7657:
/*!*************************************************************************!*\
  !*** ./src/app/components/Patient/add-patient/add-patient.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPatientComponent": () => (/* binding */ AddPatientComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_patient_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/patient-data.service */ 760);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_app_services_password_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/password.service */ 4688);
/* harmony import */ var src_app_services_categorymeasurement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/categorymeasurement.service */ 3193);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);








function AddPatientComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Success");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Successfully added a patient!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddPatientComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Unsuccesful");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Hospital number is already taken!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddPatientComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Unsuccesful");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Patient must be assigned to Indwelling Pleural Catheter Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddPatientComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Unsuccesful");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Please check the highlighted fields.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddPatientComponent_div_109_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddPatientComponent_div_109_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddPatientComponent_div_109_div_1_Template, 2, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddPatientComponent_div_109_Template_input_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.onChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddPatientComponent_div_109_Template_label_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r10.onChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.patientCategoriesForm.hasError("required", "1") && item_r6.categoryID == "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("id", item_r6.categoryID);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("formControlName", item_r6.categoryID);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("for", item_r6.categoryID);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r6.categoryName);
} }
function AddPatientComponent_div_116_div_8_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddPatientComponent_div_116_div_8_div_1_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const frequency_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngValue", frequency_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", frequency_r17, "");
} }
function AddPatientComponent_div_116_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AddPatientComponent_div_116_div_8_div_1_div_2_Template, 2, 0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "select", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, AddPatientComponent_div_116_div_8_div_1_option_7_Template, 2, 2, "option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const measurement_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const category_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r14.patientMeasurementsForm.hasError("required", "measurementID_4_CategoryID_1") && measurement_r13.measurementID == "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate2"]("id", "measurementID_", measurement_r13.measurementID, "_CategoryID_", category_r11.categoryID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate2"]("formControlName", "measurementID_", measurement_r13.measurementID, "_CategoryID_", category_r11.categoryID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate2"]("for", "measurementID_", measurement_r13.measurementID, "_CategoryID_", category_r11.categoryID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](measurement_r13.measurementName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate2"]("formControlName", "measurementID_", measurement_r13.measurementID, "_CategoryID_", category_r11.categoryID, "freq");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r14.frequencies);
} }
function AddPatientComponent_div_116_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddPatientComponent_div_116_div_8_div_1_Template, 8, 11, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const measurement_r13 = ctx.$implicit;
    const category_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", measurement_r13.categoryID == category_r11.categoryID);
} }
function AddPatientComponent_div_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Frequency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AddPatientComponent_div_116_div_8_Template, 2, 1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r11 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](category_r11.categoryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.measurements);
} }
class AddPatientComponent {
    constructor(patientDataService, route, passwordService, categoryMeasurementService) {
        this.patientDataService = patientDataService;
        this.route = route;
        this.passwordService = passwordService;
        this.categoryMeasurementService = categoryMeasurementService;
        this.frequencies = [1, 7, 14, 28, 30, 60, 90, 365];
        this.patientMeasurementsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({});
        this.patientCategoriesForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({});
        // patientCategory:patientCategory[];
        // patientMeasurement:patientMeasurement[];
        //--------- category measurements variables
        this.categories = [];
        this.measurements = [];
        this.isPatientExists = false;
        this.isPatientFormComplete = true;
        this.isIPC = false;
    }
    ngOnInit() {
        this.initializeForm();
        //todo get all the data you need once from patient categories and patient measurements
    }
    // custom validations in form builder example phone email ect
    initializeForm() {
        this.categoryMeasurementService.getCategories()
            .subscribe(data => {
            //data for html
            this.categories = data;
            //formGroup builder for measurements
            this.patientCategoriesForm = this.categoryMeasurementService.toFormGroupCategory(data);
            //at the moment IPC default is true so this will get the measurements for ipc
            this.onChange();
        });
        this.patientInformationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('Mr', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            urNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('123', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            givenName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('Test', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            familyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('Fake', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('Male', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('2020-05-01', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            countryOfBirth: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('Here', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            preferredLanguage: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('English', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('test@example.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('fake st', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            suburb: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('ringwood', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            postcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('3134', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            mobileNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('1234567890', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            homeNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('1234567890', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            livesAlone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false),
            active: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(true),
            //patientCategory
            //patientMeasurement
        });
    }
    onSubmit() {
        this.isPatientCreated = null;
        this.isPatientExists = null;
        this.isPatientFormComplete = null;
        // let output = this.categoryMeasurementService.getCurrentMeasurments()
        // If Valid
        ///TODO NULL CHECK HERE!
        if (this.patientInformationForm.valid && this.patientMeasurementsForm.valid && this.patientCategoriesForm.valid) {
            //Create Default password or password admin enters
            let passwordObject = {
                "givenName": this.patientInformationForm.value.givenName,
                "familyName": this.patientInformationForm.value.familyName,
                "dob": this.patientInformationForm.value.dob,
                "formPassword": this.patientInformationForm.value.password
            };
            //assigns password to password var
            this.password = this.passwordService.generateDefaultPassword(passwordObject);
            //assigns values from form to patient object
            this.patient = {
                "title": this.patientInformationForm.value.title,
                "urnumber": this.patientInformationForm.value.urNumber.toString(),
                "firstName": this.patientInformationForm.value.givenName,
                "surName": this.patientInformationForm.value.familyName,
                "gender": this.patientInformationForm.value.gender,
                "dob": this.patientInformationForm.value.dob,
                "countryOfBirth": this.patientInformationForm.value.countryOfBirth,
                "preferredLanguage": this.patientInformationForm.value.preferredLanguage,
                "email": this.patientInformationForm.value.email,
                "password": this.password,
                "address": this.patientInformationForm.value.address,
                "suburb": this.patientInformationForm.value.suburb,
                "postCode": this.patientInformationForm.value.postcode,
                "mobileNumber": this.patientInformationForm.value.mobileNumber,
                "homeNumber": this.patientInformationForm.value.homeNumber,
                "livesAlone": this.patientInformationForm.value.livesAlone,
                "active": this.patientInformationForm.value.active,
                "registeredBy": 1
            };
            //password object to display in FE
            //todo add timer so it disapears after a specific time
            this.password = `Email: ${this.patient.email} Password generated: ${this.password}`;
            //Function that creates the patient object this will be sent to the Backend
            this.patientObject = this.categoryMeasurementService
                .createPatientObject(this.patient, this.patientCategoriesForm.value, this.patientMeasurementsForm.value);
            console.log(this.patientCategoriesForm.value);
            console.log(this.patientMeasurementsForm.value);
            console.log(this.patientObject);
            //if category IPC is selected
            if (Object.values(this.patientCategoriesForm.value)[0]) {
                this.patientDataService
                    .addPatient(this.patientObject)
                    .subscribe((response) => {
                    if (response != false) {
                        this.isIPC = false;
                        this.isPatientExists = false;
                        this.isPatientFormComplete = true;
                        this.isPatientCreated = true;
                        this.patientInformationForm.reset();
                        this.patientCategoriesForm.reset();
                        this.patientMeasurementsForm.reset();
                    }
                }, (error) => {
                    console.log(error);
                    //if error is related to The backend returned an unsuccessful response code alert that patient already exists
                    error == false ? this.isPatientExists = true : this.isPatientExists = false;
                    this.isIPC = false;
                    this.isPatientFormComplete = true;
                });
                //if category ipc is not selected
            }
            else if (!Object.values(this.patientCategoriesForm.value)[0]) {
                this.isIPC = true;
                this.isPatientFormComplete = true;
                this.isPatientExists = false;
            }
        }
        else {
            this.isPatientCreated = false;
            this.isPatientFormComplete = false;
            this.isPatientExists = false;
        }
    }
    onChange() {
        this.categoryMeasurementService.getCategoryMeasurements(this.patientCategoriesForm.value)
            .subscribe(data => {
            this.measurements = data;
            this.patientMeasurementsForm = this.categoryMeasurementService.toFormGroupMeasurement(data, this.patientMeasurementsForm.value);
        });
    }
    onCancel() {
        this.route.navigate([`patient/search`]);
    }
    selectAll() {
        //todo
        // isAllSelected() {
        //   this.isMasterSel = this.categoryList.every(function(item:any) {
        //       return item.isSelected == true;
        //     })
        //   this.getCheckedItemList();
        // }
    }
}
AddPatientComponent.ɵfac = function AddPatientComponent_Factory(t) { return new (t || AddPatientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_patient_data_service__WEBPACK_IMPORTED_MODULE_0__.PatientDataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_password_service__WEBPACK_IMPORTED_MODULE_1__.PasswordService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_categorymeasurement_service__WEBPACK_IMPORTED_MODULE_2__.CategorymeasurementService)); };
AddPatientComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AddPatientComponent, selectors: [["app-add-patient"]], decls: 122, vars: 10, consts: [[1, "container"], ["class", "success", 4, "ngIf"], ["class", "fail", 4, "ngIf"], [1, "flex-row"], [1, "patient-information"], [1, "heading-2"], ["autocomplete", "off", 1, "outlined", 3, "formGroup", "ngSubmit"], ["formControlName", "title"], ["for", "hospital-number"], ["id", "hospital-number", "type", "number", "formControlName", "urNumber"], ["for", "given-name"], ["id", "given-name", "type", "search", "formControlName", "givenName"], ["for", "family-name"], ["id", "family-name", "type", "search", "formControlName", "familyName"], ["formControlName", "gender"], ["for", "dob"], ["id", "dob", "type", "date", "placeholder", "DD/MM/YYYY", "formControlName", "dob"], ["for", "country-of-birth"], ["formControlName", "countryOfBirth"], ["formControlName", "preferredLanguage"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email"], ["for", "password"], ["id", "password", "type", "text", "placeholder", "Default (Initals and DOB)", "formControlName", "password"], ["for", "street-address"], ["id", "street-address", "type", "text", "formControlName", "address"], ["for", "suburb"], ["id", "suburb", "type", "text", "formControlName", "suburb"], ["for", "postcode"], ["id", "postcode", "type", "text", "pattern", "[0-9]{4}", "formControlName", "postcode"], ["for", "mobile"], ["id", "mobile", "type", "text", "pattern", "[0-9]{10}", "formControlName", "mobileNumber"], ["for", "home"], ["id", "home", "type", "text", "pattern", "[0-9]{10}", "formControlName", "homeNumber"], ["for", "lives-alone"], ["id", "lives-alone", "type", "checkbox", "formControlName", "livesAlone"], ["for", "active"], ["id", "active", "type", "checkbox", "formControlName", "active"], [2, "margin-left", "40%"], [1, "categories-measurements"], [1, "flex-col"], [1, "categories"], [1, "outlined"], [4, "ngFor", "ngForOf"], [1, "measurements"], [1, "measurement-group"], ["autocomplete", "off", 1, "outlined", "category-measurements-container", 3, "formGroup", "ngSubmit"], [1, "button-container"], ["type", "button", 1, "buttonCancel", 3, "click"], ["type", "button", 1, "button-submit", 3, "click"], [1, "success"], [1, "alert-container"], ["src", "../../../assets/Images/checkmark.png", 1, "alert-icon"], [1, "fail"], ["src", "../../../assets/Images/Exclamation1.png", 1, "alert-icon"], ["style", "color: red; padding-top: 0.2rem; margin:10px;", 4, "ngIf"], ["type", "checkbox", 3, "id", "formControlName", "change"], [2, "width", "auto", 3, "for", "change"], [2, "color", "red", "padding-top", "0.2rem", "margin", "10px"], [1, "measurement-div"], [1, "heading-4"], ["class", "selection-offset-div", 4, "ngFor", "ngForOf"], [1, "selection-offset-div"], ["class", "measurement-div", 4, "ngIf"], [2, "width", "200px"], ["style", "color: red; padding-top: 0.2rem;", 4, "ngIf"], ["type", "checkbox", 3, "id", "formControlName"], [2, "width", "auto", 3, "for"], [3, "formControlName"], [3, "ngValue", 4, "ngFor", "ngForOf"], [2, "color", "red", "padding-top", "0.2rem"], [3, "ngValue"]], template: function AddPatientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddPatientComponent_div_1_Template, 9, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AddPatientComponent_div_2_Template, 9, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AddPatientComponent_div_3_Template, 9, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AddPatientComponent_div_4_Template, 9, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Patient Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function AddPatientComponent_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Mr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Mrs");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Dr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Hospital Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Given Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Family Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "D.O.B");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Country of Birth");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "There");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Preferred Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Gibberish");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "Street Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "Suburb");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](77, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "Postcode");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](81, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](85, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "Home Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](89, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, "Lives Alone");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](93, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](97, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](101, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, "Patient Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function AddPatientComponent_Template_form_ngSubmit_106_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](109, AddPatientComponent_div_109_Template, 5, 5, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, "Patient Measurements");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "form", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function AddPatientComponent_Template_form_ngSubmit_115_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](116, AddPatientComponent_div_116_Template, 9, 2, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddPatientComponent_Template_button_click_118_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddPatientComponent_Template_button_click_120_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "Add Patient");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isPatientCreated === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isPatientExists);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isIPC);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isPatientFormComplete == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.patientInformationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.patientCategoriesForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.patientMeasurementsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Arial, Helvetica, sans-serif, Courier, monospace;\n}\n\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\n.category-measurements-container[_ngcontent-%COMP%] {\n  height: 50vh;\n  overflow: scroll;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin: 5vh 0 1vh 0;\n}\n\n.heading-2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin: 1vh 0 1vh 0;\n  align-self: flex-start;\n}\n\n.heading-3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin: 1vh 0 1vh 0;\n}\n\n.heading-4[_ngcontent-%COMP%] {\n  margin-bottom: 1vh;\n}\n\n.flex-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.flex-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\ninput[_ngcontent-%COMP%]::placeholder {\n  color: gray;\n}\n\n.outlined[_ngcontent-%COMP%] {\n  border: lightgrey 1px solid;\n  border-radius: 2px;\n  padding: 10px;\n}\n\n.container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 85vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.contents[_ngcontent-%COMP%] {\n  height: 70vh;\n}\n\n.categories[_ngcontent-%COMP%]   .outlined[_ngcontent-%COMP%], .measurements[_ngcontent-%COMP%]   .outlined[_ngcontent-%COMP%] {\n  padding: 2vh 2vw;\n  max-height: 50vh;\n}\n\n.patient-information[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 2vh 2vw;\n  width: 30vw;\n  margin-top: 6vh;\n}\n\n.categories-measurements[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 2vh 2vw;\n  width: 30vw;\n  margin-top: 6vh;\n}\n\n.patient-information[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n  margin-bottom: 0.5vh;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.patient-information[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .patient-information[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  margin-left: 1vw;\n  margin-right: 10vw;\n  padding: 0.5vh 0.5vw;\n}\n\n.measurement-group[_ngcontent-%COMP%] {\n  margin-bottom: 2vh;\n}\n\n.selection-offset-div[_ngcontent-%COMP%] {\n  margin-left: 2vh;\n}\n\n.measurement-div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-top: 0.5vh;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 45%;\n  text-align: end;\n}\n\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: auto;\n  margin-left: 3%;\n  margin-right: 3%;\n  outline: none;\n  padding: 0.5vh;\n}\n\nform[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  padding-bottom: 0.5vh;\n}\n\nform[_ngcontent-%COMP%]   .ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border-right: 1px solid grey;\n  border-top: 1px solid grey;\n  border-bottom: 1px solid grey;\n  border-left: 3px solid red;\n  border-radius: 3px;\n}\n\n.button-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  margin-top: 3.5vh;\n  width: 60vw;\n}\n\nbutton[_ngcontent-%COMP%], .button-submit[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: larger;\n  background-color: #b41414;\n  border-radius: 10px;\n  border: none;\n  padding: 2vh 3vw;\n  text-align: center;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #da2323;\n}\n\n.button-submit[_ngcontent-%COMP%] {\n  background-color: #14B439;\n}\n\n.button-submit[_ngcontent-%COMP%]:hover {\n  background-color: #23da4d;\n}\n\n.success[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n  background-color: #d0f8b0;\n  width: 1%;\n}\n\n.alert-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-self: center;\n  padding-left: 0.5vw;\n  padding-right: 2vw;\n}\n\n.alert-icon[_ngcontent-%COMP%] {\n  height: 5vh;\n  margin-top: -1vh;\n}\n\n.success[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.success[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  padding-bottom: 2vh;\n  margin: 0;\n}\n\n.success[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-top: 2vh;\n}\n\n.fail[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n  background-color: #f8b0b0;\n  width: 1%;\n}\n\n.alert-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-self: center;\n  padding-left: 0.5vw;\n  padding-right: 2vw;\n}\n\n.alert-icon[_ngcontent-%COMP%] {\n  height: 5vh;\n  margin-top: -1vh;\n}\n\n.fail[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.fail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  padding-bottom: 2vh;\n  margin: 0;\n}\n\n.fail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-top: 2vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGZvbnRzLnNjc3MiLCJhZGQtcGF0aWVudC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGNvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBRUssWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSw2RENWVTtBQ01mOztBRlFBOztFQUVBLHdCQUFBO0VBQ0EsU0FBQTtBRUxBOztBRlFBO0VBQ0EsMEJBQUE7QUVMQTs7QUFiQTtFQUVFLFlBQUE7RUFDQSxnQkFBQTtBQWVGOztBQVZBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBYUY7O0FBVkE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFhRjs7QUFWQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFhRjs7QUFWQTtFQUNFLGtCQUFBO0FBYUY7O0FBUkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFXRjs7QUFSQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQVdGOztBQVJBO0VBQ0UsV0FBQTtBQVdGOztBQVJBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFXRjs7QUFSQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFXRjs7QUFSQTtFQUNFLFlBQUE7QUFXRjs7QUFSQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFXRjs7QUFKQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFPRjs7QUFKQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFPRjs7QUFKQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQU9GOztBQUpBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBT0Y7O0FBRkE7RUFDRSxrQkFBQTtBQUtGOztBQUZBO0VBQ0UsZ0JBQUE7QUFLRjs7QUFGQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUFLRjs7QUFDQTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFFRjs7QUFDQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBRUY7O0FBQ0E7RUFDRSxxQkFBQTtBQUVGOztBQUNBO0VBQ0UsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQzdKVTtFRDhKVixtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UseUJDdktvQjtBRHVLdEI7O0FBR0E7RUFDRSx5QkM3S1k7QUQ2S2Q7O0FBR0E7RUFDRSx5QkNoTHNCO0FEZ0x4Qjs7QUFNQTtFQUNFLHlCQUFBO0VBQ0EsU0FBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBSEE7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBSEY7O0FBTUE7RUFDRSxtQkFBQTtFQUNBLFNBQUE7QUFIRjs7QUFNQTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtBQUhGOztBQVFBO0VBQ0UseUJBQUE7RUFDQSxTQUFBO0FBTEY7O0FBUUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBTEY7O0FBUUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFMQTs7QUFRQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFMRjs7QUFRQTtFQUNFLG1CQUFBO0VBQ0EsU0FBQTtBQUxGOztBQVFBO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0FBTEYiLCJmaWxlIjoiYWRkLXBhdGllbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3R5bGVzL2NvbG9ycy5zY3NzXCI7XHJcbkBpbXBvcnQgXCJzdHlsZXMvZm9udHMuc2Nzc1wiO1xyXG5cclxuXHJcbmh0bWwsIGJvZHkgXHJcbntcclxuICAgICBoZWlnaHQ6IDEwMCU7IFxyXG4gICAgIG1hcmdpbjogMDtcclxuICAgICBwYWRkaW5nOiAwO1xyXG4gICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LXRleHQ7XHJcbn1cclxuXHJcbi8vIFJlbW92ZXMgYXJyb3dzIGZyb20gbnVtYmVyIGlucHV0c1xyXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XHJcbi13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxubWFyZ2luOiAwO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPW51bWJlcl17XHJcbi1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG59IiwiJHByaW1hcnktdGV4dDogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiwgQ291cmllciwgbW9ub3NwYWNlOyIsImh0bWwsIGJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cblxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXSB7XG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufVxuXG4uY2F0ZWdvcnktbWVhc3VyZW1lbnRzLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNTB2aDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLmhlYWRpbmcge1xuICBmb250LXNpemU6IDJyZW07XG4gIG1hcmdpbjogNXZoIDAgMXZoIDA7XG59XG5cbi5oZWFkaW5nLTIge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luOiAxdmggMCAxdmggMDtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbn1cblxuLmhlYWRpbmctMyB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBtYXJnaW46IDF2aCAwIDF2aCAwO1xufVxuXG4uaGVhZGluZy00IHtcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xufVxuXG4uZmxleC1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uZmxleC1jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogZ3JheTtcbn1cblxuLm91dGxpbmVkIHtcbiAgYm9yZGVyOiBsaWdodGdyZXkgMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA4NXZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGVudHMge1xuICBoZWlnaHQ6IDcwdmg7XG59XG5cbi5jYXRlZ29yaWVzIC5vdXRsaW5lZCwgLm1lYXN1cmVtZW50cyAub3V0bGluZWQge1xuICBwYWRkaW5nOiAydmggMnZ3O1xuICBtYXgtaGVpZ2h0OiA1MHZoO1xufVxuXG4ucGF0aWVudC1pbmZvcm1hdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDJ2aCAydnc7XG4gIHdpZHRoOiAzMHZ3O1xuICBtYXJnaW4tdG9wOiA2dmg7XG59XG5cbi5jYXRlZ29yaWVzLW1lYXN1cmVtZW50cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDJ2aCAydnc7XG4gIHdpZHRoOiAzMHZ3O1xuICBtYXJnaW4tdG9wOiA2dmg7XG59XG5cbi5wYXRpZW50LWluZm9ybWF0aW9uIC5mbGV4IHtcbiAgbWFyZ2luLWJvdHRvbTogMC41dmg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5wYXRpZW50LWluZm9ybWF0aW9uIC5mbGV4IGlucHV0LCAucGF0aWVudC1pbmZvcm1hdGlvbiAuZmxleCBzZWxlY3Qge1xuICBtYXJnaW4tbGVmdDogMXZ3O1xuICBtYXJnaW4tcmlnaHQ6IDEwdnc7XG4gIHBhZGRpbmc6IDAuNXZoIDAuNXZ3O1xufVxuXG4ubWVhc3VyZW1lbnQtZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAydmg7XG59XG5cbi5zZWxlY3Rpb24tb2Zmc2V0LWRpdiB7XG4gIG1hcmdpbi1sZWZ0OiAydmg7XG59XG5cbi5tZWFzdXJlbWVudC1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi10b3A6IDAuNXZoO1xufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDQ1JTtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuXG5mb3JtIGlucHV0LCBmb3JtIHNlbGVjdCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAzJTtcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMC41dmg7XG59XG5cbmZvcm0gKiB7XG4gIHBhZGRpbmctYm90dG9tOiAwLjV2aDtcbn1cblxuZm9ybSAubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JleTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyZXk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHJlZDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBtYXJnaW4tdG9wOiAzLjV2aDtcbiAgd2lkdGg6IDYwdnc7XG59XG5cbmJ1dHRvbiwgLmJ1dHRvbi1zdWJtaXQge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNDE0MTQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMnZoIDN2dztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYTIzMjM7XG59XG5cbi5idXR0b24tc3VibWl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0QjQzOTtcbn1cblxuLmJ1dHRvbi1zdWJtaXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjNkYTRkO1xufVxuXG4uc3VjY2VzcyA+IDpmaXJzdC1jaGlsZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMGY4YjA7XG4gIHdpZHRoOiAxJTtcbn1cblxuLmFsZXJ0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAwLjV2dztcbiAgcGFkZGluZy1yaWdodDogMnZ3O1xufVxuXG4uYWxlcnQtaWNvbiB7XG4gIGhlaWdodDogNXZoO1xuICBtYXJnaW4tdG9wOiAtMXZoO1xufVxuXG4uc3VjY2VzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnN1Y2Nlc3MgaDUge1xuICBwYWRkaW5nLWJvdHRvbTogMnZoO1xuICBtYXJnaW46IDA7XG59XG5cbi5zdWNjZXNzIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogMnZoO1xufVxuXG4uZmFpbCA+IDpmaXJzdC1jaGlsZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGIwYjA7XG4gIHdpZHRoOiAxJTtcbn1cblxuLmFsZXJ0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAwLjV2dztcbiAgcGFkZGluZy1yaWdodDogMnZ3O1xufVxuXG4uYWxlcnQtaWNvbiB7XG4gIGhlaWdodDogNXZoO1xuICBtYXJnaW4tdG9wOiAtMXZoO1xufVxuXG4uZmFpbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZhaWwgaDUge1xuICBwYWRkaW5nLWJvdHRvbTogMnZoO1xuICBtYXJnaW46IDA7XG59XG5cbi5mYWlsIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogMnZoO1xufSIsIiRwcmltYXJ5LWNvbG9yOiAjMTQ2NWI0O1xyXG4kcHJpbWFyeS1oaWdobGlnaHQtY29sb3I6ICMyMzk3ZGE7XHJcbiRncmVlbi1jb2xvcjogIzE0QjQzOTtcclxuJGdyZWVuLWhpZ2hsaWdodC1jb2xvcjogIzIzZGE0ZDtcclxuJHJlZC1oaWdobGlnaHQtY29sb3I6ICNkYTIzMjM7XHJcbiRyZWQtY29sb3I6ICNiNDE0MTQ7XHJcbiRncmVlbi1idXR0b24tY29sb3I6ICMxNEI0Mzk7XHJcblxyXG5cclxuICAiXX0= */"] });


/***/ }),

/***/ 1483:
/*!***************************************************************************!*\
  !*** ./src/app/components/Patient/edit-patient/edit-patient.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPatientComponent": () => (/* binding */ EditPatientComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_app_services_patient_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/patient-data.service */ 760);
/* harmony import */ var src_app_services_categorymeasurement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/categorymeasurement.service */ 3193);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);








function EditPatientComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Success");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Successfully added a patient!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditPatientComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Unsuccesful");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Please check the highlighted fields.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditPatientComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Unsuccesful");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "This Hospital Number belongs to another patient.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditPatientComponent_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const title_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", title_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", title_r7, " ");
} }
function EditPatientComponent_option_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gender_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", gender_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](gender_r8);
} }
function EditPatientComponent_div_90_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditPatientComponent_div_90_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EditPatientComponent_div_90_div_1_Template, 2, 0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function EditPatientComponent_div_90_Template_input_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.onChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.patientCategoriesForm.hasError("required", "1") && item_r9.categoryID == "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", item_r9.categoryID);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("formControlName", item_r9.categoryID);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("for", item_r9.categoryID);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r9.categoryName);
} }
function EditPatientComponent_div_97_div_8_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditPatientComponent_div_97_div_8_div_1_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const frequency_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", frequency_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", frequency_r19, "");
} }
function EditPatientComponent_div_97_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EditPatientComponent_div_97_div_8_div_1_div_2_Template, 2, 0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "select", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, EditPatientComponent_div_97_div_8_div_1_option_7_Template, 2, 2, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const measurement_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const category_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r16.patientMeasurementsForm.hasError("required", "measurementID_4_CategoryID_1") && measurement_r15.measurementID == "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("id", "measurementID_", measurement_r15.measurementID, "_CategoryID_", category_r13.categoryID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("formControlName", "measurementID_", measurement_r15.measurementID, "_CategoryID_", category_r13.categoryID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("for", "measurementID_", measurement_r15.measurementID, "_CategoryID_", category_r13.categoryID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](measurement_r15.measurementName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("formControlName", "measurementID_", measurement_r15.measurementID, "_CategoryID_", category_r13.categoryID, "freq");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r16.frequencies);
} }
function EditPatientComponent_div_97_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EditPatientComponent_div_97_div_8_div_1_Template, 8, 11, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const measurement_r15 = ctx.$implicit;
    const category_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", measurement_r15.categoryID == category_r13.categoryID);
} }
function EditPatientComponent_div_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Frequency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, EditPatientComponent_div_97_div_8_Template, 2, 1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r13 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](category_r13.categoryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.measurements);
} }
class EditPatientComponent {
    constructor(fb, router, activeRoute, patientdataServie, categoryMeasurementService, location) {
        this.fb = fb;
        this.router = router;
        this.activeRoute = activeRoute;
        this.patientdataServie = patientdataServie;
        this.categoryMeasurementService = categoryMeasurementService;
        this.location = location;
        this.titles = ['Mr', 'Mrs', 'Dr'];
        this.genders = ['Male', 'Female'];
        this.countryOfBirths = ['Here', 'There'];
        this.preferredLanguages = ['English', 'Gibberish'];
        this.frequencies = [1, 7, 14, 28, 30, 60, 90, 365];
        this.currentMeasurements = [];
        this.patientInformationEditForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            urNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            givenName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            familyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            countryOfBirth: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            preferredLanguage: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            suburb: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            postcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            mobileNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            homeNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            livesAlone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
            active: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
        });
        this.patientMeasurementsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({});
        this.patientCategoriesForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({});
        //--------- category measurements variables
        this.categories = [];
        this.measurements = [];
        this.success = false;
        this.fail = false;
        this.isPatient = false;
        this.activeRoute.params.subscribe(params => {
            this.currentPatientId = params.id;
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.patientdataServie.editPatientGet(this.currentPatientId)
                .then((data) => {
                this.patient = data;
                this.initializeForm(this.patient);
            });
        });
    }
    initializeForm(patient) {
        //---------------- converting dob so that it can be displayed --------------------//
        let query = /\d\d\d\d-\d\d-\d\d/g;
        let dob = patient.patient.dob.toString();
        dob = dob.match(query)[0];
        //----------------------- Getting all Categories from the database ----------------------//
        this.categoryMeasurementService.getCategories()
            .subscribe(data => {
            //data for html
            this.categories = data;
            //formGroup builder for measurements if not set default freq is set and checkbox set to false
            this.patientCategoriesForm = this.categoryMeasurementService.toFormGroupPatientCategories(data, this.patient.patientCategories);
            //------------------------------- gets the patients measurements -----------------------------------//
            this.onChange();
        });
        // get values for patient personal information
        this.patientInformationEditForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(patient.patient.title, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            urNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(patient.patient.urnumber, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            givenName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(patient.patient.firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            familyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(patient.patient.surName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(patient.patient.gender, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(dob, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            countryOfBirth: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(patient.patient.countryOfBirth, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            preferredLanguage: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(patient.patient.preferredLanguage, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(patient.patient.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(patient.patient.address, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            suburb: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(patient.patient.suburb, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            postcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(patient.patient.postCode, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            mobileNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(patient.patient.mobileNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            homeNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(patient.patient.homeNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            livesAlone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(patient.patient.livesAlone),
            active: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(patient.patient.active),
        });
    }
    onChange() {
        //get all the categoryMeasurements in the DB
        this.categoryMeasurementService.getCategoryMeasurements(this.patientCategoriesForm.value)
            .subscribe(data => {
            //assigns measurements
            this.measurements = data;
            //Creates Formgroups and form controls         
            //assigns the formgroup to variable
            this.patientMeasurementsForm = this.categoryMeasurementService.toFormGroupPatientMeasurements(this.measurements, this.patient.patientMeasurements, this.patientMeasurementsForm.value);
        });
    }
    onSubmit() {
        this.isPatient = false;
        this.success = this.fail = false;
        // If Valid
        if (this.patientInformationEditForm.valid && this.patientCategoriesForm.valid) {
            // console.log(this.patientInformationEditForm.value)
            // this.success = true;
            // this.patientInformationEditForm.reset();
            // console.log(this.patientInformationEditForm.value)
            //creates the patient details that will be sent to the API
            this.patient.patient = {
                "title": this.patientInformationEditForm.value.title,
                "urnumber": this.patientInformationEditForm.value.urNumber.toString(),
                "firstName": this.patientInformationEditForm.value.givenName,
                "surName": this.patientInformationEditForm.value.familyName,
                "gender": this.patientInformationEditForm.value.gender,
                "dob": this.patientInformationEditForm.value.dob,
                "countryOfBirth": this.patientInformationEditForm.value.countryOfBirth,
                "preferredLanguage": this.patientInformationEditForm.value.preferredLanguage,
                "email": this.patientInformationEditForm.value.email,
                "password": this.patientInformationEditForm.value.password,
                "address": this.patientInformationEditForm.value.address,
                "suburb": this.patientInformationEditForm.value.suburb,
                "postCode": this.patientInformationEditForm.value.postcode,
                "mobileNumber": this.patientInformationEditForm.value.mobileNumber,
                "homeNumber": this.patientInformationEditForm.value.homeNumber,
                "livesAlone": this.patientInformationEditForm.value.livesAlone,
                "active": this.patientInformationEditForm.value.active,
                "registeredBy": 1
            };
            //this creates the patient object that will be sent to the API  
            this.patient = this.categoryMeasurementService.createPatientObject(this.patient.patient, this.patientCategoriesForm.value, this.patientMeasurementsForm.value);
            console.log(this.patient);
            //seding to the api
            this.patientdataServie.editPatient(this.patient)
                //subscribe has event handler for errors
                .subscribe((response) => {
                this.passwordChangedOutput = `Password changed to: ${this.patient.patient.password}`;
                console.log(response);
            });
        }
        else {
            // this.success = this.failure
            this.fail = true;
        }
    }
    //insted of nav go back using previoud
    onCancel() {
        this.location.back();
    }
}
EditPatientComponent.ɵfac = function EditPatientComponent_Factory(t) { return new (t || EditPatientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_patient_data_service__WEBPACK_IMPORTED_MODULE_0__.PatientDataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_categorymeasurement_service__WEBPACK_IMPORTED_MODULE_1__.CategorymeasurementService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.Location)); };
EditPatientComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditPatientComponent, selectors: [["app-edit-patient"]], decls: 103, vars: 11, consts: [[1, "container"], ["class", "success", 4, "ngIf"], ["class", "fail", 4, "ngIf"], [1, "flex-row"], [1, "patient-information"], [1, "heading-2"], [1, "outlined", 3, "formGroup", "ngSubmit"], ["formControlName", "title"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["for", "ur-number"], ["id", "ur-number", "type", "number", "formControlName", "urNumber"], ["for", "given-name"], ["id", "given-name", "type", "text", "formControlName", "givenName"], ["for", "family-name"], ["id", "family-name", "type", "text", "formControlName", "familyName"], ["formControlName", "gender"], ["for", "dob"], ["id", "dob", "type", "date", "placeholder", "DD/MM/YYYY", "formControlName", "dob"], ["for", "country-of-birth"], ["id", "country-of-birth", "type", "text", "formControlName", "countryOfBirth"], ["for", "preferred-language"], ["id", "preferred-language", "type", "text", "formControlName", "preferredLanguage"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email"], ["for", "password"], ["id", "password", "type", "text", "placeholder", "Change password", "formControlName", "password"], ["for", "street-address"], ["id", "street-address", "type", "text", "formControlName", "address"], ["for", "suburb"], ["id", "suburb", "type", "text", "formControlName", "suburb"], ["for", "postcode"], ["id", "postcode", "pattern", "[0-9]{4}", "type", "number", "formControlName", "postcode"], ["for", "mobile"], ["id", "mobile", "type", "text", "pattern", "[0-9]{10}", "type", "number", "formControlName", "mobileNumber"], ["for", "home"], ["id", "home", "type", "text", "pattern", "[0-9]{10}", "type", "number", "formControlName", "homeNumber"], ["for", "lives-alone"], ["id", "lives-alone", "type", "checkbox", "formControlName", "livesAlone"], ["for", "active"], ["id", "active", "type", "checkbox", "formControlName", "active"], [2, "margin-left", "40%"], [1, "categories-measurements"], [1, "flex-col"], ["autocomplete", "off", 1, "outlined", 3, "formGroup", "ngSubmit"], [1, "categories"], [1, "outlined"], [4, "ngFor", "ngForOf"], [1, "measurements"], [1, "measurement-group"], ["autocomplete", "off", 1, "outlined", "category-measurements-container", 3, "formGroup", "ngSubmit"], [1, "button-container"], ["type", "button", 1, "button-cancel", 3, "click"], ["type", "submit", 1, "button-submit", 3, "click"], [1, "success"], [1, "alert-container"], ["src", "../../../assets/Images/checkmark.png", 1, "alert-icon"], [1, "fail"], ["src", "../../../assets/Images/Exclamation1.png", 1, "alert-icon"], [3, "ngValue"], ["style", "color: red; padding-top: 0.2rem; margin:10px;", 4, "ngIf"], ["type", "checkbox", 3, "id", "formControlName", "change"], [2, "width", "auto", 3, "for"], [2, "color", "red", "padding-top", "0.2rem", "margin", "10px"], [1, "measurement-div"], [1, "heading-4"], ["class", "selection-offset-div", 4, "ngFor", "ngForOf"], [1, "selection-offset-div"], ["class", "measurement-div", 4, "ngIf"], [2, "width", "200px"], ["style", "color: red; padding-top: 0.2rem;", 4, "ngIf"], ["type", "checkbox", 3, "id", "formControlName"], [3, "formControlName"], [2, "color", "red", "padding-top", "0.2rem"]], template: function EditPatientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EditPatientComponent_div_1_Template, 9, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EditPatientComponent_div_2_Template, 9, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, EditPatientComponent_div_3_Template, 9, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Patient Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function EditPatientComponent_Template_form_ngSubmit_8_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, EditPatientComponent_option_15_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Hospital Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Given Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Family Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, EditPatientComponent_option_32_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "D.O.B");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Country of Birth");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Preferred Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Street Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Suburb");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Postcode");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Home Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Lives Alone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Patient Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "form", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function EditPatientComponent_Template_form_ngSubmit_87_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](90, EditPatientComponent_div_90_Template, 5, 5, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "Patient Measurements");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "form", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function EditPatientComponent_Template_form_ngSubmit_96_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](97, EditPatientComponent_div_97_Template, 9, 2, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditPatientComponent_Template_button_click_99_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditPatientComponent_Template_button_click_101_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "Update Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.fail);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isPatient);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.patientInformationEditForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.titles);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.genders);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.passwordChangedOutput);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.patientCategoriesForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.patientMeasurementsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Arial, Helvetica, sans-serif, Courier, monospace;\n}\n\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin: 5vh 0 1vh 0;\n}\n\n.heading-2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin: 1vh 0 1vh 0;\n  align-self: flex-start;\n}\n\n.heading-3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin: 1vh 0 1vh 0;\n}\n\n.heading-4[_ngcontent-%COMP%] {\n  margin-bottom: 1vh;\n}\n\n.flex-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.flex-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\ninput[_ngcontent-%COMP%]::placeholder {\n  color: gray;\n}\n\n.outlined[_ngcontent-%COMP%] {\n  border: lightgrey 1px solid;\n  border-radius: 2px;\n  padding: 10px;\n}\n\n.container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 85vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.contents[_ngcontent-%COMP%] {\n  height: 70vh;\n}\n\n.categories[_ngcontent-%COMP%]   .outlined[_ngcontent-%COMP%], .measurements[_ngcontent-%COMP%]   .outlined[_ngcontent-%COMP%] {\n  padding: 2vh 2vw;\n  max-height: 50vh;\n}\n\n.patient-information[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 2vh 2vw;\n  width: 30vw;\n  margin-top: 6vh;\n}\n\n.categories-measurements[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 2vh 2vw;\n  width: 30vw;\n  margin-top: 6vh;\n}\n\n.patient-information[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n  margin-bottom: 0.5vh;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.patient-information[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .patient-information[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  margin-left: 1vw;\n  margin-right: 10vw;\n  padding: 0.5vh 0.5vw;\n}\n\n.measurement-group[_ngcontent-%COMP%] {\n  margin-bottom: 2vh;\n}\n\n.selection-offset-div[_ngcontent-%COMP%] {\n  margin-left: 2vh;\n}\n\n.measurement-div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-top: 0.5vh;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 45%;\n  text-align: end;\n}\n\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: auto;\n  margin-left: 3%;\n  margin-right: 3%;\n  outline: none;\n  padding: 0.5vh;\n}\n\nform[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  padding-bottom: 0.5vh;\n}\n\nform[_ngcontent-%COMP%]   .ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border-right: 1px solid grey;\n  border-top: 1px solid grey;\n  border-bottom: 1px solid grey;\n  border-left: 3px solid red;\n  border-radius: 3px;\n}\n\n.button-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  margin-top: 3.5vh;\n  width: 60vw;\n}\n\nbutton[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: larger;\n  border-radius: 10px;\n  border: none;\n  padding: 2vh 3vw;\n  text-align: center;\n  cursor: pointer;\n}\n\n.button-cancel[_ngcontent-%COMP%] {\n  background-color: #b41414;\n}\n\n.button-cancel[_ngcontent-%COMP%]:hover {\n  background-color: #da2323;\n}\n\n.button-submit[_ngcontent-%COMP%] {\n  background-color: #14B439;\n}\n\n.button-submit[_ngcontent-%COMP%]:hover {\n  background-color: #23da4d;\n}\n\n.success[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n  background-color: #d0f8b0;\n  width: 1%;\n}\n\n.alert-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-self: center;\n  padding-left: 0.5vw;\n  padding-right: 2vw;\n}\n\n.alert-icon[_ngcontent-%COMP%] {\n  height: 5vh;\n  margin-top: -1vh;\n}\n\n.success[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.success[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  padding-bottom: 2vh;\n  margin: 0;\n}\n\n.success[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-top: 2vh;\n}\n\n.fail[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n  background-color: #f8b0b0;\n  width: 1%;\n}\n\n.fail[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.fail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  padding-bottom: 2vh;\n  margin: 0;\n}\n\n.fail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-top: 2vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGZvbnRzLnNjc3MiLCJlZGl0LXBhdGllbnQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUVLLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkRDVlU7QUNNZjs7QUZRQTs7RUFFQSx3QkFBQTtFQUNBLFNBQUE7QUVMQTs7QUZRQTtFQUNBLDBCQUFBO0FFTEE7O0FBWkE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFlRjs7QUFaQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQWVGOztBQVpBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQWVGOztBQVpBO0VBQ0Usa0JBQUE7QUFlRjs7QUFWQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQWFGOztBQVZBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBYUY7O0FBVkE7RUFDRSxXQUFBO0FBYUY7O0FBVkE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQWFGOztBQVZBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQWFGOztBQVZBO0VBQ0UsWUFBQTtBQWFGOztBQVZBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQWFGOztBQU5BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQVNGOztBQU5BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQVNGOztBQU5BO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBU0Y7O0FBTEE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFRRjs7QUFKQTtFQUNFLGtCQUFBO0FBT0Y7O0FBSkE7RUFDRSxnQkFBQTtBQU9GOztBQUpBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQU9GOztBQURBO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUlGOztBQURBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFJRjs7QUFEQTtFQUNFLHFCQUFBO0FBSUY7O0FBREE7RUFDRSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FBSUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFFRjs7QUFDQTtFQUNFLHlCQzlKVTtBRGdLWjs7QUFDQTtFQUNFLHlCQ25Lb0I7QURxS3RCOztBQUNBO0VBQ0UseUJDektZO0FEMktkOztBQUNBO0VBQ0UseUJDNUtzQjtBRDhLeEI7O0FBSUE7RUFDRSx5QkFBQTtFQUNBLFNBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQURBOztBQUlBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7RUFDQSxTQUFBO0FBREY7O0FBSUE7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFNQTtFQUNFLHlCQUFBO0VBQ0EsU0FBQTtBQUhGOztBQU1BO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7RUFDQSxTQUFBO0FBSEY7O0FBTUE7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7QUFIRiIsImZpbGUiOiJlZGl0LXBhdGllbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3R5bGVzL2NvbG9ycy5zY3NzXCI7XHJcbkBpbXBvcnQgXCJzdHlsZXMvZm9udHMuc2Nzc1wiO1xyXG5cclxuXHJcbmh0bWwsIGJvZHkgXHJcbntcclxuICAgICBoZWlnaHQ6IDEwMCU7IFxyXG4gICAgIG1hcmdpbjogMDtcclxuICAgICBwYWRkaW5nOiAwO1xyXG4gICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LXRleHQ7XHJcbn1cclxuXHJcbi8vIFJlbW92ZXMgYXJyb3dzIGZyb20gbnVtYmVyIGlucHV0c1xyXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XHJcbi13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxubWFyZ2luOiAwO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPW51bWJlcl17XHJcbi1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG59IiwiJHByaW1hcnktdGV4dDogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiwgQ291cmllciwgbW9ub3NwYWNlOyIsImh0bWwsIGJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cblxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXSB7XG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufVxuXG4uaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luOiA1dmggMCAxdmggMDtcbn1cblxuLmhlYWRpbmctMiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW46IDF2aCAwIDF2aCAwO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xufVxuXG4uaGVhZGluZy0zIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIG1hcmdpbjogMXZoIDAgMXZoIDA7XG59XG5cbi5oZWFkaW5nLTQge1xuICBtYXJnaW4tYm90dG9tOiAxdmg7XG59XG5cbi5mbGV4LXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5mbGV4LWNvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4ub3V0bGluZWQge1xuICBib3JkZXI6IGxpZ2h0Z3JleSAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDg1dnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250ZW50cyB7XG4gIGhlaWdodDogNzB2aDtcbn1cblxuLmNhdGVnb3JpZXMgLm91dGxpbmVkLCAubWVhc3VyZW1lbnRzIC5vdXRsaW5lZCB7XG4gIHBhZGRpbmc6IDJ2aCAydnc7XG4gIG1heC1oZWlnaHQ6IDUwdmg7XG59XG5cbi5wYXRpZW50LWluZm9ybWF0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMnZoIDJ2dztcbiAgd2lkdGg6IDMwdnc7XG4gIG1hcmdpbi10b3A6IDZ2aDtcbn1cblxuLmNhdGVnb3JpZXMtbWVhc3VyZW1lbnRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMnZoIDJ2dztcbiAgd2lkdGg6IDMwdnc7XG4gIG1hcmdpbi10b3A6IDZ2aDtcbn1cblxuLnBhdGllbnQtaW5mb3JtYXRpb24gLmZsZXgge1xuICBtYXJnaW4tYm90dG9tOiAwLjV2aDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLnBhdGllbnQtaW5mb3JtYXRpb24gLmZsZXggaW5wdXQsIC5wYXRpZW50LWluZm9ybWF0aW9uIC5mbGV4IHNlbGVjdCB7XG4gIG1hcmdpbi1sZWZ0OiAxdnc7XG4gIG1hcmdpbi1yaWdodDogMTB2dztcbiAgcGFkZGluZzogMC41dmggMC41dnc7XG59XG5cbi5tZWFzdXJlbWVudC1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcbn1cblxuLnNlbGVjdGlvbi1vZmZzZXQtZGl2IHtcbiAgbWFyZ2luLWxlZnQ6IDJ2aDtcbn1cblxuLm1lYXN1cmVtZW50LWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLXRvcDogMC41dmg7XG59XG5cbmxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNDUlO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5cbmZvcm0gaW5wdXQsIGZvcm0gc2VsZWN0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDMlO1xuICBtYXJnaW4tcmlnaHQ6IDMlO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAwLjV2aDtcbn1cblxuZm9ybSAqIHtcbiAgcGFkZGluZy1ib3R0b206IDAuNXZoO1xufVxuXG5mb3JtIC5uZy10b3VjaGVkLm5nLWludmFsaWQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmV5O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JleTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgcmVkO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5idXR0b24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIG1hcmdpbi10b3A6IDMuNXZoO1xuICB3aWR0aDogNjB2dztcbn1cblxuYnV0dG9uIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDJ2aCAzdnc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnV0dG9uLWNhbmNlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNDE0MTQ7XG59XG5cbi5idXR0b24tY2FuY2VsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhMjMyMztcbn1cblxuLmJ1dHRvbi1zdWJtaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTRCNDM5O1xufVxuXG4uYnV0dG9uLXN1Ym1pdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyM2RhNGQ7XG59XG5cbi5zdWNjZXNzID4gOmZpcnN0LWNoaWxkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QwZjhiMDtcbiAgd2lkdGg6IDElO1xufVxuXG4uYWxlcnQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDAuNXZ3O1xuICBwYWRkaW5nLXJpZ2h0OiAydnc7XG59XG5cbi5hbGVydC1pY29uIHtcbiAgaGVpZ2h0OiA1dmg7XG4gIG1hcmdpbi10b3A6IC0xdmg7XG59XG5cbi5zdWNjZXNzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc3VjY2VzcyBoNSB7XG4gIHBhZGRpbmctYm90dG9tOiAydmg7XG4gIG1hcmdpbjogMDtcbn1cblxuLnN1Y2Nlc3MgaDMge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctdG9wOiAydmg7XG59XG5cbi5mYWlsID4gOmZpcnN0LWNoaWxkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4YjBiMDtcbiAgd2lkdGg6IDElO1xufVxuXG4uZmFpbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZhaWwgaDUge1xuICBwYWRkaW5nLWJvdHRvbTogMnZoO1xuICBtYXJnaW46IDA7XG59XG5cbi5mYWlsIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogMnZoO1xufSIsIiRwcmltYXJ5LWNvbG9yOiAjMTQ2NWI0O1xyXG4kcHJpbWFyeS1oaWdobGlnaHQtY29sb3I6ICMyMzk3ZGE7XHJcbiRncmVlbi1jb2xvcjogIzE0QjQzOTtcclxuJGdyZWVuLWhpZ2hsaWdodC1jb2xvcjogIzIzZGE0ZDtcclxuJHJlZC1oaWdobGlnaHQtY29sb3I6ICNkYTIzMjM7XHJcbiRyZWQtY29sb3I6ICNiNDE0MTQ7XHJcbiRncmVlbi1idXR0b24tY29sb3I6ICMxNEI0Mzk7XHJcblxyXG5cclxuICAiXX0= */"] });


/***/ }),

/***/ 8508:
/*!*******************************************************************************!*\
  !*** ./src/app/components/Patient/search-patient/search-patient.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPatientComponent": () => (/* binding */ SearchPatientComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_app_services_patient_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/patient-data.service */ 760);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 4302);






function SearchPatientComponent_div_39_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " UR Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchPatientComponent_div_39_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r16.urnumber, " ");
} }
function SearchPatientComponent_div_39_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Family Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchPatientComponent_div_39_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r17.firstName, " ");
} }
function SearchPatientComponent_div_39_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Given Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchPatientComponent_div_39_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r18.surName, " ");
} }
function SearchPatientComponent_div_39_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "th", 39);
} }
function SearchPatientComponent_div_39_td_13_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchPatientComponent_div_39_td_13_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const element_r19 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r20.navEditPatient(element_r19.urnumber); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchPatientComponent_div_39_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "th", 39);
} }
function SearchPatientComponent_div_39_td_16_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchPatientComponent_div_39_td_16_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const element_r22 = restoredCtx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r23.navSearchPatient(element_r22.urnumber); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchPatientComponent_div_39_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 42);
} }
function SearchPatientComponent_div_39_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 43);
} }
function SearchPatientComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SearchPatientComponent_div_39_th_3_Template, 2, 0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SearchPatientComponent_div_39_td_4_Template, 2, 1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](5, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SearchPatientComponent_div_39_th_6_Template, 2, 0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SearchPatientComponent_div_39_td_7_Template, 2, 1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](8, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SearchPatientComponent_div_39_th_9_Template, 2, 0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SearchPatientComponent_div_39_td_10_Template, 2, 1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](11, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SearchPatientComponent_div_39_th_12_Template, 1, 0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SearchPatientComponent_div_39_td_13_Template, 3, 0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](14, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, SearchPatientComponent_div_39_th_15_Template, 1, 0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, SearchPatientComponent_div_39_td_16_Template, 3, 0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, SearchPatientComponent_div_39_tr_17_Template, 1, 0, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, SearchPatientComponent_div_39_tr_18_Template, 1, 0, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r3.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r3.displayedColumns)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r3.displayedColumns);
} }
class SearchPatientComponent {
    constructor(formBuilder, route, patientDataService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.patientDataService = patientDataService;
        this.success = false;
        this.fail = false;
        this.displayedColumns = ['urNumber', 'familyName', 'givenName', 'edit', 'view'];
        this.isSearchTableShowing = false;
    }
    ngOnInit() {
        this.initializeForm();
        // let data = this.patientForm.value;
        //   this.patientDataService.getPatients(data.urNumber,data.isExactUrNumber,data.givenName,data.isExactGivenName,data.familyName,data.isExactFamilyName)
        //   .subscribe(
        //     (data:any) => {
        //       this.patients = data.rows;
        //       this.dataSource = data.rows;
        //     }
        //   )
        // this.patientDataService.getAllPatients().subscribe( data => {
        //   console.log(data);
        // })
    }
    initializeForm() {
        this.patientForm = this.formBuilder.group({
            searchgivenname: [''],
            searchfamilyname: [''],
            searchurnumber: [''],
            isExactGivenName: [false],
            isExactFamilyName: [false],
            isExactUrNumber: [false]
        });
    }
    onSubmit() {
        this.success = this.fail = false;
        if (this.patientForm.status == "VALID") {
            this.data = this.patientForm.value;
            //simplyfying the process here by making data a typed object that models the paramter list.
            console.log("from inside the onsubmit search patient", this.data);
            this.patientDataService.getSearchPatients(this.data)
                .subscribe((response) => {
                console.log("line 74", response);
                this.isSearchTableShowing = true;
                this.patients = response;
                this.dataSource = response;
                console.log(this.dataSource);
            }, error => {
                this.isSearchTableShowing = false;
                console.log("line 84 - no search input");
            });
        }
    }
    navEditPatient(id) {
        this.route.navigate([`patient/edit-patient/${id}`]);
    }
    navSearchPatient(id) {
        this.route.navigate([`patient/view/${id}`]);
    }
}
SearchPatientComponent.ɵfac = function SearchPatientComponent_Factory(t) { return new (t || SearchPatientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_patient_data_service__WEBPACK_IMPORTED_MODULE_0__.PatientDataService)); };
SearchPatientComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchPatientComponent, selectors: [["app-search-patient"]], decls: 40, vars: 2, consts: [[1, "container"], [1, "patient-search-container"], [3, "formGroup"], [1, "patient-search-row"], [1, "PSR-lablel"], ["for", "ur-number"], [1, "PSR-input"], ["id", "ur-number", "formControlName", "searchurnumber", "type", "text", 1, "input-text"], ["urNumber", ""], [1, "PSR-match"], ["id", "exact-urnumber", "type", "checkbox", "formControlName", "isExactUrNumber", "placeholder", "Exact match", 1, "input-checkbox"], ["for", "exact-urnumber"], ["for", "family-name"], ["id", "family-name", "formControlName", "searchfamilyname", "type", "text", 1, "input-text"], ["familyName", ""], ["id", "exact-family-name", "type", "checkbox", "formControlName", "isExactFamilyName", "placeholder", "Exact match", 1, "input-checkbox"], ["for", "exact-family-name"], ["for", "given-name-input"], ["id", "given-name-input", "formControlName", "searchgivenname", "type", "text", 1, "input-text"], ["givenName", ""], ["id", "PSRMatchInput", "type", "checkbox", "formControlName", "isExactGivenName", "placeholder", "Exact match", 1, "input-checkbox"], ["for", "PSRMatchInput"], [1, "flex"], [1, "search-button", 3, "click"], ["id", "tableContainer", 4, "ngIf"], ["id", "tableContainer"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "urNumber"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "familyName"], ["matColumnDef", "givenName"], ["matColumnDef", "edit"], ["mat-header-cell", "", "id", "emptyHeaders", 4, "matHeaderCellDef"], ["matColumnDef", "view"], ["mat-header-row", "", "id", "header-row", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", "class", "overview-rows", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", "id", "emptyHeaders"], ["type", "button", 1, "patient-edit-button", 3, "click"], ["type", "button", 1, "patient-view-button", 3, "click"], ["mat-header-row", "", "id", "header-row"], ["mat-row", "", 1, "overview-rows"]], template: function SearchPatientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "UR Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Exact match");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Family Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Exact match");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Given Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Exact match");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchPatientComponent_Template_button_click_37_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, SearchPatientComponent_div_39_Template, 19, 4, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.patientForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSearchTableShowing === true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Arial, Helvetica, sans-serif, Courier, monospace;\n}\n\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding-top: 1vh;\n  width: 85vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.mat-table[_ngcontent-%COMP%] {\n  width: 497.422;\n}\n\n#tableContainer[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow-y: scroll;\n  border-color: black;\n  border-width: thin;\n  border-style: solid;\n}\n\n#emptyHeaders[_ngcontent-%COMP%] {\n  width: 70px;\n}\n\nth[_ngcontent-%COMP%] {\n  width: auto;\n}\n\n.mat-cell[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n#header-row[_ngcontent-%COMP%] {\n  background-color: #1465b4;\n}\n\n.mat-header-cell[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 15px;\n  padding: 5px;\n  font-weight: bold;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.patient-search-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-top: 5vh;\n  margin-bottom: 5vh;\n}\n\n.patient-search-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin: 2vh 0vh 2vh 0vh;\n  width: 100%;\n}\n\n.PSR-lablel[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 28.3vw;\n  align-items: center;\n}\n\n.PSR-input[_ngcontent-%COMP%] {\n  display: flex;\n  width: 28.3vw;\n  align-items: center;\n}\n\n.PSR-match[_ngcontent-%COMP%] {\n  display: flex;\n  width: 28.3vw;\n  align-items: center;\n}\n\n.input-text[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 90%;\n  margin-left: 3%;\n  outline: none;\n  padding: 0.5vh;\n}\n\n.input-checkbox[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: auto;\n  margin: 0vw 1vw 0vw 0.5vw;\n  padding: 0.5vh;\n}\n\n.patient-list-container[_ngcontent-%COMP%] {\n  width: 40vw;\n  border: solid black 2px;\n  overflow-y: scroll;\n  height: 50vh;\n  background-color: #d9d9d9;\n}\n\ntd[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.search-button[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #1465b4;\n  border-radius: 5px;\n  border: none;\n  outline: none;\n  padding: 1.5vh 2.5vw;\n  margin-bottom: 6vh;\n  text-align: center;\n  cursor: pointer;\n}\n\n.patient-edit-button[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #1465b4;\n  border-radius: 5px;\n  border: none;\n  outline: none;\n  padding: 0.5vh 1.25vw;\n  text-align: center;\n  cursor: pointer;\n}\n\n.patient-view-button[_ngcontent-%COMP%] {\n  color: white;\n  background-color: green;\n  border-radius: 5px;\n  border: none;\n  outline: none;\n  padding: 0.5vh 1.25vw;\n  text-align: center;\n  cursor: pointer;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\n.heading-2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\n.heading-3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGZvbnRzLnNjc3MiLCJzZWFyY2gtcGF0aWVudC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGNvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBRUssWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSw2RENWVTtBQ01mOztBRlFBOztFQUVBLHdCQUFBO0VBQ0EsU0FBQTtBRUxBOztBRlFBO0VBQ0EsMEJBQUE7QUVMQTs7QUFkQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQWlCRjs7QUFaQTtFQUNFLGNBQUE7QUFlRjs7QUFaQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQWVGOztBQVpBO0VBQ0UsV0FBQTtBQWVGOztBQVpBO0VBQ0UsV0FBQTtBQWVGOztBQVpBO0VBQ0UsWUFBQTtBQWVGOztBQVpBO0VBQ0UseUJDdENjO0FEcURoQjs7QUFaQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBZUY7O0FBWkE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUFlRjs7QUFWQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFhRjs7QUFWQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQWFGOztBQVZBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBYUY7O0FBVkE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBYUY7O0FBVkE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBYUY7O0FBVkE7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFhRjs7QUFWQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQWFGOztBQVJBO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFXRjs7QUFSQTtFQUNFLFlBQUE7QUFXRjs7QUFSQTtFQUNFLFlBQUE7RUFDQSx5QkN4SGM7RUR5SGQsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFXRjs7QUFSQTtFQUNFLFlBQUE7RUFDQSx5QkNwSWM7RURxSWQsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBV0Y7O0FBUkE7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFXRjs7QUFSQTtFQUNFLGVBQUE7QUFXRjs7QUFUQTtFQUNFLGlCQUFBO0FBWUY7O0FBVkE7RUFDRSxpQkFBQTtBQWFGIiwiZmlsZSI6InNlYXJjaC1wYXRpZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInN0eWxlcy9jb2xvcnMuc2Nzc1wiO1xyXG5AaW1wb3J0IFwic3R5bGVzL2ZvbnRzLnNjc3NcIjtcclxuXHJcblxyXG5odG1sLCBib2R5IFxyXG57XHJcbiAgICAgaGVpZ2h0OiAxMDAlOyBcclxuICAgICBtYXJnaW46IDA7XHJcbiAgICAgcGFkZGluZzogMDtcclxuICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgIGZvbnQtZmFtaWx5OiAkcHJpbWFyeS10ZXh0O1xyXG59XHJcblxyXG4vLyBSZW1vdmVzIGFycm93cyBmcm9tIG51bWJlciBpbnB1dHNcclxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4td2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbm1hcmdpbjogMDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1udW1iZXJde1xyXG4tbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcclxufSIsIiRwcmltYXJ5LXRleHQ6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYsIENvdXJpZXIsIG1vbm9zcGFjZTsiLCJodG1sLCBib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmLCBDb3VyaWVyLCBtb25vc3BhY2U7XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAxdmg7XG4gIHdpZHRoOiA4NXZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWF0LXRhYmxlIHtcbiAgd2lkdGg6IDQ5Ny40MjI7XG59XG5cbiN0YWJsZUNvbnRhaW5lciB7XG4gIGhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG4jZW1wdHlIZWFkZXJzIHtcbiAgd2lkdGg6IDcwcHg7XG59XG5cbnRoIHtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5tYXQtY2VsbCB7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuI2hlYWRlci1yb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQ2NWI0O1xufVxuXG4ubWF0LWhlYWRlci1jZWxsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLnBhdGllbnQtc2VhcmNoLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiA1dmg7XG4gIG1hcmdpbi1ib3R0b206IDV2aDtcbn1cblxuLnBhdGllbnQtc2VhcmNoLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbjogMnZoIDB2aCAydmggMHZoO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLlBTUi1sYWJsZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB3aWR0aDogMjguM3Z3O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uUFNSLWlucHV0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDI4LjN2dztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLlBTUi1tYXRjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAyOC4zdnc7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbnB1dC10ZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogMyU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDAuNXZoO1xufVxuXG4uaW5wdXQtY2hlY2tib3gge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IDB2dyAxdncgMHZ3IDAuNXZ3O1xuICBwYWRkaW5nOiAwLjV2aDtcbn1cblxuLnBhdGllbnQtbGlzdC1jb250YWluZXIge1xuICB3aWR0aDogNDB2dztcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAycHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgaGVpZ2h0OiA1MHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDlkOWQ5O1xufVxuXG50ZCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnNlYXJjaC1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDY1YjQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAxLjV2aCAyLjV2dztcbiAgbWFyZ2luLWJvdHRvbTogNnZoO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBhdGllbnQtZWRpdC1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDY1YjQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAwLjV2aCAxLjI1dnc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucGF0aWVudC12aWV3LWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAwLjV2aCAxLjI1dnc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmhlYWRpbmctMiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uaGVhZGluZy0zIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59IiwiJHByaW1hcnktY29sb3I6ICMxNDY1YjQ7XHJcbiRwcmltYXJ5LWhpZ2hsaWdodC1jb2xvcjogIzIzOTdkYTtcclxuJGdyZWVuLWNvbG9yOiAjMTRCNDM5O1xyXG4kZ3JlZW4taGlnaGxpZ2h0LWNvbG9yOiAjMjNkYTRkO1xyXG4kcmVkLWhpZ2hsaWdodC1jb2xvcjogI2RhMjMyMztcclxuJHJlZC1jb2xvcjogI2I0MTQxNDtcclxuJGdyZWVuLWJ1dHRvbi1jb2xvcjogIzE0QjQzOTtcclxuXHJcblxyXG4gICJdfQ== */"] });


/***/ }),

/***/ 5956:
/*!***************************************************************************!*\
  !*** ./src/app/components/Patient/view-patient/view-patient.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewPatientComponent": () => (/* binding */ ViewPatientComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 4302);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2720);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_app_services_patient_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/patient-data.service */ 760);









function ViewPatientComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Success");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Successfully added a patient!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ViewPatientComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Unsuccesful");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Please check the highlighted fields.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ViewPatientComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.patient.urnumber == undefined ? "" : ctx_r2.patient.urnumber, "");
} }
function ViewPatientComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Active ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ViewPatientComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Innactive ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ViewPatientComponent_td_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, element_r16.dateTimeRecorded, "dd/MM/yyyy"), " ");
} }
function ViewPatientComponent_td_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r17.eCogStatus, " ");
} }
function ViewPatientComponent_td_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r18.breathlessness, " ");
} }
function ViewPatientComponent_td_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r19.levelOfPain, " ");
} }
function ViewPatientComponent_td_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r20.fluidDrain, " ");
} }
function ViewPatientComponent_td_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r21.mobility, " ");
} }
function ViewPatientComponent_td_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r22.selfCare, " ");
} }
function ViewPatientComponent_td_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r23.usualActivities, " ");
} }
function ViewPatientComponent_td_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r24.qolPainDiscomfort, " ");
} }
function ViewPatientComponent_td_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r25.anxietyDepression, " ");
} }
function ViewPatientComponent_td_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r26.healthSlider, " ");
} }
class ViewPatientComponent {
    constructor(fb, router, activeRoute, datePipe, patientDataService) {
        this.fb = fb;
        this.router = router;
        this.activeRoute = activeRoute;
        this.datePipe = datePipe;
        this.patientDataService = patientDataService;
        this.dataColumns = [
            'dateTimeRecorded',
            'ecogStatus',
            'breathlessness',
            'levelOfPain',
            'fluidDrain',
            'mobility',
            'selfCare',
            'usualActivities',
            'qolPainDiscomfort',
            'anxietyDepression',
            'healthSlider'
        ];
        this.labels = [
            'dateRecorded',
            'eCogStatus',
            'breathlessness',
            'levelOfPain',
            'fluidDrain',
            'mobility',
            'selfCare',
            'usualActivies',
            'painDiscomfort',
            'anxietyDepression',
            'qoLVasHealthSlider'
        ];
        this.displayedColumns = [];
        this.titles = ['Mr', 'Mrs', 'Dr'];
        this.genders = ['M', 'F'];
        this.countryOfBirths = ['Here', 'There'];
        this.preferredLanguages = ['English', 'Gibberish'];
        this.success = false;
        this.fail = false;
        this.activeRoute.params.subscribe(params => {
            this.currentPatientId = params.id;
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            //forkjoin or merge map to call both methods
            let req1 = this.patientDataService.getCurrentPatientDataInfo(this.currentPatientId);
            let req2 = this.patientDataService.getCurrentPatientData(this.currentPatientId);
            (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)([req1, req2]).subscribe(([data1, data2]) => {
                console.log(data1);
                this.patient = data1;
                //this.initializeForm(this.patient);
                this.data = data2;
                if (this.data) {
                    this.transpose();
                    this.fillLabels();
                }
            });
        });
    }
    transpose() {
        let transposedData = [];
        for (let column = 0; column < this.dataColumns.length; column++) {
            transposedData[column] = {
                label: this.labels[column]
            };
            for (let row = 0; row < this.data.length; row++) {
                transposedData[column][`column${row}`] = this.data[row][this.dataColumns[column]];
            }
            console.log("this is form inside the transpose", transposedData);
        }
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource(transposedData);
    }
    fillLabels() {
        this.displayedColumns = ['label'];
        for (let i = 0; i < this.data.length; i++) {
            this.displayedColumns.push('column' + i);
        }
    }
    scroll(event) {
        if (event.deltaY > 0)
            document.getElementById('tablecont').scrollLeft += 40;
        else
            document.getElementById('tablecont').scrollLeft -= 40;
        event.preventDefault();
    }
}
ViewPatientComponent.ɵfac = function ViewPatientComponent_Factory(t) { return new (t || ViewPatientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_patient_data_service__WEBPACK_IMPORTED_MODULE_0__.PatientDataService)); };
ViewPatientComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ViewPatientComponent, selectors: [["app-view-patient"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe])], decls: 113, vars: 23, consts: [[1, "container"], ["class", "success", 4, "ngIf"], ["class", "fail", 4, "ngIf"], [1, "flexCol"], [1, "flexRow"], [1, "patient-information-container"], [1, "heading-2"], [1, "outlined"], [1, "patient-information-column-first"], [1, "patient-information-row"], ["class", "information-first-column", "style", "font-weight: bold; font-size: x-large;", 4, "ngIf"], [1, "information-first-column"], [1, "patient-information-column-secondandthird"], [1, "patient-information-column-second"], ["class", "information", "style", "color: chartreuse; font-weight: bold;", 4, "ngIf"], ["class", "information", "style", "color: red; font-weight: bold;", 4, "ngIf"], [1, "information"], [1, "patient-information-column-third"], [1, "patient-information-container", 2, "margin-top", "-3vh"], [1, "heading-2", 2, "margin-bottom", "2vh"], ["id", "tablecont", 1, "table-container", 3, "wheel"], [1, "table-header-cell"], ["class", "table-cell-date", 4, "ngFor", "ngForOf"], ["class", "table-cell", 4, "ngFor", "ngForOf"], [1, "buttonContainer"], [1, "buttonSubmit"], [1, "success"], [1, "AlertContainer"], ["src", "../../../assets/Images/checkmark.png", 1, "AlertIcon"], [1, "fail"], ["src", "../../../assets/Images/Exclamation1.png", 1, "AlertIcon"], [1, "information-first-column", 2, "font-weight", "bold", "font-size", "x-large"], [1, "information", 2, "color", "chartreuse", "font-weight", "bold"], [1, "information", 2, "color", "red", "font-weight", "bold"], [1, "table-cell-date"], [1, "table-cell"]], template: function ViewPatientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ViewPatientComponent_div_1_Template, 9, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ViewPatientComponent_div_2_Template, 9, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Patient Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ViewPatientComponent_div_12_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Status: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ViewPatientComponent_div_25_Template, 2, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ViewPatientComponent_div_26_Template, 2, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Category: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "IPC");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Cancer Type: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "haematologic malignancy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Date of Insertion: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "22 / 04 / 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Removal Date: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "2 / 06 / 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Chemical pleurodesis: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "14 / 07 / 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Patient Measurements");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("wheel", function ViewPatientComponent_Template_div_wheel_62_listener($event) { return ctx.scroll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " Date Recorded");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, ViewPatientComponent_td_67_Template, 3, 4, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "ECOG Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, ViewPatientComponent_td_71_Template, 2, 1, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Breathlessness");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, ViewPatientComponent_td_75_Template, 2, 1, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Level of Pain");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, ViewPatientComponent_td_79_Template, 2, 1, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Fluid Drain");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](83, ViewPatientComponent_td_83_Template, 2, 1, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "QoL Mobility");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](87, ViewPatientComponent_td_87_Template, 2, 1, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "QoL Self Care");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](91, ViewPatientComponent_td_91_Template, 2, 1, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "QoL Usual Activies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](95, ViewPatientComponent_td_95_Template, 2, 1, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "QoL Pain Discomfort");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](99, ViewPatientComponent_td_99_Template, 2, 1, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "QoL Anxiety Depression");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](103, ViewPatientComponent_td_103_Template, 2, 1, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "QoL Vas Health Slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](107, ViewPatientComponent_td_107_Template, 2, 1, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, " Export Data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, " Edit Patient ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fail);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.patient);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", ctx.patient.title, " ", ctx.patient.firstName, " ", ctx.patient.surName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](19, 20, ctx.patient.dob, "dd-MM-yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.patient.active === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.patient.active === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: ["*[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif, Courier, monospace;\n}\n\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\ninput[_ngcontent-%COMP%] {\n  cursor: default;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin: 5vh 0 1vh 0;\n}\n\n.heading-2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin: 1vh 0 1vh 0;\n  align-self: flex-start;\n}\n\n.heading-3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin: 1vh 0 1vh 0;\n}\n\n.heading-4[_ngcontent-%COMP%] {\n  margin-bottom: 1vh;\n}\n\n.flexRow[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.flexCol[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\ninput[_ngcontent-%COMP%]::placeholder {\n  color: gray;\n}\n\n.outlined[_ngcontent-%COMP%] {\n  border: lightgrey 1px solid;\n  border-radius: 2px;\n}\n\n.container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 85vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.contents[_ngcontent-%COMP%] {\n  height: 70vh;\n}\n\n.categories[_ngcontent-%COMP%]   .outlined[_ngcontent-%COMP%], .measurements[_ngcontent-%COMP%]   .outlined[_ngcontent-%COMP%] {\n  padding: 2vh 2vw;\n  max-height: 50vh;\n}\n\n.patient-information-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 2vh 2vw;\n  width: 70vw;\n  color: #636363;\n}\n\n.patient-information-column-first[_ngcontent-%COMP%], .patient-information-column-second[_ngcontent-%COMP%], .patient-information-column-third[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-top: 1vh;\n  padding-bottom: 1vh;\n  background-color: #f9f9f9;\n}\n\n.patient-information-column-first[_ngcontent-%COMP%] {\n  width: 230px;\n  background-color: #1464b4;\n  padding-left: 1vw;\n}\n\n.patient-information-column-secondandthird[_ngcontent-%COMP%] {\n  width: 57vw;\n  display: flex;\n  flex-direction: row;\n  background-color: #f9f9f9;\n}\n\n.patient-information-column-second[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 10vw;\n}\n\n.patient-information-column-second[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%] {\n  width: 15vw;\n}\n\n.patient-information-column-third[_ngcontent-%COMP%] {\n  width: 50vw;\n}\n\n.patient-information-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin: 0.5vh;\n}\n\nlabel[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: end;\n  font-weight: bold;\n  color: #636363;\n}\n\n.information[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-left: 0.5vh;\n}\n\n.information-first-column[_ngcontent-%COMP%] {\n  font-size: larger;\n  color: #f9f9f9;\n}\n\n.categories-measurements[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 2vh 2vw;\n  width: 70vw;\n  margin-top: 6vh;\n}\n\n.measurement-group[_ngcontent-%COMP%] {\n  margin-bottom: 2vh;\n}\n\n.selection-offset-div[_ngcontent-%COMP%] {\n  margin-left: 2vh;\n}\n\n.measurementDiv[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-top: 0.5vh;\n}\n\n.patient-measurement-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 2vh 2vw;\n  width: 70vw;\n  margin-top: 6vh;\n  color: #636363;\n}\n\ntable[_ngcontent-%COMP%] {\n  border-spacing: 0px;\n  border-style: none;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  overflow-y: none;\n  overflow-x: scroll;\n  border-color: #aaaaaa;\n  border-width: 0.01px;\n  border-style: solid;\n}\n\n.table-cell[_ngcontent-%COMP%], .table-cell-date[_ngcontent-%COMP%] {\n  padding: 0.5vw 1vw 0.5vw 1vw;\n  border-bottom: 0.01px solid #aaaaaa;\n  color: #636363;\n  text-align: center;\n  background-color: #f9f9f9;\n  min-height: 3vh;\n  width: auto;\n}\n\n.table-cell-date[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.table-header-cell[_ngcontent-%COMP%] {\n  min-height: 3vh;\n  width: 200px;\n  font-size: large;\n  color: #f9f9f9;\n  font-weight: 400;\n  text-align: end;\n  justify-content: center;\n  background-color: #1464b4;\n  padding: 10px 15px 5px 15px;\n  border-bottom: 0.1px solid #1464b4;\n  display: flex;\n  flex-direction: column;\n  position: sticky;\n  left: 0;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  background-color: #1464b4;\n  height: 20px;\n  cursor: pointer;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  margin-left: 230px;\n  background-color: #ffffff;\n  background-clip: content-box;\n  cursor: pointer;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #636363;\n  border-radius: 10px;\n  border: 4px solid white;\n  cursor: pointer;\n  width: 10px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #a1a1a1;\n  cursor: pointer;\n}\n\n.buttonContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  width: 70vw;\n  padding: 2vh 2vw;\n}\n\nbutton[_ngcontent-%COMP%], .buttonSubmit[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: larger;\n  background-color: #1465b4;\n  border-radius: 10px;\n  border: none;\n  padding: 2vh 3vw;\n  text-align: center;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #1d7ad8;\n}\n\n.buttonSubmit[_ngcontent-%COMP%] {\n  background-color: #14b439;\n}\n\n.buttonSubmit[_ngcontent-%COMP%]:hover {\n  background-color: #23da4d;\n}\n\n.success[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n  background-color: #d0f8b0;\n  width: 1%;\n}\n\n.AlertContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-self: center;\n  padding-left: 0.5vw;\n  padding-right: 2vw;\n}\n\n.AlertIcon[_ngcontent-%COMP%] {\n  height: 5vh;\n  margin-top: -1vh;\n}\n\n.success[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.success[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  padding-bottom: 2vh;\n  margin: 0;\n}\n\n.success[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-top: 2vh;\n}\n\n.fail[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n  background-color: #f8b0b0;\n  width: 1%;\n}\n\n.AlertContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-self: center;\n  padding-left: 0.5vw;\n  padding-right: 2vw;\n}\n\n.AlertIcon[_ngcontent-%COMP%] {\n  height: 5vh;\n  margin-top: -1vh;\n}\n\n.fail[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.fail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  padding-bottom: 2vh;\n  margin: 0;\n}\n\n.fail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-top: 2vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctcGF0aWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLDZEQUFBO0FBREY7O0FBTUE7O0VBRUUsd0JBQUE7RUFDQSxTQUFBO0FBSEY7O0FBTUE7RUFDRSwwQkFBQTtBQUhGOztBQU9BO0VBQ0UsZUFBQTtBQUpGOztBQVNBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBTkY7O0FBU0E7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFORjs7QUFTQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFORjs7QUFTQTtFQUNFLGtCQUFBO0FBTkY7O0FBV0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFSRjs7QUFXQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQVJGOztBQVdBO0VBQ0UsV0FBQTtBQVJGOztBQVdBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtBQVJGOztBQVdBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQVJGOztBQVdBO0VBQ0UsWUFBQTtBQVJGOztBQVdBOztFQUVFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFSRjs7QUFjQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUVBLGNBQUE7QUFaRjs7QUFlQTs7O0VBR0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBWkY7O0FBZUE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQVpGOztBQWVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBWkY7O0FBZUE7RUFDRSxXQUFBO0FBWkY7O0FBZUE7RUFDRSxXQUFBO0FBWkY7O0FBZUE7RUFDRSxXQUFBO0FBWkY7O0FBZUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBWkY7O0FBZUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVpGOztBQWVBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FBWkY7O0FBZUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFaRjs7QUFlQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFaRjs7QUFpQkE7RUFDRSxrQkFBQTtBQWRGOztBQWlCQTtFQUNFLGdCQUFBO0FBZEY7O0FBaUJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQWRGOztBQW1CQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBaEJGOztBQW1CQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFoQkY7O0FBbUJBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQWhCRjs7QUFtQkE7O0VBRUUsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFoQkY7O0FBbUJBO0VBQ0UsZ0JBQUE7QUFoQkY7O0FBbUJBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsT0FBQTtBQWhCRjs7QUFzQkEsVUFBQTs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFuQkY7O0FBc0JBLFVBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0FBbkJGOztBQXNCQSxXQUFBOztBQUNBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFuQkY7O0FBc0JBLG9CQUFBOztBQUNBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBbkJGOztBQXdCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBRUEsV0FBQTtFQUNBLGdCQUFBO0FBdEJGOztBQXlCQTs7RUFFRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBdEJGOztBQXlCQTtFQUNFLHlCQUFBO0FBdEJGOztBQXlCQTtFQUNFLHlCQUFBO0FBdEJGOztBQXlCQTtFQUNFLHlCQUFBO0FBdEJGOztBQTRCQTtFQUNFLHlCQUFBO0VBQ0EsU0FBQTtBQXpCRjs7QUE0QkE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBekJGOztBQTRCQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQXpCRjs7QUE0QkE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBekJGOztBQTRCQTtFQUNFLG1CQUFBO0VBQ0EsU0FBQTtBQXpCRjs7QUE0QkE7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7QUF6QkY7O0FBOEJBO0VBQ0UseUJBQUE7RUFDQSxTQUFBO0FBM0JGOztBQThCQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUEzQkY7O0FBOEJBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBM0JGOztBQThCQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUEzQkY7O0FBOEJBO0VBQ0UsbUJBQUE7RUFDQSxTQUFBO0FBM0JGOztBQThCQTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtBQTNCRiIsImZpbGUiOiJ2aWV3LXBhdGllbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLSBQb3NzaWJsZSBHbG9iYWwgU3R5bGVzIC0tLS0tLS0tLS8vXHJcblxyXG4qIHtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiwgQ291cmllciwgbW9ub3NwYWNlO1xyXG4gIC8vIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4vLyBSZW1vdmVzIGFycm93cyBmcm9tIG51bWJlciBpbnB1dHNcclxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cIm51bWJlclwiXSB7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tIElucHV0IGZpZWxkIFJlYWQgb25seSBmb3Igbm93IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXHJcbmlucHV0IHtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tSGVhZGluZ3MtLS0tLS0tLS0vL1xyXG5cclxuLmhlYWRpbmcge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBtYXJnaW46IDV2aCAwIDF2aCAwO1xyXG59XHJcblxyXG4uaGVhZGluZy0yIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBtYXJnaW46IDF2aCAwIDF2aCAwO1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5oZWFkaW5nLTMge1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIG1hcmdpbjogMXZoIDAgMXZoIDA7XHJcbn1cclxuXHJcbi5oZWFkaW5nLTQge1xyXG4gIG1hcmdpbi1ib3R0b206IDF2aDtcclxufVxyXG5cclxuLy8tLS0tLS0tLS1HZW5lcmFsLS0tLS0tLS0tLy9cclxuXHJcbi5mbGV4Um93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5mbGV4Q29sIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbmlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi5vdXRsaW5lZCB7XHJcbiAgYm9yZGVyOiBsaWdodGdyZXkgMXB4IHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiA4NXZ3O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVudHMge1xyXG4gIGhlaWdodDogNzB2aDtcclxufVxyXG5cclxuLmNhdGVnb3JpZXMgLm91dGxpbmVkLFxyXG4ubWVhc3VyZW1lbnRzIC5vdXRsaW5lZCB7XHJcbiAgcGFkZGluZzogMnZoIDJ2dztcclxuICBtYXgtaGVpZ2h0OiA1MHZoO1xyXG4gIC8vIGhlaWdodDogNTB2aDtcclxufVxyXG5cclxuLy8tLS0tLS0tLS1QYXRpZW50IEluZm8tLS0tLS0tLS0vL1xyXG5cclxuLnBhdGllbnQtaW5mb3JtYXRpb24tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogMnZoIDJ2dztcclxuICB3aWR0aDogNzB2dztcclxuICAvLyBtYXJnaW4tdG9wOiA2dmg7XHJcbiAgY29sb3I6ICM2MzYzNjM7XHJcbn1cclxuXHJcbi5wYXRpZW50LWluZm9ybWF0aW9uLWNvbHVtbi1maXJzdCxcclxuLnBhdGllbnQtaW5mb3JtYXRpb24tY29sdW1uLXNlY29uZCxcclxuLnBhdGllbnQtaW5mb3JtYXRpb24tY29sdW1uLXRoaXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZy10b3A6IDF2aDtcclxuICBwYWRkaW5nLWJvdHRvbTogMXZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbn1cclxuXHJcbi5wYXRpZW50LWluZm9ybWF0aW9uLWNvbHVtbi1maXJzdCB7XHJcbiAgd2lkdGg6IDIzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDY0YjQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxdnc7XHJcbiAgXHJcbn1cclxuLnBhdGllbnQtaW5mb3JtYXRpb24tY29sdW1uLXNlY29uZGFuZHRoaXJkIHtcclxuICB3aWR0aDogNTd2dztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxufVxyXG5cclxuLnBhdGllbnQtaW5mb3JtYXRpb24tY29sdW1uLXNlY29uZCBsYWJlbCB7XHJcbiAgd2lkdGg6IDEwdnc7XHJcbn1cclxuXHJcbi5wYXRpZW50LWluZm9ybWF0aW9uLWNvbHVtbi1zZWNvbmQgLmluZm9ybWF0aW9uIHtcclxuICB3aWR0aDogMTV2dztcclxufVxyXG5cclxuLnBhdGllbnQtaW5mb3JtYXRpb24tY29sdW1uLXRoaXJkIHtcclxuICB3aWR0aDogNTB2dztcclxufVxyXG5cclxuLnBhdGllbnQtaW5mb3JtYXRpb24tcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgbWFyZ2luOiAwLjV2aDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjNjM2MzYzO1xyXG59XHJcblxyXG4uaW5mb3JtYXRpb24ge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNXZoO1xyXG59XHJcblxyXG4uaW5mb3JtYXRpb24tZmlyc3QtY29sdW1uIHtcclxuICBmb250LXNpemU6IGxhcmdlcjtcclxuICBjb2xvcjogI2Y5ZjlmOTtcclxufVxyXG5cclxuLmNhdGVnb3JpZXMtbWVhc3VyZW1lbnRzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogMnZoIDJ2dztcclxuICB3aWR0aDogNzB2dztcclxuICBtYXJnaW4tdG9wOiA2dmg7XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tUGF0aWVudCBNZWFzdXJlbWVudHMgLS0tLS0tLS0tLy9cclxuXHJcbi5tZWFzdXJlbWVudC1ncm91cCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnZoO1xyXG59XHJcblxyXG4uc2VsZWN0aW9uLW9mZnNldC1kaXYge1xyXG4gIG1hcmdpbi1sZWZ0OiAydmg7XHJcbn1cclxuXHJcbi5tZWFzdXJlbWVudERpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tdG9wOiAwLjV2aDtcclxufVxyXG5cclxuLy8tLS0tLS0tLS1EYXRhdGFibGUtLS0tLS0tLS0vL1xyXG5cclxuLnBhdGllbnQtbWVhc3VyZW1lbnQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogMnZoIDJ2dztcclxuICB3aWR0aDogNzB2dztcclxuICBtYXJnaW4tdG9wOiA2dmg7XHJcbiAgY29sb3I6ICM2MzYzNjM7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICBib3JkZXItc3BhY2luZzogMHB4O1xyXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgb3ZlcmZsb3cteTogbm9uZTtcclxuICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYWFhYWFhO1xyXG4gIGJvcmRlci13aWR0aDogMC4wMXB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbn1cclxuXHJcbi50YWJsZS1jZWxsLFxyXG4udGFibGUtY2VsbC1kYXRlIHtcclxuICBwYWRkaW5nOiAwLjV2dyAxdncgMC41dncgMXZ3O1xyXG4gIGJvcmRlci1ib3R0b206IDAuMDFweCBzb2xpZCAjYWFhYWFhO1xyXG4gIGNvbG9yOiAjNjM2MzYzO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gIG1pbi1oZWlnaHQ6IDN2aDtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLnRhYmxlLWNlbGwtZGF0ZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnRhYmxlLWhlYWRlci1jZWxsIHtcclxuICBtaW4taGVpZ2h0OiAzdmg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgY29sb3I6ICNmOWY5Zjk7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0NjRiNDtcclxuICBwYWRkaW5nOiAgMTBweCAxNXB4IDVweCAxNXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDAuMXB4IHNvbGlkICMxNDY0YjQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuXHJcbi8vLS0tLS0tLSBDdXN0b20gU2Nyb2xsIEJhciAtLS0tLS0vL1xyXG5cclxuLyogd2lkdGggKi9cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0NjRiNDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyOyAvLyB3aHkgdGhpcyBubyB3b3JrP1xyXG59XHJcblxyXG4vKiBUcmFjayAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBtYXJnaW4tbGVmdDogMjMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94OyAgIFxyXG4gIGN1cnNvcjogcG9pbnRlcjsgLy8gd2h5IHRoaXMgbm8gd29yaz9cclxufVxyXG4gXHJcbi8qIEhhbmRsZSAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjNjM2MzYzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyOiA0cHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjsgLy8gd2h5IHRoaXMgbm8gd29yaz9cclxuICB3aWR0aDogMTBweDtcclxufVxyXG5cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYigxNjEsIDE2MSwgMTYxKTsgXHJcbiAgY3Vyc29yOiBwb2ludGVyOyAvLyB3aHkgdGhpcyBubyB3b3JrP1xyXG59XHJcblxyXG4vLy0tLS0tLS0tLUJ1dHRvbnMtLS0tLS0tLS0vL1xyXG5cclxuLmJ1dHRvbkNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIC8vIG1hcmdpbi10b3A6IDN2aDtcclxuICB3aWR0aDogNzB2dztcclxuICBwYWRkaW5nOiAydmggMnZ3O1xyXG59XHJcblxyXG5idXR0b24sXHJcbi5idXR0b25TdWJtaXQge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDY1YjQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMnZoIDN2dztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDdhZDg7XHJcbn1cclxuXHJcbi5idXR0b25TdWJtaXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNGI0Mzk7XHJcbn1cclxuXHJcbi5idXR0b25TdWJtaXQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyM2RhNGQ7XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tUG9wLXVwcy0tLS0tLS0tLS8vXHJcblxyXG4vLyBTdWNjZXNzXHJcbi5zdWNjZXNzID4gOmZpcnN0LWNoaWxkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA4LCAyNDgsIDE3Nik7XHJcbiAgd2lkdGg6IDElO1xyXG59XHJcblxyXG4uQWxlcnRDb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHBhZGRpbmctbGVmdDogMC41dnc7XHJcbiAgcGFkZGluZy1yaWdodDogMnZ3O1xyXG59XHJcblxyXG4uQWxlcnRJY29uIHtcclxuICBoZWlnaHQ6IDV2aDtcclxuICBtYXJnaW4tdG9wOiAtMXZoO1xyXG59XHJcblxyXG4uc3VjY2VzcyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnN1Y2Nlc3MgaDUge1xyXG4gIHBhZGRpbmctYm90dG9tOiAydmg7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uc3VjY2VzcyBoMyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmctdG9wOiAydmg7XHJcbn1cclxuXHJcbi8vIEZhaWxcclxuXHJcbi5mYWlsID4gOmZpcnN0LWNoaWxkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAxNzYsIDE3Nik7XHJcbiAgd2lkdGg6IDElO1xyXG59XHJcblxyXG4uQWxlcnRDb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHBhZGRpbmctbGVmdDogMC41dnc7XHJcbiAgcGFkZGluZy1yaWdodDogMnZ3O1xyXG59XHJcblxyXG4uQWxlcnRJY29uIHtcclxuICBoZWlnaHQ6IDV2aDtcclxuICBtYXJnaW4tdG9wOiAtMXZoO1xyXG59XHJcblxyXG4uZmFpbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZhaWwgaDUge1xyXG4gIHBhZGRpbmctYm90dG9tOiAydmg7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZmFpbCBoMyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmctdG9wOiAydmg7XHJcbn1cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 8595:
/*!*******************************************************************!*\
  !*** ./src/app/components/Staff/add-staff/add-staff.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddStaffComponent": () => (/* binding */ AddStaffComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);




function AddStaffComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Success");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Successfully added a staff member!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddStaffComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Unsuccesful");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Please check the highlighted fields.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AddStaffComponent {
    constructor(fb) {
        this.fb = fb;
        this.success = false;
        this.fail = false;
    }
    ngOnInit() {
        this.initializeForm();
    }
    initializeForm() {
        this.staffForm = this.fb.group({
            staffID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            givenName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            familyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            roleID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
        });
    }
    onSubmit() {
        this.success = this.fail = false;
        // If Valid 
        if (this.staffForm.status == "VALID") {
            console.log(this.staffForm.value);
            this.success = true;
            this.staffForm.reset();
        }
        else {
            this.fail = true;
        }
    }
}
AddStaffComponent.ɵfac = function AddStaffComponent_Factory(t) { return new (t || AddStaffComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder)); };
AddStaffComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddStaffComponent, selectors: [["app-add-staff"]], decls: 65, vars: 3, consts: [[1, "container"], ["class", "success", 4, "ngIf"], ["class", "fail", 4, "ngIf"], [1, "heading"], [1, "contents", "flex"], [1, "patient-information"], [3, "formGroup", "ngSubmit"], ["type", "number", "formControlName", "staffID"], ["type", "text", "formControlName", "givenName"], ["type", "text", "formControlName", "familyName"], ["type", "text", "formControlName", "password"], ["type", "number", "formControlName", "roleID"], [1, "categories-measurements"], [1, "flex"], [1, "categories"], [1, "heading-2"], [1, "outlined"], ["type", "checkbox"], [1, "measurements"], [1, "group-divide"], ["type", "submit", 1, "pointer", 3, "click"], [1, "success"], [1, "alert-container"], ["src", "../../../assets/Images/checkmark.png", 1, "alert-icon"], [1, "fail"], ["src", "../../../assets/Images/Exclamation1.png", 1, "alert-icon"]], template: function AddStaffComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddStaffComponent_div_1_Template, 9, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddStaffComponent_div_2_Template, 9, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Staff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddStaffComponent_Template_form_ngSubmit_8_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Staff ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Given Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Family Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Role ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Indwelling Plural Catheter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Asthma ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Permissions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Indwelling Plural Catheter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Read ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Write ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Asthma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Read ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Write ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddStaffComponent_Template_button_click_63_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Add Staff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.staffForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], styles: [".flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\ninput[_ngcontent-%COMP%]::placeholder {\n  color: gray;\n}\n\n.container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 85vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.heading[_ngcontent-%COMP%] {\n  margin: 5vh 0 1vh 0;\n}\n\n.heading-2[_ngcontent-%COMP%] {\n  margin: 0 5vw 2vh 5vw;\n  text-align: center;\n}\n\n.contents[_ngcontent-%COMP%] {\n  height: 70vh;\n}\n\n.outlined[_ngcontent-%COMP%] {\n  padding: 2vh 2vw;\n  max-height: 50vh;\n  height: 50vh;\n  border: lightgrey 1px solid;\n  border-radius: 2px;\n}\n\n.measurements[_ngcontent-%COMP%]   .outlined[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n}\n\n.categories[_ngcontent-%COMP%] {\n  margin-right: 1vw;\n}\n\n.group-divide[_ngcontent-%COMP%] {\n  margin-bottom: 2vh;\n}\n\n.patient-information[_ngcontent-%COMP%] {\n  width: 25vw;\n  justify-content: center;\n  align-self: center;\n}\n\n.patient-information[_ngcontent-%COMP%], .categories-measurements[_ngcontent-%COMP%] {\n  padding: 2vh 2vw;\n}\n\n.patient-information[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n  margin-bottom: 1vh;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.patient-information[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .patient-information[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  margin-left: 1vw;\n  padding: 0.5vh 0.5vw;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 35%;\n  text-align: end;\n}\n\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 55%;\n  margin-left: 3%;\n  outline: none;\n  padding: 0.5vh;\n}\n\nform[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  padding-bottom: 1vh;\n}\n\nform[_ngcontent-%COMP%]   .ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border-right: 1px solid grey;\n  border-top: 1px solid grey;\n  border-bottom: 1px solid grey;\n  border-left: 3px solid red;\n  border-radius: 3px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #1465B4;\n  border-radius: 5px;\n  border: none;\n  outline: none;\n  padding: 2vh 5vw;\n  text-align: center;\n  cursor: pointer;\n}\n\n.success[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n  background-color: #d0f8b0;\n  width: 1%;\n}\n\n.success[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.success[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  padding-bottom: 2vh;\n  margin: 0;\n}\n\n.success[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-top: 2vh;\n}\n\n.fail[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n  background-color: #f8b0b0;\n  width: 1%;\n}\n\n.alert-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-self: center;\n  padding-left: 0.5vw;\n  padding-right: 2vw;\n}\n\n.alert-icon[_ngcontent-%COMP%] {\n  height: 5vh;\n  margin-top: -1vh;\n}\n\n.fail[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.fail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  padding-bottom: 2vh;\n  margin: 0;\n}\n\n.fail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-top: 2vh;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\n.heading-2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\n.heading-3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1zdGFmZi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFNQTtFQUNJLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBTUE7RUFDSSxnQkFBQTtBQUhKOztBQU1BO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBSEo7O0FBTUE7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0FBSEo7O0FBVUE7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBUEo7O0FBVUE7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFQSjs7QUFVQTtFQUNJLG1CQUFBO0FBUEo7O0FBVUE7RUFDSSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FBUEo7O0FBWUE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFUSjs7QUFpQkE7RUFDSSx5QkFBQTtFQUNBLFNBQUE7QUFkSjs7QUFpQkE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBZEo7O0FBaUJBO0VBQ0ksbUJBQUE7RUFDQSxTQUFBO0FBZEo7O0FBaUJBO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0FBZEo7O0FBbUJBO0VBQ0kseUJBQUE7RUFDQSxTQUFBO0FBaEJKOztBQW1CQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFoQko7O0FBbUJBO0VBQ0MsV0FBQTtFQUNBLGdCQUFBO0FBaEJEOztBQW1CQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFoQko7O0FBbUJBO0VBQ0ksbUJBQUE7RUFDQSxTQUFBO0FBaEJKOztBQW1CQTtFQUNJLFNBQUE7RUFDQSxnQkFBQTtBQWhCSjs7QUFtQkE7RUFDSSxlQUFBO0FBaEJKOztBQW1CQTtFQUNJLGlCQUFBO0FBaEJKOztBQW1CQTtFQUNJLGlCQUFBO0FBaEJKIiwiZmlsZSI6ImFkZC1zdGFmZi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuaW5wdXQ6OnBsYWNlaG9sZGVye1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogODV2dztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRpbmd7XHJcbiAgICBtYXJnaW46IDV2aCAwIDF2aCAwO1xyXG59XHJcblxyXG4uaGVhZGluZy0ye1xyXG4gICAgbWFyZ2luOiAwIDV2dyAydmggNXZ3O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVudHN7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbn1cclxuXHJcbi5vdXRsaW5lZHtcclxuICAgIHBhZGRpbmc6IDJ2aCAydnc7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MHZoO1xyXG4gICAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgYm9yZGVyOiBsaWdodGdyZXkgMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4ubWVhc3VyZW1lbnRzIC5vdXRsaW5lZHtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLmNhdGVnb3JpZXN7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDF2dztcclxufVxyXG5cclxuLmdyb3VwLWRpdmlkZXtcclxuICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcclxufVxyXG5cclxuXHJcblxyXG4vLy0tLS0tLS0tLVBhdGllbnQgSW5mby0tLS0tLS0tLS8vXHJcblxyXG4ucGF0aWVudC1pbmZvcm1hdGlvbntcclxuICAgIHdpZHRoOiAyNXZ3O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wYXRpZW50LWluZm9ybWF0aW9uLCAuY2F0ZWdvcmllcy1tZWFzdXJlbWVudHN7XHJcbiAgICBwYWRkaW5nOiAydmggMnZ3O1xyXG59XHJcblxyXG4ucGF0aWVudC1pbmZvcm1hdGlvbiAuZmxleHtcclxuICAgIG1hcmdpbi1ib3R0b206IDF2aDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4ucGF0aWVudC1pbmZvcm1hdGlvbiAuZmxleCBpbnB1dCwgLnBhdGllbnQtaW5mb3JtYXRpb24gLmZsZXggc2VsZWN0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDF2dztcclxuICAgIHBhZGRpbmc6IC41dmggMC41dnc7XHJcbn1cclxuXHJcblxyXG5cclxuLy8tLS0tLS0tLS1Gb3JtLS0tLS0tLS0tLy9cclxuXHJcbmxhYmVse1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG5cclxuZm9ybSBpbnB1dHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA1NSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMyU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgcGFkZGluZzogMC41dmg7XHJcbn1cclxuXHJcbmZvcm0gKntcclxuICAgIHBhZGRpbmctYm90dG9tOiAxdmg7XHJcbn1cclxuXHJcbmZvcm0gLm5nLXRvdWNoZWQubmctaW52YWxpZHsgXHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcclxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgcmVkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4vLy0tLS0tLS0tLUJ1dHRvbi0tLS0tLS0tLS8vXHJcblxyXG5idXR0b257XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQ2NUI0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDJ2aCA1dnc7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0gXHJcblxyXG5cclxuXHJcbi8vLS0tLS0tLS0tUG9wLXVwcy0tLS0tLS0tLS8vXHJcblxyXG4vLyBTdWNjZXNzXHJcbi5zdWNjZXNzID4gOmZpcnN0LWNoaWxke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOCwgMjQ4LCAxNzYpO1xyXG4gICAgd2lkdGg6IDElO1xyXG59XHJcblxyXG4uc3VjY2Vzc3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uc3VjY2VzcyBoNXtcclxuICAgIHBhZGRpbmctYm90dG9tOiAydmg7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5zdWNjZXNzIGgze1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDJ2aDtcclxufVxyXG5cclxuLy8gRmFpbFxyXG5cclxuLmZhaWwgPiA6Zmlyc3QtY2hpbGR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAxNzYsIDE3Nik7XHJcbiAgICB3aWR0aDogMSU7XHJcbn1cclxuXHJcbi5hbGVydC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctbGVmdDogMC41dnc7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAydncgO1xyXG59XHJcblxyXG4uYWxlcnQtaWNvbiB7XHJcblx0aGVpZ2h0OiA1dmg7XHJcblx0bWFyZ2luLXRvcDogLTF2aDtcclxufVxyXG5cclxuLmZhaWx7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZhaWwgaDV7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnZoO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZmFpbCBoM3tcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmctdG9wOiAydmg7XHJcbn1cclxuXHJcbi5oZWFkaW5ne1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG4uaGVhZGluZy0ye1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5oZWFkaW5nLTN7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxufSAiXX0= */"] });


/***/ }),

/***/ 6621:
/*!*****************************************************************************!*\
  !*** ./src/app/components/Staff/viewedit-staff/viewedit-staff.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VieweditStaffComponent": () => (/* binding */ VieweditStaffComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class VieweditStaffComponent {
    constructor() { }
    ngOnInit() {
    }
}
VieweditStaffComponent.ɵfac = function VieweditStaffComponent_Factory(t) { return new (t || VieweditStaffComponent)(); };
VieweditStaffComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VieweditStaffComponent, selectors: [["app-viewedit-staff"]], decls: 2, vars: 0, template: function VieweditStaffComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "viewedit-staff works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3ZWRpdC1zdGFmZi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 5083:
/*!***************************************************************!*\
  !*** ./src/app/components/alert-page/alert-page.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertPageComponent": () => (/* binding */ AlertPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_alerts_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/alerts.service */ 6613);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../alert/alert.component */ 9803);





function AlertPageComponent_app_alert_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-alert", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("clearAlert", function AlertPageComponent_app_alert_1_Template_app_alert_clearAlert_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.ClearAlert($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("alert", alert_r1);
} }
class AlertPageComponent {
    constructor(alertService) {
        this.alertService = alertService;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.alerts = yield this.alertService.GetAlerts();
        });
    }
    // When an alert is actioned ClearAlert takes the alert and removes it from the current 'alerts' list
    ClearAlert(alert) {
        // If the current alerts contains the actioned alert it is removed
        if (this.alerts.includes(alert)) {
            let index = this.alerts.indexOf(alert);
            this.alerts.splice(index, 1);
        }
    }
}
AlertPageComponent.ɵfac = function AlertPageComponent_Factory(t) { return new (t || AlertPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_alerts_service__WEBPACK_IMPORTED_MODULE_0__.AlertsService)); };
AlertPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AlertPageComponent, selectors: [["app-alert-page"]], decls: 2, vars: 1, consts: [[1, "container"], [3, "alert", "clearAlert", 4, "ngFor", "ngForOf"], [3, "alert", "clearAlert"]], template: function AlertPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AlertPageComponent_app_alert_1_Template, 1, 1, "app-alert", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.alerts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _alert_alert_component__WEBPACK_IMPORTED_MODULE_1__.AlertComponent], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Arial, Helvetica, sans-serif, Courier, monospace;\n}\n\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow-y: scroll;\n}\n\n.container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin: 1vh 1vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHN0eWxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcc3R5bGVzXFxmb250cy5zY3NzIiwiYWxlcnQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUVLLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkRDVlU7QUNNZjs7QUZRQTs7RUFFQSx3QkFBQTtFQUNBLFNBQUE7QUVMQTs7QUZRQTtFQUNBLDBCQUFBO0FFTEE7O0FBZEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFpQkY7O0FBZEE7RUFDRSxlQUFBO0FBaUJGIiwiZmlsZSI6ImFsZXJ0LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3R5bGVzL2NvbG9ycy5zY3NzXCI7XHJcbkBpbXBvcnQgXCJzdHlsZXMvZm9udHMuc2Nzc1wiO1xyXG5cclxuXHJcbmh0bWwsIGJvZHkgXHJcbntcclxuICAgICBoZWlnaHQ6IDEwMCU7IFxyXG4gICAgIG1hcmdpbjogMDtcclxuICAgICBwYWRkaW5nOiAwO1xyXG4gICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LXRleHQ7XHJcbn1cclxuXHJcbi8vIFJlbW92ZXMgYXJyb3dzIGZyb20gbnVtYmVyIGlucHV0c1xyXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XHJcbi13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxubWFyZ2luOiAwO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPW51bWJlcl17XHJcbi1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG59IiwiJHByaW1hcnktdGV4dDogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiwgQ291cmllciwgbW9ub3NwYWNlOyIsImh0bWwsIGJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cblxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXSB7XG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4uY29udGFpbmVyICoge1xuICBtYXJnaW46IDF2aCAxdnc7XG59Il19 */"] });


/***/ }),

/***/ 9803:
/*!*****************************************************!*\
  !*** ./src/app/components/alert/alert.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertComponent": () => (/* binding */ AlertComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_alerts_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/alerts.service */ 6613);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);




class AlertComponent {
    constructor(alertService, router) {
        this.alertService = alertService;
        this.router = router;
        // This should be grabbed from a service later
        this.userID = 1;
        this.clearAlert = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
    }
    // When a button is pressed the action is then logged and the alerts updated
    Actioned(action, alertID) {
        // Loging alert
        this.alertService.AlertAction({
            identifier: alertID,
            userID: this.userID,
            action: action
        });
        // Removing alert from list by emitting the alert to the partent
        this.clearAlert.emit(this.alert);
    }
    // When a user clicks on a client name it will then open the view patient
    ViewPatient(patientID) {
        this.router.navigateByUrl('Patient/Editpatient/' + patientID);
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_alerts_service__WEBPACK_IMPORTED_MODULE_0__.AlertsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AlertComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["app-alert"]], inputs: { alert: "alert" }, outputs: { clearAlert: "clearAlert" }, decls: 10, vars: 2, consts: [[1, "container"], [3, "click"], [1, "actions"], [1, "action", 3, "click"], [1, "snooze", 3, "click"], [1, "dismiss", 3, "click"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlertComponent_Template_p_click_1_listener() { return ctx.ViewPatient(ctx.alert.patientID); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlertComponent_Template_button_click_4_listener() { return ctx.Actioned("Actioned", ctx.alert.identifier); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Actioned");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlertComponent_Template_button_click_6_listener() { return ctx.Actioned("Snooze", ctx.alert.identifier); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Snooze");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlertComponent_Template_button_click_8_listener() { return ctx.Actioned("Dismiss", ctx.alert.identifier); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Dismiss");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.alert.patientName, " : ", ctx.alert.alertTitle, "");
    } }, styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Arial, Helvetica, sans-serif, Courier, monospace;\n}\n\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\n.container[_ngcontent-%COMP%] {\n  border: 3px solid rgba(128, 128, 128, 0.5);\n  min-width: 30vw;\n  text-align: center;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: larger;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n\nbutton[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: larger;\n  border-radius: 10px;\n  border: none;\n  padding: 2vh 3vw;\n  text-align: center;\n  cursor: pointer;\n  margin: 1vh 1vw;\n}\n\n.action[_ngcontent-%COMP%] {\n  background-color: #14B439;\n}\n\n.action[_ngcontent-%COMP%]:hover {\n  background-color: #23da4d;\n}\n\n.dismiss[_ngcontent-%COMP%] {\n  background-color: #b41414;\n}\n\n.dismiss[_ngcontent-%COMP%]:hover {\n  background-color: #da2323;\n}\n\n.snooze[_ngcontent-%COMP%] {\n  background-color: #1465b4;\n}\n\n.snooze[_ngcontent-%COMP%]:hover {\n  background-color: #2397da;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHN0eWxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcc3R5bGVzXFxmb250cy5zY3NzIiwiYWxlcnQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFxzdHlsZXNcXGNvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBRUssWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSw2RENWVTtBQ01mOztBRlFBOztFQUVBLHdCQUFBO0VBQ0EsU0FBQTtBRUxBOztBRlFBO0VBQ0EsMEJBQUE7QUVMQTs7QUFkQTtFQUNFLDBDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFpQkY7O0FBZEE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUFpQkY7O0FBWEE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFjRjs7QUFYQTtFQUNFLHlCQzdCWTtBRDJDZDs7QUFYQTtFQUNFLHlCQ2hDc0I7QUQ4Q3hCOztBQVhBO0VBQ0UseUJDbENVO0FEZ0RaOztBQVhBO0VBQ0UseUJDdkNvQjtBRHFEdEI7O0FBWEE7RUFDRSx5QkMvQ2M7QUQ2RGhCOztBQVhBO0VBQ0UseUJDbER3QjtBRGdFMUIiLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3R5bGVzL2NvbG9ycy5zY3NzXCI7XHJcbkBpbXBvcnQgXCJzdHlsZXMvZm9udHMuc2Nzc1wiO1xyXG5cclxuXHJcbmh0bWwsIGJvZHkgXHJcbntcclxuICAgICBoZWlnaHQ6IDEwMCU7IFxyXG4gICAgIG1hcmdpbjogMDtcclxuICAgICBwYWRkaW5nOiAwO1xyXG4gICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LXRleHQ7XHJcbn1cclxuXHJcbi8vIFJlbW92ZXMgYXJyb3dzIGZyb20gbnVtYmVyIGlucHV0c1xyXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XHJcbi13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxubWFyZ2luOiAwO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPW51bWJlcl17XHJcbi1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG59IiwiJHByaW1hcnktdGV4dDogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiwgQ291cmllciwgbW9ub3NwYWNlOyIsImh0bWwsIGJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cblxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXSB7XG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufVxuXG4uY29udGFpbmVyIHtcbiAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUpO1xuICBtaW4td2lkdGg6IDMwdnc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xufVxuXG4uYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG5idXR0b24ge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMnZoIDN2dztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMXZoIDF2dztcbn1cblxuLmFjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNEI0Mzk7XG59XG5cbi5hY3Rpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjNkYTRkO1xufVxuXG4uZGlzbWlzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNDE0MTQ7XG59XG5cbi5kaXNtaXNzOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhMjMyMztcbn1cblxuLnNub296ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDY1YjQ7XG59XG5cbi5zbm9vemU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM5N2RhO1xufSIsIiRwcmltYXJ5LWNvbG9yOiAjMTQ2NWI0O1xyXG4kcHJpbWFyeS1oaWdobGlnaHQtY29sb3I6ICMyMzk3ZGE7XHJcbiRncmVlbi1jb2xvcjogIzE0QjQzOTtcclxuJGdyZWVuLWhpZ2hsaWdodC1jb2xvcjogIzIzZGE0ZDtcclxuJHJlZC1oaWdobGlnaHQtY29sb3I6ICNkYTIzMjM7XHJcbiRyZWQtY29sb3I6ICNiNDE0MTQ7XHJcbiRncmVlbi1idXR0b24tY29sb3I6ICMxNEI0Mzk7XHJcblxyXG5cclxuICAiXX0= */"] });


/***/ }),

/***/ 4726:
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavBarComponent": () => (/* binding */ NavBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);



function NavBarComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/patient/view/", a1]; };
const _c1 = function (a1) { return ["/patient/edit-patient/", a1]; };
const _c2 = function (a0) { return { "sub-active-button": a0 }; };
function NavBarComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r1.getID(ctx_r1.route.url)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx_r1.getID(ctx_r1.route.url)))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx_r1.isEditPatient(ctx_r1.route.url)));
} }
const _c3 = function (a0) { return { "background-color": a0 }; };
class NavBarComponent {
    constructor(route, activatedRoute) {
        this.route = route;
        this.activatedRoute = activatedRoute;
        // this.activatedRoute.params.subscribe(params => {
        //   console.log(params)
        //   })
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
        });
    }
    isEditPatient(currentUrl) {
        let url = currentUrl;
        let query = /\/patient\/edit-patient\/\d*/g;
        let string = url;
        string = string.toLowerCase();
        let result = string.match(query);
        if (result != null) {
            return true;
        }
        return false;
    }
    // if edit tab or view tab show everything
    isEditOrViewTab(currentUrl) {
        let url = currentUrl;
        let query = /\/patient\/edit-patient\/\d*|\/patient\/view\/\d*/g;
        let string = url;
        string = string.toLowerCase();
        let result = string.match(query);
        if (result != null) {
            return true;
        }
        return false;
    }
    // if search tab or add tab show search and add
    isSearchOrAddTab(currentUrl) {
        let url = currentUrl;
        let query = /\/patient\/search|\/patient\/add-patient/g;
        let string = url;
        string = string.toLowerCase();
        let result = string.match(query);
        if (result != null) {
            return true;
        }
        return false;
    }
    isPatientSubMenu(currentUrl) {
        let url = currentUrl;
        let query = /\/patient\/.*/g;
        let string = url;
        string = string.toLowerCase();
        let result = string.match(query);
        if (result != null) {
            return true;
        }
        return false;
    }
    getID(currentUrl) {
        let url = currentUrl;
        let query = /\d+/;
        let result = currentUrl.match(query)[0];
        return result;
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute)); };
NavBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 23, vars: 8, consts: [[1, "Logo"], [2, "color", "rgb(20,100,180)"], [2, "color", "#6a6a6a"], ["routerLink", "/alerts", "routerLinkActive", "active-button", 1, "link"], ["routerLinkActive", "main-menu-active-btn"], [1, "alert-container"], ["src", "../../../assets/Images/Exclamation1.png", 1, "alert-icon"], [1, "alert-number"], ["routerLink", "patient/search", "routerLinkActive", "active-button", 1, "link", 3, "ngClass", "ngStyle"], [4, "ngIf"], [1, "link"], ["routerLink", "/patient/search", "routerLinkActive", "sub-active-button", 1, "sub-link"], ["routerLink", "patient/add-patient", "routerLinkActive", "sub-active-button", 1, "sub-link"], ["routerLinkActive", "sub-active-button", 1, "sub-link", 3, "routerLink"], [1, "sub-link", 3, "routerLink", "ngClass"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Northern ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Health");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Alerts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " 9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Patient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NavBarComponent_div_15_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NavBarComponent_div_16_Template, 9, 9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Library");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Register Staff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, ctx.isPatientSubMenu(ctx.route.url)))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c3, ctx.isPatientSubMenu(ctx.route.url) ? "white" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSearchOrAddTab(ctx.route.url));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEditOrViewTab(ctx.route.url));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: [".active-button[_ngcontent-%COMP%] {\n  color: gray;\n  background-color: white;\n}\n\n.active-button[_ngcontent-%COMP%]:hover {\n  color: #1464b4;\n}\n\n.link[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.246);\n}\n\n.Logo[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2vh;\n  font-weight: 600;\n  font-size: clamp(20px, 4vw, 44px);\n  padding: 1vh;\n  color: #6a6a6a;\n  background-color: #fff;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.link[_ngcontent-%COMP%], .sub-link[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 2vh;\n  font-size: 3vh;\n  cursor: pointer;\n  color: white;\n}\n\n.sub-link[_ngcontent-%COMP%] {\n  padding-left: 3vw;\n  background-color: white;\n  color: gray;\n}\n\n.sub-active-button[_ngcontent-%COMP%] {\n  color: #1464b4;\n  background-color: white;\n}\n\n.sub-link[_ngcontent-%COMP%]:hover {\n  background-color: white;\n}\n\n\n\n.alert-container[_ngcontent-%COMP%] {\n  \n  height: 3vh;\n}\n\n.alert-icon[_ngcontent-%COMP%] {\n  height: 5vh;\n  margin-top: -1vh;\n}\n\n.alert-number[_ngcontent-%COMP%] {\n  margin-right: 0.5vw;\n  height: 2.5vh;\n  width: 2.5vh;\n  font-size: 2.2vh;\n  background-color: white;\n  border-radius: 10vh;\n  position: absolute;\n  margin-top: -2.7vh;\n  margin-left: 3.3vh;\n  color: red;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFRSxXQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFLQTtFQUdFLGNBQUE7QUFKRjs7QUFRQTtFQUVFLDRDQUFBO0FBTkY7O0FBWUE7RUFDQyxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFURDs7QUFZQTtFQUVFLHFCQUFBO0FBVkY7O0FBYUE7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFWRDs7QUFhQTtFQUVFLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBWEY7O0FBY0E7RUFFRSxjQUFBO0VBQ0EsdUJBQUE7QUFaRjs7QUFlQTtFQUVFLHVCQUFBO0FBYkY7O0FBaUJBLGVBQUE7O0FBRUE7RUFDQyx5QkFBQTtFQUNBLFdBQUE7QUFmRDs7QUFrQkE7RUFDQyxXQUFBO0VBQ0EsZ0JBQUE7QUFmRDs7QUFrQkE7RUFDQyxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBZkQiLCJmaWxlIjoibmF2LWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBNYWluIE1lbnUgQnV0dG9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXHJcbi5hY3RpdmUtYnV0dG9uXHJcbntcclxuICBjb2xvcjogZ3JheTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi5hY3RpdmUtYnV0dG9uOmhvdmVyXHJcbntcclxuXHJcbiAgY29sb3I6IHJnYigyMCwgMTAwLCAxODApO1xyXG5cclxufVxyXG5cclxuLmxpbms6aG92ZXJcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNDYpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBTdWIgTWVudSBBY3RpdmUgQnV0dG9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG4uTG9nbyB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdG1hcmdpbi1ib3R0b206IDJ2aDtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG5cdGZvbnQtc2l6ZTogY2xhbXAoMjBweCwgNHZ3LCA0NHB4KTtcclxuXHRwYWRkaW5nOiAxdmg7XHJcblx0Y29sb3I6ICM2YTZhNmE7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuYVxyXG57XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ubGluaywgLnN1Yi1saW5rIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdHBhZGRpbmc6IDJ2aDtcclxuXHRmb250LXNpemU6IDN2aDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0Y29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5zdWItbGlua1xyXG57XHJcbiAgcGFkZGluZy1sZWZ0OiAzdnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6Z3JheTtcclxufVxyXG5cclxuLnN1Yi1hY3RpdmUtYnV0dG9uXHJcbntcclxuICBjb2xvcjogcmdiKDIwLCAxMDAsIDE4MCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zdWItbGluazpob3ZlclxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVcclxuXHJcbn1cclxuXHJcbi8qIEFsZXJ0IEljb24gKi9cclxuXHJcbi5hbGVydC1jb250YWluZXIge1xyXG5cdC8qIG1hcmdpbi1yaWdodDogMC4xdnc7ICovXHJcblx0aGVpZ2h0OiAzdmg7XHJcbn1cclxuXHJcbi5hbGVydC1pY29uIHtcclxuXHRoZWlnaHQ6IDV2aDtcclxuXHRtYXJnaW4tdG9wOiAtMXZoO1xyXG59XHJcblxyXG4uYWxlcnQtbnVtYmVyIHtcclxuXHRtYXJnaW4tcmlnaHQ6IDAuNXZ3O1xyXG5cdGhlaWdodDogMi41dmg7XHJcblx0d2lkdGg6IDIuNXZoO1xyXG5cdGZvbnQtc2l6ZTogMi4ydmg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0Ym9yZGVyLXJhZGl1czogMTB2aDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bWFyZ2luLXRvcDogLTIuN3ZoO1xyXG5cdG1hcmdpbi1sZWZ0OiAzLjN2aDtcclxuXHRjb2xvcjogcmVkO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 6613:
/*!********************************************!*\
  !*** ./src/app/services/alerts.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertsService": () => (/* binding */ AlertsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class AlertsService {
    constructor() { }
    /*
     When GetAlerts is called, it returns all un-actioned alerts in the form
     identifier: number,
     patientName: string,
     alertTitle: string
     As of right now the frequency of calling get alerts is to be decided
    */
    // GetAlerts(): Promise<AlertResponse[]>{
    GetAlerts() {
        // Connection to the back end
        // return this.http.get<AlertResponse[]>(
        // API connection string goes here!!!
        // ).toPromise();
        // Test data
        let data = [
            {
                identifier: 1,
                patientName: "Dylan Smith",
                patientID: 1000001,
                alertTitle: "Missed measurement"
            },
            {
                identifier: 2,
                patientName: "Tim Daves",
                patientID: 1000002,
                alertTitle: "Repeat high drainage"
            },
            {
                identifier: 3,
                patientName: "Sarah Tomson",
                patientID: 1000005,
                alertTitle: "Called emergency"
            },
            {
                identifier: 5,
                patientName: "Vito Kohler",
                patientID: 1000005,
                alertTitle: "Called emergency"
            },
            {
                identifier: 15,
                patientName: "Mario Paucek",
                patientID: 1000005,
                alertTitle: "Called emergency"
            },
            {
                identifier: 4,
                patientName: "Reginald Rodriguez",
                patientID: 1000005,
                alertTitle: "Called emergency"
            },
            {
                identifier: 8,
                patientName: "Camden Veum",
                patientID: 1000005,
                alertTitle: "Called emergency"
            }
        ];
        return data;
    }
    /*
      AlertAction is called when an alert is interacted with by a staff member
      in the form
        identifier: number,
        userID: number,
        action: string
      'action' may contain 'Actioned'/'Dismissed'/'Snooze'
  
  
      How do we handle two staff sending an action on the same action????
      Maybe a table in the database for actions that uses the datetime and staffID as a primary key
    */
    AlertAction(action) {
        console.log("AlertsService, AlertAction: \n", action);
    }
}
AlertsService.ɵfac = function AlertsService_Factory(t) { return new (t || AlertsService)(); };
AlertsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlertsService, factory: AlertsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3193:
/*!*********************************************************!*\
  !*** ./src/app/services/categorymeasurement.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategorymeasurementService": () => (/* binding */ CategorymeasurementService)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3882);




class CategorymeasurementService {
    //this list is going to hold the current list of meqasurements along with the corresonding names
    constructor(http) {
        this.http = http;
        //this needs to point to the endpoint im going to create which will get me all the measurements
        this.apiURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL;
        this.adminPatientURL = this.apiURL + "/AdminPatient";
        this.categoryMeasurement = this.apiURL + "/CategoryMeasurement";
    }
    //this should get all the current measurements
    getCurrentMeasurments() {
        return this.http.get(`${this.adminPatientURL}/GetMeasurements`).toPromise();
    }
    // This function gets categories to display
    getCategories() {
        return this.http.get(`${this.categoryMeasurement}/Categories`);
    }
    //This function gets the patient measurements associated with the selected categories
    getCategoryMeasurements(patientCategoriesForm) {
        let categoryID = [];
        for (const item in patientCategoriesForm) {
            if (patientCategoriesForm[item]) {
                //list of selected Id's
                categoryID.push(parseInt(item));
            }
        }
        //this should be a get
        return this.http.put(`${this.categoryMeasurement}/CategoryMeasurements`, categoryID);
    }
    //This function gets the patient measurements that are currently assigned to them and creates a formgroup for each measurement
    // getPatientCategoryMeasurements(patientCategoriesForm:FormGroup,patientMeasurements:patientMeasurement[]) {
    //   //todo
    // }
    //This function dynamically creates a form group for the categories
    toFormGroupCategory(categories) {
        const group = {};
        categories.forEach(category => {
            category.categoryName == 'Indwelling Pleural Catheter' ? group[category.categoryID] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(true, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.requiredTrue)
                : group[category.categoryID] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(false);
        });
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup(group);
    }
    //This function dynamically gets all the categories from the database and sets the categories that the patient is assigned to
    toFormGroupPatientCategories(categories, patientCategories) {
        const group = {};
        const isCategoriesExists = patientCategories.length == 0 ? false : true;
        categories.forEach(category => {
            //todo set to fluid to required
            //if the patient has categories assigned to them set to true
            if (isCategoriesExists) {
                patientCategories.forEach(patientCategory => {
                    if (patientCategory == category.categoryID) {
                        category.categoryName == 'Indwelling Pleural Catheter' ? group[category.categoryID] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(true, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.requiredTrue)
                            : group[category.categoryID] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(true);
                        //other wise set control to false
                    }
                    else {
                        group[category.categoryID] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(false);
                    }
                });
            }
            else {
                group[category.categoryID] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(false);
            }
        });
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup(group);
    }
    //This function dynamically creates a form group for the measurements
    toFormGroupMeasurement(measurement, patientMeasurementsForm) {
        const group = {};
        let patientMeasurements = [];
        let isChecked = [];
        for (const index in patientMeasurementsForm) {
            if (typeof patientMeasurementsForm[index] != "boolean") {
                patientMeasurements.push(patientMeasurementsForm[index]);
            }
            else {
                isChecked.push(patientMeasurementsForm[index]);
            }
        }
        //todo find a better way than this lol very hacky VVVVVVV
        //if form has ticked inputs assign them
        measurement.forEach((measurement, index) => {
            if (patientMeasurements[index]) {
                group['measurementID_' + measurement.measurementID + '_CategoryID_' + measurement.categoryID + 'freq'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(patientMeasurements[index]);
            }
            else {
                //assign default frequency
                group['measurementID_' + measurement.measurementID + '_CategoryID_' + measurement.categoryID + 'freq'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(measurement.frequency);
            }
            //if checkbox already has a value keep that value
            if (isChecked[index] != null) {
                'Fluid Drain' == measurement.measurementName && measurement.categoryID == 1 ?
                    group['measurementID_' + measurement.measurementID + '_CategoryID_' + measurement.categoryID] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(isChecked[index], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.requiredTrue)
                    : group['measurementID_' + measurement.measurementID + '_CategoryID_' + measurement.categoryID] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(isChecked[index]);
            }
            else {
                //enter default value
                'Fluid Drain' == measurement.measurementName && measurement.categoryID == 1 ?
                    group['measurementID_' + measurement.measurementID + '_CategoryID_' + measurement.categoryID] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(true, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.requiredTrue) :
                    group['measurementID_' + measurement.measurementID + '_CategoryID_' + measurement.categoryID] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(true);
            }
        });
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup(group);
    }
    //This Function gets the patient's measurements and dynamically creates a form controll for each measurement
    toFormGroupPatientMeasurements(measurements, patientMeasurements, patientMeasurementsForm) {
        console.log(measurements);
        console.log(patientMeasurements);
        console.log(patientMeasurementsForm);
        const group = {};
        let curPatientMeasurements = [];
        let isChecked = [];
        let found = [];
        //update users existing inputs 
        for (const index in patientMeasurementsForm) {
            console.log(patientMeasurements[index]);
            if (typeof patientMeasurementsForm[index] != "boolean") {
                curPatientMeasurements.push(patientMeasurementsForm[index]);
            }
            else {
                isChecked.push(patientMeasurementsForm[index]);
            }
        }
        //todo fluid drain required
        //todo save categories when patient changes inputs
        for (const measurement in measurements) {
            for (const patientMeasurement in patientMeasurements) {
                //If patient measurement is active assign value
                if (patientMeasurements[patientMeasurement].measurementId == measurements[measurement].measurementID
                    && patientMeasurements[patientMeasurement].categoryId == measurements[measurement].categoryID) {
                    group['measurementID_' + measurements[measurement].measurementID + '_CategoryID_' + measurements[measurement].categoryID + 'freq'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(patientMeasurements[patientMeasurement].frequency);
                    group['measurementID_' + measurements[measurement].measurementID + '_CategoryID_' + measurements[measurement].categoryID] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(true);
                    found.push(measurements[measurement]);
                }
                else {
                    //If not active assign default value and deactivate checkbox
                    //problem undefined
                    console.log(found.find(index => { return index == measurements[measurement]; }) == undefined);
                    if (found.find(index => { return index == measurements[measurement]; }) == undefined) {
                        group['measurementID_' + measurements[measurement].measurementID + '_CategoryID_' + measurements[measurement].categoryID + 'freq'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(measurements[measurement].frequency);
                        group['measurementID_' + measurements[measurement].measurementID + '_CategoryID_' + measurements[measurement].categoryID] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(false);
                    }
                }
            }
        }
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup(group);
    }
    // This function takes the form data from the add patient page and returns an object that the api can use
    createPatientObject(patient, patientCategoriesForm, patientMeasurementForm) {
        let patientObject;
        let patientMeasurements = [];
        let patientCategories = [];
        //add Active categories
        for (const category in patientCategoriesForm) {
            if (patientCategoriesForm[category]) {
                patientCategories.push(parseInt(category));
            }
        }
        if (patientCategories.length == 0) {
            patientCategories = null;
        }
        let Id;
        let isCheckbox;
        let measurementId;
        let categoryId;
        //query to find category id and measurement id
        let query = /\d/g;
        let isFrequency = /.*freq/g;
        //checks if object is a checkbox
        for (const item in patientMeasurementForm) {
            //if this is a checkbox and checkbox is true
            if (!item.match(isFrequency) && patientMeasurementForm[item]) {
                //get ID's
                Id = item.match(query);
                measurementId = parseInt(Id[0]);
                categoryId = parseInt(Id[1]);
                //push to measurement object
                patientMeasurements.push({
                    measurementId: measurementId,
                    categoryId: categoryId,
                    frequency: patientMeasurementForm[item + 'freq']
                });
            }
        }
        // //adds Measurements
        // for (const item in patientMeasurementForm) {
        //   console.log(item)
        //   if (item.match(isFrequency) != null) {
        //     Id = item.match(query);
        //     measurementId = parseInt(Id[0])
        //     categoryId = parseInt(Id[1])
        //     patientMeasurements.push({
        //       measurementId: measurementId,
        //       categoryId: categoryId,
        //       frequency: patientMeasurementForm[item]
        //     })
        //   }
        //}
        patientMeasurements = patientMeasurements.length == 0 ? null : patientMeasurements;
        //object that will be sent to the api
        patientObject = {
            patient: patient,
            patientCategories: patientCategories,
            patientMeasurements: patientMeasurements
        };
        return patientObject;
    }
}
CategorymeasurementService.ɵfac = function CategorymeasurementService_Factory(t) { return new (t || CategorymeasurementService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
CategorymeasurementService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CategorymeasurementService, factory: CategorymeasurementService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4688:
/*!**********************************************!*\
  !*** ./src/app/services/password.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordService": () => (/* binding */ PasswordService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class PasswordService {
    constructor() { }
    //Initials and DOB password function for add patient
    generateDefaultPassword(passwordDetails) {
        let password;
        if (passwordDetails.formPassword == '') {
            let fNameInitial = passwordDetails.givenName[0];
            let lNameInitial = passwordDetails.familyName[0];
            let dob = passwordDetails.dob;
            let day = dob.slice(8, 10);
            let month = dob.slice(5, 7);
            let year = dob.slice(0, 4);
            password = fNameInitial + lNameInitial + day + month + year;
            return password;
        }
        password = passwordDetails.formPassword;
        return password;
    }
}
PasswordService.ɵfac = function PasswordService_Factory(t) { return new (t || PasswordService)(); };
PasswordService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PasswordService, factory: PasswordService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 760:
/*!**************************************************!*\
  !*** ./src/app/services/patient-data.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PatientDataService": () => (/* binding */ PatientDataService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5871);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);






//for development
// const url:string = "http://localhost:5000/"
// const patientUrl:string = `${url}AdminPatient/SearchPatient`;
//for deployment
// const url:string = "http://ec2-3-236-198-75.compute-1.amazonaws.com:3000/"
// const patientUrl:string = `${url}api/patient`;
class PatientDataService {
    constructor(http) {
        this.http = http;
        this.apiURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + "/AdminPatient";
    }
    getExistingPatient(currentPatientId) {
        throw new Error('Method not implemented.');
    }
    //--------------------------- Patient Services ---------------------->
    //<------------------------- get patients ---------------------->
    //make parameters an interface or model
    //use specific outputs not just any
    getSearchPatients(filter) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
        Object.keys(filter).forEach(key => filter[key] && (params = params.append(key, filter[key])));
        return this.http.get(`${this.apiURL}/SearchPatient`, {
            params
        });
        // try {
        //   let params = new HttpParams({
        //     fromObject: {
        //       searchurnumber: searchPatientParamaterModel.urNumber.toString(),
        //       searchgivenname: searchPatientParamaterModel.givenName.toString(),
        //       searchfamilyname: searchPatientParamaterModel.familyName.toString(),
        //       isExactGivenName: searchPatientParamaterModel.isExactGivenName.toString(),
        //       isExactUr: searchPatientParamaterModel.isExactUrNumber.toString(),
        //       isExactFamilyName: searchPatientParamaterModel.isExactFamilyName.toString(),
        //     }
        //   });
        //   console.log(params)
        //   if (params.
        //   return this.http.get<patient[]>(`${this.apiURL}/SearchPatient`, {params: params});
        // } catch (e){
        //   console.log('Failed to Get Patients', e);
        // }
    }
    //<---------------------------- Get All Patients -------------------------------->
    getAllPatients() {
        return this.http.get(`${this.apiURL}/GetAllPatients`).toPromise();
    }
    //<---------------------------- Get Current Patient Data -------------------------------->
    getCurrentPatientData(urnumber) {
        //TODO change the endpoint to ahlams once updated with the merge - the model should be the same
        try {
            let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams({
                fromObject: {
                    urnumber: urnumber.toString()
                }
            });
            return this.http.get(`${this.apiURL}/ViewPatient`, { params: params });
        }
        catch (e) {
            console.log('Failed to Get Patients', e);
        }
    }
    //<---------------------------- Get Current Patient Information for Data Table Header -------------------------------->
    getCurrentPatientDataInfo(urnumber) {
        //TODO change the endpoint to ahlams once updated with the merge - the model should be the same
        try {
            let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams({
                fromObject: {
                    urnumber: urnumber.toString()
                }
            });
            return this.http.get(`${this.apiURL}/ViewPatientInfo`, { params: params });
        }
        catch (e) {
            console.log('Failed to Get Patients', e);
        }
    }
    //  <---------------------------- Add Patient -------------------------------------->
    addPatient(patient) {
        return this.http.post(`${this.apiURL}/AddPatient`, patient)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    handleError(error) {
        if (error.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)('server error');
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(`Backend returned code ${error.status}, body was: `, error.error);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(false);
        }
        // // Return an observable with a user-facing error message.
        // return throwError(
        //   false);
    }
    //<-------------------------- Get Patient By ID ----------------------------------------->
    getPatient(urNumber) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams({
            fromObject: {
                urnumber: urNumber.toString()
            }
        });
        return this.http.get(`${this.apiURL}/GetPatient`, { params: params });
    }
    //<---------------------------- Get Patient to  Edit ------------------------------------------->
    editPatientGet(urNumber) {
        return this.http.get(`${this.apiURL}/GetPatient?urnumber=${urNumber}`).toPromise();
    }
    // //<---------------------------- Edit Patient ------------------------------------------->
    // editPatientPut(urNumber:any, newPatient:editPatientModel):Observable<any>{
    //   try{
    //     return this.http.put<any>(`${this.apiURL}/updatePatient/${urNumber}`,newPatient)
    //   } catch (e){
    //     console.log('Failed to edit patient',e);
    //   }
    // }
    //---------------------------- Edit Patient -------------------------------------------------//
    editPatient(patientObject) {
        console.log(patientObject);
        return this.http.post(`${this.apiURL}/EditPatient`, patientObject);
    }
}
PatientDataService.ɵfac = function PatientDataService_Factory(t) { return new (t || PatientDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
PatientDataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: PatientDataService, factory: PatientDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiURL: 'http://nhrmipc.somee.com/publish'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map