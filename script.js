

/* On récupère tous les touches sous forme d'un tableau pour une manipulation pratique*/ 
const touches = [... document.querySelectorAll('.bouton')];

/* On récupère les Keycode avec map ( pour accéder à l'attribut data-key où 
    se trouve les keycode on utilise le dataset */ 
const listeKeyCode = touches.map( touche => touche.dataset.key);

/* On récupère la div screen (écran)  */ 
const ecran = document.querySelector('.screen');

/* L'événement keydown pour les touches clavier, puis on récupère la valeur
du keycode dans une variable   */
document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur);
})

/* 2 ème événement click pareil sauf qu'on récupère l'élément du click par target,
puis le datakey    */
document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur);
})

/* fonction qui prend en paramètre la valeur du keycode et
 cacul le résultat en fonction de l'index    */
const calculer =(valeur) =>{
    if (listeKeyCode.includes(valeur)){
        
        switch(valeur){
            case '8':
                ecran.textContent="";
            case '187':
                const calcul = eval(ecran.textContent);
                ecran.textContent=calcul;
                break;

            default:
                const indexkeycode= listeKeyCode.indexOf(valeur);
                const touche =touches[indexkeycode];
                ecran.textContent+=touche.innerHTML;

        }
    }
}

/* Le cas ou y'a un erreur de frappe, on affiche un message    */
window.addEventListener('error', (e) =>{
    alert('erreur dans votre calcul :' +e.message);
})