const input = document.getElementById("input");
const text1 = document.getElementById("text1")
const reste = document.getElementById("reste");
const maison = document.getElementById("maison");
const box = document.querySelectorAll(".case");
let item;

// ----------------------------------------------------------------------------------------------------------------

formulaire.addEventListener("submit", function(e){
    
    e.preventDefault();
    createElements();
    supprimer()

});

function createElements(){
    let saisie = document.createElement("li");
    saisie.className = "tache";

    saisie.textContent = input.value;
    saisie.setAttribute("draggable", true);

    liste.appendChild(saisie);


    let btn = document.createElement("button");
    btn.classList = "croix";
    btn.innerText = "X";

    saisie.appendChild(btn);

    
}







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


// Ajouter un bouton en forme de petite croix rouge à chaque rajout sur la liste pour le retirer =>

// 1/ Créer un bouton via JS proche de là où on créer un li dynamiquement;

// 2/ Attribuer chaque bouton "croix" à son parent ( li );

// 3/ Ajouter une class en JS à ces boutons pour les retrouver en CSS;

// 4/ Styliser la croix en CSS;

// Vérifier qu'il fonctionne sur plusieurs éléments crées lors du drag & drop
// puis COMMIT !




// e.target.re!move(e.target.parent) remove pour récupérer le parent du li que l'on va supp


function supprimer(){

    let supp = document.querySelectorAll(".croix");

    for(let i = 0; i < supp.length; i++){

        supp[i].addEventListener("click", function(e){
            console.log(e.target.parent)

            e.target.parentNode.remove();
        });
    };
};