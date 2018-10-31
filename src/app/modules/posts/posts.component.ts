import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { PostModel } from './post.model';

@Component({
    selector: 'app-post',
    templateUrl: 'posts.component.html',
    styleUrls: ['posts.component.scss'],
    providers: [
        PostsService
    ]
})

export class PostsComponent implements OnInit {

    posts: PostModel[] = [];

    constructor(public service: PostsService) {

    }

    ngOnInit() {
        this.getPosts();
    }

    getPosts() {
        this.service.getPost().subscribe((posts) => {
            this.posts = posts;
        });
    }

    trackById(post: PostModel) {
        return post.id;
    }

}
