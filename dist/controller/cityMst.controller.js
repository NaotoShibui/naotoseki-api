"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityMstController = void 0;
const common_1 = require("@nestjs/common");
const cityMst_service_1 = require("../service/cityMst.service");
let CityMstController = class CityMstController {
    constructor(cityMstService) {
        this.cityMstService = cityMstService;
    }
    getCityMaster() {
        return this.cityMstService.findAll();
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], CityMstController.prototype, "getCityMaster", null);
CityMstController = __decorate([
    common_1.Controller('city'),
    __metadata("design:paramtypes", [cityMst_service_1.CityMstService])
], CityMstController);
exports.CityMstController = CityMstController;
//# sourceMappingURL=cityMst.controller.js.map