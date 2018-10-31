import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo, ResponseOptions, STATUS } from 'angular-in-memory-web-api';

@Injectable()

export class InMemDataService implements InMemoryDbService {

    posts = [
        {
            id: 1,
            title: 'My daughter (7) keeps getting touched inappropriately at school, school brushing it off (Washington)',
            content: 'On a near daily basis, my daughter (age 7) is getting groped by a boy at school. She says he typically does it when the class is lining up and when the teacher is not looking, or at recess. So far he has touched her butt, her chest, and proclaimed "we should have sex."\n' +
                '\n' +
                'We talked with the teacher, who said she would "keep an eye on things" to try and eliminate the opportunity for it to occur. This has not helped. We escalated to the principal, who was kind but essentially said it was up to my daughter to cause a scene and yell and scream to bring attention to the issue whenever it happens to try and deter it, but my daughter does not want to do this because she finds the situation embarrassing and doesn\'t want the attention. Not to mention, it\'s not actually addressing the issue.'
        },
        {
            id: 2,
            title: 'Trump plans to sign an executive order that would remove the right to citizenship for babies of non-citizens and unauthorized immigrants born on U.S. soil. Would you support such a decision, why/why not?',
            content: 'We talked with the teacher, who said she would "keep an eye on things" to try and eliminate the opportunity for it to occur. This has not helped. We escalated to the principal, who was kind but essentially said it was up to my daughter to cause a scene and yell and scream to bring attention to the issue whenever it happens to try and deter it, but my daughter does not want to do this because she finds the situation embarrassing and doesn\'t want the attention. Not to mention, it\'s not actually addressing the issue.'
        }
    ];

    createDb(reqInfo: RequestInfo) {
        return { };

    }

    get(reqInfo: any) {
        if (reqInfo.collectionName === 'posts') {
            return reqInfo.utils.createResponse$(() => {
                return {
                    body: this.cloneDeep(this.posts),
                    status: STATUS.OK
                };
            });
        }

        if (reqInfo.collectionName === 'post') {
            const id = +this.getParams(reqInfo, 'id');

            return reqInfo.utils.createResponse$(() => {
                return {
                    body: this.cloneDeep(this.posts.find(post => post.id === id) || {}),
                    status: STATUS.OK
                };
            });
        }
    }

    getParams(reqInfo: any, key) {
        return (reqInfo.req.params.updates.find(param => param.param === key) || {}).value;
    }

    cloneDeep(data: any): any {
        return JSON.parse(JSON.stringify(data));
    }

    maxBy(arr: Array<any>, field: string) {
        return arr.map(o => o[field]).reduce((a, b) => {
            return Math.max(a, b);
        });
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

        if (reqInfo.collectionName === 'posts') {
            return reqInfo.utils.createResponse$(() => {
                const { title, content } = reqInfo.req.body;
                const id = this.maxBy(this.posts, 'id') + 1;

                this.posts.unshift({
                    id,
                    title,
                    content
                });

                return {
                    status: STATUS.OK
                };
            });
        }
    }

    put(reqInfo: any) {
        if (reqInfo.collectionName === 'posts') {
            return reqInfo.utils.createResponse$(() => {
                const { id, title, content } = reqInfo.req.body;

                this.posts.forEach((post) => {
                    if (post.id === id) {
                        post.title = title;
                        post.content = content;
                    }
                });

                return {
                    status: STATUS.OK
                };
            });
        }
    }

    delete(reqInfo: any) {
        if (reqInfo.collectionName === 'posts') {
            return reqInfo.utils.createResponse$(() => {
                this.posts = this.posts.filter(post => post.id !== +reqInfo.id);

                return {
                    status: STATUS.OK
                };
            });
        }
    }

}


