"use strict";

/***********************
 * XHR
 **********************/

/*
* PERSON 4
*/

const initPerson4Request = () => {
  const person4Req = new XMLHttpRequest();

  const person4ReqListener = () => {
    const person = JSON.parse(person4Req.responseText);
    const person4Name = document.querySelector('#person4Name');
    person4Name.innerHTML = person.name;

    const homeReqqer = new XMLHttpRequest();

    const homeReqListener = () => {
      const home = JSON.parse(homeReqqer.responseText);
      const person4Homeworld = document.querySelector('#person4HomeWorld');
      person4Homeworld.innerHTML = home.name;
    };

    homeReqqer.addEventListener('load', homeReqListener);
    homeReqqer.open('GET', person.homeworld);
    homeReqqer.send();
  };

  person4Req.addEventListener('load', person4ReqListener);
  person4Req.open('GET', 'https://swapi.co/api/people/4/');
  person4Req.send();
};

/*
* PERSON 14
*/

const initPerson14Request = () => {
  const person14Req = new XMLHttpRequest();

  const person14ReqListener = () => {
    const person = JSON.parse(person14Req.responseText);
    const person14Name = document.querySelector('#person14Name');
    person14Name.innerHTML = person.name;

    const speciesReqqer = new XMLHttpRequest();

    const speciesReqListener = () => {
      const species = JSON.parse(speciesReqqer.responseText);
      const person14Species = document.querySelector('#person14Species');
      person14Species.innerHTML = species.name;
    };

    speciesReqqer.addEventListener('load', speciesReqListener);
    speciesReqqer.open('GET', person.species);
    speciesReqqer.send();
  };

  person14Req.addEventListener('load', person14ReqListener);
  person14Req.open('GET', 'https://swapi.co/api/people/14/');
  person14Req.send();
};

/*
* Film Planets
*/

const initFilmsRequest = () => {
  const filmReq = new XMLHttpRequest();

  const filmReqListener = () => {
    const response = JSON.parse(filmReq.responseText);
    const filmList = document.querySelector('#filmList');
    const films = response.results;

    films.forEach(film => {
      let filmItem = document.createElement('li');
      filmItem.className = "film";
      filmList.appendChild(filmItem);
      let filmTitle = document.createElement('h2');
      filmTitle.className = "filmTitle";
      filmTitle.innerHTML = film.title;
      filmItem.appendChild(filmTitle);
      let planetHeader = document.createElement('h3');
      planetHeader.innerHTML = "Planets";
      filmItem.appendChild(planetHeader);
      let filmPlanets = document.createElement('ul');
      filmPlanets.className = "filmPlanets";
      filmItem.appendChild(filmPlanets);
      let planetsList = film.planets;

      planetsList.forEach(planet => {
        let planetReq = new XMLHttpRequest();

        const planetReqListener = () => {
          const planetData = JSON.parse(planetReq.responseText);
          let planetItem = document.createElement('li');
          planetItem.className = "planet";
          filmPlanets.appendChild(planetItem);
          let planetName = document.createElement('h4');
          planetName.className = "planetName";
          planetName.innerHTML = planetData.name;
          planetItem.appendChild(planetName);
        };

        planetReq.addEventListener('load', planetReqListener);
        planetReq.open('GET', planet);
        planetReq.send();
      });
    });
  };

  filmReq.addEventListener('load', filmReqListener);
  filmReq.open('GET', 'https://swapi.co/api/films/');
  filmReq.send();
};

window.onload = () => {
  initPerson4Request();
  initPerson14Request();
  initFilmsRequest();
};