const input = document.getElementById("input");
const text1 = document.getElementById("text1")
const reste = document.getElementById("reste");
const maison = document.getElementById("maison");
const box = document.querySelectorAll(".case");
let item;


// Chaque élements saisit doit être indépendant
//créer à chaque fois un élément en JS sur la Liste, afin de le rendre autonome et sélectionnable



formulaire.addEventListener("submit", function(e){
    
    e.preventDefault();

    // liste.innerHTML += input.value+" "+ "<br>";

    let saisie = document.createElement("li");
    saisie.className = "tache";

    saisie.textContent = input.value;
    saisie.setAttribute("draggable", true);

    liste.appendChild(saisie);

});







// DRAGGABLE

// saisie.addEventListener("dragstart", dragStart);
// saisie.addEventListener("dragend", dragEnd);

function dragStart() {
    this.className += ' tenu';
    setTimeout(()  => (this.className = 'invisible'), 0);
}
function dragEnd() {
    this.className = 'saisie';
}

for (const vide of box) {

        vide.addEventListener('dragover', dragOver);
    
        vide.addEventListener('dragenter', dragEnter);
    
        vide.addEventListener('dragleave', dragLeave);

        vide.addEventListener('drop', dragDrop);
    
}

document.addEventListener("dragstart", function(e){ 
    dragStart(e.target)
    item = e.target;
});


document.addEventListener("dragend", function(e){ 
    dragStart(e.target)
    item = e.target;
});




function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave() {
}

function dragDrop() {
    this.className = 'case';
    this.append(item);
    console.log(this)
}