// Priority cities that get their own landing page (one city per page is best for local SEO).
// To add a city: add an entry here. The page is built from src/city.njk.
//
// localLine: finishes the sentence "we come to you anywhere in [City], ..." with real local spots.
// Only name places you're sure of, and re-check them now and then (malls get renamed, centers close).
// Without a localLine the page uses a neutral version.
//
// guide (optional): a section of text written for that city only (title, paragraphs, areas, faqs).
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
      areas: "We cover all of Frisco, including ZIP codes 75033, 75034, 75035, and 75036, and we're about 15 minutes away in Little Elm.",
      faqs: [
        { q: "Can you replace my windshield at my office in Frisco?", a: "Yes, as long as the property allows it and there's room to open the doors. Most people would rather have us come to the office along the Tollway or SH 121 than lose part of a day at a shop. If your vehicle needs a calibration test drive, we'll let you know ahead of time." },
        { q: "Do you cover the newer neighborhoods in north Frisco?", a: "Yes. We cover all of Frisco, from the neighborhoods off Preston Road and FM 423 up to US-380." },
      ],
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
      areas: "We cover McKinney ZIP codes 75069, 75070, 75071, and 75072. From Little Elm we're usually 25 to 30 minutes away.",
      faqs: [
        { q: "Do you also cover the towns north of McKinney?", a: "Yes. Along with all of McKinney, we serve Melissa and Anna in our regular service area." },
        { q: "Can you work at a home with only street parking?", a: "Usually, yes. We need a safe, legal spot with room to open the doors. If the street is too busy, we'll suggest another nearby spot when you book." },
      ],
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
      areas: "We cover all of Denton, including ZIP codes 76201, 76205, 76207, 76208, 76209, and 76210, and we're about 20 to 25 minutes away in Little Elm.",
      faqs: [
        { q: "Can you come to my apartment complex in Denton?", a: "Yes, as long as the property allows it and we can park with room to open the doors. Let us know your building or lot when you book so we can find you quickly." },
        { q: "Do you cover the towns around Denton?", a: "Yes. Corinth, Argyle, Lake Dallas, Sanger, Aubrey, and Providence Village are all in our regular service area." },
      ],
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
      areas: "We cover Plano ZIP codes 75023, 75024, 75025, 75074, 75075, 75093, and 75094. From Little Elm we're usually about 25 minutes away.",
      faqs: [
        { q: "Can you work in an office parking garage in Plano?", a: "Often, yes, if the property allows it and there's room to open the doors. Some calibrations need a level spot or a test drive, so tell us about the garage when you book and we'll plan for it." },
        { q: "Do you also serve Carrollton and Addison?", a: "Yes. Both are in our regular service area, along with all of Plano." },
      ],
    },
  },
  {
    name: "The Colony",
    localLine: "whether you're at home near Lewisville Lake, shopping at Grandscape, or stuck in a parking lot off Highway 121",
    guide: {
      title: "Close to home in The Colony",
      paragraphs: [
        "The Colony is right next door to our home base in Little Elm, so it's one of the quickest places for us to reach. Whether you're near Lewisville Lake, at Grandscape, or on your way to SH 121, we come to you.",
        "Chips from traffic on SH 121 and the Sam Rayburn Tollway are common. Call when you first see one and a repair usually stops it from spreading. If it's past repair, we'll replace the windshield and handle any camera calibration in the same visit.",
      ],
      areas: "We cover all of The Colony (75056). From Little Elm we're usually 10 to 15 minutes away.",
      faqs: [
        { q: "How fast can you get to The Colony?", a: "Because we're right next door, we can often be out the same day or the next day. Call in the morning for the best chance at a same-day visit." },
        { q: "Can you meet me at work instead of at home?", a: "Yes. We'll come to your workplace anywhere in The Colony, as long as the property allows it and there's room to open the doors." },
      ],
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
      areas: "We cover Lewisville ZIP codes 75057, 75067, and 75077. From Little Elm we're usually about 20 minutes away.",
      faqs: [
        { q: "Is a cracked windshield safe to drive on I-35E?", a: "A small chip outside your line of sight is usually fine for a short time, but have it repaired soon because highway vibration and temperature swings make it spread. A long crack, a crack in front of the driver, or damage at the edge of the glass should be replaced as soon as possible." },
        { q: "Do you cover Highland Village and Lake Dallas too?", a: "Yes. Highland Village, Lake Dallas, Coppell, and Carrollton are all in our regular service area." },
      ],
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
      areas: "We cover all of Prosper (75078). From Little Elm we're usually about 15 minutes away.",
      faqs: [
        { q: "My vehicle is brand new. Does it still need calibration after a windshield replacement?", a: "Almost always, yes. Newer vehicles are the most likely to have a windshield camera for lane-keeping and emergency braking. We'll check your VIN up front and calibrate the camera in the same visit." },
        { q: "Do you come to new-build neighborhoods in Prosper?", a: "Yes. If your street is still under construction, just give us the best place to park when you book." },
      ],
    },
  },
  {
    name: "Little Elm",
    isHomeBase: true,
    localLine: "whether you're at home off Eldorado Parkway, down by Little Elm Beach, or stuck in a parking lot along US-380",
    guide: {
      title: "Your local auto glass service in Little Elm",
      paragraphs: [
        "Little Elm is home for us, so it's where we can usually get to you fastest. With all the new construction around US-380, FM 423, and Eldorado Parkway, rock chips from gravel trucks are common. Call when you first notice a chip, and a repair usually keeps it from spreading into a crack.",
        "Whether you need a quick chip repair, a full windshield replacement with in-house ADAS calibration, or a door or back glass replaced after a break-in, we do it in your driveway or parking lot.",
      ],
      areas: "We cover all of Little Elm (75068) and nearby Oak Point, Lakewood Village, and Paloma Creek.",
      faqs: [
        { q: "Are you open on weekends?", a: "Yes. We're available Saturday, 8 AM to 2 PM, and Sunday by appointment, along with Monday to Friday, 8 AM to 6 PM. After-hours appointments may be available for an added fee." },
        { q: "Do you cover Oak Point, Lakewood Village, and Paloma Creek?", a: "Yes. They're all right around our home base, so they're some of the easiest places for us to reach." },
      ],
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
      areas: "We cover all of Celina (75009). From Little Elm we're usually about 20 minutes away.",
      faqs: [
        { q: "Is there a trip fee for Celina?", a: "No. Celina is in our regular service area, so there's no extra trip fee." },
        { q: "Can you come to a job site in Celina?", a: "Often, yes. We need a safe, flat spot with room to open the doors, away from heavy equipment and dust. Tell us where you'll be when you book." },
      ],
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
      areas: "We cover Flower Mound ZIP codes 75022 and 75028. From Little Elm we're usually about 25 minutes away.",
      faqs: [
        { q: "Do you cover Lantana and Highland Village?", a: "Yes. Lantana, Highland Village, Argyle, and Northlake are all in our regular service area along with Flower Mound." },
        { q: "Can you replace door or back glass after a break-in?", a: "Yes. We replace door glass and back glass at your home or work, and we vacuum up the broken glass inside the vehicle." },
      ],
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
      areas: "We cover Allen ZIP codes 75002 and 75013. From Little Elm we're usually about 30 minutes away.",
      faqs: [
        { q: "Is there a trip fee for Allen?", a: "No. Allen is in our regular service area. Nearby Wylie and Murphy are in our extended service area, where a trip fee may apply. We'll include it in your free quote." },
        { q: "How long does a windshield replacement take?", a: "A typical windshield replacement takes about 60 to 90 minutes, plus time for calibration if your vehicle needs it. We'll give you a realistic estimate when you book." },
      ],
    },
  },
];
