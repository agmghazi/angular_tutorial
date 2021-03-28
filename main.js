(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Sourse\angular 6\code\angular_tutorial\src\main.ts */"zUnb");


/***/ }),

/***/ "4MUI":
/*!**************************************************************!*\
  !*** ./src/app/admin/admin-orders/admin-orders.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminOrdersComponent", function() { return AdminOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AdminOrdersComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminOrdersComponent.ɵfac = function AdminOrdersComponent_Factory(t) { return new (t || AdminOrdersComponent)(); };
AdminOrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminOrdersComponent, selectors: [["app-admin-orders"]], decls: 2, vars: 0, template: function AdminOrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "admin-orders works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1vcmRlcnMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "5hVl":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NavBarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 28, vars: 0, consts: [["switch-adjust-width-normal", "2"], ["switch-shift-element-right", "1", 1, "navbar", "navbar-expand-md", "navbar-dark", "fixed-top", "bg-dark"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarCollapse", "aria-controls", "navbarCollapse", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["routerLink", "/shopping-cart", 1, "nav-link"], [1, "sr-only"], ["ngbDropdown", "", 1, "nav-item", "dropdown"], ["ngbDropdownToggle", "", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["ngbDropdownMenu", "", "aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], ["routerLink", "/orders", 1, "dropdown-item"], ["routerLink", "/admin/orders", 1, "dropdown-item"], [1, "dropdown-divider"], ["routerLink", "/admin/products", 1, "dropdown-item"], [1, "form-inline", "mt-2", "mt-md-0"], ["type", "text", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "mr-sm-2"], ["type", "submit", 1, "btn", "btn-outline-success", "my-2", "my-sm-0"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Shopping Cart App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Shopping Cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Dropdown ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "My Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Manage Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Manage Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"]], styles: [".dropdown-toggle[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoibmF2LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duLXRvZ2dsZXtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "6unu":
/*!***********************************!*\
  !*** ./src/assets/Data/data.json ***!
  \***********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"EquipmentSystemCode\":\"02313e51-d3a4-4a25-8af4-26a083ea2171\",\"EquipmentName\":\"Oximeters, Pulse\",\"region\":\"الإسكندرية الساحل\",\"GovName\":\"الإسكندرية\",\"CityName\":\"الجمرك\",\"HospitalName\":\"44 Hospital\",\"EquipmentCondition\":\"AsBuild\",\"EquipmentStatus\":\"Not Working\",\"DepartmentName\":\"مبتسرين\",\"EquipmentOrgin\":\"NA\",\"ManufacturerName\":\"Charmcare\",\"VendorName\":\"NA\",\"EquipmentPurchaseCost\":4400,\"EquipmentPurchaseDate\":\"11/01/16\",\"EquipmentInstallDate\":\"11/01/16\",\"EquipmentExpectedLifeTime\":\"11/01/21\",\"EquipmentWarrantyExpiresDate\":\"11/01/21\"},{\"EquipmentSystemCode\":\"02662e7b-bbc5-44e8-97b9-c8c08409f06b\",\"EquipmentName\":\"Magnetic Units, Therapeutic\",\"region\":\"الإسكندرية الساحل\",\"GovName\":\"الإسكندرية\",\"CityName\":\"الجمرك\",\"HospitalName\":\"44 Hospital\",\"EquipmentCondition\":\"AsBuild\",\"EquipmentStatus\":\"Working\",\"DepartmentName\":\"Physical Therapy\",\"EquipmentOrgin\":\"NA\",\"ManufacturerName\":\"HM 25C A\",\"VendorName\":\"NA\",\"EquipmentPurchaseCost\":24500,\"EquipmentPurchaseDate\":\"01/04/16\",\"EquipmentInstallDate\":\"01/04/16\",\"EquipmentExpectedLifeTime\":\"01/04/21\",\"EquipmentWarrantyExpiresDate\":\"01/04/21\"},{\"EquipmentSystemCode\":\"0383b52c-d200-4f01-893d-b18dc95f9d9b\",\"EquipmentName\":\"Hemodialysis Units\",\"region\":\"الإسكندرية الساحل\",\"GovName\":\"الإسكندرية\",\"CityName\":\"الجمرك\",\"HospitalName\":\"44 Hospital\",\"EquipmentCondition\":\"AsBuild\",\"EquipmentStatus\":\"Not Working\",\"DepartmentName\":\"الغسيل الكلوي\",\"EquipmentOrgin\":\"NA\",\"ManufacturerName\":\"Fresenius\",\"VendorName\":\"NA\",\"EquipmentPurchaseCost\":90000,\"EquipmentPurchaseDate\":\"23/06/16\",\"EquipmentInstallDate\":\"23/06/16\",\"EquipmentExpectedLifeTime\":\"23/06/21\",\"EquipmentWarrantyExpiresDate\":\"23/06/21\"},{\"EquipmentSystemCode\":\"03c244ee-f395-4cf0-b23b-2ce1a6bf168c\",\"EquipmentName\":\"Analyzers, Point-of-Care, WholeBlood, Coagulation\",\"region\":\"الإسكندرية الساحل\",\"GovName\":\"الإسكندرية\",\"CityName\":\"الجمرك\",\"HospitalName\":\"42 Hospital\",\"EquipmentCondition\":\"AsBuild\",\"EquipmentStatus\":\"Working\",\"DepartmentName\":\"مبتسرين\",\"EquipmentOrgin\":\"NA\",\"ManufacturerName\":\"HELENA\",\"VendorName\":\"NA\",\"EquipmentPurchaseCost\":25000,\"EquipmentPurchaseDate\":\"15/08/16\",\"EquipmentInstallDate\":\"15/08/16\",\"EquipmentExpectedLifeTime\":\"15/08/21\",\"EquipmentWarrantyExpiresDate\":\"15/08/21\"},{\"EquipmentSystemCode\":\"04d4c535-931d-4486-8f61-2a90decf2c8e\",\"EquipmentName\":\"Incubators, Infant, Mobile\",\"region\":\"الإسكندرية الساحل\",\"GovName\":\"الإسكندرية\",\"CityName\":\"الجمرك\",\"HospitalName\":\"42 Hospital\",\"EquipmentCondition\":\"AsBuild\",\"EquipmentStatus\":\"Working\",\"DepartmentName\":\"Physical Therapy\",\"EquipmentOrgin\":\"NA\",\"ManufacturerName\":\"CHINA\",\"VendorName\":\"NA\",\"EquipmentPurchaseCost\":10138,\"EquipmentPurchaseDate\":\"22/03/16\",\"EquipmentInstallDate\":\"22/03/16\",\"EquipmentExpectedLifeTime\":\"22/03/21\",\"EquipmentWarrantyExpiresDate\":\"22/03/21\"},{\"EquipmentSystemCode\":\"094e8024-e5a3-47e3-8486-1e4a15c5b9a4\",\"EquipmentName\":\"Oximeters, Pulse\",\"region\":\"الإسكندرية الساحل\",\"GovName\":\"الإسكندرية\",\"CityName\":\"الجمرك\",\"HospitalName\":\"42 Hospital\",\"EquipmentCondition\":\"AsBuild\",\"EquipmentStatus\":\"Working\",\"DepartmentName\":\"الغسيل الكلوي\",\"EquipmentOrgin\":\"NA\",\"ManufacturerName\":\"Votem\",\"VendorName\":\"NA\",\"EquipmentPurchaseCost\":2200,\"EquipmentPurchaseDate\":\"19/03/16\",\"EquipmentInstallDate\":\"19/03/16\",\"EquipmentExpectedLifeTime\":\"19/03/21\",\"EquipmentWarrantyExpiresDate\":\"19/03/21\"},{\"EquipmentSystemCode\":\"119862b7-5acf-49bf-9f72-345fa4c97717\",\"EquipmentName\":\"Hydrocollators\",\"region\":\"الإسكندرية الساحل\",\"GovName\":\"الإسكندرية\",\"CityName\":\"الجمرك\",\"HospitalName\":\"16 Hospital\",\"EquipmentCondition\":\"AsBuild\",\"EquipmentStatus\":\"Working\",\"DepartmentName\":\"مبتسرين\",\"EquipmentOrgin\":\"NA\",\"ManufacturerName\":\"Hydrocollator\",\"VendorName\":\"NA\",\"EquipmentPurchaseCost\":9180,\"EquipmentPurchaseDate\":\"21/04/16\",\"EquipmentInstallDate\":\"21/04/16\",\"EquipmentExpectedLifeTime\":\"21/04/21\",\"EquipmentWarrantyExpiresDate\":\"21/04/21\"},{\"EquipmentSystemCode\":\"11fcd777-6793-4dfc-8ccf-6df75d179a08\",\"EquipmentName\":\"C-Arm Radiographic/Fluoroscopic\",\"region\":\"الإسكندرية الساحل\",\"GovName\":\"الإسكندرية\",\"CityName\":\"الجمرك\",\"HospitalName\":\"16 Hospital\",\"EquipmentCondition\":\"AsBuild\",\"EquipmentStatus\":\"Not Working\",\"DepartmentName\":\"Physical Therapy\",\"EquipmentOrgin\":\"NA\",\"ManufacturerName\":\"GE OEC\",\"VendorName\":\"NA\",\"EquipmentPurchaseCost\":630000,\"EquipmentPurchaseDate\":\"09/06/16\",\"EquipmentInstallDate\":\"09/06/16\",\"EquipmentExpectedLifeTime\":\"09/06/21\",\"EquipmentWarrantyExpiresDate\":\"09/06/21\"},{\"EquipmentSystemCode\":\"1a867bbb-2af6-46c2-9a78-f808ebbb99ed\",\"EquipmentName\":\"Oximeters, Pulse\",\"region\":\"الإسكندرية الساحل\",\"GovName\":\"الإسكندرية\",\"CityName\":\"الجمرك\",\"HospitalName\":\"16 Hospital\",\"EquipmentCondition\":\"AsBuild\",\"EquipmentStatus\":\"Not Working\",\"DepartmentName\":\"الغسيل الكلوي\",\"EquipmentOrgin\":\"NA\",\"ManufacturerName\":\"Charmcare\",\"VendorName\":\"NA\",\"EquipmentPurchaseCost\":4400,\"EquipmentPurchaseDate\":\"11/01/16\",\"EquipmentInstallDate\":\"11/01/16\",\"EquipmentExpectedLifeTime\":\"11/01/21\",\"EquipmentWarrantyExpiresDate\":\"11/01/21\"},{\"EquipmentSystemCode\":\"2341d0de-ffe2-437f-8a2c-72a50071739a\",\"EquipmentName\":\"Incubators, Infant, Mobile\",\"region\":\"الإسكندرية الساحل\",\"GovName\":\"الإسكندرية\",\"CityName\":\"الجمرك\",\"HospitalName\":\"23 Hospital\",\"EquipmentCondition\":\"AsBuild\",\"EquipmentStatus\":\"Working\",\"DepartmentName\":\"مبتسرين\",\"EquipmentOrgin\":\"NA\",\"ManufacturerName\":\"CHINA\",\"VendorName\":\"NA\",\"EquipmentPurchaseCost\":10138,\"EquipmentPurchaseDate\":\"15/03/16\",\"EquipmentInstallDate\":\"15/03/16\",\"EquipmentExpectedLifeTime\":\"15/03/21\",\"EquipmentWarrantyExpiresDate\":\"15/03/21\"},{\"EquipmentSystemCode\":\"2f683330-6018-4b31-b0ab-9e8bfccfe68a\",\"EquipmentName\":\"Electrocardiographs Single-Channel\",\"region\":\"الإسكندرية الساحل\",\"GovName\":\"الإسكندرية\",\"CityName\":\"الجمرك\",\"HospitalName\":\"23 Hospital\",\"EquipmentCondition\":\"AsBuild\",\"EquipmentStatus\":\"Not Working\",\"DepartmentName\":\"Physical Therapy\",\"EquipmentOrgin\":\"NA\",\"ManufacturerName\":\"Fukuda\",\"VendorName\":\"NA\",\"EquipmentPurchaseCost\":10500,\"EquipmentPurchaseDate\":\"17/03/16\",\"EquipmentInstallDate\":\"17/03/16\",\"EquipmentExpectedLifeTime\":\"17/03/21\",\"EquipmentWarrantyExpiresDate\":\"17/03/21\"},{\"EquipmentSystemCode\":\"3340bb0e-8dc8-4e35-be50-6cda7d1f7bff\",\"EquipmentName\":\"Hemodialysis Units\",\"region\":\"الإسكندرية الساحل\",\"GovName\":\"الإسكندرية\",\"CityName\":\"الجمرك\",\"HospitalName\":\"23 Hospital\",\"EquipmentCondition\":\"AsBuild\",\"EquipmentStatus\":\"Not Working\",\"DepartmentName\":\"الغسيل الكلوي\",\"EquipmentOrgin\":\"NA\",\"ManufacturerName\":\"Fresenius\",\"VendorName\":\"NA\",\"EquipmentPurchaseCost\":90000,\"EquipmentPurchaseDate\":\"23/06/16\",\"EquipmentInstallDate\":\"23/06/16\",\"EquipmentExpectedLifeTime\":\"23/06/21\",\"EquipmentWarrantyExpiresDate\":\"23/06/21\"},{\"EquipmentSystemCode\":\"3a486716-9a08-4835-858b-098145262e00\",\"EquipmentName\":\"Defibrillators, External,Automated\",\"region\":\"الإسكندرية الساحل\",\"GovName\":\"الإسكندرية\",\"CityName\":\"الجمرك\",\"HospitalName\":\"2 Hospital\",\"EquipmentCondition\":\"AsBuild\",\"EquipmentStatus\":\"Working\",\"DepartmentName\":\"مبتسرين\",\"EquipmentOrgin\":\"NA\",\"ManufacturerName\":\"INSTRAMED\",\"VendorName\":\"NA\",\"EquipmentPurchaseCost\":31480,\"EquipmentPurchaseDate\":\"28/03/16\",\"EquipmentInstallDate\":\"28/03/16\",\"EquipmentExpectedLifeTime\":\"28/03/21\",\"EquipmentWarrantyExpiresDate\":\"28/03/21\"},{\"EquipmentSystemCode\":\"40f164a4-c495-47a1-a542-d80969707ae6\",\"EquipmentName\":\"Monitoring Systems, Physiologic\",\"region\":\"الإسكندرية الساحل\",\"GovName\":\"الإسكندرية\",\"CityName\":\"الجمرك\",\"HospitalName\":\"2 Hospital\",\"EquipmentCondition\":\"AsBuild\",\"EquipmentStatus\":\"Working\",\"DepartmentName\":\"Physical Therapy\",\"EquipmentOrgin\":\"NA\",\"ManufacturerName\":\"PHILIPS\",\"VendorName\":\"NA\",\"EquipmentPurchaseCost\":66999.9,\"EquipmentPurchaseDate\":\"19/04/16\",\"EquipmentInstallDate\":\"19/04/16\",\"EquipmentExpectedLifeTime\":\"19/04/21\",\"EquipmentWarrantyExpiresDate\":\"19/04/21\"},{\"EquipmentSystemCode\":\"427e7f8e-e275-42df-97f1-a58168385218\",\"EquipmentName\":\"Bilirubinometers\",\"region\":\"الإسكندرية الساحل\",\"GovName\":\"الإسكندرية\",\"CityName\":\"الجمرك\",\"HospitalName\":\"2 Hospital\",\"EquipmentCondition\":\"AsBuild\",\"EquipmentStatus\":\"Working\",\"DepartmentName\":\"الغسيل الكلوي\",\"EquipmentOrgin\":\"NA\",\"ManufacturerName\":\"DRAGER\",\"VendorName\":\"NA\",\"EquipmentPurchaseCost\":45000,\"EquipmentPurchaseDate\":\"14/03/16\",\"EquipmentInstallDate\":\"14/03/16\",\"EquipmentExpectedLifeTime\":\"14/03/21\",\"EquipmentWarrantyExpiresDate\":\"14/03/21\"},{\"EquipmentSystemCode\":\"432ff364-54b9-4958-b922-54ac48b56cb8\",\"EquipmentName\":\"Analyzers, Hematology, Cell-Counting, Automated\",\"region\":\"الإسكندرية الساحل\",\"GovName\":\"الإسكندرية\",\"CityName\":\"الجمرك\",\"HospitalName\":\"40 Hospital\",\"EquipmentCondition\":\"AsBuild\",\"EquipmentStatus\":\"Working\",\"DepartmentName\":\"مبتسرين\",\"EquipmentOrgin\":\"NA\",\"ManufacturerName\":\"MEDONIC\",\"VendorName\":\"NA\",\"EquipmentPurchaseCost\":49000,\"EquipmentPurchaseDate\":\"29/03/16\",\"EquipmentInstallDate\":\"29/03/16\",\"EquipmentExpectedLifeTime\":\"29/03/21\",\"EquipmentWarrantyExpiresDate\":\"29/03/21\"},{\"EquipmentSystemCode\":\"53c1305c-05d0-45d8-b995-963fcdbe4b57\",\"EquipmentName\":\"Oximeters, Pulse\",\"region\":\"الإسكندرية الساحل\",\"GovName\":\"الإسكندرية\",\"CityName\":\"الجمرك\",\"HospitalName\":\"40 Hospital\",\"EquipmentCondition\":\"AsBuild\",\"EquipmentStatus\":\"Working\",\"DepartmentName\":\"Physical Therapy\",\"EquipmentOrgin\":\"NA\",\"ManufacturerName\":\"Votem\",\"VendorName\":\"NA\",\"EquipmentPurchaseCost\":2200,\"EquipmentPurchaseDate\":\"18/03/16\",\"EquipmentInstallDate\":\"18/03/16\",\"EquipmentExpectedLifeTime\":\"18/03/21\",\"EquipmentWarrantyExpiresDate\":\"18/03/21\"},{\"EquipmentSystemCode\":\"56034e0c-90b8-4328-a8b8-763528fb08eb\",\"EquipmentName\":\"Oximeters, Pulse\",\"region\":\"الإسكندرية الساحل\",\"GovName\":\"الإسكندرية\",\"CityName\":\"الجمرك\",\"HospitalName\":\"40 Hospital\",\"EquipmentCondition\":\"AsBuild\",\"EquipmentStatus\":\"Not Working\",\"DepartmentName\":\"الغسيل الكلوي\",\"EquipmentOrgin\":\"NA\",\"ManufacturerName\":\"Charmcare\",\"VendorName\":\"NA\",\"EquipmentPurchaseCost\":4400,\"EquipmentPurchaseDate\":\"11/01/16\",\"EquipmentInstallDate\":\"11/01/16\",\"EquipmentExpectedLifeTime\":\"11/01/21\",\"EquipmentWarrantyExpiresDate\":\"11/01/21\"},{\"EquipmentSystemCode\":\"6714e734-92f0-41aa-9a0e-2cd8ad04d14a\",\"EquipmentName\":\"Oximeters, Pulse\",\"region\":\"الإسكندرية الساحل\",\"GovName\":\"الإسكندرية\",\"CityName\":\"الجمرك\",\"HospitalName\":\"23 Hospital\",\"EquipmentCondition\":\"AsBuild\",\"EquipmentStatus\":\"Working\",\"DepartmentName\":\"مبتسرين\",\"EquipmentOrgin\":\"NA\",\"ManufacturerName\":\"Votem\",\"VendorName\":\"NA\",\"EquipmentPurchaseCost\":2200,\"EquipmentPurchaseDate\":\"17/04/16\",\"EquipmentInstallDate\":\"17/04/16\",\"EquipmentExpectedLifeTime\":\"17/04/21\",\"EquipmentWarrantyExpiresDate\":\"17/04/21\"},{\"EquipmentSystemCode\":\"6c2ebe2f-02c0-4ce6-a53e-fb065e4d517a\",\"EquipmentName\":\"Electrocardiographs Single-Channel\",\"region\":\"الإسكندرية الساحل\",\"GovName\":\"الإسكندرية\",\"CityName\":\"الجمرك\",\"HospitalName\":\"23 Hospital\",\"EquipmentCondition\":\"AsBuild\",\"EquipmentStatus\":\"Working\",\"DepartmentName\":\"Physical Therapy\",\"EquipmentOrgin\":\"NA\",\"ManufacturerName\":\"MORTARA\",\"VendorName\":\"NA\",\"EquipmentPurchaseCost\":9980,\"EquipmentPurchaseDate\":\"02/03/16\",\"EquipmentInstallDate\":\"02/03/16\",\"EquipmentExpectedLifeTime\":\"02/03/21\",\"EquipmentWarrantyExpiresDate\":\"02/03/21\"},{\"EquipmentSystemCode\":\"6d340fea-45ad-4a62-a760-99288ff1dc7b\",\"EquipmentName\":\"Syringe Pumps\",\"region\":\"الإسكندرية الساحل\",\"GovName\":\"الإسكندرية\",\"CityName\":\"الجمرك\",\"HospitalName\":\"23 Hospital\",\"EquipmentCondition\":\"AsBuild\",\"EquipmentStatus\":\"Working\",\"DepartmentName\":\"الغسيل الكلوي\",\"EquipmentOrgin\":\"NA\",\"ManufacturerName\":\"SK\",\"VendorName\":\"NA\",\"EquipmentPurchaseCost\":3200,\"EquipmentPurchaseDate\":\"17/03/16\",\"EquipmentInstallDate\":\"17/03/16\",\"EquipmentExpectedLifeTime\":\"17/03/21\",\"EquipmentWarrantyExpiresDate\":\"17/03/21\"},{\"EquipmentSystemCode\":\"712b22b5-673e-42d0-b827-4cb283717259\",\"EquipmentName\":\"Electrocardiographs Single-Channel\",\"region\":\"الإسكندرية الساحل\",\"GovName\":\"الإسكندرية\",\"CityName\":\"الجمرك\",\"HospitalName\":\"9 Hospital\",\"EquipmentCondition\":\"AsBuild\",\"EquipmentStatus\":\"Working\",\"DepartmentName\":\"مبتسرين\",\"EquipmentOrgin\":\"NA\",\"ManufacturerName\":\"MORTARA\",\"VendorName\":\"NA\",\"EquipmentPurchaseCost\":9980,\"EquipmentPurchaseDate\":\"02/03/16\",\"EquipmentInstallDate\":\"02/03/16\",\"EquipmentExpectedLifeTime\":\"02/03/21\",\"EquipmentWarrantyExpiresDate\":\"02/03/21\"},{\"EquipmentSystemCode\":\"71d156bd-b8da-4da3-a808-65b0de11d6b4\",\"EquipmentName\":\"Monitoring Systems, Physiologic\",\"region\":\"الإسكندرية الساحل\",\"GovName\":\"الإسكندرية\",\"CityName\":\"الجمرك\",\"HospitalName\":\"9 Hospital\",\"EquipmentCondition\":\"AsBuild\",\"EquipmentStatus\":\"Working\",\"DepartmentName\":\"Physical Therapy\",\"EquipmentOrgin\":\"NA\",\"ManufacturerName\":\"Datascope\",\"VendorName\":\"NA\",\"EquipmentPurchaseCost\":52250,\"EquipmentPurchaseDate\":\"26/04/16\",\"EquipmentInstallDate\":\"26/04/16\",\"EquipmentExpectedLifeTime\":\"26/04/21\",\"EquipmentWarrantyExpiresDate\":\"26/04/21\"},{\"EquipmentSystemCode\":\"7629c1eb-d9d1-4c7a-aa20-fa4aebab8dcb\",\"EquipmentName\":\"Electrocardiographs Single-Channel\",\"region\":\"الإسكندرية الساحل\",\"GovName\":\"الإسكندرية\",\"CityName\":\"الجمرك\",\"HospitalName\":\"9 Hospital\",\"EquipmentCondition\":\"AsBuild\",\"EquipmentStatus\":\"Not Working\",\"DepartmentName\":\"الغسيل الكلوي\",\"EquipmentOrgin\":\"NA\",\"ManufacturerName\":\"Fukuda\",\"VendorName\":\"NA\",\"EquipmentPurchaseCost\":10500,\"EquipmentPurchaseDate\":\"17/03/16\",\"EquipmentInstallDate\":\"17/03/16\",\"EquipmentExpectedLifeTime\":\"17/03/21\",\"EquipmentWarrantyExpiresDate\":\"17/03/21\"},{\"EquipmentSystemCode\":\"7fc1e196-a80e-42ce-9fc2-bce3aeccb6da\",\"EquipmentName\":\"Sealers, Heat\",\"region\":\"الإسكندرية الساحل\",\"GovName\":\"الإسكندرية\",\"CityName\":\"الجمرك\",\"HospitalName\":\"68 Hospital\",\"EquipmentCondition\":\"AsBuild\",\"EquipmentStatus\":\"Working\",\"DepartmentName\":\"مبتسرين\",\"EquipmentOrgin\":\"NA\",\"ManufacturerName\":\"Centron\",\"VendorName\":\"NA\",\"EquipmentPurchaseCost\":25000,\"EquipmentPurchaseDate\":\"26/03/16\",\"EquipmentInstallDate\":\"26/03/16\",\"EquipmentExpectedLifeTime\":\"26/03/21\",\"EquipmentWarrantyExpiresDate\":\"26/03/21\"},{\"EquipmentSystemCode\":\"8671f5bf-77b8-4df7-94f9-df62c4826aed\",\"EquipmentName\":\"Hemodialysis Units\",\"region\":\"الإسكندرية الساحل\",\"GovName\":\"الإسكندرية\",\"CityName\":\"الجمرك\",\"HospitalName\":\"68 Hospital\",\"EquipmentCondition\":\"AsBuild\",\"EquipmentStatus\":\"Not Working\",\"DepartmentName\":\"Physical Therapy\",\"EquipmentOrgin\":\"NA\",\"ManufacturerName\":\"Fresenius\",\"VendorName\":\"NA\",\"EquipmentPurchaseCost\":81900,\"EquipmentPurchaseDate\":\"02/02/16\",\"EquipmentInstallDate\":\"02/02/16\",\"EquipmentExpectedLifeTime\":\"02/02/21\",\"EquipmentWarrantyExpiresDate\":\"02/02/21\"},{\"EquipmentSystemCode\":\"8abc7108-84d4-4aa1-b6ec-94d4b575c176\",\"EquipmentName\":\"Ultrasound Scanning Systems, General-Purpose\",\"region\":\"الإسكندرية الساحل\",\"GovName\":\"الإسكندرية\",\"CityName\":\"الجمرك\",\"HospitalName\":\"68 Hospital\",\"EquipmentCondition\":\"AsBuild\",\"EquipmentStatus\":\"Working\",\"DepartmentName\":\"الغسيل الكلوي\",\"EquipmentOrgin\":\"NA\",\"ManufacturerName\":\"GE\",\"VendorName\":\"NA\",\"EquipmentPurchaseCost\":235000,\"EquipmentPurchaseDate\":\"04/04/16\",\"EquipmentInstallDate\":\"04/04/16\",\"EquipmentExpectedLifeTime\":\"04/04/21\",\"EquipmentWarrantyExpiresDate\":\"04/04/21\"},{\"EquipmentSystemCode\":\"8feb384d-a9a9-4f31-96f8-68c516f6472e\",\"EquipmentName\":\"Photometers\",\"region\":\"الإسكندرية الساحل\",\"GovName\":\"الإسكندرية\",\"CityName\":\"الجمرك\",\"HospitalName\":\"23 Hospital\",\"EquipmentCondition\":\"AsBuild\",\"EquipmentStatus\":\"Working\",\"DepartmentName\":\"مبتسرين\",\"EquipmentOrgin\":\"NA\",\"ManufacturerName\":\"BoehringerMannheim\",\"VendorName\":\"NA\",\"EquipmentPurchaseCost\":28000,\"EquipmentPurchaseDate\":\"27/03/16\",\"EquipmentInstallDate\":\"27/03/16\",\"EquipmentExpectedLifeTime\":\"27/03/21\",\"EquipmentWarrantyExpiresDate\":\"27/03/21\"},{\"EquipmentSystemCode\":\"9a852548-8aff-46f1-997f-8b50ba1b97a7\",\"EquipmentName\":\"Electrocardiographs Single-Channel\",\"region\":\"الإسكندرية الساحل\",\"GovName\":\"الإسكندرية\",\"CityName\":\"الجمرك\",\"HospitalName\":\"23 Hospital\",\"EquipmentCondition\":\"AsBuild\",\"EquipmentStatus\":\"Working\",\"DepartmentName\":\"Physical Therapy\",\"EquipmentOrgin\":\"NA\",\"ManufacturerName\":\"NIHON KOHDEN\",\"VendorName\":\"NA\",\"EquipmentPurchaseCost\":15000,\"EquipmentPurchaseDate\":\"26/10/16\",\"EquipmentInstallDate\":\"26/10/16\",\"EquipmentExpectedLifeTime\":\"26/10/21\",\"EquipmentWarrantyExpiresDate\":\"26/10/21\"},{\"EquipmentSystemCode\":\"9e19a8e7-dab5-4bd6-983c-5149153a639c\",\"EquipmentName\":\"Incubators, Infant, Mobile\",\"region\":\"الإسكندرية الساحل\",\"GovName\":\"الإسكندرية\",\"CityName\":\"الجمرك\",\"HospitalName\":\"23 Hospital\",\"EquipmentCondition\":\"AsBuild\",\"EquipmentStatus\":\"Working\",\"DepartmentName\":\"الغسيل الكلوي\",\"EquipmentOrgin\":\"NA\",\"ManufacturerName\":\"CHINA\",\"VendorName\":\"NA\",\"EquipmentPurchaseCost\":10138,\"EquipmentPurchaseDate\":\"21/03/16\",\"EquipmentInstallDate\":\"21/03/16\",\"EquipmentExpectedLifeTime\":\"21/03/21\",\"EquipmentWarrantyExpiresDate\":\"21/03/21\"},{\"EquipmentSystemCode\":\"8feb384d-a9a9-4f31-96f8-68c516f6472e\",\"EquipmentName\":\"Photometers\",\"region\":\"الإسكندرية الساحل\",\"GovName\":\"الإسكندرية\",\"CityName\":\"الجمرك\",\"HospitalName\":\"6 Hospital\",\"EquipmentCondition\":\"AsBuild\",\"EquipmentStatus\":\"Working\",\"DepartmentName\":\"مبتسرين\",\"EquipmentOrgin\":\"NA\",\"ManufacturerName\":\"BoehringerMannheim\",\"VendorName\":\"NA\",\"EquipmentPurchaseCost\":28000,\"EquipmentPurchaseDate\":\"27/03/16\",\"EquipmentInstallDate\":\"27/03/16\",\"EquipmentExpectedLifeTime\":\"27/03/21\",\"EquipmentWarrantyExpiresDate\":\"27/03/21\"},{\"EquipmentSystemCode\":\"9a852548-8aff-46f1-997f-8b50ba1b97a7\",\"EquipmentName\":\"Electrocardiographs Single-Channel\",\"region\":\"الإسكندرية الساحل\",\"GovName\":\"الإسكندرية\",\"CityName\":\"الجمرك\",\"HospitalName\":\"6 Hospital\",\"EquipmentCondition\":\"AsBuild\",\"EquipmentStatus\":\"Working\",\"DepartmentName\":\"Physical Therapy\",\"EquipmentOrgin\":\"NA\",\"ManufacturerName\":\"NIHON KOHDEN\",\"VendorName\":\"NA\",\"EquipmentPurchaseCost\":15000,\"EquipmentPurchaseDate\":\"26/10/16\",\"EquipmentInstallDate\":\"26/10/16\",\"EquipmentExpectedLifeTime\":\"26/10/21\",\"EquipmentWarrantyExpiresDate\":\"26/10/21\"},{\"EquipmentSystemCode\":\"9e19a8e7-dab5-4bd6-983c-5149153a639c\",\"EquipmentName\":\"Incubators, Infant, Mobile\",\"region\":\"الإسكندرية الساحل\",\"GovName\":\"الإسكندرية\",\"CityName\":\"الجمرك\",\"HospitalName\":\"6 Hospital\",\"EquipmentCondition\":\"AsBuild\",\"EquipmentStatus\":\"Working\",\"DepartmentName\":\"الغسيل الكلوي\",\"EquipmentOrgin\":\"NA\",\"ManufacturerName\":\"CHINA\",\"VendorName\":\"NA\",\"EquipmentPurchaseCost\":10138,\"EquipmentPurchaseDate\":\"21/03/16\",\"EquipmentInstallDate\":\"21/03/16\",\"EquipmentExpectedLifeTime\":\"21/03/21\",\"EquipmentWarrantyExpiresDate\":\"21/03/21\"}]");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var esri_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! esri-loader */ "r6rm");
/* harmony import */ var esri_loader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(esri_loader__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_Data_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/Data/data.json */ "6unu");
var _assets_Data_data_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/Data/data.json */ "6unu", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");





class AppComponent {
    constructor() { }
    ngOnInit() {
        let hospitalData = _assets_Data_data_json__WEBPACK_IMPORTED_MODULE_1__;
        let name = 'ahmed';
        Object(esri_loader__WEBPACK_IMPORTED_MODULE_0__["setDefaultOptions"])({ version: '4.18' });
        const options = {
            css: true,
            insertCssBefore: 'style',
        };
        Object(esri_loader__WEBPACK_IMPORTED_MODULE_0__["loadModules"])([
            'esri/views/MapView',
            'esri/Map',
            'esri/layers/FeatureLayer',
            'esri/widgets/BasemapToggle',
            'esri/widgets/Compass',
            'esri/widgets/Home',
            'esri/widgets/ScaleBar',
            'esri/Graphic',
            'esri/widgets/Search',
        ], options)
            .then(([MapView, Map, FeatureLayer, BasemapToggle, Compass, Home, ScaleBar, Graphic, Search,]) => {
            //#region HOSPLayer(Point)
            var HOSPLayerSymbol = {
                type: 'simple',
                symbol: {
                    type: 'picture-marker',
                    url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Hospital_pointer.png',
                    width: '30px',
                    height: '30px',
                },
            };
            4;
            var HOSPLayerLabel = {
                symbol: {
                    type: 'text',
                    color: 'red',
                    haloColor: 'white',
                    haloSize: '1.5px',
                    font: {
                        size: '12px',
                        // style: 'italic',
                        weight: 'normal',
                    },
                },
                labelPlacement: 'above-center',
                labelExpressionInfo: {
                    expression: '$feature.AR_NAME',
                },
            };
            function buildPopupHOSPLayer(feature) {
                // console.log(feature.graphic.attributes.GOV_NAME);
                // console.log(feature.graphic.attributes);
                let DepartmentName_1;
                let EquipmentSystemCode_1;
                let EquipmentName_1;
                let region_1;
                let GovName_1;
                let CityName_1;
                let HospitalName_1;
                let EquipmentCondition_1;
                let EquipmentStatus_1;
                let EquipmentOrgin_1;
                let ManufacturerName_1;
                let VendorName_1;
                let EquipmentPurchaseCost_1;
                let EquipmentPurchaseDate_1;
                let EquipmentInstallDate_1;
                let EquipmentExpectedLifeTime_1;
                let EquipmentWarrantyExpiresDate_1;
                let DepartmentName_2;
                let EquipmentSystemCode_2;
                let EquipmentName_2;
                let region_2;
                let GovName_2;
                let CityName_2;
                let HospitalName_2;
                let EquipmentCondition_2;
                let EquipmentStatus_2;
                let EquipmentOrgin_2;
                let ManufacturerName_2;
                let VendorName_2;
                let EquipmentPurchaseCost_2;
                let EquipmentPurchaseDate_2;
                let EquipmentInstallDate_2;
                let EquipmentExpectedLifeTime_2;
                let EquipmentWarrantyExpiresDate_2;
                let DepartmentName_3;
                let EquipmentSystemCode_3;
                let EquipmentName_3;
                let region_3;
                let GovName_3;
                let CityName_3;
                let HospitalName_3;
                let EquipmentCondition_3;
                let EquipmentStatus_3;
                let EquipmentOrgin_3;
                let ManufacturerName_3;
                let VendorName_3;
                let EquipmentPurchaseCost_3;
                let EquipmentPurchaseDate_3;
                let EquipmentInstallDate_3;
                let EquipmentExpectedLifeTime_3;
                let EquipmentWarrantyExpiresDate_3;
                function getData(id) {
                    hospitalData.forEach((element) => {
                        if (element.HospitalName == id) {
                            if (element.DepartmentName == 'مبتسرين') {
                                console.log('departmant', element.DepartmentName);
                                EquipmentSystemCode_1 = element.EquipmentSystemCode;
                                EquipmentName_1 = element.EquipmentName;
                                region_1 = element.region;
                                GovName_1 = element.GovName;
                                CityName_1 = element.CityName;
                                HospitalName_1 = element.HospitalName;
                                EquipmentCondition_1 = element.EquipmentCondition;
                                EquipmentStatus_1 = element.EquipmentStatus;
                                DepartmentName_1 = element.DepartmentName;
                                EquipmentOrgin_1 = element.EquipmentOrgin;
                                ManufacturerName_1 = element.ManufacturerName;
                                VendorName_1 = element.VendorName;
                                EquipmentPurchaseCost_1 = element.EquipmentPurchaseCost;
                                EquipmentPurchaseDate_1 = element.EquipmentPurchaseDate;
                                EquipmentInstallDate_1 = element.EquipmentInstallDate;
                                EquipmentExpectedLifeTime_1 =
                                    element.EquipmentExpectedLifeTime;
                                EquipmentWarrantyExpiresDate_1 =
                                    element.EquipmentWarrantyExpiresDate;
                            }
                            else if (element.DepartmentName == 'الغسيل الكلوي') {
                                EquipmentSystemCode_2 = element.EquipmentSystemCode;
                                EquipmentName_2 = element.EquipmentName;
                                region_2 = element.region;
                                GovName_2 = element.GovName;
                                CityName_2 = element.CityName;
                                HospitalName_2 = element.HospitalName;
                                EquipmentCondition_2 = element.EquipmentCondition;
                                EquipmentStatus_2 = element.EquipmentStatus;
                                DepartmentName_2 = element.DepartmentName;
                                EquipmentOrgin_2 = element.EquipmentOrgin;
                                ManufacturerName_2 = element.ManufacturerName;
                                VendorName_2 = element.VendorName;
                                EquipmentPurchaseCost_2 = element.EquipmentPurchaseCost;
                                EquipmentPurchaseDate_2 = element.EquipmentPurchaseDate;
                                EquipmentInstallDate_2 = element.EquipmentInstallDate;
                                EquipmentExpectedLifeTime_2 =
                                    element.EquipmentExpectedLifeTime;
                                EquipmentWarrantyExpiresDate_2 =
                                    element.EquipmentWarrantyExpiresDate;
                            }
                            else if (element.DepartmentName == 'Physical Therapy') {
                                EquipmentSystemCode_3 = element.EquipmentSystemCode;
                                EquipmentName_3 = element.EquipmentName;
                                region_3 = element.region;
                                GovName_3 = element.GovName;
                                CityName_3 = element.CityName;
                                HospitalName_3 = element.HospitalName;
                                EquipmentCondition_3 = element.EquipmentCondition;
                                EquipmentStatus_3 = element.EquipmentStatus;
                                DepartmentName_3 = element.DepartmentName;
                                EquipmentOrgin_3 = element.EquipmentOrgin;
                                ManufacturerName_3 = element.ManufacturerName;
                                VendorName_3 = element.VendorName;
                                EquipmentPurchaseCost_3 = element.EquipmentPurchaseCost;
                                EquipmentPurchaseDate_3 = element.EquipmentPurchaseDate;
                                EquipmentInstallDate_3 = element.EquipmentInstallDate;
                                EquipmentExpectedLifeTime_3 =
                                    element.EquipmentExpectedLifeTime;
                                EquipmentWarrantyExpiresDate_3 =
                                    element.EquipmentWarrantyExpiresDate;
                            }
                        }
                    });
                }
                console.log('search name', feature.graphic.attributes.NAME);
                getData(feature.graphic.attributes.NAME);
                let div = document.createElement('div');
                div.innerHTML = `<div class="container">
            <div class="tab-wrap">

              <input type="radio" id="tab1" name="tabGroup1" class="tab">
              <label for="tab1">GIS Data</label>

              <input type="radio" id="tab2" name="tabGroup1" class="tab" checked>
              <label for="tab2">مبتسرين</label>

              <input type="radio" id="tab3" name="tabGroup1" class="tab">
              <label for="tab3">الغسيل الكلوي</label>

              <input type="radio" id="tab4" name="tabGroup1" class="tab">
              <label for="tab4">Physical Therapy</label>



              <div class="tab__content">
                <table class="popupTableInfo">
                  <tr>
                    <td>المحافظة</td>
                    <td>${feature.graphic.attributes.GOV_NAME}</td>
                  </tr>

                  <tr>
                    <td>المركز</td>
                    <td>${feature.graphic.attributes.MARKAZ}</td>
                  </tr>

                  <tr>
                    <td>المدينة</td>
                    <td>${feature.graphic.attributes.EDARA_NAME}</td>
                  </tr>

                  <tr>
                    <td>العنوان</td>
                    <td>${feature.graphic.attributes.ADDRESS}</td>
                  </tr>

                  <tr>
                    <td>HOSP_CODE</td>
                    <td>${feature.graphic.attributes.HOSP_CODE}</td>
                  </tr>

                  <tr>
                    <td>GOV_CODE</td>
                    <td>${feature.graphic.attributes.GOV_CODE}</td>
                  </tr>

                  <tr>
                    <td>EDARA_CODE</td>
                    <td>${feature.graphic.attributes.EDARA_CODE}</td>
                  </tr>

                  <tr>
                    <td>code</td>
                    <td>${feature.graphic.attributes.NAME}</td>
                  </tr>
                </table>
              </div>

              <div class="tab__content">
                <table class="popupTableInfo">
                  <tr>
                    <td>DepartmentName</td>
                    <td>${DepartmentName_1}</td>
                  </tr>

                  <tr>
                    <td>EquipmentSystemCode</td>
                    <td>${EquipmentSystemCode_1}</td>
                  </tr>

                  <tr>
                    <td>EquipmentName</td>
                    <td>${EquipmentName_1}</td>
                  </tr>

                  <tr>
                    <td>region</td>
                    <td>${region_1}</td>
                  </tr>

                  <tr>
                    <td>GovName</td>
                    <td>${GovName_1}</td>
                  </tr>

                  <tr>
                    <td>CityName</td>
                    <td>${CityName_1}</td>
                  </tr>

                  <tr>
                    <td>HospitalName</td>
                    <td>${HospitalName_1}</td>
                  </tr>


                  <tr>
                    <td>EquipmentCondition</td>
                    <td>${EquipmentCondition_1}</td>
                  </tr>

                  <tr>
                    <td>EquipmentOrgin</td>
                    <td>${EquipmentOrgin_1}</td>
                  </tr>

                  <tr>
                  <td>ManufacturerName</td>
                  <td>${ManufacturerName_1}</td>
                </tr>

                <tr>
                <td>VendorName</td>
                <td>${VendorName_1}</td>
              </tr>

              <tr>
              <td>EquipmentPurchaseCost</td>
              <td>${EquipmentPurchaseCost_1}</td>
            </tr>


            <tr>
            <td>EquipmentPurchaseDate</td>
            <td>${EquipmentPurchaseDate_1}</td>
            </tr>

            <tr>
            <td>EquipmentInstallDate</td>
            <td>${EquipmentInstallDate_1}</td>
            </tr>

            <tr>
            <td>EquipmentExpectedLifeTime</td>
            <td>${EquipmentExpectedLifeTime_1}</td>
            </tr>

            <tr>
            <td>EquipmentWarrantyExpiresDate</td>
            <td>${EquipmentWarrantyExpiresDate_1}</td>
            </tr>


                </table>
              </div>

              <div class="tab__content">

                <table class="popupTableInfo">
                <tr>
                <td>DepartmentName</td>
                <td>${DepartmentName_2}</td>
              </tr>

              <tr>
                <td>EquipmentSystemCode</td>
                <td>${EquipmentSystemCode_2}</td>
              </tr>

              <tr>
                <td>EquipmentName</td>
                <td>${EquipmentName_2}</td>
              </tr>

              <tr>
                <td>region</td>
                <td>${region_2}</td>
              </tr>

              <tr>
                <td>GovName</td>
                <td>${GovName_2}</td>
              </tr>

              <tr>
                <td>CityName</td>
                <td>${CityName_2}</td>
              </tr>

              <tr>
                <td>HospitalName</td>
                <td>${HospitalName_2}</td>
              </tr>


              <tr>
                <td>EquipmentCondition</td>
                <td>${EquipmentCondition_2}</td>
              </tr>

              <tr>
                <td>EquipmentOrgin</td>
                <td>${EquipmentOrgin_2}</td>
              </tr>

              <tr>
              <td>ManufacturerName</td>
              <td>${ManufacturerName_2}</td>
            </tr>

            <tr>
            <td>VendorName</td>
            <td>${VendorName_2}</td>
          </tr>

          <tr>
          <td>EquipmentPurchaseCost</td>
          <td>${EquipmentPurchaseCost_2}</td>
        </tr>


        <tr>
        <td>EquipmentPurchaseDate</td>
        <td>${EquipmentPurchaseDate_2}</td>
        </tr>

        <tr>
        <td>EquipmentInstallDate</td>
        <td>${EquipmentInstallDate_2}</td>
        </tr>

        <tr>
        <td>EquipmentExpectedLifeTime</td>
        <td>${EquipmentExpectedLifeTime_2}</td>
        </tr>

        <tr>
        <td>EquipmentWarrantyExpiresDate</td>
        <td>${EquipmentWarrantyExpiresDate_2}</td>
        </tr>

                </table>
              </div>


              <div class="tab__content">

              <table class="popupTableInfo">
              <tr>
              <td>DepartmentName</td>
              <td>${DepartmentName_3}</td>
            </tr>

            <tr>
              <td>EquipmentSystemCode</td>
              <td>${EquipmentSystemCode_3}</td>
            </tr>

            <tr>
              <td>EquipmentName</td>
              <td>${EquipmentName_3}</td>
            </tr>

            <tr>
              <td>region</td>
              <td>${region_3}</td>
            </tr>

            <tr>
              <td>GovName</td>
              <td>${GovName_3}</td>
            </tr>

            <tr>
              <td>CityName</td>
              <td>${CityName_3}</td>
            </tr>

            <tr>
              <td>HospitalName</td>
              <td>${HospitalName_3}</td>
            </tr>


            <tr>
              <td>EquipmentCondition</td>
              <td>${EquipmentCondition_3}</td>
            </tr>

            <tr>
              <td>EquipmentOrgin</td>
              <td>${EquipmentOrgin_3}</td>
            </tr>

            <tr>
            <td>ManufacturerName</td>
            <td>${ManufacturerName_3}</td>
          </tr>

          <tr>
          <td>VendorName</td>
          <td>${VendorName_3}</td>
        </tr>

        <tr>
        <td>EquipmentPurchaseCost</td>
        <td>${EquipmentPurchaseCost_3}</td>
      </tr>


      <tr>
      <td>EquipmentPurchaseDate</td>
      <td>${EquipmentPurchaseDate_3}</td>
      </tr>

      <tr>
      <td>EquipmentInstallDate</td>
      <td>${EquipmentInstallDate_3}</td>
      </tr>

      <tr>
      <td>EquipmentExpectedLifeTime</td>
      <td>${EquipmentExpectedLifeTime_3}</td>
      </tr>

      <tr>
      <td>EquipmentWarrantyExpiresDate</td>
      <td>${EquipmentWarrantyExpiresDate_3}</td>
      </tr>

              </table>
            </div>
            </div>
          </div>
          `;
                return div;
            }
            var popupHOSPLayer = {
                title: '{AR_NAME}',
                content: buildPopupHOSPLayer,
            };
            const HOSPLayer = new FeatureLayer({
                url: 'https://services9.arcgis.com/vpYrvEKDJvmCwoQX/ArcGIS/rest/services/new_Health_gdb/FeatureServer/0',
                popupEnabled: true,
                renderer: HOSPLayerSymbol,
                labelingInfo: [HOSPLayerLabel],
                popupTemplate: popupHOSPLayer,
                // popupTemplate: {
                //   title: '{AR_NAME}',
                //   content: [
                //     {
                //       type: 'fields', // FieldsContentElement
                //       fieldInfos: [
                //         {
                //           fieldName: 'GOV_NAME',
                //           label: 'المحافظة',
                //         },
                //         {
                //           fieldName: 'MARKAZ',
                //           visible: true,
                //           label: 'المركز',
                //         },
                //         {
                //           fieldName: 'EDARA_NAME',
                //           label: 'المدينة',
                //         },
                //         {
                //           fieldName: 'ADDRESS',
                //           visible: true,
                //           label: 'العنوان',
                //         },
                //         {
                //           fieldName: 'HOSP_CODE',
                //           visible: true,
                //           label: 'HOSP_CODE',
                //         },
                //         {
                //           fieldName: 'GOV_CODE',
                //           visible: true,
                //           label: 'GOV_CODE',
                //         },
                //         {
                //           fieldName: 'EDARA_CODE',
                //           visible: true,
                //           label: 'EDARA_CODE',
                //         },
                //       ],
                //     },
                //     {
                //       type: 'text', // TextContentElement
                //       text:
                //         ' البيانات الوصفية المرتبطة ب {AR_NAME}',
                //     },
                //     {
                //       type: 'fields', // MediaContentElement
                //       fieldInfos: [
                //         {
                //           title: '<b>Count by type</b>',
                //           type: 'pie-chart',
                //           caption: '',
                //           value: {
                //             fields: ['relationships/0/Point_Count_COMMON'],
                //             normalizeField: null,
                //             tooltipField: 'relationships/0/COMMON',
                //           },
                //         },
                //         {
                //           title: '<b>Mexican Fan Palm</b>',
                //           type: 'image',
                //           caption: 'tree species',
                //           value: {
                //             sourceURL:
                //               'https://www.sunset.com/wp-content/uploads/96006df453533f4c982212b8cc7882f5-800x0-c-default.jpg',
                //           },
                //         },
                //         {
                //           title: '<b>Indian Laurel Fig</b>',
                //           caption: 'tree species',
                //           value: {
                //             sourceURL:
                //               'https://selectree.calpoly.edu/images/0600/09/original/ficus-microcarpa-tree-3.jpg',
                //           },
                //         },
                //       ],
                //     },
                //     {
                //       // You can set a attachment element(s) within the popup as well.
                //       // Similar to text and media elements, attachments can only be set
                //       // within the content. Any attachmentInfos associated with the feature
                //       // will be listed in the popup.
                //       type: 'attachments', // AttachmentsContentElement
                //     },
                //   ],
                // },
                outFields: ['*'],
            });
            //#endregion
            //#region GOVLayer
            var popupGOVLayer = {
                title: '{Gov_name_E}',
                content: `<table class="popupTableInfo">
          <tr>
          <td>اسم المحافظة</td>
          <td>{اسم_ا}</td>
          </tr>
        </table>`,
            };
            let GOVLayerSymbol = {
                type: 'simple',
                symbol: {
                    type: 'simple-fill',
                    color: [255, 255, 0, 0.7],
                    style: 'backward-diagonal',
                    outline: {
                        width: 1,
                        color: [255, 255, 0, 0.7],
                        style: 'solid',
                    },
                },
            };
            const GOVLayer = new FeatureLayer({
                url: 'https://services9.arcgis.com/vpYrvEKDJvmCwoQX/ArcGIS/rest/services/new_Health_gdb/FeatureServer/2',
                outFields: ['*'],
                renderer: GOVLayerSymbol,
                popupEnabled: true,
                popupTemplate: popupGOVLayer,
            });
            //#endregion
            //#region ADMINLayer
            var popupADMINLayer = {
                title: '{EDARA_NAME}',
                content: `<table class="popupTableInfo">
          <tr>
          <td>TOTAL_POPU</td>
          <td>{TOTAL_POPU}</td>
          </tr>

          <tr>
          <td>HEALTH1_SP</td>
          <td>{HEALTH1_SP}</td>
          </tr>

          <tr>
          <td>DENSITY</td>
          <td>{DENSITY}</td>
          </tr>
        </table>`,
            };
            let ADMINLayerSymbol = {
                type: 'simple',
                symbol: {
                    type: 'simple-fill',
                    color: [133, 160, 214, 0.7],
                    style: 'solid',
                    outline: {
                        width: 1,
                        color: [133, 160, 214, 0.7],
                        style: 'solid',
                    },
                },
            };
            const ADMINLLayer = new FeatureLayer({
                url: 'https://services9.arcgis.com/vpYrvEKDJvmCwoQX/ArcGIS/rest/services/new_Health_gdb/FeatureServer/3',
                outFields: ['*'],
                renderer: ADMINLayerSymbol,
                popupEnabled: true,
                popupTemplate: popupADMINLayer,
            });
            //#endregion
            //#region SHAYAKALayer
            var popupSHAYAKALayer = {
                title: '{GOV_NAME}',
                content: `<table class="popupTableInfo">
          <tr>
          <td>GOV_CODE</td>
          <td>{GOV_CODE}</td>
          </tr>

          <tr>
          <td>SEC_NAME</td>
          <td>{SEC_NAME}</td>
          </tr>

          <tr>
          <td>SSEC_NAME</td>
          <td>{SSEC_NAME}</td>
          </tr>
        </table>`,
            };
            let SHAYAKALayerSymbol = {
                type: 'simple',
                symbol: {
                    type: 'simple-fill',
                    color: [209, 117, 136, 0.7],
                    style: 'solid',
                    outline: {
                        width: 1,
                        color: [209, 117, 136, 0.7],
                        style: 'solid',
                    },
                },
            };
            const SHAYAKALayer = new FeatureLayer({
                url: 'https://services9.arcgis.com/vpYrvEKDJvmCwoQX/ArcGIS/rest/services/new_Health_gdb/FeatureServer/4',
                outFields: ['*'],
                renderer: SHAYAKALayerSymbol,
                popupEnabled: true,
                popupTemplate: popupSHAYAKALayer,
            });
            //#endregion
            // then we load a web map from an id
            var map = new Map({
                basemap: 'satellite',
            });
            map.addMany([GOVLayer, ADMINLLayer, SHAYAKALayer, HOSPLayer]);
            // and we show that map in a container w/ id #viewDiv
            var view = new MapView({
                map: map,
                container: 'viewDiv',
                center: [31.31652832030437, 30.417887641063995],
                zoom: 8,
                popup: {
                    dockEnabled: true,
                    dockOptions: {
                        buttonEnabled: true,
                        breakpoint: {
                            width: 600,
                            height: 1000,
                        },
                        position: 'top-left',
                    },
                },
            });
            window.view = view;
            //widgets
            var basemapToggle = new BasemapToggle({
                view: view,
                nextBasemap: 'streets',
            });
            view.ui.add(basemapToggle, {
                position: 'bottom-right',
            });
            var compass = new Compass({
                view: view,
            });
            view.ui.add(compass, 'top-left');
            var homeWidget = new Home({
                view: view,
            });
            view.ui.add(homeWidget, 'top-left');
            var scaleBar = new ScaleBar({
                view: view,
                style: 'ruler',
                unit: 'metric',
            });
            view.ui.add(scaleBar, {
                position: 'bottom-left',
            });
            var searchWidget = new Search({
                view: view,
                allPlaceholder: 'البحث باسم المدينة',
                sources: [
                    {
                        layer: HOSPLayer,
                        searchFields: ['AR_NAME'],
                        displayField: 'AR_NAME',
                        exactMatch: false,
                        outFields: ['AR_NAME'],
                        name: 'البحث باسم المستشفى',
                        placeholder: 'البحث باسم المستشفى',
                        popupEnabled: false,
                    },
                ],
            });
            // Add the search widget to the top left corner of the view
            view.ui.add(searchWidget, {
                position: 'top-right',
            });
        })
            .catch((err) => {
            // handle any errors
            console.error(err);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, consts: [["id", "viewDiv"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
    } }, styles: [".popupTableInfo[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  border: 1px solid #ddd;\r\n  padding: 8px;\r\n  text-align: right;\r\n}\r\n\r\n.popupTableInfo[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n.popupTableInfo[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\n\r\n\r\n.tab-wrap[_ngcontent-%COMP%] {\r\n  transition: 0.3s box-shadow ease;\r\n  border-radius: 6px;\r\n  max-width: 100%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  position: relative;\r\n  list-style: none;\r\n  background-color: #fff;\r\n  margin: 40px 0;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n}\r\n\r\n.tab-wrap[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 12px 23px rgba(0, 0, 0, 0.23), 0 10px 10px rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.tab[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.tab[_ngcontent-%COMP%]:checked:nth-of-type(1)    ~ .tab__content[_ngcontent-%COMP%]:nth-of-type(1) {\r\n  opacity: 1;\r\n  transition: 0.5s opacity ease-in, 0.8s transform ease;\r\n  position: relative;\r\n  top: 0;\r\n  z-index: 100;\r\n  transform: translateY(0px);\r\n  text-shadow: 0 0 0;\r\n}\r\n\r\n.tab[_ngcontent-%COMP%]:checked:nth-of-type(2)    ~ .tab__content[_ngcontent-%COMP%]:nth-of-type(2) {\r\n  opacity: 1;\r\n  transition: 0.5s opacity ease-in, 0.8s transform ease;\r\n  position: relative;\r\n  top: 0;\r\n  z-index: 100;\r\n  transform: translateY(0px);\r\n  text-shadow: 0 0 0;\r\n}\r\n\r\n.tab[_ngcontent-%COMP%]:checked:nth-of-type(3)    ~ .tab__content[_ngcontent-%COMP%]:nth-of-type(3) {\r\n  opacity: 1;\r\n  transition: 0.5s opacity ease-in, 0.8s transform ease;\r\n  position: relative;\r\n  top: 0;\r\n  z-index: 100;\r\n  transform: translateY(0px);\r\n  text-shadow: 0 0 0;\r\n}\r\n\r\n.tab[_ngcontent-%COMP%]:checked:nth-of-type(4)    ~ .tab__content[_ngcontent-%COMP%]:nth-of-type(4) {\r\n  opacity: 1;\r\n  transition: 0.5s opacity ease-in, 0.8s transform ease;\r\n  position: relative;\r\n  top: 0;\r\n  z-index: 100;\r\n  transform: translateY(0px);\r\n  text-shadow: 0 0 0;\r\n}\r\n\r\n.tab[_ngcontent-%COMP%]:checked:nth-of-type(5)    ~ .tab__content[_ngcontent-%COMP%]:nth-of-type(5) {\r\n  opacity: 1;\r\n  transition: 0.5s opacity ease-in, 0.8s transform ease;\r\n  position: relative;\r\n  top: 0;\r\n  z-index: 100;\r\n  transform: translateY(0px);\r\n  text-shadow: 0 0 0;\r\n}\r\n\r\n.tab[_ngcontent-%COMP%]:first-of-type:not(:last-of-type)    + label[_ngcontent-%COMP%] {\r\n  border-top-right-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n\r\n.tab[_ngcontent-%COMP%]:not(:first-of-type):not(:last-of-type)    + label[_ngcontent-%COMP%] {\r\n  border-radius: 0;\r\n}\r\n\r\n.tab[_ngcontent-%COMP%]:last-of-type:not(:first-of-type)    + label[_ngcontent-%COMP%] {\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.tab[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\r\n  background-color: #fff;\r\n  box-shadow: 0 -1px 0 #fff inset;\r\n  cursor: default;\r\n}\r\n\r\n.tab[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 -1px 0 #fff inset;\r\n  background-color: #fff;\r\n}\r\n\r\n.tab[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\r\n  box-shadow: 0 -1px 0 #eee inset;\r\n  border-radius: 6px 6px 0 0;\r\n  cursor: pointer;\r\n  display: block;\r\n  text-decoration: none;\r\n  color: #333;\r\n  flex-grow: 3;\r\n  text-align: center;\r\n  background-color: #f2f2f2;\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n  text-align: center;\r\n  transition: 0.3s background-color ease, 0.3s box-shadow ease;\r\n  height: 50px;\r\n  box-sizing: border-box;\r\n  padding: 15px;\r\n}\r\n\r\n.tab[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:hover {\r\n  background-color: #f9f9f9;\r\n  box-shadow: 0 1px 0 #f4f4f4 inset;\r\n}\r\n\r\n.tab__content[_ngcontent-%COMP%] {\r\n  padding: 10px 25px;\r\n  background-color: transparent;\r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: -1;\r\n  opacity: 0;\r\n  left: 0;\r\n  transform: translateY(-3px);\r\n  border-radius: 6px;\r\n}\r\n\r\n\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  font-family: 'Helvetica', sans-serif;\r\n  background-color: #e7e7e7;\r\n  color: #777;\r\n  padding: 30px 0;\r\n  font-weight: 300;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  margin: 0 auto;\r\n  display: block;\r\n  max-width: 800px;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.tab-wrap) {\r\n  padding: 0 80px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  color: #444;\r\n  text-align: center;\r\n  font-weight: 400;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  font-size: 1em;\r\n  margin-bottom: 30px;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n  font-weight: 400;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  line-height: 1.6;\r\n  margin-bottom: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7QUFFSDtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBLGdCQUFnQjs7QUFFaEI7RUFDRSxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCx3RUFBd0U7QUFDMUU7O0FBQ0E7RUFDRSw0RUFBNEU7QUFDOUU7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YscURBQXFEO0VBQ3JELGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YscURBQXFEO0VBQ3JELGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YscURBQXFEO0VBQ3JELGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YscURBQXFEO0VBQ3JELGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YscURBQXFEO0VBQ3JELGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsNkJBQTZCO0FBQy9COztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLDRCQUE0QjtBQUM5Qjs7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QiwrQkFBK0I7RUFDL0IsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLCtCQUErQjtFQUMvQixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSwrQkFBK0I7RUFDL0IsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qix5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiw0REFBNEQ7RUFDNUQsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsaUNBQWlDO0FBQ25DOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxVQUFVO0VBQ1YsT0FBTztFQUNQLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBQ0EsaUJBQWlCOztBQUNqQjtFQUNFLG9DQUFvQztFQUNwQyx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5wb3B1cFRhYmxlSW5mbyB7XHJcbiAgZm9udC1mYW1pbHk6IFwiQXZlbmlyIE5leHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsXHJcbiAgICBcInNhbnMtc2VyaWZcIjtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpcmVjdGlvbjogcnRsO1xyXG59ICovXHJcblxyXG4ucG9wdXBUYWJsZUluZm8gdGQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ucG9wdXBUYWJsZUluZm8gdHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG59XHJcblxyXG4ucG9wdXBUYWJsZUluZm8gdHI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbn1cclxuXHJcbi8qIHBvcHVwIHN0eWxlICovXHJcblxyXG4udGFiLXdyYXAge1xyXG4gIHRyYW5zaXRpb246IDAuM3MgYm94LXNoYWRvdyBlYXNlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBtYXJnaW46IDQwcHggMDtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbn1cclxuLnRhYi13cmFwOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDEycHggMjNweCByZ2JhKDAsIDAsIDAsIDAuMjMpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG59XHJcbi50YWIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnRhYjpjaGVja2VkOm50aC1vZi10eXBlKDEpIH4gLnRhYl9fY29udGVudDpudGgtb2YtdHlwZSgxKSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2l0aW9uOiAwLjVzIG9wYWNpdHkgZWFzZS1pbiwgMC44cyB0cmFuc2Zvcm0gZWFzZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDA7XHJcbn1cclxuLnRhYjpjaGVja2VkOm50aC1vZi10eXBlKDIpIH4gLnRhYl9fY29udGVudDpudGgtb2YtdHlwZSgyKSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2l0aW9uOiAwLjVzIG9wYWNpdHkgZWFzZS1pbiwgMC44cyB0cmFuc2Zvcm0gZWFzZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDA7XHJcbn1cclxuLnRhYjpjaGVja2VkOm50aC1vZi10eXBlKDMpIH4gLnRhYl9fY29udGVudDpudGgtb2YtdHlwZSgzKSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2l0aW9uOiAwLjVzIG9wYWNpdHkgZWFzZS1pbiwgMC44cyB0cmFuc2Zvcm0gZWFzZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDA7XHJcbn1cclxuLnRhYjpjaGVja2VkOm50aC1vZi10eXBlKDQpIH4gLnRhYl9fY29udGVudDpudGgtb2YtdHlwZSg0KSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2l0aW9uOiAwLjVzIG9wYWNpdHkgZWFzZS1pbiwgMC44cyB0cmFuc2Zvcm0gZWFzZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDA7XHJcbn1cclxuLnRhYjpjaGVja2VkOm50aC1vZi10eXBlKDUpIH4gLnRhYl9fY29udGVudDpudGgtb2YtdHlwZSg1KSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2l0aW9uOiAwLjVzIG9wYWNpdHkgZWFzZS1pbiwgMC44cyB0cmFuc2Zvcm0gZWFzZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDA7XHJcbn1cclxuLnRhYjpmaXJzdC1vZi10eXBlOm5vdCg6bGFzdC1vZi10eXBlKSArIGxhYmVsIHtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxufVxyXG4udGFiOm5vdCg6Zmlyc3Qtb2YtdHlwZSk6bm90KDpsYXN0LW9mLXR5cGUpICsgbGFiZWwge1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuLnRhYjpsYXN0LW9mLXR5cGU6bm90KDpmaXJzdC1vZi10eXBlKSArIGxhYmVsIHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbn1cclxuLnRhYjpjaGVja2VkICsgbGFiZWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAtMXB4IDAgI2ZmZiBpbnNldDtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuLnRhYjpjaGVja2VkICsgbGFiZWw6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgLTFweCAwICNmZmYgaW5zZXQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4udGFiICsgbGFiZWwge1xyXG4gIGJveC1zaGFkb3c6IDAgLTFweCAwICNlZWUgaW5zZXQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4IDZweCAwIDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzMzMztcclxuICBmbGV4LWdyb3c6IDM7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgYmFja2dyb3VuZC1jb2xvciBlYXNlLCAwLjNzIGJveC1zaGFkb3cgZWFzZTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcbi50YWIgKyBsYWJlbDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICBib3gtc2hhZG93OiAwIDFweCAwICNmNGY0ZjQgaW5zZXQ7XHJcbn1cclxuLnRhYl9fY29udGVudCB7XHJcbiAgcGFkZGluZzogMTBweCAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAtMTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG4vKiBib3Jpbmcgc3R1ZmYgKi9cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EnLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2U3ZTc7XHJcbiAgY29sb3I6ICM3Nzc7XHJcbiAgcGFkZGluZzogMzBweCAwO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxufVxyXG4uY29udGFpbmVyID4gKjpub3QoLnRhYi13cmFwKSB7XHJcbiAgcGFkZGluZzogMCA4MHB4O1xyXG59XHJcbmgxLCBoMiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGNvbG9yOiAjNDQ0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbmgyIHtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbmgzIHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbnAge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/products.component */ "ziXE");
/* harmony import */ var _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-orders/my-orders.component */ "oZqN");
/* harmony import */ var _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin-products/admin-products.component */ "lRFV");
/* harmony import */ var _admin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/admin-orders/admin-orders.component */ "4MUI");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "evYj");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"],
        _products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"],
        _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_5__["MyOrdersComponent"],
        _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_6__["AdminProductsComponent"],
        _admin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_7__["AdminOrdersComponent"],
        _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_9__["ShoppingCartComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]] }); })();


/***/ }),

/***/ "evYj":
/*!**********************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ShoppingCartComponent {
    constructor() { }
    ngOnInit() {
    }
}
ShoppingCartComponent.ɵfac = function ShoppingCartComponent_Factory(t) { return new (t || ShoppingCartComponent)(); };
ShoppingCartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShoppingCartComponent, selectors: [["app-shopping-cart"]], decls: 2, vars: 0, template: function ShoppingCartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "shopping-cart works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "lRFV":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin-products/admin-products.component.ts ***!
  \******************************************************************/
/*! exports provided: AdminProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductsComponent", function() { return AdminProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AdminProductsComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminProductsComponent.ɵfac = function AdminProductsComponent_Factory(t) { return new (t || AdminProductsComponent)(); };
AdminProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminProductsComponent, selectors: [["app-admin-products"]], decls: 2, vars: 0, template: function AdminProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "admin-products works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1wcm9kdWN0cy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "oZqN":
/*!**************************************************!*\
  !*** ./src/app/my-orders/my-orders.component.ts ***!
  \**************************************************/
/*! exports provided: MyOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersComponent", function() { return MyOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MyOrdersComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyOrdersComponent.ɵfac = function MyOrdersComponent_Factory(t) { return new (t || MyOrdersComponent)(); };
MyOrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyOrdersComponent, selectors: [["app-my-orders"]], decls: 2, vars: 0, template: function MyOrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "my-orders works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1vcmRlcnMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _admin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin/admin-orders/admin-orders.component */ "4MUI");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products/products.component */ "ziXE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-orders/my-orders.component */ "oZqN");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "evYj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_1__["ProductsComponent"] },
    { path: 'orders', component: _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_3__["MyOrdersComponent"] },
    { path: 'admin/orders', component: _admin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_0__["AdminOrdersComponent"] },
    { path: 'admin/products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_1__["ProductsComponent"] },
    { path: 'shopping-cart', component: _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_4__["ShoppingCartComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 2, vars: 0, template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "login works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "ziXE":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ProductsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 46, vars: 0, template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "products works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "products works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "products works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "products works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "products works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "products works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "products works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "products works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "products works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "products works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "products works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "products works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "products works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "products works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "products works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "products works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "products works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "products works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "products works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "products works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "products works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "products works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "products works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0cy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map