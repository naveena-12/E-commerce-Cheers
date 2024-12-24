// import logo from '../../frontend/src/images/ctslogo.png'
import { createRequire } from "module";
 const products = [
    { 
        id:1,
        image:"https://m.media-amazon.com/images/I/61fTfbdaszL._AC_UY327_FMwebp_QL65_.jpg",
        brand:"BOAT",
        quantity:1,
        category:"electronics",
        name:"boAt Xtend Smartwatch with Alexa Built-in (Color As Per Availability)",
        points:1280,
        description:"Alexa built-in Voice Assistant that sets reminders, alarms and answers questions from weather forecasts to live cricket scores at your command!\n1.69 big square colour LCD display with a round dial features complete capacitive touch experience to let you take control, effortlessly.\nMultiple watch faces with customizable options to match your OOTD, every day!\nThe ambient light display allows automatic adjustment of brightness on the watch, suited to your environment.\nThe watch comes with a stress monitor that reads your HRV (Heart Rate Variabilities) to indicate stress levels.\nThe watch also monitors your heart rate and SPO2 (blood oxygen levels) to keep a tab on your overall health.\nTrack all stages of sleep every night and keep a tab on your sleep health with the sleep monitoring feature on the watch.",
    },

    { 
        id:2,
        image:"https://m.media-amazon.com/images/I/81srIkdAHcL._AC_UY327_FMwebp_QL65_.jpg",
        brand:"ONE PLUS",
        name:"OnePlus 108 cm (43 inches) Y Series Full HD Smart Android LED TV 43Y1S (Black)",
        points:8760 ,
        description:"Resolution: Full HD (1920x1080) | Refresh Rate: 60 hertz\nConnectivity: 2 HDMI ports to connect set top box, Blu Ray players, gaming console | 2 USB ports to connect hard drives and other USB devices\nSound : 20 Watts Output | Dolby Audio \nSmart TV Features: Android TV 9.0 | OnePlus Connect | Google Assistant | Play Store | Chromecast | Shared Album | Supported Apps : Netflix, YouTube, Prime video | Content Calendar | OxygenPlay\nDisplay: LED Panel | Noise Reduction | Colour Space Mapping |Dynamic Contrast | Anti-Aliasing | DCI-P3 93% colour gamut | Gamma Engine\nDesign: Bezel-less | Screen/Body Ratio = 88.5%\nWarranty Information: 1 year comprehensive warranty + additional 1 year on panel provided by the manufacturer from date of purchase\nInstallation/Wall mounting/demo will be arranged by Amazon Home Services. For any other information, please contact Amazon customer support\nEasy returns: This product is eligible for replacement within 10 days of delivery in case of any product defects, damage or features not matching the description provided",
        quantity:1,
        category:"electronics",
    },

   { 
    id:3,
    image:"https://m.media-amazon.com/images/I/81VttNsrDwL._AC_UY327_FMwebp_QL65_.jpg",
    brandg:"Amazon",
    name:"AMAZON ALL NEW ECHO DOT 4TH GEN SMART SPEAKER WITH ALEXA",
    points:1250,
    description:"AMAZON ALL NEW ECHO DOT 4TH GEN SMART SPEAKER WITH ALEXA\n Our most popular smart speaker now comes in a refreshed, compact design that fits perfectly into any room. It delivers loud, crisp sound with improved bass that you can enjoy anywhere in your home. Alexa and Echo devices are built with multiple layers of privacy protection. Echo smart speakers have a microphone off button that electronically disconnects the microphones. You also have control over your voice recordings and can view, hear, or delete them at any time.",

    quantity:1,
    category:"electronics",

   },

{ 
    id:4,
    image:"https://m.media-amazon.com/images/I/61JNpFtvWvL._AC_UY327_FMwebp_QL65_.jpg",
    brand:"Motorola",
    name:"Motorola Escape 210 Bluetooth Wireless Over Ear Headphones with Mic (Color As Per Availability)",
    points:460 ,
    description:". Bluetooth technology for Wireless Freedom\n. Clear and Powerful Bass\n∙ 40mm Driver, Inline Remote - No\n∙ One touch amazon alexa usage via Verve Life APP. Works with Amazon Alexa, Siri & Google\n∙ Country of Origin: China",
    quantity:1,
    category:"electronics",
},

{ 
    id:5,
    image:"https://m.media-amazon.com/images/I/61UC065kaIL._AC_UY327_FMwebp_QL65_.jpg",
    brand:"Acer",
    name:"Acer 21.5 Inch Full HD IPS Ultra Slim (6.6mm Thick) Monitor I Frameless Design I AMD Free Sync I Eye Care Features I Stereo Speakers (HA220Q)",
    points:4300,
    description:"Exceptional Full HD IPS 21.5 Inch Ultra Thin Display : Enjoy immaculate image quality with 1920x1080 resolution and 178 degree wide viewing angles \nConnectivity Ports : 1 VGA Port, 1 HDMI, 1 Audio-In Port, Inbox HDMI and VGA Cable\nEye Care Features Includes Blue Light Shield, Flickerless, Comfyview helps to protect the eyes and gives comfortable viewing experience\n250 Nits Brightness, 4MS Response Time 75Hz Refresh Rate with AMD Free Sync Technology \nIntegreated 2W X 2 Stereo Speakers for Enhanced Multimedia Experience\nFrameless Ultra-thin display with Zero Frame form factor \n-5 to 15 degree tilted angle for the comfortable viewing",
    quantity:1,
    category:"electronics",
},

{ 
    id:6,
    image:"https://m.media-amazon.com/images/I/61PnHlc0HCL._AC_UY327_FMwebp_QL65_.jpg",
    brand:"Apple",
    name:"APPLE IPAD 10.2INCH 9TH GENERATION 256GB WIFI",
    points:18800 ,
    quantity:1,
    category:"electronics",
    description:"APPLE IPAD 10.2INCH 9TH GENERATION 256GB WIFI \nA 25.91-centimetre (10.2-inch) Retina display with True Tone for incredible detail, vivid colours and a comfortable viewing experience. The A13 Bionic chip makes everything more responsive, from messaging to web browsing to using multiple apps at once.",

},

{ 
    id:"7",
  image:"https://m.media-amazon.com/images/I/61Q0EXcljgL._AC_UY327_FMwebp_QL65_.jpg",
    brand:"Amkette",
   name:"Amkette 579GR EvoFox Elite Ops Controller",
    points:500,
    quantity:1,
    category:"electronics",
    description:"The EvoFox Elite Ops Wireless Gamepad is an ideal gamepad for your Android TV, PC and PS3 (Note- While connecting to the TV please ensure the gamepad has a clear line of sight to the USB receiver by using the extended USB cable Provided in the box.). The new and improved high-performance Wireless USB Receiver ensures a Zero Lag Wireless Performance even when playing from the bean bag.\nThis Wireless Controller supports Windows with X input and D input modes, most Android TVs and PS3s. It automatically detects and changes the gamepad mode based on your system. Plug and Play! (Needs to be charged fully before 1st use)",
},

{ 
    id:8,
  image:"https://m.media-amazon.com/images/I/41xAn0iwc6L._AC_UY327_FMwebp_QL65_.jpg",
    brand:"LOGITECH",
   name:"LOGITECH WIRELESS MOUSE M185",
    points:290,
    quantity:1,
    category:"electronics",
    description:
    "LOGITECH WIRELESS MOUSE M185\nNo delays or dropouts. The tiny wireless receiver gives you a connection you can count on.\nProduct details \nBrand: Logitech\nModel: M185\nPlug-and-forget nano receive\nLogitech reliability\nLogitech Advanced 2.4 GHz wireless connectivity\nComfy, contoured shape\nPerfect for laptops\nSupported OS:\nWindows Vista, Windows 7, Windows 8, Windows 10\nMac OS X 10.5 or later\nChrome OS\nWarranty: 1 year manufacturer warranty\nNote: Color depends only on stock availability",
},

{
    id:9,
    image:"https://m.media-amazon.com/images/I/612KJu38CzL._AC_UY327_FMwebp_QL65_.jpg",
      brand:"Redmi",
     name:"Redmi 9i (Nature Green, 64GB) (4GB RAM)",
      points:3010,
      quantity:1,
      category:"electronics",
      description:"16.59 cm (6.53 inch) HD+ Display\n13MP Rear Camera | 5MP Front Camera\n5000 mAh Lithium Polymer Battery\nMediaTek Helio G25 Processor\nIn The Box Handset, Power Adapter (5V/2A), Micro USB Cable, SIM Eject Tool, Warranty Card, User Guide"
},

{
    id:10,
    image:"https://m.media-amazon.com/images/I/51+dU+eLheL._AC_UL480_FMwebp_QL65_.jpg",
      brand:"Decathlon",
     name:"Decathlon Kipsta Football Ball Fifa Pro Size 5 F900 - White",
      points:710,
      quantity:1,
      category:"sports",
      description:"We created this ball for football players looking for precision and excellent ball feel.. Our design teams created the F900 ball with a 12-panel outer cover to ensure perfect sphericity and greater precision.\n Durability\nLaminated bladder combined with thermobonded construction.\n Lasting air retention\nGuaranteed to keep ball pressure for longer thanks to Butyl / Latex bladder.\nPrecision\nThermobonded ball with textured component for optimum accuracy.\nStability\n Stable trajectory thanks to its embossed 12-panel construction.\nBounce\n Optimum sphericity thanks to thermobonded construction.\nball touch\n5 mm foam outer cover for optimum comfort\nGender\nUNISEX ALL AGES\nBALL TYPE\nThermobonded ball"
},

{
    id:11,
    image:"https://m.media-amazon.com/images/I/814YelpkIUL._AC_UL480_FMwebp_QL65_.jpg",
      brand:"Toyshine",
     name:"Toyshine Mid-Sized Foosball, Mini Football, Table Soccer Game (50 Cms) - Lets Have Fun!",
      points:110,
      quantity:1,
      category:"sports",
      description:"Toys and Games\nREAL LIFE ACTION- Easily enjoy real life foosball action from any room in your house. The tabletop version of this exciting game makes it easy to perfect your shooting skills, goalie blocks, 360 degree spins, and more\nFUN FOR ALL- This tabletop foosball game is great for all ages. Small enough for children to maneuver easily, yet sturdy enough for adults to enjoy as well. Everyone can appreciate this toy on family game night.\nTAKE WITH YOU ANYWHERE- This compact size set comes packed with everything you need to play. It features two soccer balls, score keeper, and easy ball return. You can play one-on-one, or play on 2-person DataTransferItemList.\n SPECIFICATIONS: Assembly Required: Yes. Color: Brown; Included Items: 1 Mid-sized Football Table & 4 Rods. Material: Wood; Dimensions- LxWxH: 52 x 31 x 8 cm; Is Battery Required: No; Recommended Age: 5 Years. Usage: Indoor, Weight: 2.6 KG. For Assembling Instructions: Please see image number 9",
},

{
    id:12,
    image:"https://m.media-amazon.com/images/I/71tzdcllaSL._AC_UY327_FMwebp_QL65_.jpg",
      brand:"GOR",
     name:"GOR Power View 20 X 50 Ultra High Power Binocular",
      points:1150,
      quantity:1,
      category:"sports",
      description:"Magnification 7x, 50mm Objective Lens BK-7 Glass Porro Prism\nMulti-coated optics for light transmission Non-slip rubber armor absorbs shock while providing a firm grip\nDurable Rubber Armouring Tripod Adaptable Smooth Central Focus Knob for quick viewing comfy vision with high-resolution lens\nIncludes: Case, Neck strap, Lens cloth and user manual. Suitable for Trekking, Live Events, Camping, Sports Events\nCrystal Clear Clarity"
},

{
    id:13,
    image:"https://m.media-amazon.com/images/I/71nWNuKsgSL._AC_UL480_FMwebp_QL65_.jpg",
      brand:"Omron",
     name:"Omron Mc-246 Digital Thermometer",
      points:100,
      quantity:1,
      category:"health",
      description:"OMRON MC-246 DIGITAL THERMOMETER\nThe thermometer you purchased offers a safe, accurate and quick temperature reading. You can measure your temperature through oral, rectal or underarm.\nroduct details\nBrand: Omron\nModel: MC-246\nFor oral, rectal and underarm temperature measurement\n3-digit, + degree celcius (degree fahrenheit) display in 0.1 degree increment, beeps when measurement is complete\nMeasurement Accuracy : Ãƒâ€šÃ‚Â±0.1 degree celcius (32.0 to 42.0 degree celcius)\nÃƒâ€šÃ‚Â±0.2 degree Fahrenheit (89.6 to 107.6 degree Fahrenheit)\n Memory recalls last reading.Kindly press power button for seven seconds untill a beep is emitted.The display will change to other measurement\nAuto off function : Approximately 30 minutes after use or 3 minutes when not been used\nWarranty: 1 year manufacturer warranty\nNote: Color depends only on stock availability",
},

{
    id:14,
    image:"https://m.media-amazon.com/images/I/41C25FOtn+L._AC_UL480_FMwebp_QL65_.jpg",
      brand:"ARKRAY",
     name:"ARKRAY GLUCOCARD G+ BLOOD GLUCOSE METER KIT WITH 10 STRIPS",
      points:260,
      quantity:1,
      category:"health",
      description:"ARKRAY GLUCOCARD G+ BLOOD GLUCOSE METER KIT WITH 10 STRIPS\nFrom Diabetes to Diabet-easy with Arkray Glucocard G+, a compact blood glucose meter designed for faster and easier testing of blood glucose. Arkray Glucocard G+ comes with Individually Packed Strips that ensures accurate results."
},

{
    id:15,
    image:"https://m.media-amazon.com/images/I/614s75abpYL._AC_UL480_FMwebp_QL65_.jpg",
      brand:"ARKRAY",
     name:"Agaro Rejoice Foot, Calf and Leg Massager with Heat and Vibration, 80W, 4 Motors, Rolling & Kneading Functions for Pain Relief & Improving Blood Circulation, Corded Electric, Grey",
      points:8210,
      quantity:1,
      category:"health",
      description:"3 Automatic & 3 Manual Modes of Operation - To effectively massage calves, tip-toes, arches and soles of the foot with 4 kneading disks and rollers For Pain relief, muscle Relaxation and to increase blood circulation\n4 Massage functions- Various combinations of Kneading, Rolling, Heat and Vibration helps to relax the muscles, stimulates reflex points and increase blood circulation\nHeat/Warm function- The heat function passes warmth to muscles and ligaments at about 40 degree centigrade to remove muscle stress and pain quickly.\n80 Watts Powerful Copper Motor to ensure Longer Life Span and Energy efficiency\nRemovable & Washable foot sleeves, Reclinable up to 45 degrees for relaxed sitting posture, 15 Minutes Auto- Shut off",
},

{
    id:16,
    image:"https://m.media-amazon.com/images/I/71pSEIccemL._AC_UL480_FMwebp_QL65_.jpg",
      brand:"ARKRAY",
     name:"Abasr Plastic Hanging Flower Pot and Flower Pot with Chain Plant Container Set, 6-inch, 6 Piece, Multicolour",
      points:280,
      quantity:1,
      category:"outdoor",
      description:"Set of 6 piece\nFlower pot with chain plant container\nOval shape"
},

{
    id:17,
    image:"https://m.media-amazon.com/images/I/418N8Jn26xL._AC_UL480_FMwebp_QL65_.jpg",
      brand:"Bhajanlal",
     name:"Bhajanlal Greenery Rareproducts Bamboo Hanging Planter With Disposable Gloves, 2 Piece",
      points:320,
      quantity:1,
      category:"outdoor",
      description:"Bamboo pot used grow and decorative your plants indoor and outdoor\nFeatures : This is hand made bamboo pot\nAttractive design and long-lasting ropes\nColour play yellow to green as the colour may vary due to natural reasons\nIt has strong cotton string cotton string to hang the planter",
},

{
    id:18,
    image:"https://m.media-amazon.com/images/I/71U4CquFDcL._AC_UY327_FMwebp_QL65_.jpg",
      brand:"DEWALT",
     name:"DEWALT 18V XR LI-ION CORDLESS LAWNMOVER 55L (BARE)",
      points:19340,
      quantity:1,
      category:"outdoor",
      description:"Brand: DEWALT\nModel Number: DCMW564N-XJ\nPower Actuation Button for Easy To Turn On/ Off\n55L Heavy Duty Mesh Fabric Grass Collection Bag\nErgonomic Push Handle Design\nWarranty: 1 year warranty provided by the manufacturer from date of purchase\nDisclaimer : Product colour may slightly vary due to photographic lighting sources or your monitor settings.",
},

{
    
    id:19,
    image:"https://m.media-amazon.com/images/I/513wVi40n7L._AC_UL480_FMwebp_QL65_.jpg",
      brand:"Skybags",
     name:"Skybags Trooper 65 Cms Polycarbonate Blue Hardsided Check-in Luggage",
      points:2380,
      quantity:1,
      category:"travel",
      description:"Outer Material: Polycarbonate, Casing: Hard, Color: Blue\nNot water resistant\nCapacity: 60 liters; Weight: 3380 grams; Dimensions: 65 cms x 49 cms x 27 cms (LxWxH)\nLock Type: Number…"
},

{
    id:20,
    image:"https://m.media-amazon.com/images/I/81g3pyGvYkL._AC_UL480_FMwebp_QL65_.jpg",
      brand:"Nasher Miles",
     name:"Nasher Miles 100% Pure Memory Foam Travel Neck Pillow, 360 Degree Stable Neck Support with Snap-on Button (Teal and Grey)",
      points:420,
      quantity:1,
      category:"travel",
      description:"Memory foam is made of 100% Polyurethane. Pillow cover-95% Polyester & 5% Spandex features an easy to use zipper & is machine washable and dryer safe.\nEasy to carry-lightweight, and perfect for travelling by airplane, car, train or bus. Button lock ensure a firm, snug fit around your neck.\nOur product comes with a narrower back and extra cushioning on sides to truly support your neck rest which makes the whole experience comfortable.\nThe product size is 13 cm (Height), 29 cm (Length), 35cm (Width) , Weight : 0.39Kg.U-shaped memory foam neck pillow for head, neck, and shoulder support.\nWarranty type: Manufacturer; 3 Months Warranty Against Manufacturing Defects | Toll Free number: 1800-103-6202 |",
},

{
    id:21,
    image:"https://m.media-amazon.com/images/I/A1yeOmY5NiL._AC_UL480_FMwebp_QL65_.jpg",
      brand:"WILDCRAFT",
     name:"WILDCRAFT HITCHHIKER TRAVEL DUFFEL BAG",
      points:420,
      quantity:1,
      category:"travel",
      description:"WILDCRAFT HITCHHIKER TRAVEL DUFFEL BAG\nThe Hitchhiker comes with one main compartment, two side pockets and an adjustable strap. Easy to carry as cabin bag, for a night out camping, and even for inter-city outdoor commute. Spacious enough to hold up to 34 liters, the bag is made of Nylon Ripstop and quality zippers and runner ensuring safety while traveling.",
},

{
    id:22,
    image:"https://m.media-amazon.com/images/I/51fFCMyey3L._AC_UL480_FMwebp_QL65_.jpg",
      brand:"Bosch",
     name:"Bosch GBL 82-270 Professional Blower with Dust Extraction - Heavy Duty - (820 W, 2.25KG) (Blue) (GBL 80-270)",
      points:1720,
      quantity:1,
      category:"travel",
      decription:"Strongest air flow for better work efficiency post Metal, Wood and Construction work\nPackage contents: GBL 82-270 Professional (Order/Part number: 0 601 980 4F5)\nWarranty: 6 Months from the date of invoice (provide invoice copy to claim warranty)\nA handy tool for blowing and dust extraction with a Powerful motor (Rated input power: 820 W)",
},

{
    id:23,
    image:"https://m.media-amazon.com/images/I/811SkUDU99L._AC_UL480_FMwebp_QL65_.jpg",
      brand:"COIR GARDEN",
     name:"COIR GARDEN - Hanging Bamboo Planters with partition and Adjustable Rope Bamboo Hanging Planters with Adjustable Rope- Pack of 1",
      points:280,
      quantity:1,
      category:"travel",
      description:"The package includes one piece\nIt is made of matured bamboo\nPartitioned bamboo planter is of average length 55cm to 65cm.Diameter is 8 cm to 10 cm\nThe planter also includes adjustable rope to adjust to the height required. This is used for growing cactus, succulents and many.\nIt can be used as both indoor and outdoor planters. It is also a great gifting product.",
},

{
    id:24,
    image:"https://m.media-amazon.com/images/I/51FxqpSlbqL._AC_UL480_FMwebp_QL65_.jpg",
      brand:"COIR GARDEN",
     name:"COIR GARDEN Coir Seed Germination Kit (4x4x1 cm, Pack of 20)",
      points:110,
      quantity:1,
      category:"travel",
      description:"SIZE - |L x W x H|: 4 cm x 4 cm x 1 cm. Used for raising seedlings, plant cutting rootings, hydroponics, aquaponics. Coco netted coin gives quicker rooting due to the air pruning that stimulates fibrous root development within the plug. This can decrease crop cycle up to 25% to produce stronger, more compact plants.\nCoir coins are 100% bio degradable so seedling planted directly into soil has less transplant shock problem.\nJust drop the pellet into warm water and place the seed.\n It expands to several times its original, and water regularly until the seed germinates.\nNow it is made easy to transplant without damaging the first soil and roots.",
},

{
    
    id:25,
    image:"https://m.media-amazon.com/images/I/41oF3FsUHRL._AC_UL480_FMwebp_QL65_.jpg",
      brand:"Avantor",
     name:"Avantor Glucosphera Automated Blood Glucose Monitor with 10 Strip and 50 Strips",
      points:630,
      quantity:1,
      category:"health",
      description:"GlucoSphera is India"
},

{

    id:26,
    image:"https://m.media-amazon.com/images/I/81wsHkn95gL._AC_UL480_FMwebp_QL65_.jpg",
      brand:"ARCADIO",
     name:"ARCADIO ARMOR ARCMSKW01 ZARA WOMEN FACE MASK SET OF 3",
      points:130,
      quantity:1,
      category:"health",
description:"ARCADIO ARMOR ARCMSKW01 ZARA WOMEN FACE MASK SET OF 3\nARCADIO ARMOR Tailored from a soft woven fabric, these face masks are enhanced with multi-layer construction with anti-bacterial and anti-microbial finish. The 7 high defined layers provide full protection with maximum coverage to safeguard from harmful virus, bacteria and prevent from extreme moisture, dust and pollution while ensuring enhanced air ventilation. ARCADIO Armor has been tested as per standards set by BIS (Bureau of Indian Standards) that are tested in the Ministry of Textile approved labs.",
},

{
    
    id:27,
    image:"https://m.media-amazon.com/images/I/71m3d5uB7VL._AC_UL480_FMwebp_QL65_.jpg",
      brand:"Medicate",
     name:"Medicate Regular Blood Pressure Apparatus-Assorted Color",
      points:440,
      quantity:1,
      category:"health",
      description:"Note-Color may vary as per stock.Manual Sphygmomanometer:. It consists of the aneroid gauge and an inflatable cuff to apply a mechanism for inflation through manually operated bulb and valve to measure systolic and diastolic BP.",
},

{
    id:28,
    image:"https://m.media-amazon.com/images/I/61xD1ANDMnL._AC_UY327_FMwebp_QL65_.jpg",
      brand:"BLACK + DECKER",
     name:"BLACK + DECKER BEMW451BH-B1 35L GRASSBOX LAWN MOWER",
      points:5600,
      quantity:1,
      category:"outdoor",
      description:"BLACK+DECKER BEMW451BH-B1 35L Grassbox Lawn Mower With Bike Handle, For Maintaining Gardens Of Up To 300 Square Meters, Electric 1200-Watt 14 Inch Winged,\nComfort grip bike handle ergonomic design for easy steering\n14 Inch Winged blade for 80 percent better collection, allows for improved cutting and collection\nIdeal for small to medium sized gardens up to 300 square meters\n 1 Year Warranty.",
},

{
    id:29,
    image:"https://m.media-amazon.com/images/I/61HF41Dm4GL._AC_UL480_FMwebp_QL65_.jpg",
      brand:"Kraft Seeds",
     name:"Kraft Seeds Metal Railing Planters, Multicolour, Pack of 2",
      points:170,
      quantity:1,
      category:"outdoor",
      description:"Material:Metal, Color:Multicolor\nPackage Contents:2 Hanging Planters\nThese are just the right use for dry floral or greenery arrangements, as a decor next to fireplaces and as a planter for both fresh flowers or plants (must use protective liner if used).\nIt can be the right gift for wedding or special occasions.\nBENEFITS: They can accent your home or office both indoors or outside for just the right decor.\n Planter Size : Pot Diameter -17.5 cm x Pot H-14 cm x 28 cm Flower pots with a hook\nStrong and durable, ideal for the creative gardener to hang on windows or wall, garden, Fence, indoor home decor or School handcraft work.\nVersatile functions: These hanging planter are suitable for dried flowers, silk flowers and small potted plants in balcony.\nMountable exterior hanging balcony garden decorations. These planters will add style and color to your garden and house.",
},

{
    id:30,
    image:"https://m.media-amazon.com/images/I/51D1yG0F1XL._AC_UL480_FMwebp_QL65_.jpg",
      brand:"COIR GARDEN",
     name:"COIR GARDEN Coir Hanging Baskets - 8 INCH - Pack of 3 - Balcony Garden Decoration for Indoor and Outdoor",
      points:280,
      quantity:1,
      category:"outdoor",
      description:"Material :Coir\nColor :Brown\nSize and quantity : 8 INCH, 3 pieces\n Better water retention\nSTYLISH - This hanging basket makes a great stylish addition to any part of your home or patio. The liner and inner basket are easy to lift which makes planting a breeze. The large capacity ensures you have enough space to create the perfect flower arrangement every time",
},

{
    id:31,
    image:"https://m.media-amazon.com/images/I/81nVEMah66L._AC_UL480_FMwebp_QL65_.jpg",
      brand:"Generic",
     name:"Generic Hotshot Tennis Racket Set with Soft Plastic Ball for Kids",
      points:140,
      quantity:1,
      category:"sports",
      description:"Note - Color may vary.Hot Shot Tennis ball set. This is multi-color rackets for your kids. The rackets can be used as badminton or tennis. It would engage the kids for hours. Suitable for kids over 3+ years old",
},

{
    id:32,
    image:"https://m.media-amazon.com/images/I/71fkv7ry8AL._AC_UL480_FMwebp_QL65_.jpg",
      brand:"Casinoite",
     name:"Casinoite Billium Clay 500 Poker Chips Set",
      points:1650,
      quantity:1,
      category:"sports",
      description:"Poker chip set 500 ; Material: Polypropylene\nStrong tough unbreakable case\n Multi-layered polypropylene foam insert\nCountry of Origin: India"
},

{
    id:33,
    image:"https://m.media-amazon.com/images/I/61tkIVxRCtL._AC_UL480_FMwebp_QL65_.jpg",
      brand:"Magicwand",
     name:"Magicwand Mid Size Portable Foosball Soccer Game Table Set for Kids (Foosball-XXLarge-Blue)",
      points:4400,
      quantity:1,
      category:"sports",
      description:"Portable Design Magicwand durable soccer arcade can fit on top of your kitchen counter, coffee table, or on your floor without leaving scratches. Light enough for easy transport and storage, with guaranteed resilience to withstand the high energy of players.\nDurable Structure Constructed of strong wood construction and solid steel rods, sturdy and reliable, can serve you for a long time. In addition\nFun For All Age Kids and adults will be able to get lots of enjoyment from this versatile and simple-to-use interactive furniture. It will fit in nicely in a game room, garage or playroom to give you a unique entertainment option.\nEasy To Play 6 rows are included within the table to allow 3 rows per team; 9 red players and 9 yellow players. Internal ball retrieval at each goal. Plastic manual slide scorers at each goal.\nPRODUCT DETAILS- Dimensions: 12.125",
}
];

export default products;