import { ExpressMiddlewareInterface } from "../../src/driver/express/ExpressMiddlewareInterface";
export declare class StartTimerMiddleware implements ExpressMiddlewareInterface {
    use(request: any, response: any, next?: Function): any;
}
