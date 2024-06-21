import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdventureService {

  constructor() { }
  private messages:string [] = [
    'How are you?',
    'You can do it!!',
    'Keep pushing',
    'Have a great day',
    'congratulations'
  ]

  private wheelOutcomes: string[] = [
    'Prize 1',
    'Prize 2',
    'Try Again',
    'Bonus!'
  ];

  getRandomMessage(): string {
    const randomIndex = Math.floor(Math.random() * this.messages.length);
    return this.messages[randomIndex];
  }
}








