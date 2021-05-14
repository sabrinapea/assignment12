class Jukebox {
    constructor(albums) {
        this.albums = [];
        this.albumListElement = document.getElementById('playlist');
        console.log(this.albumListElement);
    }
    buildDropDown = function() {
        this.albumListElement.innerHTML = '';
        
        for (let album of this.albums) {
            let li = document.createElement('li');
            li.innerHTML = `<a class="dropdown-item" href="#">${album.title} - ${album.artist}</a>`;
            li.classList.add('dropdown-item');
            li.href = '#';
            this.albumListElement.appendChild(li);
        }
    }
    addAlbum = function(album) {
        this.albums.push(album);
    }
    favoriteAlbum = function() {
        let max = -1, fav;
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played;
                fav = this.albums[i];
            }
        }
        return fav.display();
    }
}
// click on add button
dropdownMenu.addEventListener('click', (e) => {
    if (e.target.classList.contains('dropdown-item')) {
        let childIndex = Array.prototype.indexOf.call(e.target.parentNode.parentNode.children, e.target.parentNode);
        console.log(childIndex);
        console.log(e.target);
        jbox.albums[childIndex].play();
    }
});

class Album {
    constructor(artist, title) {
        this.artist = artist;
        this.title = title;
        this.played = 0;
    }
    play = function() {
        this.played += 1;
    }
    display = function() {
        return `${this.artist} - ${this.title}. The album has been played ${this.played} times.`;
    }
}
var jbox = new Jukebox();
const album1 = new Album('Colors', 'Halseys');
const album2 = new Album('Blink 182','Dude Ranch');
const album3 = new Album('Laugh','Cage the Elephant');
const album4 = new Album('New Found Glory', 'Sticks and Stones');
const album5 = new Album('Biophilia','Bjork');

jbox.addAlbum(album1);
jbox.addAlbum(album2);
jbox.addAlbum(album3);
jbox.addAlbum(album4);
jbox.addAlbum(album5);
jbox.buildDropDown();

document.getElementById("favoriteAlbum").addEventListener('click', (e) => {
    alert(`Your favorite album is: ${jbox.favoriteAlbum()}`);
});
