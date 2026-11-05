// Our technician, shown on the About page ("Meet JD") and in a short strip on the home page.
// photo: 600 px file in src/assets/img/ (a matching -1200 file sits alongside), cropped square, location data removed.
// Set photo to null to hide the photo slot; the text then runs full width.
export default {
  name: "JD",
  years: 14,
  photo: "jd-600.webp",
  stripPhoto: "jd-face-200.webp", // tighter face crop for the small circle on the home page
  photoAlt: "JD, technician at Fresh Start Auto Glass",
  bio: [
    "JD has been installing auto glass for 14 years. He's worked for national chains and local shops and ran his own auto glass business before Fresh Start, so there isn't much he hasn't seen. Windshield replacement is his specialty.",
    "A DFW native, JD grew up in Mesquite and now lives in Lewisville with his wife and kids. When he's not installing a windshield, he's coaching softball, shooting pool, or spending time with his family.",
  ],
  quote: "I take pride in what I do, so I make sure it's done right the first time.",
};
