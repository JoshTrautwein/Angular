import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is simpy a test', 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwib_vi76vjiAhUQuVkKHXzGDy0QjRx6BAgBEAU&url=https%3A%2F%2Fwww.maxpixel.net%2FFood-Kitchen-Meals-Home-Made-Dishes-Recipe-Bio-1175493&psig=AOvVaw1DQ9Gq35QGCRdUGRYTHyGg&ust=1561146607877615')
  ];

  constructor() { }

  ngOnInit() {
  }

}
