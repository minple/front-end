export class Post {
    id: number;
    imageId: number;
    image: string;
    title: string;
    data: string;
    excerpt: string;

    constructor() {
        this.id = undefined;
        this.imageId = undefined;
        this.image = undefined;
        this.title = undefined;
        this.data = undefined;
        this.excerpt = undefined;
    }

    public deserialize(target: Post, source: any) {
        // Note this.active will not be listed in keys since it's declared, but not defined
        const keys = Object.keys(this);
        

        var buttons = {
            foo: 'bar',
            fiz: 'buz'
          };
          
          for ( var property in buttons ) {
            console.log( property ); // Outputs: foo, fiz or fiz, foo
          }
    
        for (var key of keys) {
          if (source.hasOwnProperty(key)) {
            target[key] = source[key];
          }
        }
      }
}


