"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoundArchivesModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("./database.module");
const soundArchives_providers_1 = require("../providers/soundArchives.providers");
const soundArchives_service_1 = require("../../service/soundArchives.service");
const soundArchives_controller_1 = require("../../controller/soundArchives.controller");
let SoundArchivesModule = class SoundArchivesModule {
};
SoundArchivesModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [soundArchives_controller_1.SoundArchivesController],
        providers: [
            ...soundArchives_providers_1.soundArchivesProviders,
            soundArchives_service_1.SoundArchivesService,
        ],
    })
], SoundArchivesModule);
exports.SoundArchivesModule = SoundArchivesModule;
//# sourceMappingURL=soundArchives.module.js.map