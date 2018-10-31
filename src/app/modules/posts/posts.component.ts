import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { PostsService } from './posts.service';
import { PostModel } from './post.model';
import { PopupService } from '../../shared/modules/popup/popup.service';

@Component({
    selector: 'app-post',
    templateUrl: 'posts.component.html',
    styleUrls: ['posts.component.scss'],
})

export class PostsComponent implements OnInit {

    posts: PostModel[] = [];

    @ViewChild('formCreate') formCreate: TemplateRef<any>;

    @ViewChild('formEdit') formEdit: TemplateRef<any>;

    currentEditPost: PostModel;

    constructor(public service: PostsService, private popup: PopupService) {

    }

    ngOnInit() {
        this.getPosts();
    }

    getPosts = () => {
        this.service.getPost().subscribe((posts) => {
            this.posts = posts;
        });
    }

    deletePost(id: number) {
        if (confirm('Do you want to delete this post?')) {
            this.service.deletePost(id)
                .subscribe(() => {
                    this.getPosts();
                });
        }
    }

    openEditForm(post: PostModel) {
        this.currentEditPost = post;
        this.popup.open(this.formEdit);
    }

    openCreateForm() {
        this.popup.open(this.formCreate);
    }

    trackById(post: PostModel) {
        return post.id;
    }

}
