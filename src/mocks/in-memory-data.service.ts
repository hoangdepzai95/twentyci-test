import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo, ResponseOptions, STATUS } from 'angular-in-memory-web-api';

@Injectable()

export class InMemDataService implements InMemoryDbService {

    createDb(reqInfo: RequestInfo) {
        return { };

    }

    get(reqInfo: any) {
        if (reqInfo.collectionName === 'login') {
            return reqInfo.utils.createResponse$(() => {
                const { userName, password } = reqInfo.req.body;
                console.log(userName, password);
                return {
                    body: { access_token: 'token' },
                    status: STATUS.OK
                };
            });
        }
    }

    post(reqInfo: any) {
        if (reqInfo.collectionName === 'login') {
            return reqInfo.utils.createResponse$(() => {
                const { userName, password } = reqInfo.req.body;

                if (userName === 'demo' && password === 'demo') {
                    return {
                        body: { access_token: 'token' },
                        status: STATUS.OK
                    };
                }

                return {
                    status: STATUS.UNAUTHORIZED
                };
            });
        }
    }

}


