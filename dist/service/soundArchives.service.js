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
exports.SoundArchivesService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const constants = require("../constants");
const SoundArchivesOutVo_1 = require("./vo/SoundArchivesOutVo");
let SoundArchivesService = class SoundArchivesService {
    constructor(soundArchivesRepository) {
        this.soundArchivesRepository = soundArchivesRepository;
    }
    async findByCity(prefecture, city) {
        try {
            const entities = await this.soundArchivesRepository.createQueryBuilder(constants.SOUND_ARCHIVES)
                .where(`${constants.PLACE_MST}.prefecture = :prefecture`, { prefecture })
                .andWhere(`${constants.PLACE_MST}.city = :city`, { city })
                .getMany();
            let outVos = [];
            entities.forEach(entity => {
                outVos.push(class_transformer_1.plainToClass(SoundArchivesOutVo_1.default, entity));
            });
            const total = await this.getCount();
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
    async getCount(prefecture = '', city = '') {
        const query = this.soundArchivesRepository.createQueryBuilder(constants.SOUND_ARCHIVES);
        if (prefecture != '') {
            query.where(`${constants.PLACE_MST}.prefecture = :prefecture`, { prefecture });
            if (city != '')
                query.andWhere(`${constants.PLACE_MST}.city = :city`, { city });
        }
        return await query.getCount();
    }
};
SoundArchivesService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants.SOUND_ARCHIVES_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], SoundArchivesService);
exports.SoundArchivesService = SoundArchivesService;
//# sourceMappingURL=soundArchives.service.js.map