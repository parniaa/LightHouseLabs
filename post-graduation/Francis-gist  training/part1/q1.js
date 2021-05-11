const metals = [
  {
    name:"1084",
    type:"Carbon Steel",
    composition: {
      iron: 98.08,
      carbon: 0.8,
      manganese: 0.6,
      phosphorus: 0.05,
      sulfur: 0.04,
    },
    forging_min_temp: 900,
    forging_max_temp: 1200
  },
  {
    name:"1075",
    type:"Carbon Steel",
    composition: {
      iron: 98,
      carbon: 0.7,
      manganese: 0.4,
      phosphorus: 0.05,
      sulfur: 0.04,
    },
    forging_min_temp: 900,
    forging_max_temp: 1200
  },
  {
    name:"80CrV2",
    type:"Carbon Steel",
    composition: {
      iron: 98.08,
      carbon: 0.75,
      chrome: 0.4,
      molybdenium: 0.1,
      vanadium:0.15,
      manganese: 0.3,
      phosphorus: 0.025,
      sulfur: 0.025,
    },
    forging_min_temp: 850,
    forging_max_temp: 1100
  },
  {
    name:"S30V",
    type:"Stainless Steel",
    composition: {
      iron: 98,
      carbon: 0.015,
      chromium: 0.14,
      molybdenium: 0.2,
      vanadium:0.4,
    },
    forging_min_temp: 975,
    forging_max_temp: 1200
  },
  {
    name:"420HC",
    type:"Stainless Steel",
    composition: {
      iron: 98,
      carbon: 0.004,
      nickel:0.5,
      silicon:0.6,
      chromium: 0.12,
      manganese:0.01
    },
    forging_min_temp: 1050,
    forging_max_temp: 1200
  }
]
var metalList = [];
metals.forEach(element => {
    metalList.push(element.name);
});
console.log(metalList)