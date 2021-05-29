export const databaseProviders: {
    provide: string;
    useFactory: () => Promise<import("typeorm").Connection>;
}[];
