import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { AdventureService } from './adventure.service';

@Directive({
  selector: '[appTalkative]',
  standalone: true
})
export class TalkativeDirective {

  constructor(private el: ElementRef, private adventureService: AdventureService) { }

  @HostListener('click')
  onClick() {
    const message = this.adventureService.getRandomMessage();
    this.el.nativeElement.innerText = message;
  } 


}
