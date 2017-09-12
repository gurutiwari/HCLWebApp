webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/Components/Plant/PlantComponent.html":
/***/ (function(module, exports) {

module.exports = "\r\n <div class=\"panel-inline-group  \">\r\n       \r\n\r\n   <div class=\"col-md-11  panel panel-primary margin-left \" style='padding:12px;'>\r\n           \r\n    <!-- display station list -->\r\n        <stations  ></stations>         \r\n   </div>\r\n     \r\n <div class='chart-panel col-md-12 ' >\r\n\r\n            <!-- Overall Motor Status -->\r\n          <div class=\"col-md-4  panel panel-primary nopadding\" >              \r\n               <motor-status-chart ></motor-status-chart>              \r\n          </div> \r\n\r\n            <!-- Overall Station Status -->\r\n          <div class=\"col-md-4  panel panel-primary nopadding\" >   \r\n                <pi-chart></pi-chart>           \r\n          </div>\r\n\r\n            <!-- Plant Notifications -->\r\n          <div class=\"col-md-3  panel panel-primary nopadding plant-alert\" >   \r\n                <notifications></notifications>\r\n          </div>\r\n          \r\n      \r\n       <div class=\"col-md-11  panel panel-primary  nopadding  \"  >            \r\n                <span class=\"col-md-3 box-content right   \"><small><strong>Risk Index(RI)</strong> scale :1-5</small> </span>  \r\n                 \r\n                <div class=\"col-md-2\">\r\n                <span class=\"circle-small Green  \"></span>  \r\n                <span >Normal</span>  \r\n                </div>\r\n\r\n                <div class=\"col-md-2\">\r\n                <span class=\"circle-small Red \"></span>  \r\n                <span>Critical</span>\r\n                </div>\r\n\r\n                <div class=\"col-md-2\">\r\n                <span class=\"circle-small Amber \"></span>  \r\n                <span>Warning</span>\r\n            </div>\r\n       </div>\r\n\r\n\r\n </div>\r\n       \r\n      \r\n\r\n\r\n "

/***/ }),

/***/ "../../../../../src/app/Components/Plant/PlantComponent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlantComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PlantComponent = (function () {
    function PlantComponent() {
    }
    PlantComponent.prototype.ngOnInit = function () {
    };
    return PlantComponent;
}());
PlantComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'PlantComponent',
        template: __webpack_require__("../../../../../src/app/Components/Plant/PlantComponent.html"),
    })
], PlantComponent);

//# sourceMappingURL=PlantComponent.js.map

/***/ }),

/***/ "../../../../../src/app/Components/Plant/hclplantdashboard.html":
/***/ (function(module, exports) {

module.exports = "<!--The whole content below can be removed with the new code.-->\n \n  \n \n<!-- <li *ngFor=\" let plant of plantlist\" (click)=\"Onselect(hero)\" [class.selected]=\"hero === selectedHero\">\n    <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n</li>\n--> \n<div >\n  \n    <PlantComponent></PlantComponent>\n   \n    \n   \n     \n</div>\n\n "

/***/ }),

/***/ "../../../../../src/app/Components/Plant/hclplantdashboard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hclplantdashboard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var hclplantdashboard = (function () {
    function hclplantdashboard() {
    }
    hclplantdashboard.prototype.ngOnInit = function () {
    };
    return hclplantdashboard;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], hclplantdashboard.prototype, "currentPlantId", void 0);
hclplantdashboard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'hclplantdashboard',
        template: __webpack_require__("../../../../../src/app/Components/Plant/hclplantdashboard.html")
    }),
    __metadata("design:paramtypes", [])
], hclplantdashboard);

//# sourceMappingURL=hclplantdashboard.js.map

/***/ }),

/***/ "../../../../../src/app/Components/Station/StationComponent.html":
/***/ (function(module, exports) {

module.exports = "  <div>\r\n\r\n    Rajendra\r\n\r\n    <a routerLink=\"/plant\"  >clilck me </a>\r\n\r\n\r\n\r\n    <a  data-toggle=\"popover\" title=\"\" data-placement=\"\" data-content=\"\"> \r\n\r\n        dddddd\r\n    </a>   \r\n        \r\n \r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/Components/Station/StationComponent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_PlantService__ = __webpack_require__("../../../../../src/app/Services/PlantService.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StationComponent = (function () {
    function StationComponent(ps) {
        this.ps = ps;
    }
    StationComponent.prototype.ngOnInit = function () {
        if (this.currentStationId == null) {
            this.currentStationId = 1;
        }
        //  this.GetStationListForPlant();         
    };
    return StationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], StationComponent.prototype, "currentStationId", void 0);
StationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'StationComponent',
        template: __webpack_require__("../../../../../src/app/Components/Station/StationComponent.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_PlantService__["a" /* PlantService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_PlantService__["a" /* PlantService */]) === "function" && _a || Object])
], StationComponent);

var _a;
//# sourceMappingURL=StationComponent.js.map

/***/ }),

/***/ "../../../../../src/app/Components/base-chart/base-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BaseChartComponent = BaseChartComponent_1 = (function () {
    function BaseChartComponent() {
        console.log("Here is GoogleChartComponent");
    }
    BaseChartComponent.prototype.getGoogle = function () {
        return google;
    };
    BaseChartComponent.prototype.ngOnInit = function () {
        if (!BaseChartComponent_1.googleLoaded) {
            BaseChartComponent_1.googleLoaded = true;
            google.charts.load('current', { packages: ['corechart', 'bar'] });
        }
        // google.charts.setOnLoadCallback(() => this.drawGraph());
    };
    BaseChartComponent.prototype.drawGraph = function () {
        console.log("DrawGraph base class!!!! ");
    };
    BaseChartComponent.prototype.createBarChart = function (element) {
        return new google.visualization.PieChart(element);
    };
    BaseChartComponent.prototype.createDataTable = function (array) {
        return google.visualization.arrayToDataTable(array);
    };
    return BaseChartComponent;
}());
BaseChartComponent = BaseChartComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'chart',
        template: ""
    }),
    __metadata("design:paramtypes", [])
], BaseChartComponent);

var BaseChartComponent_1;
//# sourceMappingURL=base-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/motor-list/motor-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/motor-list/motor-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"row\">\n\n\t\n  <div class=\"col-md-3 \" style=\" padding-right:0px\">\t\t\t\n  \t<div class=\"panel panel-default\" >\n    \t\t<div class=\"panel-heading\" style=\"color:#2e3f4d\" >\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\" style=\"text-align:right\">\n\t\t\t\t\tSeverity\n\t\t\t\t<span class=\"glyphicon glyphicon-sort-by-attributes-alt\" ></span>\n\t\t\t\t<span class=\"glyphicon glyphicon-filter\"></span>\n\t\t\t\t</div>\t\t\t\t\n\t\t\t</div>\t\t\t\t\n\n\t\t\t\t\n\t\t\t</div>\n    \t\t<div class=\"panel-body\">\n\t\t\t\t\n<div class=\"row \" *ngFor=\"let motor of motorList\">\n\n\t\t\t\t<div class=\"col-md-4\">\n                    <img class=\"img-circle img-responsive\" [src]=\"JSON.parse(motor.MotorObject).Image\"  >\n                </div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<a href=\"#\"><b><font color=\"#663300\" backGround-color=\"light-gray\">{{JSON.parse(motor.MotorObject).Name}}</font></b></a>\n\t\t\t\t\t<br/>\n\t\t\t\t\tMachine #{{JSON.parse(motor.MotorObject).SerialNumber}}\n\t\t\t\t\t<br/><img  [src]=\"locationImage\" width=\"15px\" height=\"20px\">&nbsp;{{JSON.parse(motor.MotorObject).Location}}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-2\">\t\t\t\t\t\n\t\t\t\t\t<div class=\"circle_container\">\n\t\t\t\t\t\t<div class=\"circle_main_red\" ng-if=\"motor.Status=='Green'\">\n\t\t\t\t\t\t\t<div class=\"circle_text_container\">\n\t\t\t\t\t\t\t\t<div class = \"circle_text\">\n\t\t\t\t\t\t\t\t\t5\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\n\t\t\t\n </div>\n<div class=\"row\"><div class=\"col-md-12\"><hr class=\"style14\"/>&nbsp;</div>\n</div>\n</div>\n</div>\n\t\t\t</div>\n\t\t\t</div>\n\n<div class=\"col-md-9 text-center\" style=\" padding-left:0px\">\n\t \n<div class=\"panel panel-default\" >\n    \t\t<div class=\"panel-heading\" style=\"color:#2e3f4d\" >\n\t\t\t  <strong>\tMotor Performance Dashboard -  Motor1</strong>\n\t\t\t<div class=\"row\">\n\t\t\t\n\t\t\t</div>\n</div>\n</div>\n\n\n</div>\n\n\t\t</div>\n\t\t"

/***/ }),

/***/ "../../../../../src/app/Components/motor-list/motor-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_motor_service__ = __webpack_require__("../../../../../src/app/services/motor.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MotorListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MotorListComponent = (function () {
    function MotorListComponent(motorService) {
        this.motorService = motorService;
        this.JSON = JSON;
        this.locationImage = "/assets/images/location.png";
        ;
    }
    MotorListComponent.prototype.ngOnInit = function () {
        this.getMotorList();
    };
    MotorListComponent.prototype.getMotorList = function () {
        var _this = this;
        this.motorService.getMotorList().subscribe(function (res) {
            _this.motorList = res.value;
            console.log("Received by observer" + JSON.parse(_this.motorList[0].MotorObject).Name);
        });
    };
    return MotorListComponent;
}());
MotorListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-motor-list',
        template: __webpack_require__("../../../../../src/app/Components/motor-list/motor-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/motor-list/motor-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_motor_service__["a" /* MotorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_motor_service__["a" /* MotorService */]) === "function" && _a || Object])
], MotorListComponent);

var _a;
//# sourceMappingURL=motor-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/motor-status-chart/motor-status-chart.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class='overall-motor-status'>\n      <div class=\"panel-heading text-center\">Overall Motor Status  </div>\n      <div class=\"panel-body status-chart\">\n          <span id=\"donutChart\" ></span>    \n      </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/Components/motor-status-chart/motor-status-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_chart_base_chart_component__ = __webpack_require__("../../../../../src/app/Components/base-chart/base-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_MotorService__ = __webpack_require__("../../../../../src/app/Services/MotorService.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MotorStatusChartComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MotorStatusChartComponent = (function (_super) {
    __extends(MotorStatusChartComponent, _super);
    function MotorStatusChartComponent(ss) {
        var _this = _super.call(this) || this;
        _this.ss = ss;
        _this.getStationStatus();
        return _this;
    }
    MotorStatusChartComponent.prototype.getStationStatus = function () {
        var _this = this;
        this.ss.getOverAllMotorStatus(2, -1).subscribe(function (result) { _this.v = result; _this.drawGraph(); });
    };
    MotorStatusChartComponent.prototype.drawGraph = function () {
        console.log("DrawGraph Evolution...");
        /* var v = [
          ['StationHealth', 'NumOfStation'],
          ['Green',     500],
          ['Amber',     200],
          ['Red',  20]
        ]
        */
        this.data = this.createDataTable(this.v);
        this.options = {
            /*title: 'Evolution, 2014', */
            chartArea: { left: 0, top: 0, width: "1000", height: "500" },
            hAxis: {
                title: 'Value in USD',
                minValue: 0
            },
            'legend': 'none',
            vAxis: {
                title: 'Members'
            },
            "colors": ["#008000", "#FFC200", "#FF0000"],
            'width': 300,
            'height': 200,
            pieHole: 0.4
        };
        this.chart = this.createBarChart(document.getElementById('donutChart'));
        this.chart.draw(this.data, this.options);
    };
    return MotorStatusChartComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_chart_base_chart_component__["a" /* BaseChartComponent */]));
MotorStatusChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'motor-status-chart',
        template: __webpack_require__("../../../../../src/app/Components/motor-status-chart/motor-status-chart.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Services_MotorService__["a" /* MotorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_MotorService__["a" /* MotorService */]) === "function" && _a || Object])
], MotorStatusChartComponent);

var _a;
//# sourceMappingURL=motor-status-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/motor/motor.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <form name=\"formSend\" (ngSubmit)=\"sendMessage()\">\n<input type=\"text\" [(ngModel)]=\"message\" name=\"message\">{{message}}\n<button type=\"submit\" name =\"submit\" class=\"btn btn-success\">Submit</button>\n\n\n  </form>\n\n"

/***/ }),

/***/ "../../../../../src/app/Components/motor/motor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_graph_service__ = __webpack_require__("../../../../../src/app/services/graph.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MotorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MotorComponent = (function () {
    function MotorComponent(graphService) {
        this.graphService = graphService;
        this.messages = [];
    }
    MotorComponent.prototype.sendMessage = function () {
        console.log('Message : ' + this.message);
        this.graphService.sendMessage(this.message);
        this.message = '';
    };
    MotorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connection = this.graphService.getMessages().subscribe(function (message) {
            console.log('Message received from service...' + message);
            _this.messages.push(message);
        });
    };
    MotorComponent.prototype.ngOnDestroy = function () {
        this.connection.unsubscribe();
    };
    return MotorComponent;
}());
MotorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-graph',
        template: __webpack_require__("../../../../../src/app/Components/motor/motor.component.html"),
        styles: ["\n\n    .chat {\n\n      margin-top: 100px;\n\n      margin-left: auto;\n\n      margin-right: auto;\n\n      width: 10%;\n\n      font-family: 'Georgia';\n\n      font-size: 200%;\n\n    }\n\n  "],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_graph_service__["a" /* GraphService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_graph_service__["a" /* GraphService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_graph_service__["a" /* GraphService */]) === "function" && _a || Object])
], MotorComponent);

var _a;
//# sourceMappingURL=motor.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class='plant-notification'>\n<div class=\"panel-heading text-center \">Plant Notification  </div>\n<div class=\"panel-body\">\n     \n      <ul>\n          <li class=\"{{notification['Status']}}-alert\"  *ngFor=\" let notification of notificationlist\" >\n              <span class=\"glyphicon glyphicon-alert\"></span>  \n              <a href=\"#\" >{{notification['Subject']}}</a>\n          </li>\n            <li class='critical-alert'>\n                  <span class=\"glyphicon glyphicon-alert\"></span>  \n                <a href=\"#\" >Station A Critical Alert</a>\n          </li>\n          <li class='warning-alert'>\n                 <span class=\"glyphicon glyphicon-alert\"></span>  \n                 <a href=\"#\" >Station B Warning Alert</a>\n           </li>\n           <li class='normal-alert'>\n            <span class=\"glyphicon glyphicon-alert\"></span>  \n            <a href=\"#\"> Station C Motor going Normal</a>\n      </li>\n      \n            \n\n                                \n      </ul>\n</div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/Components/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_NotificationService__ = __webpack_require__("../../../../../src/app/Services/NotificationService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Configuration_MasterConfiguration__ = __webpack_require__("../../../../../src/app/Configuration/MasterConfiguration.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationsComponent = (function () {
    function NotificationsComponent(ss) {
        this.ss = ss;
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        if (this.currentPlantId == null) {
            this.currentPlantId = 2;
        }
        this.GetStationListForPlant();
    };
    NotificationsComponent.prototype.GetStationListForPlant = function () {
        var _this = this;
        this.ss.GetNotificationList(__WEBPACK_IMPORTED_MODULE_2__Configuration_MasterConfiguration__["a" /* config */].PlantName, '-1', '-1').subscribe(function (data) { return _this.notificationlist = data; });
    };
    return NotificationsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], NotificationsComponent.prototype, "currentPlantId", void 0);
NotificationsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'notifications',
        template: __webpack_require__("../../../../../src/app/Components/notifications/notifications.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_NotificationService__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_NotificationService__["a" /* NotificationService */]) === "function" && _a || Object])
], NotificationsComponent);

var _a;
//# sourceMappingURL=notifications.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/pi-chart/pi-chart.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"panel-heading text-center\">Overall Station Status  </div>\n<div class=\"panel-body status-chart\">\n  <span id=\"piechart\" ></span>    \n       \n</div>"

/***/ }),

/***/ "../../../../../src/app/Components/pi-chart/pi-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_chart_base_chart_component__ = __webpack_require__("../../../../../src/app/Components/base-chart/base-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_StationService__ = __webpack_require__("../../../../../src/app/Services/StationService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Configuration_MasterConfiguration__ = __webpack_require__("../../../../../src/app/Configuration/MasterConfiguration.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PiChartComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PiChartComponent = (function (_super) {
    __extends(PiChartComponent, _super);
    function PiChartComponent(ss) {
        var _this = _super.call(this) || this;
        _this.ss = ss;
        _this.getStationStatus();
        return _this;
    }
    PiChartComponent.prototype.getStationStatus = function () {
        var _this = this;
        this.ss.getStationStatus(__WEBPACK_IMPORTED_MODULE_3__Configuration_MasterConfiguration__["a" /* config */].PlantName).subscribe(function (result) {
            _this.v = result;
            _this.drawGraph();
        });
    };
    PiChartComponent.prototype.drawGraph = function () {
        console.log("DrawGraph ...");
        /*var v = [
          ['StationHealth', 'NumOfStation'],
          ['Green',     500],
          ['Amber',     200],
          ['Red',  20]
        ]
       */
        this.data = this.createDataTable(this.v);
        this.options = {
            /*title: 'Evolution, 2014', */
            chartArea: { left: 0, top: 0, width: "1000", height: "500" },
            hAxis: {
                title: 'Value in USD',
                minValue: 0
            },
            is3D: true,
            'legend': 'none',
            vAxis: {
                title: 'Members'
            },
            "colors": ["#008000", "#FFC200", "#FF0000"],
            'width': 300,
            'height': 200,
        };
        this.chart = this.createBarChart(document.getElementById('piechart'));
        this.chart.draw(this.data, this.options);
    };
    return PiChartComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_chart_base_chart_component__["a" /* BaseChartComponent */]));
PiChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: '<pi-chart>',
        template: __webpack_require__("../../../../../src/app/Components/pi-chart/pi-chart.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Services_StationService__["a" /* StationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_StationService__["a" /* StationService */]) === "function" && _a || Object])
], PiChartComponent);

var _a;
//# sourceMappingURL=pi-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/screen-title/screen-title.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/screen-title/screen-title.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  screen-title works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/Components/screen-title/screen-title.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScreenTitleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScreenTitleComponent = (function () {
    function ScreenTitleComponent() {
    }
    ScreenTitleComponent.prototype.ngOnInit = function () {
    };
    return ScreenTitleComponent;
}());
ScreenTitleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-screen-title',
        template: __webpack_require__("../../../../../src/app/Components/screen-title/screen-title.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/screen-title/screen-title.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ScreenTitleComponent);

//# sourceMappingURL=screen-title.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/search-component/search-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/search-component/search-component.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"GetUserList()\">Get Data</button>\n\n<ol>\n     <li *ngFor=\"let station of StationList\">\n      {{JSON.parse(station.StationObeject).StationName}} \n      <li>\n</ol>\n"

/***/ }),

/***/ "../../../../../src/app/Components/search-component/search-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_git_hub_service__ = __webpack_require__("../../../../../src/app/services/git-hub.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponentComponent = (function () {
    function SearchComponentComponent(githubService) {
        this.githubService = githubService;
        this.JSON = JSON;
    }
    SearchComponentComponent.prototype.ngOnInit = function () {
    };
    SearchComponentComponent.prototype.GetUserList = function () {
        var _this = this;
        this.githubService.getStationList().subscribe(function (res) {
            console.log(res.value);
            _this.StationList = res.value;
            console.log("Test1 :: " + _this.StationList[0].StationObeject);
            console.log("Test :: " + JSON.parse(res.value[0].StationObeject).StationName);
        });
    };
    return SearchComponentComponent;
}());
SearchComponentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-search-component',
        template: __webpack_require__("../../../../../src/app/Components/search-component/search-component.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/search-component/search-component.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_git_hub_service__["a" /* GitHubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_git_hub_service__["a" /* GitHubService */]) === "function" && _a || Object])
], SearchComponentComponent);

var _a;
//# sourceMappingURL=search-component.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/stationlist/stationlist.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"stationlist\" >                 \n    <div class=\"panel panel-default col-md-2 nopadding scrollItem \"   id={{station.Id}} *ngFor=\" let station of stationlist\"  >\n \n   <div  data-toggle=\"popover\" title=\"\" data-placement=\"\" data-content=\"\">    \n            \n            \n           <a [routerLink]=\"['/station', station.Id]\" >\n             <div class=\"panel-heading text-center\">  {{JSON.parse(station.StationObject).StationName}}</div>\n           </a>\n      <div class=\"panel-body\">\n            <span class=\"circle {{station.Status}} \"></span>  \n            <span class='status-padding ' > RI : {{station.RI}} </span>\n\n\n      </div>\n           \n      <div class=\"panel-footer\"></div>   \n</div>    \n   \n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/Components/stationlist/stationlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_StationService__ = __webpack_require__("../../../../../src/app/Services/StationService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Configuration_MasterConfiguration__ = __webpack_require__("../../../../../src/app/Configuration/MasterConfiguration.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StationlistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StationlistComponent = (function () {
    function StationlistComponent(ss) {
        this.ss = ss;
        this.JSON = JSON;
    }
    StationlistComponent.prototype.ngOnInit = function () {
        if (this.currentPlantId == null) {
            this.currentPlantId = 2;
        }
        this.GetStationListForPlant();
    };
    StationlistComponent.prototype.GetStationListForPlant = function () {
        var _this = this;
        this.ss.GetStationListforPlant(__WEBPACK_IMPORTED_MODULE_2__Configuration_MasterConfiguration__["a" /* config */].PlantName).subscribe(function (data) { return _this.stationlist = data; });
    };
    return StationlistComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], StationlistComponent.prototype, "currentPlantId", void 0);
StationlistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'stations',
        template: __webpack_require__("../../../../../src/app/Components/stationlist/stationlist.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_StationService__["a" /* StationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_StationService__["a" /* StationService */]) === "function" && _a || Object])
], StationlistComponent);

var _a;
//# sourceMappingURL=stationlist.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/test-ws/test-ws.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/test-ws/test-ws.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  test-ws works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/Components/test-ws/test-ws.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestWsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestWsComponent = (function () {
    function TestWsComponent() {
        //private url ='wss://hclmotorwebapplication.azurewebsites.net';
        this.url = 'wss://' + location.host;
        console.log("Log for Wss: " + this.url);
        //   this.socket = io(this.url);
        //   console.log("connected...");
        var ws = new WebSocket('wss://' + location.host);
        ws.onopen = function () {
            console.log('Successfully connect WebSocket');
        };
        ws.onerror = function (err) {
            console.log(err);
        };
        ws.onmessage = function (message) {
            console.log('receive message' + message.data);
        };
    }
    TestWsComponent.prototype.ngOnInit = function () {
    };
    return TestWsComponent;
}());
TestWsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-test-ws',
        template: __webpack_require__("../../../../../src/app/Components/test-ws/test-ws.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/test-ws/test-ws.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TestWsComponent);

//# sourceMappingURL=test-ws.component.js.map

/***/ }),

/***/ "../../../../../src/app/Configuration/MasterConfiguration.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var config = (function () {
    function config() {
    }
    return config;
}());
config.PlantName = 'HCLPLANT';
// private StatiotUrl='/stationlist.json'
//private StatiotUrl='https://hclmotorstorageaccount.table.core.windows.net/Stations?$select=StationObeject&st=2017-08-30T08%3A15%3A00Z&se=2017-10-21T08%3A15%3A00Z&sp=raud&sv=2016-05-31&tn=stations&sig=4GLyLYg3YBSZqR5TydJ5nK7QqzuZRc6x9%2B52RFih%2B9M%3D';
// static StatiotUrl: string='https://hclmotorstorageaccount.table.core.windows.net/Stations?st=2017-08-30T08%3A15%3A00Z&se=2017-10-21T08%3A15%3A00Z&sp=raud&sv=2016-05-31&tn=stations&sig=4GLyLYg3YBSZqR5TydJ5nK7QqzuZRc6x9%2B52RFih%2B9M%3D';  
config.StatiotUrl = 'http://hclpocstorageaccount.table.core.windows.net:80/Station?st=2017-09-07T07%3A29%3A00Z&se=2018-08-31T07%3A29%3A00Z&sp=raud&sv=2016-05-31&tn=station&sig=LblD8ibQ0Vn4uVJK0zolhujZ5EJkFK8%2FV39qNhpIXgE%3D';
config = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])()
], config);

//# sourceMappingURL=MasterConfiguration.js.map

/***/ }),

/***/ "../../../../../src/app/Entities/motor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Motor; });
var Motor = (function () {
    function Motor(Name, Description, Location, SerialNumber, StationName, PlantName, Power, Image) {
        this.Name = Name;
        this.Description = Description;
        this.Location = Location;
        this.SerialNumber = SerialNumber;
        this.StationName = StationName;
        this.PlantName = PlantName;
        this.Power = Power;
        this.Image = Image;
    }
    return Motor;
}());

//# sourceMappingURL=motor.js.map

/***/ }),

/***/ "../../../../../src/app/Services/MotorService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MotorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//the injectable attribute to generate the metadata to make the service available through 
//Dependency Injustion(DI) in other modules.
var MotorService = MotorService_1 = (function () {
    function MotorService(http) {
        this.http = http;
        this.MotorUrl = 'http://hclmotorstorageaccount.table.core.windows.net:80/Motors?st=2017-09-05T06%3A51%3A00Z&se=2018-05-31T06%3A51%3A00Z&sp=raud&sv=2016-05-31&tn=motors&sig=PBk%2Fro6cKB7%2F5rqpJxOId81P6jwyYglcgZZFnerjidw%3D';
    }
    // Return the instance of the service
    MotorService.getInstance = function (http) {
        if (MotorService_1.serviceInstance === null) {
            MotorService_1.serviceInstance = new MotorService_1(http);
        }
        return MotorService_1.serviceInstance;
    };
    MotorService.prototype.GetMotorList = function (plantid, stationId) {
        var _this = this;
        return this.http.get(this.MotorUrl)
            .map(function (res) { return _this.GetJsonData(res, plantid, stationId); });
    };
    MotorService.prototype.getOverAllMotorStatus = function (plantid, stationId) {
        var _this = this;
        return this.http.get(this.MotorUrl)
            .map(function (res) { return _this.CalculateMotorStatus(res, plantid, stationId); });
    };
    MotorService.prototype.GetJsonData = function (xmldata, plantid, stationId) {
        var jsonobject = xmldata.json()['value']; // [0] ['StationObeject'];
        var finalData = "[";
        if (jsonobject && jsonobject !== "null" && jsonobject !== "undefined") {
            for (var i = 0; i < jsonobject.length; i++) {
                //  let stObject= JSON.parse( jsonobject[i]['MotorObeject']);
                var status = jsonobject[i]['Status'];
                var RI = jsonobject[i]['RI'];
                var StationId = jsonobject[i]['StationId'];
                var MotorId = jsonobject[i]['Id'];
                var PlantId = jsonobject[i]['PlantId'];
                /*	if(( stObject && stObject !== "null" && stObject !== "undefined" ) )
                    { */
                finalData = finalData + '{"Id":' + MotorId + ', "Name":"' + "stObject.Name" + '", "StationName":"' + "stObject.StationName" + '", "SerialNumber":"' + "stObject.SerialNumber";
                finalData = finalData + '","PlantId" :' + PlantId + ', "Status":"' + status + '", "Location":"' + "stObject.Location";
                finalData = finalData + '","RI":' + RI + ', "Description":"' + "stObject.Description" + '", "StationId":' + StationId + '  }';
                if (i < jsonobject.length - 1) {
                    finalData = finalData + ",";
                }
                /*   }*/
                // alert(finalData);
            }
            finalData = finalData + "]";
        }
        var filterData = JSON.parse(finalData);
        if (plantid != -1)
            filterData = filterData.filter(function (x) { return x.PlantId == plantid; });
        if (stationId != -1)
            filterData = filterData.filter(function (x) { return x.StationId == stationId; });
        return filterData;
    };
    /*
     private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }
    */
    MotorService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return null;
    };
    MotorService.prototype.CalculateMotorStatus = function (res, plantid, stationId) {
        var stList = this.GetJsonData(res, plantid, stationId);
        var Green = stList.filter(function (x) { return x.Status == 'Green'; }).length;
        var Red = stList.filter(function (x) { return x.Status == 'Red'; }).length;
        var Amber = stList.filter(function (x) { return x.Status == 'Amber'; }).length;
        var result = [
            ['StationHealth', 'NumOfStation'],
            ['Green', Green],
            ['Amber', Amber],
            ['Red', Red]
        ];
        return result;
    };
    return MotorService;
}());
MotorService.serviceInstance = null;
MotorService = MotorService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MotorService);

var MotorService_1, _a;
//# sourceMappingURL=MotorService.js.map

/***/ }),

/***/ "../../../../../src/app/Services/NotificationService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//the injectable attribute to generate the metadata to make the service available through 
//Dependency Injustion(DI) in other modules.
var NotificationService = NotificationService_1 = (function () {
    function NotificationService(http) {
        this.http = http;
        this.NUrl = 'http://hclmotorstorageaccount.table.core.windows.net:80/Notifications?st=2017-09-05T16%3A18%3A00Z&se=2018-05-31T16%3A18%3A00Z&sp=raud&sv=2016-05-31&tn=notifications&sig=Zwc7HHmpHBdWoFgSU0mdNd8w8jLgigVKdAqijMwfGqQ%3D';
    }
    // Return the instance of the service
    NotificationService.getInstance = function (http) {
        if (NotificationService_1.serviceInstance === null) {
            NotificationService_1.serviceInstance = new NotificationService_1(http);
        }
        return NotificationService_1.serviceInstance;
    };
    NotificationService.prototype.GetNotificationList = function (plantName, stationName, motorName) {
        var _this = this;
        return this.http.get(this.NUrl)
            .map(function (res) { return _this.GetJsonData(res, plantName, stationName); });
    };
    NotificationService.prototype.GetJsonData = function (xmldata, plantName, stationName) {
        var jsonobject = xmldata.json()['value'];
        return jsonobject;
    };
    /*
     private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }
    */
    NotificationService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return null;
    };
    return NotificationService;
}());
NotificationService.serviceInstance = null;
NotificationService = NotificationService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], NotificationService);

var NotificationService_1, _a;
//# sourceMappingURL=NotificationService.js.map

/***/ }),

/***/ "../../../../../src/app/Services/PlantService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlantService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//the injectable attribute to generate the metadata to make the service available through 
//Dependency Injustion(DI) in other modules.
var PlantService = (function () {
    function PlantService(http) {
        this.http = http;
        this.PlantUrl = '/plantlist.json';
        this.PlantUrl2 = 'https://hclmotorstorageaccount.table.core.windows.net/Stations(PartitionKey="pk1",RowKey="rk1")?$select=StationObeject&st=2017-08-30T08%3A15%3A00Z&se=2017-10-21T08%3A15%3A00Z&sp=raud&sv=2016-05-31&tn=stations&sig=4GLyLYg3YBSZqR5TydJ5nK7QqzuZRc6x9%2B52RFih%2B9M%3D';
    }
    PlantService.prototype.GetPlantAsync = function () {
        return this.http.get(this.PlantUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    PlantService.prototype.GetPlantById = function (id) {
        var _this = this;
        return this.http.get(this.PlantUrl)
            .toPromise()
            .then(function (response) { return _this.extractData(response, id); })
            .catch(this.handleError);
    };
    PlantService.prototype.extractData = function (res, id) {
        var data = res.json().find(function (x) { return x.Id == id; });
        return data;
    };
    PlantService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return PlantService;
}());
PlantService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PlantService);

var _a;
//# sourceMappingURL=PlantService.js.map

/***/ }),

/***/ "../../../../../src/app/Services/StationService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Configuration_MasterConfiguration__ = __webpack_require__("../../../../../src/app/Configuration/MasterConfiguration.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//the injectable attribute to generate the metadata to make the service available through 
//Dependency Injustion(DI) in other modules.
var StationService = StationService_1 = (function () {
    function StationService(http) {
        this.http = http;
    }
    // Return the instance of the service
    StationService.getInstance = function (http) {
        if (StationService_1.serviceInstance === null) {
            StationService_1.serviceInstance = new StationService_1(http);
        }
        return StationService_1.serviceInstance;
    };
    StationService.prototype.GetStationListforPlant = function (plantname) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__Configuration_MasterConfiguration__["a" /* config */].StatiotUrl)
            .map(function (res) { return _this.GetJsonData(res, plantname); });
    };
    StationService.prototype.getStationStatus = function (plantname) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__Configuration_MasterConfiguration__["a" /* config */].StatiotUrl)
            .map(function (res) { return _this.CalculateMotorStatus(res, plantname); });
    };
    StationService.prototype.GetJsonData = function (xmldata, plantname) {
        var jsonobject = xmldata.json()['value'];
        if (plantname != '')
            jsonobject = jsonobject.filter(function (x) { return x.PlantName == plantname; });
        return jsonobject;
        /*
        let finalData="[";

        if( jsonobject && jsonobject !== "null" && jsonobject !== "undefined" )
           {
               for(let i=0 ;i <jsonobject.length;i++ )
               {
                   let stObject= JSON.parse( jsonobject[i]['StationObeject']);
                   let status= jsonobject[i]['Status'];
                   let RI= jsonobject[i]['RI'];
                   let StationId= jsonobject[i]['StationId'];

                   if(( stObject && stObject !== "null" && stObject !== "undefined" ) )
                   {
                       //	finalData =finalData+ stObject;
                        
                       //		finalData =finalData+ 	'{"Id": 6, "StationName": "Station A","PlantId" :"2", "Status":"Green","RI":"4" }';
                        finalData =finalData+ '{"Id":'+ StationId +', "StationName":"'+ stObject.StationName;
                        finalData =finalData+ '","PlantId" :'+stObject.PlantId+', "Status":"'+status
                        finalData =finalData+'","RI":'+ RI+' }';
                         
                           if(i < jsonobject.length-1 )
                               {
                                   finalData =finalData+",";
                               }
                           }
                   }
               finalData =finalData+"]";
           }
                */
        //	return JSON.parse(finalData).filter(x=>x.PlantId==plantid);
    };
    /*
     private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }
    */
    StationService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return null;
    };
    StationService.prototype.CalculateMotorStatus = function (res, plantname) {
        var stList = this.GetJsonData(res, plantname);
        var Green = stList.filter(function (x) { return x.Status == 'Green'; }).length;
        var Red = stList.filter(function (x) { return x.Status == 'Red'; }).length;
        var Amber = stList.filter(function (x) { return x.Status == 'Amber'; }).length;
        var result = [
            ['StationHealth', 'NumOfStation'],
            ['Green', Green],
            ['Amber', Amber],
            ['Red', Red]
        ];
        return result;
    };
    return StationService;
}());
StationService.serviceInstance = null;
StationService = StationService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], StationService);

var StationService_1, _a;
//# sourceMappingURL=StationService.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n \n\n \n \n <div class=\"container\"> \n  \n     <div id='app-header' class=\"panel panel-primary \">\n         \n               <app-navbar></app-navbar>\n      \n        \n        <div class=\"panel-body body-container\">           \n            <router-outlet></router-outlet>\n        </div>\n\n        <div id='footer' class=\"panel-footer\">\n            <div >      </div>    \n\n       </div>   \n    \n    </div>\n   \n   \n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_git_hub_service__ = __webpack_require__("../../../../../src/app/services/git-hub.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_motor_service__ = __webpack_require__("../../../../../src/app/services/motor.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_git_hub_service__["a" /* GitHubService */], __WEBPACK_IMPORTED_MODULE_2__services_motor_service__["a" /* MotorService */]]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__test_test_component__ = __webpack_require__("../../../../../src/app/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__google_chart_google_chart_component__ = __webpack_require__("../../../../../src/app/google-chart/google-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__evolution_evolution_component__ = __webpack_require__("../../../../../src/app/evolution/evolution.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__historical_data_historical_data_component__ = __webpack_require__("../../../../../src/app/historical-data/historical-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Components_search_component_search_component_component__ = __webpack_require__("../../../../../src/app/Components/search-component/search-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__motor_management_motor_management_component__ = __webpack_require__("../../../../../src/app/motor-management/motor-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__forms_add_motor_form_add_motor_form_component__ = __webpack_require__("../../../../../src/app/forms/add-motor-form/add-motor-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Components_motor_list_motor_list_component__ = __webpack_require__("../../../../../src/app/Components/motor-list/motor-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Components_Plant_hclplantdashboard__ = __webpack_require__("../../../../../src/app/Components/Plant/hclplantdashboard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Components_Plant_PlantComponent__ = __webpack_require__("../../../../../src/app/Components/Plant/PlantComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Components_Station_StationComponent__ = __webpack_require__("../../../../../src/app/Components/Station/StationComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__Services_PlantService__ = __webpack_require__("../../../../../src/app/Services/PlantService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__Services_StationService__ = __webpack_require__("../../../../../src/app/Services/StationService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__Services_MotorService__ = __webpack_require__("../../../../../src/app/Services/MotorService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__Services_NotificationService__ = __webpack_require__("../../../../../src/app/Services/NotificationService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__Components_base_chart_base_chart_component__ = __webpack_require__("../../../../../src/app/Components/base-chart/base-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__Components_pi_chart_pi_chart_component__ = __webpack_require__("../../../../../src/app/Components/pi-chart/pi-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__Components_motor_status_chart_motor_status_chart_component__ = __webpack_require__("../../../../../src/app/Components/motor-status-chart/motor-status-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__Components_notifications_notifications_component__ = __webpack_require__("../../../../../src/app/Components/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__Configuration_MasterConfiguration__ = __webpack_require__("../../../../../src/app/Configuration/MasterConfiguration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__Components_motor_motor_component__ = __webpack_require__("../../../../../src/app/Components/motor/motor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__Components_screen_title_screen_title_component__ = __webpack_require__("../../../../../src/app/Components/screen-title/screen-title.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__Components_stationlist_stationlist_component__ = __webpack_require__("../../../../../src/app/Components/stationlist/stationlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__Components_test_ws_test_ws_component__ = __webpack_require__("../../../../../src/app/Components/test-ws/test-ws.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var appRoutes = [{
        path: 'graph',
        component: __WEBPACK_IMPORTED_MODULE_7__evolution_evolution_component__["a" /* EvolutionComponent */]
    }, {
        path: 'motor',
        component: __WEBPACK_IMPORTED_MODULE_32__Components_test_ws_test_ws_component__["a" /* TestWsComponent */]
    }, {
        path: 'MotorManagement',
        component: __WEBPACK_IMPORTED_MODULE_12__motor_management_motor_management_component__["a" /* MotorManagementComponent */]
    },
    {
        path: 'plant',
        component: __WEBPACK_IMPORTED_MODULE_16__Components_Plant_hclplantdashboard__["a" /* hclplantdashboard */],
        data: {}
    },
    { path: '',
        redirectTo: '/historical',
        pathMatch: 'full'
    },
    { path: 'station/:id', component: __WEBPACK_IMPORTED_MODULE_18__Components_Station_StationComponent__["a" /* StationComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_5__test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_6__google_chart_google_chart_component__["a" /* GoogleChartComponent */],
            __WEBPACK_IMPORTED_MODULE_7__evolution_evolution_component__["a" /* EvolutionComponent */],
            __WEBPACK_IMPORTED_MODULE_9__historical_data_historical_data_component__["a" /* HistoricalDataComponent */],
            __WEBPACK_IMPORTED_MODULE_10__Components_search_component_search_component_component__["a" /* SearchComponentComponent */],
            __WEBPACK_IMPORTED_MODULE_12__motor_management_motor_management_component__["a" /* MotorManagementComponent */],
            __WEBPACK_IMPORTED_MODULE_14__forms_add_motor_form_add_motor_form_component__["a" /* AddMotorFormComponent */],
            __WEBPACK_IMPORTED_MODULE_15__Components_motor_list_motor_list_component__["a" /* MotorListComponent */],
            __WEBPACK_IMPORTED_MODULE_16__Components_Plant_hclplantdashboard__["a" /* hclplantdashboard */],
            __WEBPACK_IMPORTED_MODULE_17__Components_Plant_PlantComponent__["a" /* PlantComponent */],
            __WEBPACK_IMPORTED_MODULE_18__Components_Station_StationComponent__["a" /* StationComponent */],
            __WEBPACK_IMPORTED_MODULE_24__Components_base_chart_base_chart_component__["a" /* BaseChartComponent */],
            __WEBPACK_IMPORTED_MODULE_25__Components_pi_chart_pi_chart_component__["a" /* PiChartComponent */],
            __WEBPACK_IMPORTED_MODULE_26__Components_motor_status_chart_motor_status_chart_component__["a" /* MotorStatusChartComponent */],
            __WEBPACK_IMPORTED_MODULE_27__Components_notifications_notifications_component__["a" /* NotificationsComponent */],
            __WEBPACK_IMPORTED_MODULE_31__Components_stationlist_stationlist_component__["a" /* StationlistComponent */],
            __WEBPACK_IMPORTED_MODULE_29__Components_motor_motor_component__["a" /* MotorComponent */],
            __WEBPACK_IMPORTED_MODULE_30__Components_screen_title_screen_title_component__["a" /* ScreenTitleComponent */],
            __WEBPACK_IMPORTED_MODULE_32__Components_test_ws_test_ws_component__["a" /* TestWsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* CollapseModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_19__Services_PlantService__["a" /* PlantService */], __WEBPACK_IMPORTED_MODULE_20__Services_StationService__["a" /* StationService */], __WEBPACK_IMPORTED_MODULE_22__Services_NotificationService__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_21__Services_MotorService__["a" /* MotorService */], __WEBPACK_IMPORTED_MODULE_28__Configuration_MasterConfiguration__["a" /* config */], { provide: __WEBPACK_IMPORTED_MODULE_23__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_23__angular_common__["b" /* HashLocationStrategy */] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/evolution/evolution.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__google_chart_google_chart_component__ = __webpack_require__("../../../../../src/app/google-chart/google-chart.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvolutionComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EvolutionComponent = (function (_super) {
    __extends(EvolutionComponent, _super);
    function EvolutionComponent() {
        var _this = _super.call(this) || this;
        console.log("Here is EvolutionComponent");
        return _this;
    }
    EvolutionComponent.prototype.drawGraph = function () {
        console.log("DrawGraph Evolution...");
        var currentTime = GetTime(new Date());
        var v = [
            ['Time', 'Leakage Current', 'Voltage'],
            [currentTime, 70, 70]
        ];
        this.data = this.createDataTable(v);
        this.options = {
            title: 'Leakage Current Vs Voltage',
            chartArea: { width: '80%' },
            hAxis: {
                title: 'Time',
                minValue: 0
            },
            vAxis: {
                title: 'Value'
            }
        };
        this.chart = this.createBarChart(document.getElementById('monitor_chart'));
        this.chart.draw(this.data, this.options);
        //getTemp();
        setInterval(getTemp, 1000);
        var ref1 = this;
        function getTemp() {
            var temperature = (Math.random() * (35 - 30) + 30);
            var humidity = (Math.random() * (40 - 15) + 15);
            var timestamp = GetTime(new Date());
            //this.data.addRow([timestamp, temperature, humidity]);
            v.push([timestamp, temperature, humidity]);
            ref1.data = ref1.createDataTable(v);
            ref1.chart = ref1.createBarChart(document.getElementById('monitor_chart'));
            ref1.chart.draw(ref1.data, ref1.options);
        }
        function GetTime(date) {
            var day = date.getDate();
            var monthIndex = date.getMonth();
            var year = date.getFullYear();
            var minutes = date.getMinutes();
            var hours = date.getHours();
            var seconds = date.getSeconds();
            return hours + ":" + minutes + ":" + seconds;
        }
    };
    return EvolutionComponent;
}(__WEBPACK_IMPORTED_MODULE_1__google_chart_google_chart_component__["a" /* GoogleChartComponent */]));
EvolutionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'linechart',
        template: __webpack_require__("../../../../../src/app/evolution/lineChart.component.html")
    }),
    __metadata("design:paramtypes", [])
], EvolutionComponent);

//# sourceMappingURL=evolution.component.js.map

/***/ }),

/***/ "../../../../../src/app/evolution/lineChart.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\t\t\t\t\t<div style=\"height:400px\" id=\"monitor_chart\"></div>"

/***/ }),

/***/ "../../../../../src/app/forms/add-motor-form/add-motor-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/forms/add-motor-form/add-motor-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div [hidden]=\"submitted\">\n  \n  \n  <h1>Motor Form</h1>\n    <form style=\"width:97%; align-items: center\">\n\n       <div class=\"form-group\" >\n  <label for=\"station\">Select a Station</label>\n  <select class=\"form-control\"  id=\"stationName\"    name=\"StationName\" [(ngModel)]=\"model.StationName\" required>\n      <option *ngFor=\"let station of StationList\" value={{JSON.parse(station.StationObeject).StationName}} >{{JSON.parse(station.StationObeject).StationName}}</option>\n   </select>\n  {{diagnostic}}\n       </div>\n\n\n      <div class=\"form-group\">\n        <label for=\"name\">Motor Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"name\" name=\"Name\" [(ngModel)]=\"model.Name\" required #Name=\"ngModel\" >\n      </div>\n      <div [hidden]=\"Name.valid || Name.pristine\" class=\"alert alert-danger\">\n          Motor Name is required\n      </div>\n      <div class=\"form-group\">\n        <label for=\"Motor Serial Number\">Motor Serial Number</label>\n        <input type=\"text\" class=\"form-control\" id=\"SerialNumber\" name=\"SerialNumber\" [(ngModel)]=\"model.SerialNumber\" required #SerialNumber=\"ngModel\">\n      </div>\n\n      <div [hidden]=\"SerialNumber.valid || SerialNumber.pristine\" class=\"alert alert-danger\">\n          Serial Number is required\n      </div>\n\n       <div class=\"form-group\">\n        <label for=\"Motor Location\">Motor Location</label>\n        <input type=\"text\" class=\"form-control\" id=\"location\" [(ngModel)]=\"model.Location\" name=\"Location\">\n      </div>\n       <div class=\"form-group\">\n        <label for=\"Motor Description\">Motor Description</label>\n        <input type=\"text\" class=\"form-control\" id=\"description\" [(ngModel)]=\"model.Description\" name=\"Description\">\n      </div>      \n       <div class=\"form-group\">\n        <label for=\"Motor Location\">Choose Motor Image</label><br/>\n        <input name=\"options\" ng-control=\"options\" type=\"radio\" [value]=\"fullImagePath1\"  [(ngModel)]=\"model.Image\" >\n        <img [src]=\"fullImagePath1\" width=\"7%\">\n        <input name=\"options\" ng-control=\"options\" type=\"radio\" [value]=\"fullImagePath2\" [(ngModel)]=\"model.Image\" >\n        <img [src]=\"fullImagePath2\" width=\"7%\">\n        <input name=\"options\" ng-control=\"options\" type=\"radio\" [value]=\"fullImagePath3\" [(ngModel)]=\"model.Image\" >\n        <img [src]=\"fullImagePath3\" width=\"7%\">\n        <input name=\"options\" ng-control=\"options\" type=\"radio\" [value]=\"fullImagePath4\" [(ngModel)]=\"model.Image\" >\n        <img [src]=\"fullImagePath4\" width=\"7%\">\n      </div>\n\n\n\n\n\n      <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n \n    </form>\n  </div>\n\n<div [hidden]=\"!submitted\">\n  <h2>You submitted the following:</h2>\n  <div class=\"row\">\n    <div class=\"col-xs-3\">Station</div>\n    <div class=\"col-xs-9  pull-left\">{{ model.StationName }}</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-3\">Motor Name</div>\n    <div class=\"col-xs-9 pull-left\">{{ model.Name }}</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-3\">Serial Number</div>\n    <div class=\"col-xs-9 pull-left\">{{ model.SerialNumber }}</div>\n  </div>\n    <div class=\"row\">\n    <div class=\"col-xs-3\">Location</div>\n    <div class=\"col-xs-9 pull-left\">{{ model.Location }}</div>\n  </div>\n    <div class=\"row\">\n    <div class=\"col-xs-3\">Description</div>\n    <div class=\"col-xs-9 pull-left\">{{ model.Description }}</div>\n  </div>\n  <br>\n  <button class=\"btn btn-primary\" (click)=\"submitted=false\">Edit</button>\n</div>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/forms/add-motor-form/add-motor-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Entities_motor__ = __webpack_require__("../../../../../src/app/Entities/motor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_git_hub_service__ = __webpack_require__("../../../../../src/app/services/git-hub.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMotorFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var tableService;
var AddMotorFormComponent = (function () {
    function AddMotorFormComponent(githubService) {
        this.githubService = githubService;
        this.fullImagePath1 = "/assets/images/1.jpg";
        this.fullImagePath2 = "/assets/images/3.jpg";
        this.fullImagePath3 = "/assets/images/4.jpg";
        this.fullImagePath4 = "/assets/images/5.jpg";
        this.JSON = JSON;
    }
    AddMotorFormComponent.prototype.ngOnInit = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_1__Entities_motor__["a" /* Motor */]("", "", "", "", "", "HCLPlant", "", "");
        console.log(this.model);
        this.submitted = false;
        this.GetUserList();
    };
    AddMotorFormComponent.prototype.GetUserList = function () {
        var _this = this;
        this.githubService.getStationList().subscribe(function (res) {
            console.log(res.value);
            _this.StationList = res.value;
        });
    };
    AddMotorFormComponent.prototype.onSubmit = function (addMotorForm) {
        var tableUri = 'https://hclpocstorageaccount.table.core.windows.net:443/Motor';
        tableService = new AzureStorage.createTableServiceWithSas(tableUri, '?st=2017-09-07T07%3A29%3A00Z&se=2018-08-31T07%3A29%3A00Z&sp=raud&sv=2016-05-31&tn=motor&sig=EH4rL1HVvVTTSuVuzJMQMpfSWfDRPP8x8X85hSgn5CY%3D');
        this.rowKey = Date.now() + "";
        var entity = {
            PartitionKey: { '_': 'partitionKey' },
            RowKey: { '_': this.rowKey },
            StationName: { '_': this.model.StationName },
            PlantName: { '_': this.model.PlantName },
            Status: { '_': "Green" },
            MotorObject: { '_': JSON.stringify(this.model) }
            //dateValue: entGen.DateTime(new Date(Date.UTC(2011, 10, 25))),
            //complexDateValue: entGen.DateTime(new Date(Date.UTC(2013, 02, 16, 01, 46, 20)))
        };
        console.log("Data to be inserted" + JSON.stringify(this.model));
        tableService.insertEntity('Motor', entity, function (error, result, response) {
            if (!error) {
                console.log('Success');
            }
            else
                console.log(error);
        });
        this.submitted = true;
    };
    Object.defineProperty(AddMotorFormComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    return AddMotorFormComponent;
}());
AddMotorFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'motor-form',
        template: __webpack_require__("../../../../../src/app/forms/add-motor-form/add-motor-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/forms/add-motor-form/add-motor-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_git_hub_service__["a" /* GitHubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_git_hub_service__["a" /* GitHubService */]) === "function" && _a || Object])
], AddMotorFormComponent);

var _a;
//# sourceMappingURL=add-motor-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/google-chart/google-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GoogleChartComponent = GoogleChartComponent_1 = (function () {
    function GoogleChartComponent() {
        console.log("Here is GoogleChartComponent");
    }
    GoogleChartComponent.prototype.getGoogle = function () {
        return google;
    };
    GoogleChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ngOnInit');
        if (!GoogleChartComponent_1.googleLoaded) {
            GoogleChartComponent_1.googleLoaded = true;
            google.charts.load('current', { packages: ['corechart', 'line'] });
        }
        google.charts.setOnLoadCallback(function () { return _this.drawGraph(); });
    };
    GoogleChartComponent.prototype.drawGraph = function () {
        console.log("DrawGraph base class!!!! ");
    };
    GoogleChartComponent.prototype.createBarChart = function (element) {
        return new google.visualization.LineChart(element);
    };
    GoogleChartComponent.prototype.createDataTable = function (array) {
        return google.visualization.arrayToDataTable(array);
    };
    return GoogleChartComponent;
}());
GoogleChartComponent = GoogleChartComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'chart',
        template: ""
    }),
    __metadata("design:paramtypes", [])
], GoogleChartComponent);

var GoogleChartComponent_1;
//# sourceMappingURL=google-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/historical-data/historical-data.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/historical-data/historical-data.component.html":
/***/ (function(module, exports) {

module.exports = "<app-motor-list></app-motor-list>\n"

/***/ }),

/***/ "../../../../../src/app/historical-data/historical-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricalDataComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HistoricalDataComponent = (function () {
    function HistoricalDataComponent() {
    }
    HistoricalDataComponent.prototype.ngOnInit = function () {
    };
    return HistoricalDataComponent;
}());
HistoricalDataComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-historical-data',
        template: __webpack_require__("../../../../../src/app/historical-data/historical-data.component.html"),
        styles: [__webpack_require__("../../../../../src/app/historical-data/historical-data.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HistoricalDataComponent);

//# sourceMappingURL=historical-data.component.js.map

/***/ }),

/***/ "../../../../../src/app/motor-management/motor-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/motor-management/motor-management.component.html":
/***/ (function(module, exports) {

module.exports = "<motor-form></motor-form>"

/***/ }),

/***/ "../../../../../src/app/motor-management/motor-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MotorManagementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MotorManagementComponent = (function () {
    function MotorManagementComponent() {
    }
    MotorManagementComponent.prototype.ngOnInit = function () {
    };
    return MotorManagementComponent;
}());
MotorManagementComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-motor-management',
        template: __webpack_require__("../../../../../src/app/motor-management/motor-management.component.html"),
        styles: [__webpack_require__("../../../../../src/app/motor-management/motor-management.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MotorManagementComponent);

//# sourceMappingURL=motor-management.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav  class=\"navbar navbar-inverse nav-bar-header \">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" (click)=\"toggleState()\" class=\"navbar-toggle collapsed pull-left\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button> <!-- #1 -->\n            <a routerLink=\"/plant\" class=\"navbar-brand\">Plant Performance Dashboard</a>\n            <a routerLink=\"/motor\" class=\"navbar-brand\">Motor Performance Dashboard</a>\n        </div>\n         <div class=\"collapse navbar-collapse\" [ngClass]=\"{ 'in': isIn }\"> \n            <ul class=\"nav navbar-nav\">\n                <li><a routerLink=\"/historical\">Motor Historical Data</a></li>\n                <li><a>Station Management</a></li>\n                <li><a routerLink=\"/MotorManagement\">Motor Management</a></li>\n                \n            </ul>\n        </div> <!-- #2 -->\n    </div>\n</nav>\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
        this.isCollapsed = true;
        this.isIn = false; // store state
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.toggleState = function () {
        console.log("Test");
        console.log(this.isIn);
        var bool = this.isIn;
        this.isIn = bool === false ? true : false;
        console.log(this.isIn);
        console.log("Test1");
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/git-hub.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GitHubService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GitHubService = (function () {
    function GitHubService(http) {
        this.http = http;
    }
    GitHubService.prototype.getStationList = function () {
        var _this = this;
        var searchText = 'js';
        var url = 'https://jsonplaceholder.typicode.com/users';
        var stationUrl = 'https://hclmotorstorageaccount.table.core.windows.net/Stations?$select=StationObeject&st=2017-08-30T08%3A15%3A00Z&se=2017-10-21T08%3A15%3A00Z&sp=raud&sv=2016-05-31&tn=stations&sig=4GLyLYg3YBSZqR5TydJ5nK7QqzuZRc6x9%2B52RFih%2B9M%3D';
        //const stationUrl="https://hclmotorstorageaccount.table.core.windows.net:443/Stations?st=2017-09-04T09%3A01%3A00Z&se=2017-09-05T09%3A01%3A00Z&sp=raud&sv=2016-05-31&tn=stations&sig=r46%2BUPrhYi5A479Ntlg5vDNhjCRVtSrFo%2F3%2BCXbr40E%3D";
        if (this.cachedData) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].of(this.cachedData);
        }
        else {
            return this.http.get(stationUrl).map(function (res) {
                var data = res.json();
                console.log(data);
                _this.cachedData = data;
                return data;
            });
        }
    };
    return GitHubService;
}());
GitHubService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], GitHubService);

var _a;
//# sourceMappingURL=git-hub.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/graph.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GraphService = (function () {
    function GraphService() {
        //private url = 'wss://' + location.host;
        this.url = 'wss://hclmotorwebapplication.azurewebsites.net';
    }
    GraphService.prototype.sendMessage = function (message) {
        this.socket.emit('add-message', message);
        console.log("MESSAGE SENT");
    };
    GraphService.prototype.getMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            console.log('Connection URL:' + _this.url);
            _this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(_this.url);
            _this.socket.on('message', function (data) {
                console.log("Message received..." + JSON.stringify(data));
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    return GraphService;
}());
GraphService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])()
], GraphService);

//# sourceMappingURL=graph.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/motor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MotorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MotorService = (function () {
    function MotorService(http) {
        this.http = http;
        this.motorListUrl = "http://hclpocstorageaccount.table.core.windows.net:80/Motor?st=2017-09-07T07%3A29%3A00Z&se=2018-08-31T07%3A29%3A00Z&sp=raud&sv=2016-05-31&tn=motor&sig=EH4rL1HVvVTTSuVuzJMQMpfSWfDRPP8x8X85hSgn5CY%3D";
    }
    MotorService.prototype.getMotorList = function () {
        var _this = this;
        /* if(this.cachedData){
           return Observable.of(this.cachedData);
         }
         else{
           */
        return this.http.get(this.motorListUrl).map(function (res) {
            var data = res.json();
            console.log('Motor Data : Station Name' + data.StationName);
            _this.cachedData = data;
            return data;
        });
        //}
    };
    return MotorService;
}());
MotorService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MotorService);

var _a;
//# sourceMappingURL=motor.service.js.map

/***/ }),

/***/ "../../../../../src/app/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  test works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    return TestComponent;
}());
TestComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TestComponent);

//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map