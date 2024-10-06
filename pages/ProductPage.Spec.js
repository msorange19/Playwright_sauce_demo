//import { Page, Locator } from "@playwright/test";

export class ProductPage {
 constructor(page) {
  this.page =page;
  this.sortSelector = '.product_sort_container';

 }

async verifySortProd(sortSelection)
{
 await this.page.pause()
 await this.page.selectOption(this.sortSelector, sortSelection);
}
}