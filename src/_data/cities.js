// Priority cities that get their own landing page (one city per page is best for local SEO).
// To add a city: add an entry here. The page is built from src/city.njk.
//
// localLine: finishes the sentence "we come to you anywhere in [City], ..." with real local spots.
// Only name places you're sure of, and re-check them now and then (malls get renamed, centers close).
// Without a localLine the page uses a neutral version.
//
// guide (optional): a section of text written for that city only (title, paragraphs, areas).
// Each city page should say something the others don't; Google ignores pages that are copies with the name swapped.
// No job counts or customer stories unless they're real.
export default [
  {
    name: "Frisco",
    localLine: "whether you're at home off Legacy, at the office near the Tollway, or stuck in a parking lot",
    guide: {
      title: "Windshield damage in Frisco",
      paragraphs: [
        "Frisco is still building out, and that means a steady stream of gravel and dump trucks on the Dallas North Tollway, SH 121, Preston Road, and US-380. Plenty of windshield chips around Frisco start with a rock kicked up by a construction truck. If you catch a chip early, a quick repair usually saves the glass.",
        "Frisco also has a lot of late-model SUVs and trucks with lane-keeping and automatic braking cameras. If your windshield has to be replaced, that camera needs to be recalibrated, and we do it on site in the same visit.",
      ],
      areas: "We cover all of Frisco, including ZIP codes 75033, 75034, 75035, and 75036.",
    },
  },
  {
    name: "McKinney",
    localLine: "whether you're near the historic downtown square, at work off Highway 121, or stuck in a parking lot along US-75",
    guide: {
      title: "Auto glass for McKinney drivers",
      paragraphs: [
        "McKinney stretches from the historic square out to brand-new neighborhoods on the west side, and a lot of daily driving happens on US-75, SH 121, and US-380. Those corridors carry plenty of construction and gravel trucks, which is where many rock chips come from.",
        "If a chip is smaller than a quarter and not right in front of the driver, it can often be repaired in under an hour in your driveway. If the crack has already spread, we'll replace the windshield and recalibrate the ADAS camera before we leave.",
      ],
      areas: "We cover McKinney ZIP codes 75069, 75070, 75071, and 75072.",
    },
  },
  {
    name: "Denton",
    localLine: "whether you're near the downtown square, on campus at UNT or TWU, or stuck in a parking lot off I-35",
    guide: {
      title: "Windshield damage in Denton",
      paragraphs: [
        "Between I-35E, I-35W, Loop 288, and US-380, Denton drivers spend a lot of time on busy highways with heavy truck traffic, and long-running highway construction adds loose gravel. That's a recipe for rock chips. A chip that's repaired early usually stops there; one that's left through a few hot afternoons and cold mornings often turns into a crack.",
        "We come to you anywhere in Denton, including apartment complexes and workplace parking lots, so you don't need to find a ride to a shop. If your vehicle has a windshield camera, we recalibrate it in the same visit after a replacement.",
      ],
      areas: "We cover all of Denton, including ZIP codes 76201, 76205, 76207, 76208, 76209, and 76210.",
    },
  },
  {
    name: "Plano",
    localLine: "whether you're at home off the Tollway, at the office in Legacy West, or stuck in a parking lot along US-75",
    guide: {
      title: "Mobile auto glass for Plano commuters",
      paragraphs: [
        "Plano drivers spend a lot of time on US-75, the Dallas North Tollway, the George Bush Turnpike, and SH 121, where highway speeds turn a small rock into a real chip. Since we're mobile, we can do the work in your office parking lot while you're at your desk, as long as the property allows it.",
        "Many vehicles in Plano have a camera behind the windshield for lane-keeping and automatic braking. After a replacement we recalibrate it on site, so there's no follow-up trip to a dealership.",
      ],
      areas: "We cover Plano ZIP codes 75023, 75024, 75025, 75074, 75075, 75093, and 75094.",
    },
  },
  {
    name: "The Colony",
    localLine: "whether you're at home near Lewisville Lake, shopping at Grandscape, or stuck in a parking lot off Highway 121",
    guide: {
      title: "Close to home in The Colony",
      paragraphs: [
        "The Colony is right next door to our home base in Little Elm. Whether you're near Lewisville Lake, at Grandscape, or on your way to SH 121, we come to you.",
        "Chips from traffic on SH 121 and the Sam Rayburn Tollway are common. Call when you first see one and a repair usually stops it from spreading. If it's past repair, we'll replace the windshield and handle any camera calibration in the same visit.",
      ],
      areas: "We cover all of The Colony (75056).",
    },
  },
  {
    name: "Lewisville",
    localLine: "whether you're in Old Town, at home near Lewisville Lake, or stuck in a parking lot off I-35E",
    guide: {
      title: "Windshield damage on Lewisville highways",
      paragraphs: [
        "I-35E and SH 121 run right through Lewisville and carry a lot of heavy truck traffic, so rock chips and cracks are an everyday risk. Texas heat and sudden cold fronts make a small chip spread quickly, so it pays to deal with it early.",
        "We come to you anywhere in Lewisville, from Old Town to the neighborhoods near the lake. We handle chip repair, full windshield replacement with in-house ADAS calibration, and door and back glass.",
      ],
      areas: "We cover Lewisville ZIP codes 75057, 75067, and 75077.",
    },
  },
  {
    name: "Prosper",
    localLine: "whether you're at home off Preston Road, shopping at the Gates of Prosper, or stuck in a parking lot along US-380",
    guide: {
      title: "Auto glass in a growing Prosper",
      paragraphs: [
        "Prosper is growing fast, with new neighborhoods, Tollway work heading north, and construction along US-380 and Preston Road. More construction traffic means more gravel on the road and more cracked windshields.",
        "A lot of Prosper families drive newer SUVs and trucks with driver-assist cameras. If your windshield is replaced, the camera has to be recalibrated, and we do that in-house in the same visit.",
      ],
      areas: "We cover all of Prosper (75078).",
    },
  },
  {
    name: "Little Elm",
    isHomeBase: true,
    localLine: "whether you're at home off Eldorado Parkway, down by Little Elm Beach, or stuck in a parking lot along US-380",
    guide: {
      title: "Your local auto glass service in Little Elm",
      paragraphs: [
        "Little Elm is our home base. With all the new construction around US-380, FM 423, and Eldorado Parkway, rock chips from gravel trucks are common. Call when you first notice a chip, and a repair usually keeps it from spreading into a crack.",
        "Whether you need a quick chip repair, a full windshield replacement with in-house ADAS calibration, or a door or back glass replaced after a break-in, we do it in your driveway or parking lot.",
      ],
      areas: "We cover all of Little Elm (75068) and nearby Oak Point, Lakewood Village, and Paloma Creek.",
    },
  },
  {
    name: "Celina",
    localLine: "whether you're near the historic downtown square, at home in Light Farms, or stuck in a parking lot off Preston Road",
    guide: {
      title: "Mobile glass service for Celina",
      paragraphs: [
        "Celina is one of the fastest-growing towns in North Texas, and the building boom along Preston Road, FM 455, and the new Tollway stretch puts a lot of gravel and dirt trucks on the road. It's a common way for a windshield to pick up a chip.",
        "There aren't many auto glass shops nearby, which is where a mobile service helps. We come to your home, a job site, or your work parking lot, so you don't have to drive a cracked windshield across the county.",
      ],
      areas: "We cover all of Celina (75009).",
    },
  },
  {
    name: "Flower Mound",
    localLine: "whether you're at home near Grapevine Lake, out at the River Walk, or stuck in a parking lot off FM 2499",
    guide: {
      title: "Windshield repair and replacement in Flower Mound",
      paragraphs: [
        "Most Flower Mound driving runs along FM 2499, FM 1171, and FM 407, with I-35E and I-35W close by for longer commutes. Highway speeds and truck traffic on those routes are a common source of rock chips.",
        "We'll come to your driveway or workplace anywhere in town. A chip repair usually takes under an hour. A full replacement includes ADAS camera calibration in the same visit when your vehicle needs it.",
      ],
      areas: "We cover Flower Mound ZIP codes 75022 and 75028.",
    },
  },
  {
    name: "Allen",
    localLine: "whether you're at Watters Creek, shopping at Allen Premium Outlets, or stuck in a parking lot along US-75",
    guide: {
      title: "Auto glass for Allen drivers",
      paragraphs: [
        "US-75 and SH 121 carry most of Allen's commuter traffic, and long highway drives are where rock chips usually happen. A chip left alone through a few hot afternoons and cold mornings can easily turn into a crack.",
        "We come to you anywhere in Allen, at home, at work, or near Watters Creek. Get a free quote, and we'll tell you honestly whether a repair will hold or the windshield needs replacing.",
      ],
      areas: "We cover Allen ZIP codes 75002 and 75013.",
    },
  },
];
