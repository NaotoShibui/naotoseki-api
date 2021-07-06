"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorsAllowInterceptor = void 0;
class CorsAllowInterceptor {
    intercept(context, next) {
        const res = context.switchToHttp().getResponse();
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'POST,GET');
        return next.handle();
    }
}
exports.CorsAllowInterceptor = CorsAllowInterceptor;
//# sourceMappingURL=cors.interceptor.js.map