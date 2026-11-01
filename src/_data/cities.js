// Priority cities that get their own landing page (one city per page is best for local SEO).
// To add a city: add an entry here. The page is built from src/city.njk.
//
// localLine: finishes the sentence "we come to you anywhere in [City], ..." with real local spots.
// Only name places you're sure of, and re-check them now and then (malls get renamed, centers close).
// Without a localLine the page uses a neutral version.
export default [
  {
    name: "Frisco",
    localLine: "whether you're at home off Legacy, at the office near the Tollway, or stuck in a parking lot",
  },
  {
    name: "McKinney",
    localLine: "whether you're near the historic downtown square, at work off Highway 121, or stuck in a parking lot along US-75",
  },
  {
    name: "Denton",
    localLine: "whether you're near the downtown square, on campus at UNT or TWU, or stuck in a parking lot off I-35",
  },
  {
    name: "Plano",
    localLine: "whether you're at home off the Tollway, at the office in Legacy West, or stuck in a parking lot along US-75",
  },
  {
    name: "The Colony",
    localLine: "whether you're at home near Lewisville Lake, shopping at Grandscape, or stuck in a parking lot off Highway 121",
  },
  {
    name: "Lewisville",
    localLine: "whether you're in Old Town, at home near Lewisville Lake, or stuck in a parking lot off I-35E",
  },
  {
    name: "Prosper",
    localLine: "whether you're at home off Preston Road, shopping at the Gates of Prosper, or stuck in a parking lot along US-380",
  },
  {
    name: "Little Elm",
    isHomeBase: true,
    localLine: "whether you're at home off Eldorado Parkway, down by Little Elm Beach, or stuck in a parking lot along US-380",
  },
  {
    name: "Celina",
    localLine: "whether you're near the historic downtown square, at home in Light Farms, or stuck in a parking lot off Preston Road",
  },
  {
    name: "Flower Mound",
    localLine: "whether you're at home near Grapevine Lake, out at the River Walk, or stuck in a parking lot off FM 2499",
  },
  {
    name: "Allen",
    localLine: "whether you're at Watters Creek, shopping at Allen Premium Outlets, or stuck in a parking lot along US-75",
  },
];
