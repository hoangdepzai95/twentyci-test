import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../posts.service';
import { PostModel } from '../../post.model';

@Component({
    selector: 'post',
    templateUrl: 'post.component.html',
    styleUrls: ['post.component.scss']
})

export class PostComponent implements OnInit {

    post: PostModel = {} as PostModel;

    constructor(private activatedRoute: ActivatedRoute, private service: PostsService) {
    }

    ngOnInit() {
        const id = this.activatedRoute.snapshot.params.id;

        this.service.getSinglePost(id)
            .subscribe((post: PostModel) => {
                this.post = post;
            });
    }
}
