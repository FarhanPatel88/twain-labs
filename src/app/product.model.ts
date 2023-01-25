export class Product {
    private id: number;
    private name: string;
    private description: string;
    private imgPath: string;

    constructor(id: number, name: string, desc: string, imgPath: string) {
        this.id = id;
        this.name = name;
        this.description = desc;
        this.imgPath = imgPath;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    getImgPath() {
        return this.imgPath;
    }
}
