export class User {
    private name: string;
    private slug: string;
    private avatar_urls: Avatar_Urls;

    constructor() {
        this.name = "";
        this.avatar_urls = new Avatar_Urls();
    }
}

export class Avatar_Urls {
    private 48: string;
    private 96: string;

    constructor() {
        this["48"] = "";
        this["96"] = "";
    }
}