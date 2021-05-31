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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceMstController = void 0;
const common_1 = require("@nestjs/common");
const placeMst_service_1 = require("../service/placeMst.service");
const class_transformer_1 = require("class-transformer");
const PlaceMstListOutVo_1 = require("../service/vo/PlaceMstListOutVo");
const GetPlaceMstListResponse_1 = require("./response/GetPlaceMstListResponse");
const PrefectureParam_1 = require("./request/PrefectureParam");
const PlaceInfoQuery_1 = require("./request/PlaceInfoQuery");
const PlaceMstOutVo_1 = require("../service/vo/PlaceMstOutVo");
const GetPlaceMstResponse_1 = require("./response/GetPlaceMstResponse");
let PlaceMstController = class PlaceMstController {
    constructor(placeMstService) {
        this.placeMstService = placeMstService;
    }
    async getCityMst() {
        try {
            const outVos = await this.placeMstService.findAll();
            const response = class_transformer_1.plainToClass(GetPlaceMstListResponse_1.default, outVos);
            return response;
        }
        catch (e) {
            console.log(e);
        }
    }
    async getCityMstByPrefecture(params, placeInfo) {
        try {
            const outVo = await this.placeMstService.findByCity(params.prefecture, placeInfo.city, placeInfo.place);
            const response = class_transformer_1.plainToClass(GetPlaceMstResponse_1.default, outVo);
            return response;
        }
        catch (e) {
            console.log(e);
        }
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PlaceMstController.prototype, "getCityMst", null);
__decorate([
    common_1.Get(':prefecture'),
    __param(0, common_1.Param()), __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PrefectureParam_1.default, PlaceInfoQuery_1.default]),
    __metadata("design:returntype", Promise)
], PlaceMstController.prototype, "getCityMstByPrefecture", null);
PlaceMstController = __decorate([
    common_1.Controller('place'),
    __metadata("design:paramtypes", [placeMst_service_1.PlaceMstService])
], PlaceMstController);
exports.PlaceMstController = PlaceMstController;
//# sourceMappingURL=placeMst.controller.js.map