import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostModel } from './post.model';

@Injectable()

export class PostsService {

    constructor(private http: HttpClient) {
    }

    getPost(): Observable<PostModel[]> {
        return this.http.get<PostModel[]>('/api/posts')
    }

    getSinglePost(id: number): Observable<PostModel> {
        const params = new HttpParams()
            .set('id', String(id));

        return this.http.get<PostModel>('api/post', { params });
    }

    deletePost(id: number): Observable<any> {
        return this.http.delete(`/api/posts/${id}`)
    }

    createPost(data: { title: string, content: string }): Observable<any> {

        return this.http.post('/api/posts', data)
    }

    editPost(data: { id: number, title: string, content: string }): Observable<any> {
        return this.http.put('/api/posts', data);
    }
}
