const members = {
  "matej-vais": {
    "slug": "matej-vais",
    "image": "/assets/imgs/team/matej-vais.jpg",
    "instagram": "https://www.instagram.com/bigdogvais",
    "facebook": "https://www.facebook.com/bigdogvais",
    "email": "vais@tdprod.cz",
    "phone": "+420 737 065 717",
    "name": "Matěj Vais",
    "role": "Operace",
    "about": "Jsem zakladatelem společnosti Top Dog Enterprises. Máte v hlavě nápad na „neuskutečnitelný“ projekt? Ozvěte se mi a přesvědčím vás, že žádný takový neexistuje.",
    "skills": [
      { "name": "Vizionář", "value": "100%" },
      { "name": "Hráč", "value": "100%" },
    ]
  },
  "martin-studnicky": {
    "slug": "martin-studnicky",
    "image": "/assets/imgs/team/martin-studnicky.jpg",
    "instagram": "https://www.instagram.com/_martinstudnicky_/",
    "facebook": "https://www.facebook.com/martin.studnicky.7",
    "email": "studnicky@tdprod.cz",
    "phone": "+420 722 575 804",
    "name": "Martin Studnický",
    "role": "Produkce",
    "about": "Jmenuji se Martin Studnický. Profesionálně se věnuji natáčení a střihu videí. Vytvářím dokumentární filmy, videa ze společenských akcí, hudební klipy a reklamy. Do každého projektu se snažím dát vždy maximum a najít v něm příběh a emoce.",
    "skills": [
      { "name": "Režisér", "value": "100%" },
      { "name": "Umělec", "value": "100%" }
    ]
  },
  "matyas-vanek": {
    "slug": "matyas-vanek",
    "image": "/assets/imgs/team/matyas-vanek.jpg",
    "instagram": "https://www.instagram.com/_v.matyas_/",
    "facebook": "https://www.facebook.com/maty.vanek.7524",
    "email": "vanek@tdprod.cz",
    "phone": "+420 792 770 711",
    "name": "Matyáš Vaněk",
    "role": "Management",
    "about": "Mám na starost klíčové projekty a budování dlouhodobých vztahů s našimi zákazníky. Vím, že klíč k úspěchu je v detailech a lidskost je pro mě vždy na prvním místě.",
    "skills": [
      { "name": "Diplomat", "value": "100%" },
      { "name": "Bojovník", "value": "100%" }
    ]
  },
  "sebastian-vanek": {
    "slug": "sebastian-vanek",
    "image": "/assets/imgs/team/sebastian-vanek.jpg",
    "instagram": "https://www.instagram.com/sebe.jumps/",
    "facebook": "https://www.facebook.com/profile.php?id=100016867357107",
    "email": "s.vanek@tdprod.cz",
    "phone": "+420 792 755 878",
    "name": "Sebastian Vaněk",
    "role": "Marketing",
    "about": "V TD Productions se zaměřuji na růst a viditelnost značek na sociálních sítích. Díky zkušenostem z projektů jako Švihej a vášní pro seberozvoj vím, jak vytvořit komunikaci, která zaujme a přinese výsledky.",
    "skills": [
      { "name": "Promotér", "value": "100%" },
      { "name": "Instagramový mogul", "value": "100%" }
    ]
  },
  "matej-turek": {
    "slug": "matej-turek",
    "image": "/assets/imgs/team/matej-turek.jpg",
    "instagram": "https://www.instagram.com/matey_shoolin/",
    "facebook": "https://www.facebook.com/matej.turek.7",
    "email": "turek@tdprod.cz",
    "phone": "+420 732 735 908",
    "name": "Matěj Turek",
    "role": "Obchod",
    "about": "Modlím se jako by vše záleželo na Bohu, ale pracuji jako by vše záleželo na mně. Jinými slovy, „srdce jako kníže Rohan musíš mít.“",
    "skills": [
      { "name": "Přístup", "value": "100%" },
      { "name": "Úspěšnost v páce", "value": "100%" }
    ]
  }
};

export function getMemberList() {
  return Object.values(members).map(({ slug, name, image, role, instagram, phone, email }) => ({ slug, name, image, role, instagram, phone, email }));
}

export function getMemberBySlug(slug) {
  return members[slug] || null;
}

export function getAllSlugs() {
  return Object.keys(members);
}

export default members;  