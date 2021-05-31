"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.soundArchivesProviders = void 0;
const SoundArchives_entity_1 = require("../../data/entity/SoundArchives.entity");
const constants = require("../../constants");
exports.soundArchivesProviders = [
    {
        provide: constants.SOUND_ARCHIVES_REPOSITORY,
        useFactory: (connection) => connection.getRepository(SoundArchives_entity_1.SoundArchivesEntity),
        inject: [constants.DATABASE_CONNECTION],
    },
];
//# sourceMappingURL=soundArchives.providers.js.map