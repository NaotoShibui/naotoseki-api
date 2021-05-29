import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'postgres',
      host: 'ec2-107-22-83-3.compute-1.amazonaws.com',
      port: 5432,
      username: 'xheehrbdsjxplm',
      password: 'a34c0f4864a6baf20ae8abd734b3b2ac99fef163989f7172dea9938fbc12ccb0',
      database: 'dcqrqnh1ee8na3',
      entities: [
          __dirname + '../../data/entity/*.entity{.ts,.js}',
      ],
      extra: {
        ssl: true
      },
      // ssl: {
      //   ca: process.env.SSL_CERT,
      // },
      extra: {
        ssl: {
          rejectUnauthorized: false
        }
      },
      synchronize: true,
    }),
  },
];