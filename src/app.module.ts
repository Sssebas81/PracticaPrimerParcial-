import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { Ejercicio1Module } from './ejercicio1/ejercicio1.module';
import { Ejercicio2Module } from './ejercicio2/ejercicio2.module';
import { Ejercicio10Module } from './ejercicio10/ejercicio10.module';

type SupportedDbTypes =
    | "mysql"
    | "postgres"
    | "sqlite"
    | "mariadb"
    | "mongodb"
    | "oracle";

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                type: configService.get<SupportedDbTypes>("DB_TYPE") ?? "postgres",
                host: configService.get<string>("DB_HOST") ?? "localhost",
                port: configService.get<number>("DB_PORT") ?? 5433,
                username: configService.get<string>("DB_USERNAME") ?? "postgres",
                password: configService.get<string>("DB_PASSWORD") ?? "postgres",
                database: configService.get<string>("DB_DATABASE") ?? "mydatabase",
                entities: [__dirname + "/**/*.entity{.ts,.js}"],
                synchronize:
                    configService.get<boolean>("DB_SYNCHRONIZE") ?? false,
            }),
        }),
        Ejercicio1Module,
        Ejercicio2Module,
        Ejercicio10Module,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
