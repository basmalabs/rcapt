import clsx from "clsx";

const gen_style = "bg-repeat";

export const bgTextureURL = {
  "asphaltDark": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/asphaltDark.png')]",
  "asphaltLight": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/asphaltLight.png')]",
  "bindingDark": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/bindingDark.png')]",
  "bindingLight": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/bindingLight.png')]",
  "blackThreadDark": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/blackThreadDark.png')]",
  "blackThreadLight": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/blackThreadLight.png')]",
  "brickWallDark": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/brickWallDark.png')]",
  "brickWallLight": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/brickWallLight.png')]",
  "brushedAlumDark": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/brushedAlumDark.png')]",
  "brushedAlumLight": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/brushedAlumLight.png')]",
  "darkStripesDark": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/darkStripesDark.png')]",
  "darkStripesLight": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/darkStripesLight.png')]",
  "debutDark": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/debutDark.png')]",
  "debutLight": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/debutLight.png')]",
  "diamondsDark": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/diamondsDark.png')]",
  "diamondsLight": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/diamondsLight.png')]",
  "escheresqueDark": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/escheresqueDark.png')]",
  "escheresqueLight": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/escheresqueLight.png')]",
  "fabricDark": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/fabricDark.png')]",
  "fabricLight": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/fabricLight.png')]",
  "fabricOneDark": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/fabricOneDark.png')]",
  "fabricOneLight": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/fabricOneLight.png')]",
  "graphyDark": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/graphyDark.png')]",
  "graphyLight": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/graphyLight.png')]",
  "lightHoneyCombDark": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/lightHoneyCombDark.png')]",
  "lightHoneyCombLight": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/lightHoneyCombLight.png')]",
  "littlePlaidDark": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/littlePlaidDark.png')]",
  "littlePlaidLight": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/littlePlaidLight.png')]",
  "mazeDark": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/mazeDark.png')]",
  "mazeLight": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/mazeLight.png')]",
  "notebookDark": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/notebookDark.png')]",
  "notebookLight": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/notebookLight.png')]",
  "paddedDark": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/paddedDark.png')]",
  "paddedLight": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/paddedLight.png')]",
  "pinstripeDark": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/pinstripeDark.png')]",
  "pinstripeLight": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/pinstripeLight.png')]",
  "roughClothDark": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/roughClothDark.png')]",
  "roughClothLight": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/roughClothLight.png')]",
  "shatteredDark": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/shatteredDark.png')]",
  "shatteredLight": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/shatteredLight.png')]",
  "smoothWallDark": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/smoothWallDark.png')]",
  "smoothWallLight": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/smoothWallLight.png')]",
  "tactileNoiseDark": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/tactileNoiseDark.png')]",
  "tactileNoiseLight": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/tactileNoiseLight.png')]",
  "whiteDiamondDark": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/whiteDiamondDark.png')]",
  "whiteDiamondLight": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/whiteDiamondLight.png')]",
  "wovenDark": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/wovenDark.png')]",
  "wovenLight": "bg-[url('https://res.cloudinary.com/farooqdotdev/image/upload/v1755437940/bgImage/textures/wovenLight.png')]"
};

export const textures = {
  asphalt: {
    dark: clsx(bgTextureURL.asphaltDark, gen_style),
    light: clsx(bgTextureURL.asphaltLight, gen_style)
  },
  binding: {
    dark: clsx(bgTextureURL.bindingDark, gen_style),
    light: clsx(bgTextureURL.bindingLight, gen_style)
  },
  blackThread: {
    dark: clsx(bgTextureURL.blackThreadDark, gen_style),
    light: clsx(bgTextureURL.blackThreadLight, gen_style)
  },
  brickWall: {
    dark: clsx(bgTextureURL.brickWallDark, gen_style),
    light: clsx(bgTextureURL.brickWallLight, gen_style)
  },
  brushedAlum: {
    dark: clsx(bgTextureURL.brushedAlumDark, gen_style),
    light: clsx(bgTextureURL.brushedAlumLight, gen_style)
  },
  darkStripes: {
    dark: clsx(bgTextureURL.darkStripesDark, gen_style),
    light: clsx(bgTextureURL.darkStripesLight, gen_style)
  },
  debut: {
    dark: clsx(bgTextureURL.debutDark, gen_style),
    light: clsx(bgTextureURL.debutLight, gen_style)
  },
  diamonds: {
    dark: clsx(bgTextureURL.diamondsDark, gen_style),
    light: clsx(bgTextureURL.diamondsLight, gen_style)
  },
  escheresque: {
    dark: clsx(bgTextureURL.escheresqueDark, gen_style),
    light: clsx(bgTextureURL.escheresqueLight, gen_style)
  },
  fabric: {
    dark: clsx(bgTextureURL.fabricDark, gen_style),
    light: clsx(bgTextureURL.fabricLight, gen_style)
  },
  fabricOne: {
    dark: clsx(bgTextureURL.fabricOneDark, gen_style),
    light: clsx(bgTextureURL.fabricOneLight, gen_style)
  },
  graphy: {
    dark: clsx(bgTextureURL.graphyDark, gen_style),
    light: clsx(bgTextureURL.graphyLight, gen_style)
  },
  lightHoneyComb: {
    dark: clsx(bgTextureURL.lightHoneyCombDark, gen_style),
    light: clsx(bgTextureURL.lightHoneyCombLight, gen_style)
  },
  littlePlaid: {
    dark: clsx(bgTextureURL.littlePlaidDark, gen_style),
    light: clsx(bgTextureURL.littlePlaidLight, gen_style)
  },
  maze: {
    dark: clsx(bgTextureURL.mazeDark, gen_style),
    light: clsx(bgTextureURL.mazeLight, gen_style)
  },
  notebook: {
    dark: clsx(bgTextureURL.notebookDark, gen_style),
    light: clsx(bgTextureURL.notebookLight, gen_style)
  },
  padded: {
    dark: clsx(bgTextureURL.paddedDark, gen_style),
    light: clsx(bgTextureURL.paddedLight, gen_style)
  },
  pinstripe: {
    dark: clsx(bgTextureURL.pinstripeDark, gen_style),
    light: clsx(bgTextureURL.pinstripeLight, gen_style)
  },
  roughCloth: {
    dark: clsx(bgTextureURL.roughClothDark, gen_style),
    light: clsx(bgTextureURL.roughClothLight, gen_style)
  },
  shattered: {
    dark: clsx(bgTextureURL.shatteredDark, gen_style),
    light: clsx(bgTextureURL.shatteredLight, gen_style)
  },
  smoothWall: {
    dark: clsx(bgTextureURL.smoothWallDark, gen_style),
    light: clsx(bgTextureURL.smoothWallLight, gen_style)
  },
  tactileNoise: {
    dark: clsx(bgTextureURL.tactileNoiseDark, gen_style),
    light: clsx(bgTextureURL.tactileNoiseLight, gen_style)
  },
  whiteDiamond: {
    dark: clsx(bgTextureURL.whiteDiamondDark, gen_style),
    light: clsx(bgTextureURL.whiteDiamondLight, gen_style)
  },
  woven: {
    dark: clsx(bgTextureURL.wovenDark, gen_style),
    light: clsx(bgTextureURL.wovenLight, gen_style)
  },
};

export type texturesType = keyof typeof textures;
export default textures;
