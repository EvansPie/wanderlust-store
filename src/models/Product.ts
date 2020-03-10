export class Product {
    id: string;

    constructor(id: string, data: any) {
        this.id = data['id'];
    }
}

export class WebgainsProduct extends Product {

    brand: string;
    categoryId: number;
    categoryName: string;
    categoryPath: string;
    currency: string;
    url: string;
    deliveryCost: string;
    deliveryPeriod: string;
    description: string;
    imageURL: string;
    lastUpdated: string;
    merchantCategory: string;
    price: number;
    productName: string;
    programId: number;
    programName: string;

    constructor(id: string, data: any) {
        super(id, data);

        this.brand = data['brand'];
        this.categoryId = data['category_id'];
        this.categoryName = data['category_name'];
        this.categoryPath = data['category_path'];
        this.currency = data['currency'];
        this.url = data['deeplink'];
        this.deliveryCost = data['delivery_cost'];
        this.deliveryPeriod = data['delivery_period'];
        this.description = data['description'];
        this.imageURL = data['image_url'];
        this.lastUpdated = data['last_updated'];
        this.merchantCategory = data['merchant_category'];
        this.price = data['price'];
        this.productName = data['product_name'];
        this.programId = data['program_id'];
        this.programName = data['program_name'];
        this.price = data['price'];
        this.price = data['price'];
    }
}
