import { animate, state, style, transition, trigger, AnimationTriggerMetadata } from '@angular/animations';

export function fade(triggerName: string, duration = '500ms', easing = 'ease'): AnimationTriggerMetadata {
  return trigger(triggerName, [
    state('false', style({ opacity: '0', visibility: 'hidden' })),
    state('true', style({ opacity: '1', visibility: 'visible' })),
    transition(':enter, 0 => 1', [
      style({ opacity: '0' }),
      animate(duration + ' ' + easing, style({ opacity: '1', visibility: 'visible' })),
    ]),
    transition(':leave, 1 => 0', animate(duration + ' ' + easing, style({ opacity: '0', visibility: 'hidden' })))
  ]);
}
export function scale(triggerName: string, duration = '800ms', easing = 'ease'): AnimationTriggerMetadata {
  return trigger(triggerName, [
    transition(':enter', [
      style({ transform: 'scale(0)', opacity: '0' }),
      animate(duration + ' ' + easing, style({ transform: 'scale(1)', opacity: '1' }))
    ])
  ]);
}