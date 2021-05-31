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
exports.SoundArchivesController = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const PrefectureParam_1 = require("./request/PrefectureParam");
const CityQuery_1 = require("./request/CityQuery");
const SoundArchivesListOutVo_1 = require("../service/vo/SoundArchivesListOutVo");
const GetSoundArchivesListResponse_1 = require("./response/GetSoundArchivesListResponse");
const soundArchives_service_1 = require("../service/soundArchives.service");
let SoundArchivesController = class SoundArchivesController {
    constructor(soundArchivesService) {
        this.soundArchivesService = soundArchivesService;
    }
    async getSoundArchivesByCity(params, query) {
        try {
            const outVos = await this.soundArchivesService.findByCity(params.prefecture, query.city);
            const response = class_transformer_1.plainToClass(GetSoundArchivesListResponse_1.default, outVos);
            console.log('================ response');
            console.log(response);
            console.log('=========================');
            return response;
        }
        catch (e) {
            console.log(e);
        }
    }
};
__decorate([
    common_1.Get(':prefecture'),
    __param(0, common_1.Param()), __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PrefectureParam_1.default, CityQuery_1.default]),
    __metadata("design:returntype", Promise)
], SoundArchivesController.prototype, "getSoundArchivesByCity", null);
SoundArchivesController = __decorate([
    common_1.Controller('sound-archives'),
    __metadata("design:paramtypes", [soundArchives_service_1.SoundArchivesService])
], SoundArchivesController);
exports.SoundArchivesController = SoundArchivesController;
//# sourceMappingURL=soundArchives.controller.js.map