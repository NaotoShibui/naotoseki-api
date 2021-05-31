"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await typeorm_1.createConnection({
            type: 'postgres',
            host: 'ec2-107-22-83-3.compute-1.amazonaws.com',
            port: 5432,
            username: 'xheehrbdsjxplm',
            password: 'a34c0f4864a6baf20ae8abd734b3b2ac99fef163989f7172dea9938fbc12ccb0',
            database: 'dcqrqnh1ee8na3',
            entities: [
                __dirname + '/../../data/entity/*.entity{.ts,.js}',
            ],
            extra: {
                ssl: true
            },
            extra: {
                ssl: {
                    rejectUnauthorized: false
                }
            },
            synchronize: false,
        }),
    },
];
//# sourceMappingURL=database.providers.js.map