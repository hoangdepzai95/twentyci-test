import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostModel } from './post.model';

@Injectable()

export class PostsService {

    constructor(private http: HttpClient) {
    }

    getPost(): Observable<PostModel[]> {
        return this.http.get<PostModel[]>('/api/posts')
    }
}
