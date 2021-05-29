"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cityMasterProviders = void 0;
const CityMaster_entity_1 = require("../../data/entity/CityMaster.entity");
exports.cityMasterProviders = [
    {
        provide: 'CITY_MASTER_REPOSITORY',
        useFactory: (connection) => connection.getRepository(CityMaster_entity_1.CityMaster),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=cityMaster.providers.js.map