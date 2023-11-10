import React from "react";
import "./App.css";
import Gallery from "./components/gallery/Gallery"; // Importez le composant Gallery
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import m1 from "./assets/Images/m1.jpg";
import m2 from "./assets/Images/m2.jpg";
import m3 from "./assets/Images/m3.jpg";
import m5 from "./assets/Images/m5.jpg";
import m4 from "./assets/Images/m4.jpg";

import m7 from "./assets/Images/m7.jpg";
import m8 from "./assets/Images/m8.jpg";
import m9 from "./assets/Images/m9.jpg";
import m10 from "./assets/Images/m10.jpg";
import m11 from "./assets/Images/m11.jpg";
import m12 from "./assets/Images/m12.jpg";
import m14 from "./assets/Images/m14.jpg";
import Footer from "./components/footer/footer";

const images = [
  {
    url: m1,
    alt: "Mylène",
    caption: "Nevermore 2023 un concert mémorable - Juillet 2023",
  },
  {
    url: m2,
    alt: "mylene farmer nevermore",
    caption: "Nevermore 2023 un concert mémorable - Juillet 2023",
  },
  {
    url: m3,
    alt: "mylene farmer nevermore",
    caption: "Nevermore 2023 un concert mémorable - Juillet 2023",
  },
  {
    url: m4,
    alt: "mylene farmer nevermore",
    caption: "Nevermore 2023 un concert mémorable - Juillet 2023",
  },
  {
    url: m5,
    alt: "mylene farmer nevermore",
    caption: "Nevermore 2023 un concert mémorable - Juillet 2023",
  },
  {
    url: m14,
    alt: "mylene farmer nevermore",
    caption: "Nevermore 2023 un concert mémorable - Juillet 2023",
  },
  {
    url: m7,
    alt: "mylene farmer nevermore",
    caption: "Nevermore 2023 un concert mémorable - Juillet 2023",
  },
  {
    url: m8,
    alt: "mylene farmer nevermore",
    caption: "Nevermore 2023 un concert mémorable - Juillet 2023",
  },
  {
    url: m9,
    alt: "mylene farmer nevermore",
    caption: "Nevermore 2023 un concert mémorable - Juillet 2023",
  },
  {
    url: m10,
    alt: "mylene farmer nevermore",
    caption: "Nevermore 2023 un concert mémorable - Juillet 2023",
  },
  {
    url: m11,
    alt: "mylene farmer nevermore",
    caption: "Nevermore 2023 un concert mémorable - Juillet 2023",
  },
  {
    url: m12,
    alt: "mylene farmer nevermore",
    caption: "Nevermore 2023 un concert mémorable - Juillet 2023",
  },
 

  // Ajoutez d'autres objets d'images ici
];

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Gallery images={images} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
