//import { Page, Locator } from "@playwright/test";

export class ProductPage {
    constructor(page) {
        this.page = page;
        this.sortSelector = '.product_sort_container';
        this.productList = '.inventory_item_name';
        this.productPrice = '.inventory_item_price';

    }

    async productInventoryNavigation(url) {
        await this.page.goto(url);
    }

    async verifySortProd(sortSelection) {
        await this.page.selectOption(this.sortSelector, sortSelection);

    }

    async getProductList() {
        return await this.page.$$eval(this.productList, items => items.map(item => item.textContent));

    }

    async getProductPrice(){
        return await this.page.$$eval(this.productPrice, prices => prices.map(price => price.textContent.replace('$','')))
    }
}