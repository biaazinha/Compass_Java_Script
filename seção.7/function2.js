function start() {
    for (var i = 0; i < 5; i++){
        if (true) {
            let color = 'red';
        }
    }
    console.log(color);
}

start();

// var => function-scoped
// let, const => block-scoped


var color = 'red';  //window.color = red
let age = 30;    //window.age = undefined
 
function sayHi() {
    console.log('hi');
}


//method => obj
//function => global (window, global)

//this faz referencia ao objeto que esta executando a função atual
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
    }
};

video.showTags();





function playVideo(a, b) {
    console.log(this);
}

playVideo.call({ name: 'Mosh'}, 1, 2);
playVideo.apply({ name: 'Mosh'},[1, 2]);
const fn = playVideo.bind({ name: 'Mosh'});
fn();

playVideo();