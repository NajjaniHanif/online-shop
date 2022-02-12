var produk = {
  "Top-Shoes" : [{
      "nama": "BATIK MOTIF DAUN JATI",
      "image": "BATIK.jpg",
      "desc": "Murah Berkualitas Tahan Lama",
      "harga": "200K"
      },
      {
      "nama": "Vans",
      "image": "img/2.jpg",
      "desc": "Murah Berkualitas Tahan Lama",
      "harga": "200k"
      },
      {
      "nama": "Piero",
      "image": "img/3.jpg",
      "desc": "Murah Berkualitas Tahan Lama",
      "harga": "200k"
      },
      {
      "nama": "Puma",
      "image": "img/4.jpg",
      "desc": "Murah Berkualitas Tahan Lama",
      "harga": "200k"
      }
  ],
  "Medium-Shoes" : [{
      "nama": "Oxford",
      "image": "img/5.jpg",
      "desc": "Murah Berkualitas Tahan Lama",
      "harga": "200K"
      },

      {
      "nama": "Derby",
      "image": "img/6.jpg",
      "desc": "Murah Berkualitas Tahan Lama",
      "harga": "200K"
      },
  
      {
      "nama": "Brogue",
      "image": "img/7.jpg",
      "desc": "Murah Berkualitas Tahan Lama",
      "harga": "200K"
      },

      {
      "nama": "Nike",
      "image": "img/8.jpg",
      "desc": "Murah Berkualitas Tahan Lama",
      "harga": "200K"
      }
  ]

};

for (var key in produk ){
  var elementJudul = document.createElement('h2');
  elementJudul.className = 'text-light text-center fw-bold';
  elementJudul.innerHTML = key;
  document.getElementById(key).appendChild(elementJudul);

  var cardGroup = document.createElement('div');
  cardGroup.className = 'card-group p-2';
  cardGroup.id = `${key}-produk`;
  document.getElementById(key).appendChild(cardGroup);
  

  for(var i = 0; i < produk[key].length; i++) {
      var namaProduk = produk[key][i].nama;
      var imageProduk = produk[key][i].image;
      var descProduk = produk[key][i].desc;
      var hargaProduk = produk[key][i].harga;

      var card = document.createElement('div');
      card.className = 'card m-2 p-2';
      card.innerHTML = `
          <img src=${imageProduk} class="card-img-top" width="100%" height="100%">
          <div class="card-body">
              <h5 class="card-title text-center">${namaProduk}</h5>
              <p class="card-text">${descProduk}</p>
              <p class="card-text harga">Harga : ${hargaProduk}</p>
              <a onclick="chatToAdmin('${namaProduk}','${descProduk}','${hargaProduk}')" href="#" class="btn btn-primary d-block">Beli Produk</a>
          </div>`
      document.getElementById(`${key}-produk`).appendChild(card);
  }
}

function chatToAdmin(nama,desc,harga) {
  var noHp = "+6285821791552";
  window.open(`https://api.whatsapp.com/send?phone=${noHp}?&text=Nama-Produk:%20${nama}%0Aharga:%20${harga}%0A%0ASaya%20Mau%20Beli%20Kak!`);
}
