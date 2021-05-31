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
exports.CityMstService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const CityMstOutVo_1 = require("./vo/CityMstOutVo");
const constants = require("../constants");
let CityMstService = class CityMstService {
    constructor(cityMstRepository) {
        this.cityMstRepository = cityMstRepository;
    }
    async findAll() {
        try {
            const entities = await this.cityMstRepository.createQueryBuilder(constants.CITY_MST).getMany();
            const total = await this.getCount();
            let outVos = [];
            entities.forEach(entity => {
                outVos.push(class_transformer_1.plainToClass(CityMstOutVo_1.default, entity));
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
    async findByPrefecture(prefecture) {
        try {
            const entities = await this.cityMstRepository.createQueryBuilder(constants.CITY_MST)
                .where(`${constants.CITY_MST}.prefecture = :prefecture`, { prefecture }).getMany();
            const total = await this.getCount(prefecture);
            let outVos = [];
            entities.forEach(entity => {
                outVos.push(class_transformer_1.plainToClass(CityMstOutVo_1.default, entity));
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
    async findByCity(prefecture, city) {
        const entity = await this.cityMstRepository.createQueryBuilder(constants.CITY_MST)
            .leftJoin('sound_archives', 'sound_archives', 'sound_archvies.prefecture = city_mst.prefecture and sound_archives.city = city_mst.city')
            .where(`${constants.CITY_MST}.prefecture = :prefecture`, { prefecture })
            .andWhere(`${constants.CITY_MST}.city = :city`, { city })
            .getOne();
        return class_transformer_1.plainToClass(CityMstOutVo_1.default, entity);
    }
    async getCount(prefecture = '') {
        const query = this.cityMstRepository.createQueryBuilder(constants.CITY_MST);
        if (prefecture != '')
            query.where(`${constants.CITY_MST}.prefecture = :prefecture`, { prefecture });
        const total = await query.getCount();
        return total;
    }
};
CityMstService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants.CITY_MST_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CityMstService);
exports.CityMstService = CityMstService;
//# sourceMappingURL=cityMst.service.js.map