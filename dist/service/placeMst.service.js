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
exports.PlaceMstService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const PlaceMstOutVo_1 = require("./vo/PlaceMstOutVo");
const constants = require("../constants");
let PlaceMstService = class PlaceMstService {
    constructor(placeMstRepository) {
        this.placeMstRepository = placeMstRepository;
    }
    async findAll() {
        try {
            const entities = await this.placeMstRepository.createQueryBuilder(constants.PLACE_MST).getMany();
            const total = await this.getCount();
            let outVos = [];
            entities.forEach(entity => {
                outVos.push(class_transformer_1.plainToClass(PlaceMstOutVo_1.default, entity));
            });
            const result = {
                total,
                results: outVos
            };
            return result;
        }
        catch (e) {
            console.log(e);
        }
    }
    async findByCity(prefecture, city, place) {
        try {
            const entity = await this.placeMstRepository.createQueryBuilder(constants.PLACE_MST)
                .where(`${constants.PLACE_MST}.prefecture = :prefecture`, { prefecture })
                .andWhere(`${constants.PLACE_MST}.city = :city`, { city })
                .andWhere(`${constants.PLACE_MST}.place = :place`, { place })
                .getOne();
            const outVo = class_transformer_1.plainToClass(PlaceMstOutVo_1.default, entity);
            return outVo;
        }
        catch (e) {
            console.log(e);
        }
    }
    async getCount() {
        return await this.placeMstRepository.createQueryBuilder(constants.PLACE_MST).getCount();
    }
};
PlaceMstService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants.PLACE_MST_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], PlaceMstService);
exports.PlaceMstService = PlaceMstService;
//# sourceMappingURL=placeMst.service.js.map