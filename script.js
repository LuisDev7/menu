document.addEventListener("DOMContentLoaded", () => {
  const menu = {
    entradas: [
      {
        title: "Bruschetta",
        desc: "Pan tostado con tomate y albahaca.",
        img: "img/Bruschetta.jpg",
        price: "$5.00"
      },
      {
        title: "Sopa de Tomate",
        desc: "Sopa casera de tomate con croutones.",
        img: "img/Sopa de Tomate.jpg",
        price: "$4.50"
      },
      {
        title: "Rollitos Primavera",
        desc: "Crujientes y llenos de vegetales.",
        img: "img/Rollitos Primavera.jpg",
        price: "$6.00"
      },
      {
        title: "Ceviche de Camarón",
        desc: "Fresco y marinado en cítricos.",
        img: "img/Ceviche.jpg",
        price: "$7.00"
      },
      {
        title: "",
        desc: "Aguacate Tostadas de Aguacatesobre pan rústico.",
        img: "img/Tostadas de Aguacate.jpg",
        price: "$5.50"
      }
    ],
    principales: [
      {
        title: "Filete a la Parrilla",
        desc: "Servido con papas rústicas.",
        img: "img/Filete Parrilla.jpg",
        price: "$14.00"
      },
      {
        title: "Pollo al Curry",
        desc: "Acompañado de arroz jazmín.",
        img: "img/Pollo Curry.jpg",
        price: "$13.50"
      },
      {
        title: "Pasta Carbonara",
        desc: "Receta tradicional italiana.",
        img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=800&q=60",
        price: "$12.00"
      },
      {
        title: "Salmón a la Miel",
        desc: "Con vegetales salteados.",
        img: "img/Salmon.jpg",
        price: "$15.00"
      },
      {
        title: "Tacos de Carne Asada",
        desc: "Con guacamole y pico de gallo.",
        img: "img/Tacos.jpg",
        price: "$10.00"
      }
    ],
    postres: [
      {
        title: "Cheesecake",
        desc: "Clásico con salsa de frambuesa.",
        img: "img/Cheesecake.jpg",
        price: "$6.00"
      },
      {
        title: "Helado Artesanal",
        desc: "Tres sabores a elección.",
        img: "img/Helado Artesanal.jpg",
        price: "$4.50"
      },
      {
        title: "Brownie con Helado",
        desc: "Tibio con vainilla.",
        img: "img/Brownie con Helado.jpg",
        price: "$5.00"
      },
      {
        title: "Tiramisú",
        desc: "Bizcocho con café y mascarpone.",
        img: "img/Tiramisú.jpg",
        price: "$5.50"
      },
      {
        title: "Fruta Fresca",
        desc: "Selección de temporada.",
        img: "img/Fruta Fresca.jpg",
        price: "$3.50"
      }
    ]
  };

  for (const categoria in menu) {
    const contenedor = document.getElementById(`${categoria}-container`);
    menu[categoria].forEach(plato => {
      contenedor.innerHTML += `
        <div class="menu-item">
          <img src="${plato.img}" alt="${plato.title}">
          <div class="menu-info">
            <h3>${plato.title} <span class="price">${plato.price}</span></h3>
            <p>${plato.desc}</p>
          </div>
        </div>
      `;
    });
  }
});
