fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(json => {
    for (let i = 0; i < json.length; i++) {
      console.log(json[i])
      // var y = document.createElement("li")
      var y = document.createElement("div")
      var content = `<div class="card"">
          <img class="card-img-top" src="xxx" alt="Card image">
          <div class="card-body">
          <h4 class="card-title">yyy</h4>
          <p class="card-text">zzz</p>
          <a href="#" class="btn btn-primary">See Map</a>
         </div>
      </div>`;
      var test = content.replace("xxx",json[i].flags.png)
      test = test.replace("yyy",json[i].name.official)
      test = test.replace("#",json[i].maps.googleMaps)
      test = test.replace("zzz",json[i].capital +   '   '+ json[i].population  + ' / ' + json[i].area + ' / ' +json[i].region)
      y.innerHTML = test;
      // y.className = "list-group-item col-lg-3 col-md-4 col-sm-6 col-12"
      y.className = "col-lg-3 col-md-4 col-sm-6 col-12"
      document.getElementById('myul').appendChild(y);

      // var x = document.createElement('img')
      // x.src = json[i].flags.png;
      // document.getElementById('myul').appendChild(x);
    }

  });