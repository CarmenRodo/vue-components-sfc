function Book(title, pages){
    this.title = title ?? 'Default Title';
    this.pages = pages ?? 0;
    this.save = function(newObj){
        this.title = newObj.title;
        this.pages = newObj.pages;
    }
}
Book.type = "Book";

class Movie {
    static type = 'Movie';
    title = '';
    runtime = 0;

    constructor(title, runtime) {
        this.title = title ?? '';
        this.runtime = runtime ?? 0;
    }
}
//Movie.type = 'Movie';

class Album {
    static type = 'Album';
    title = '';
    artist = '';
    count = 0;

    constructor(title, artist, count){
        this.title = title ?? '';
        this.artist = artist ?? '';
        this.count = count ?? 0;
    }

}

export {Book, Movie, Album};