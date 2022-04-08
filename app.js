let input = document.getElementById("input");
text1 = document.getElementById("text1")


// let saisie = document.creatElement("saisie");

// saisie.id = "saisie"

// saisie.textContent = "input.value";

// document.liste.appendChild(saisie)


formulaire.addEventListener("submit", function(e){
    
    e.preventDefault();

    // liste.innerHTML += input.value+" "+ "<br>";

    let saisie = document.createElement("li");

    saisie.textContent = input.value;
    saisie.setAttribute("draggable", true);

    liste.appendChild(saisie);

});


// Chaque élements saisit doit être indépendant
//créeer à chaque fois un élément en JS sur la Liste, afin de le rendre autonome et sélectionnable






// DRAGGABLE

saisie.addEventListener("dragstart", dragStart);
saisie.addEventListener("dragend", dragEnd);

function dragStart() {
    this.className += ' tenu';
    setTimeout(()  => (this.className = 'invisible'), 0);
}
function dragEnd() {
    this.className = 'saisie';
}

for (const vide of box) {
    // Permet de mettre sur les 4 "cases" chacun des ses évènement d'écoute. (au lieu de faire 4x4lignes).
        vide.addEventListener('dragover', dragOver);
    
        vide.addEventListener('dragenter', dragEnter);
    
        vide.addEventListener('dragleave', dragLeave);
        // écriture en vert = Visual Studio code prévient que c'est une classe et non une fonction
        vide.addEventListener('drop', dragDrop);
    
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave(e) {
    this.className = 'case';
}

function dragDrop(e) {
    this.className = 'case';
    this.append(base);
}