"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityMstModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("./database.module");
const cityMst_providers_1 = require("../providers/cityMst.providers");
const cityMst_service_1 = require("../../service/cityMst.service");
let CityMstModule = class CityMstModule {
};
CityMstModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        providers: [
            ...cityMst_providers_1.cityMstProviders,
            cityMst_service_1.CityMstService,
        ],
    })
], CityMstModule);
exports.CityMstModule = CityMstModule;
//# sourceMappingURL=cityMst.module.js.map