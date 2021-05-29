"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cityMstProviders = void 0;
const CityMst_entity_1 = require("../../data/entity/CityMst.entity");
exports.cityMstProviders = [
    {
        provide: 'CITY_MST_REPOSITORY',
        useFactory: (connection) => connection.getRepository(CityMst_entity_1.CityMst),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=cityMst.providers.js.map