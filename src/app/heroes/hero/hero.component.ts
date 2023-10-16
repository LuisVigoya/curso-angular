import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age:  number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  };

  changeName( value: string ): void {
    this.name = value;
  };

  changeAge( value: number ): void {
    this.age = value;
  };

  resetValues(): void {
    this.name = 'Ironman';
    this.age = 45;
  };

}
