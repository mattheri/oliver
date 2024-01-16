"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const csurf = require("csurf");
const dotenv = require("dotenv");
const session = require("express-session");
const helmet_1 = require("helmet");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
dotenv.config();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
    }));
    app.use((0, helmet_1.default)({
        crossOriginEmbedderPolicy: false,
        contentSecurityPolicy: {
            directives: {
                imgSrc: [
                    `'self'`,
                    'data:',
                    'apollo-server-landing-page.cdn.apollographql.com',
                ],
                scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
                manifestSrc: [
                    `'self'`,
                    'apollo-server-landing-page.cdn.apollographql.com',
                ],
                frameSrc: [`'self'`, 'sandbox.embed.apollographql.com'],
            },
        },
    }));
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    await app.listen(Number(process.env.PORT));
    app.use(csurf());
}
bootstrap();
//# sourceMappingURL=main.js.map