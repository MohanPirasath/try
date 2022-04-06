var tem = fetch("https://restcountries.com/v3.1/all");
tem
  .then((data) => data.json())
  .then((data1) => {
    for (var i = 0; i < data1.length; i++) {
      row.append(
        it(
          data1[i].name.common,
          data1[i].flags.png,
          data1[i].capital,
          data1[i].region,
          data1[i].fifa
        )
      );
      //  cardbody.append(cb(data1[i].capital,data1[i].region,data1[i].code))
    }
  })
  .catch((error) => console.log(error));

var box = create("div", "box");
var container = create("div", "container");
var row = create("div", "row");

container.append(row);
box.append(container);
document.body.append(box);

function it(coname, imglink, h5con, paracon, h51con) {
  var col = create("div", "col-lg-4  col-sm-12");
  var card = create("div", "card");
  var cardhead = create("div", "card-header");
  var cardbody = create("div", "card-body");

  var mm = document.createElement("div");
  mm.className = "temp7";

  var namediv = create("div", "namdiv");

  var nameh5 = create("h5", "card-title");
  nameh5.innerHTML = coname;

  var temp = document.createElement("img");
  temp.setAttribute("src", imglink);
  temp.className = "card-img-top";
  var h5 = create("h5", "card-title");
  h5.innerHTML = "capital :" + h5con;
  var para = create("h5", "card-title");
  para.innerHTML = " region : " + paracon;
  var h51 = create("h5", "card-title");
  h51.innerHTML = "country code : " + h51con;
  var an = create("a", "btn btn-primary");
  an.innerHTML = "click to weather";
  mm.append(namediv, temp, h5, para, h51, an);
  cardhead.append(cardbody);
  card.append(cardhead);
  cardbody.append(mm);
  col.append(card);
  namediv.append(nameh5);

  return col;
}

function create(tag, classname) {
  var res = document.createElement(tag);
  res.className = classname;
  return res;
}
