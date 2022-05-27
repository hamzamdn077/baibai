"use strict";
const article = document.querySelectorAll(".article");
const btnOpen = document.querySelectorAll(".open");
const btnNav = document.querySelectorAll(".navigateur");
const header = document.querySelector(".section--1");
const allVoitures = document.querySelector(".voitures");
const headerBar = document.querySelector("header");
const btnDiscover = document.querySelector(".discover");
const marqueVoiture = document.querySelector(".marque");
const prixMin = document.querySelector(".min");
const prixMax = document.querySelector(".max");
const btnChercher = document.querySelector(".search");
const voitures = document.querySelectorAll(".article");
const details = document.querySelectorAll(".open");
const detailSection = document.querySelector(".checkProduct");
const btnExit = document.querySelector(".exit");
const body = document.querySelector("body");
const name = document.querySelector(".inscName");
const newUser = document.querySelector(".inscUser");
const password = document.querySelector(".inscPassword");
const btnCnx = document.querySelector(".btnCnx");
const btnInscription = document.querySelector(".btnInscription");
const user = document.querySelector(".user");
const toInscription = document.querySelector(".toinscription");
const cnxSection = document.querySelector(".cnx");
const inscSection = document.querySelector(".insc");
const btnConnexion = document.querySelector(".connexion");
const btnDeconnexion = document.querySelector(".deconnexion");
const account = {
  prenom: [],
  email: [],
  motDePasse: [],
};

const informations = [
  "Quarante ans après le lancement de la première Honda Civic, la nouvelle génération établit de nouveaux standards en matière de design et de performances dans la catégorie des compactes. Ses passagers seront comblés, eux aussi, par son habitacle spacieux offrant équipements de pointe et confort irréprochable. La Civic Berline – totalement inédite et tout simplement éblouissante.",
  "Le Mitsubishi Outlander est un SUV produit par le constructeur automobile japonais Mitsubishi Motors depuis 2003. Il s'agissait au départ d'une appellation donnée à l'Airtrek depuis sa vente en Amérique. Ensuite, après son renouvellement en 2005 au Japon, la seconde génération a été européanisée depuis 2007.  ",
  "La Fabia est un modèle de citadine polyvalente conçu et fabriqué par le constructeur automobile tchèque Škoda Auto, dont la première génération débute en 1999 pour s'achever courant 2007. Elle est alors remplacée par une deuxième génération, elle-même remplacée par une troisième génération en 2014 puis une quatrième génération en 2021.",
  "La Peugeot 301 est une automobile de type berline tricorps conçue par le constructeur Peugeot, sœur jumelle de la Citroën C-Élysée.  ",
  "Les véhicules Citroën C-Elysée sont déclinés en 49 modèles et 6 versions depuis 2016. La C-Elysée est disponible en 1 carrosseries : Berline. Utilisez le formulaire ci-contre et accédez aux fiches techniques de votre version de C-Elysée .",
  "Les véhicules Volkswagen Amarok sont déclinés en 9 modèles et 18 versions depuis 2013. La Amarok est disponible en 1 carrosseries : Pick-up utilitaire. Utilisez le formulaire ci-contre et accédez aux fiches techniques de votre version de Amarok.",
  "Elle est d'abord produite en Roumanie, où elle est vendue sous la marque Dacia dès l'automne 2004. La Logan est le résultat du projet X90, annoncé par Renault en 1998 et qui a pu être mis en place après le rachat de Dacia en 1999 sous la direction de Louis Schweitzer.  ",
  "Décliné en essence et en diesel (dont le V6 TDI), le Q5 Sportback sera à terme proposé en hybride rechargeable comme c'est le cas pour le Q5. Si le carnet de commandes devrait être ouvert en novembre 2020, les premières livraisons, depuis le Mexique où il sera fabriqué",
  "Le Jeep Wrangler 4xe profite d'une configuration 4 roues motrices avec un moteur thermique à l'avant et un moteur électrique à l'arrière. Le moteur thermique est un moteur essence turbocompressé de 2.0 L développant 272 chevaux et le moteur électrique développe 145 chevaux.  ",
  "Avec le nouveau Crossover Mahindra KUV 100, essence ou diesel, aventurez-vous hors des sentiers battus et dépassez vos limites !  ",
  "La Série 7 est un modèle de berline haut de gamme du constructeur automobile allemand BMW. Sept générations se succèdent, la première nommée E23 est sortie en 1977, puis la E32 sortie en 1986, la E38 en 1994, la E65 en 2001, la F01 en 2008, la G11 en 2015 et la dernière en 2022.  ",
  "Lexus est un constructeur automobile de luxe, créé en 1989 par le groupe japonais Toyota.",
  "Pas moins de 5,15 m de long, 2 m de large et 1,80 m de haut. Poids à vide : 2,5 tonnes. Le X7 est ce que l'on peut appeler un mastodonte. Son style massif vient renforcer cette prestance avec des lignes statutaires, un capot horizontal, des ailes marquées et de nombreuses touches de chromes.  ",
  "Dès 2018 la gamme DS s'est agrémentée d'un petit SUV urbain. Le DS3 Crossback cumule un style atypique, couplé à une allure premium, et sur une motorisation électrique, très en vogue.",
];

article.forEach((art) =>
  art.addEventListener("mouseover", function (e) {
    art.classList.add("hover");
    art.querySelector(".open").style.display = "block";
  })
);
article.forEach((art) =>
  art.addEventListener("mouseout", function (e) {
    art.classList.remove("hover");
    art.querySelector(".open").style.display = "none";
  })
);
btnNav.forEach((nav) => {
  nav.addEventListener("click", function (e) {
    e.preventDefault();
    if (!e.target.classList.contains("nav")) return;
    const section = document.querySelector(
      `.section--${Number(e.target.dataset.section)}`
    );
    section?.scrollIntoView({ behavior: "smooth" });
  });
});

const fixedHeader = new IntersectionObserver(
  function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      headerBar.classList.add("fixed");
    } else {
      headerBar.classList.remove("fixed");
    }
  },
  {
    root: null,
    threshold: 0.4,
  }
);
const section = document.querySelector(".section--3");
fixedHeader.observe(header);
btnDiscover.addEventListener("click", function (e) {
  e.preventDefault();
  section.scrollIntoView({ behavior: "smooth" });
});
btnChercher.addEventListener("click", function (e) {
  e.preventDefault();
  if (!(marqueVoiture?.value && prixMax?.value && prixMin?.value))
    alert("rempli tous les champs");
  else {
    voitures.forEach((voiture) => {
      const nom = voiture.querySelector(".nom");
      const prix = Number.parseInt(voiture.querySelector(".prix").textContent);
      console.log(nom.textContent);

      if (
        prix < Math.trunc(prixMin.value / 1000) ||
        prix > Math.trunc(prixMax.value / 1000) ||
        !nom.textContent.startsWith(marqueVoiture.value)
      )
        voiture.classList.add("hidden");
      console.log(prix);
    });
    prixMin.value = "";
    prixMax.value = "";
    marqueVoiture.value = "";
  }
});

article.forEach((article, i) => article.classList.add(`article--${i}`));
details.forEach((detail) => {
  detail.addEventListener("click", function (e) {
    const article = e.target.parentElement;
    const img = article.querySelector("img").src;
    const nom = article.querySelector(".nom").textContent;
    const prix = article.querySelector(".prix").textContent;
    const spec = Number(article.dataset.number);
    detailSection.classList.remove("hidden");
    detailSection.querySelector(".voiture").src = img;
    detailSection.querySelector(".voitureName").textContent = nom;
    detailSection.querySelector(".voiturePrix").textContent = prix;
    detailSection.querySelector(
      ".voitureSpec"
    ).textContent = `${informations[spec]}`;
    detailSection.scrollIntoView({ behavior: "smooth" });
    body.style.overflowY = "hidden";
  });
});
btnExit.addEventListener("click", function () {
  detailSection.classList.add("hidden");
  section.scrollIntoView({ behavior: "smooth" });
  body.style.overflowY = "auto";
});
btnInscription.addEventListener("click", function (e) {
  e.preventDefault();
  if (!(name.value && newUser.value && password.value)) return;
  if (newUser.value.length < 8 || password.value.length < 8) {
    alert(
      "le nom d'utilisateur et le mot de passe doivent comporter plus de 8 caractères"
    );
  } else {
    account.prenom.push(name.value);
    account.email.push(newUser.value);
    account.motDePasse.push(password.value);
    inscSection.classList.add("hidden");
    cnxSection.classList.remove("hidden");
  }
});
btnCnx.addEventListener("click", function (e) {
  e.preventDefault();

  let exists = false;
  const enteredUser = document.querySelector(".enteredUser");
  const enteredPassword = document.querySelector(".enteredPassword");
  let nameAcc;
  account.prenom.forEach((prenom, index) => {
    if (
      account.email[index] === enteredUser.value &&
      account.motDePasse[index] === enteredPassword.value
    ) {
      exists = true;
      nameAcc = account.prenom[index];
      cnxSection.classList.add("hidden");
      btnConnexion.classList.add("hidden");
      btnDeconnexion.classList.remove("hidden");
    } else {
      alert("les informations que vous avez saisies sont incorrectes!");
    }
  });

  if (exists) {
    user.textContent = `👤${nameAcc}`;
    user.classList.remove("hidden");
  }
});
toInscription.addEventListener("click", function (e) {
  e.preventDefault();
  cnxSection.classList.add("hidden");
  inscSection.classList.remove("hidden");
  inscSection.scrollIntoView({ behavior: "smooth" });
});
btnConnexion.addEventListener("click", function (e) {
  e.preventDefault();
  cnxSection.classList.remove("hidden");
  cnxSection.scrollIntoView({ behavior: "smooth" });
});

btnDeconnexion.addEventListener("click", function () {
  btnConnexion.classList.remove("hidden");
  user.classList.add("hidden");
  btnDeconnexion.classList.add("hidden");
});
