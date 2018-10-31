import { trigger, animate, transition, style } from '@angular/animations';

export const fadeOutAnimation = trigger('fadeOut', [
        transition(':leave', [
            animate('281ms cubic-bezier(0.4, 0, 0.2, 1)', style({opacity: 0}))
        ])
    ]);

