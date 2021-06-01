import {CallHandler, ExecutionContext, NestInterceptor} from '@nestjs/common'
import {Observable} from 'rxjs'

export class CorsAllowInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>
  ): Observable<any> | Promise<Observable<any>> {
    const res = context.switchToHttp().getResponse()
    res.header('Access-Control-Allow-Origin', '*');
    // res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'POST,GET');
    return next.handle()
  }
}