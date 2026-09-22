/* ------------------------------------------------------------------
   ZILBER PROD — site content.  Edit this file; no need to touch the HTML.
   ------------------------------------------------------------------ */

// Your Samply portfolio link, reused below for every track that doesn't have its own link.
const samplyLink = "https://samply.app/p/Glq9ohy7qOB84VKtRD0G?token=21ffd6bf-007d-4bbc-9d20-f0c331dc17be&si=Cz8MDfQnCJbjkkBBUok4kr0NbhA3";

window.SITE = {
  // Contact — replace the placeholders. Leave a link as "" to hide it.
  contact: {
    phoneDisplay: "054-395-6998",
    phoneLink: "tel:+972543956998",
    whatsapp: "https://wa.me/972543956998",
    instagram: "https://www.instagram.com/yuval_zilbershtein/",
    spotify: "",
    youtube: "",
    email: ""
  },

  // Portfolio. Add / remove / reorder freely — the grid rebuilds itself.
  //   cover: path to an image, e.g. "assets/covers/c01-cows.jpg" ("" = dark placeholder)
  //   link : Samply / Spotify / YouTube link ("" = no listen button)
  //   role : what you did on it
  // NOTE: same Samply link used for every "link" below — swap in per-track links if you have them.
  projects: [
    { title: "שם הפרויקט", artist: "שגיא שי", role: "הפקה ומיקס", year: "", cover: "assets/covers/c01-cows.jpg", link: samplyLink },
    { title: "שם הפרויקט", artist: "", role: "מיקס ומאסטרינג", year: "", cover: "assets/covers/c02-contact-sheet.jpg", link: samplyLink },
    { title: "לחזור כבר הביתה", artist: "אפרת גוש", role: "מיקס ומאסטרינג", year: "", cover: "assets/covers/c03-lachzor-kvar-habaita.jpg", link: samplyLink },
    { title: "מחפש אהבה", artist: "גוזי", role: "מיקס ומאסטרינג", year: "", cover: "assets/covers/c04-mechapes-ahava.jpg", link: samplyLink },
    { title: "המילים שלי אוצר", artist: "גוזי", role: "מיקס ומאסטרינג", year: "", cover: "assets/covers/c05-hamilim-sheli-otzar.jpg", link: samplyLink },
    { title: "בגללך", artist: "גוזי", role: "מיקס ומאסטרינג", year: "", cover: "assets/covers/c06-biglalcha.jpg", link: samplyLink },
    { title: "לא יציבה נפשית", artist: "גוזי", role: "מיקס ומאסטרינג", year: "", cover: "assets/covers/c07-lo-yatziva-nafshit.jpg", link: samplyLink },
    { title: "כל הדרכים מובילות לצפון", artist: "זילבר", role: "הפקה, מיקס ומאסטרינג", year: "", cover: "assets/covers/c08-kol-hadrachim.jpg", link: samplyLink },
    { title: "Geo", artist: "", role: "מיקס ומאסטרינג", year: "בקרוב", cover: "assets/covers/c09-geo.jpg", link: "" },
    { title: "איתה", artist: "יאיר קליין", role: "מיקס ומאסטרינג", year: "", cover: "assets/covers/c10-eyta.jpg", link: samplyLink },
    { title: "מגדלור", artist: "מור רום", role: "הפקה, מיקס ומאסטרינג", year: "", cover: "assets/covers/c11-migdalor.jpg", link: samplyLink },
    { title: "מצלמות", artist: "איתי עברון", role: "מיקס ומאסטרינג", year: "", cover: "assets/covers/c12-matzlemot.jpg", link: samplyLink },
    { title: "שם הפרויקט", artist: "", role: "מיקס ומאסטרינג", year: "", cover: "assets/covers/c13-beach-glow.jpg", link: samplyLink },
    { title: "הסוס הלבן", artist: "", role: "מיקס ומאסטרינג", year: "בקרוב", cover: "assets/covers/c14-hasus-halavan.jpg", link: "" },
    { title: "שם הפרויקט", artist: "", role: "מיקס ומאסטרינג", year: "", cover: "assets/covers/c15-car-window.jpg", link: samplyLink }
  ],

  // Full-bleed studio images (leave "" for the dark placeholder)
  images: {
    hero: "assets/hero.jpg",
    band: "assets/band.jpg",
    portrait: "assets/portrait.jpg",
    lessons: "assets/lessons.jpg"
  }
};
