"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.placeMstProviders = void 0;
const PlaceMst_entity_1 = require("../../data/entity/PlaceMst.entity");
const constants = require("../../constants");
exports.placeMstProviders = [
    {
        provide: constants.PLACE_MST_REPOSITORY,
        useFactory: (connection) => connection.getRepository(PlaceMst_entity_1.PlaceMstEntity),
        inject: [constants.DATABASE_CONNECTION],
    },
];
//# sourceMappingURL=placeMst.providers.js.map