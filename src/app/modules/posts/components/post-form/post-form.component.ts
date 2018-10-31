import { Component, Input, OnInit } from '@angular/core';
import { PostModel } from '../../post.model';
import { FormBuilder, Validators } from '@angular/forms';
import { PopupService } from '../../../../shared/modules/popup/popup.service';
import { PostsService } from '../../posts.service';

type FormMode = 'create' | 'edit';

@Component({
    selector: 'post-form',
    templateUrl: 'post-form.component.html',
    styleUrls: ['post-form.component.scss']
})

export class PostFormComponent implements OnInit {

    @Input()
    mode: FormMode = 'create';

    @Input()
    post: PostModel;

    @Input()
    reloadPosts: Function;

    postForm = this.fb.group({
        title: [ '', [ Validators.required, Validators.minLength(10), Validators.maxLength(255) ] ],
        content: [ '', [ Validators.required ] ],
    });


    constructor(private fb: FormBuilder, private popup: PopupService, private service: PostsService) {

    }

    ngOnInit() {
        if (this.mode === 'edit' && this.post) {
            this.postForm.setValue({
                title: this.post.title,
                content: this.post.content
            });
        }
    }

    submitForm(): void {
        for (const i in this.postForm.controls) {
            this.postForm.controls[i].markAsDirty();
            this.postForm.controls[i].updateValueAndValidity();
        }

        if (this.postForm.valid) {
            if (this.mode === 'create') {
                this.service.createPost(this.postForm.value)
                    .subscribe(this.onSaved)
            } else if (this.mode === 'edit') {
                this.service.editPost({
                    id: this.post.id,
                    ...this.postForm.value
                }).subscribe(this.onSaved);
            }
        }
    }

    onSaved = () => {
        if (typeof this.reloadPosts === 'function') {
            this.popup.close();
            this.reloadPosts();
        }
    }

    cancel() {
        this.popup.close();
    }
}
