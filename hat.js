/* ============================================================
   Azure Peak Gear Planner — Item Definitions
   ------------------------------------------------------------
   This file registers all items belonging to the file name equipment slot.
   Each entry pushed into `window.ITEMS` represents one item family.

   ------------------------------------------------------------
   ITEM FORMAT
   ------------------------------------------------------------
   {
     name: "Item Name",              // Display name in UI
     slot: "armor",                  // Equip slot, or array of slots
     weight: "light",                // Weight class: light / medium / heavy
     armorPreset: "ARMOR_PLATE",     // Key referencing ARMOR_PRESETS in script.js
     coverage: HEAD | CHEST | ...    // Bitflag coverage zones (see script.js)
     variants: ["Alt A", "Alt B"]    // Optional cosmetic variants (same stats)
   }

   ------------------------------------------------------------
   NOTES
   ------------------------------------------------------------
   • Variants never change stats; they only expand UI options.
   • Coverage uses bitflags defined in script.js (HEAD, FACE, LEGS, etc.).
   • Multi‑slot items use: slot: ["slot1", "slot2"].
   • All items are automatically sorted alphabetically in the UI.
   • Variants should always be entered as an array, even if only one item.

   ------------------------------------------------------------
   ADDING ITEMS
   ------------------------------------------------------------
   To add a new item:
     1. Copy an existing entry.
     2. Set name, slot, weight, armorPreset, coverage.
     3. Add variants only if they share identical stats and a close enough name.
     4. Ensure armorPreset exists in script.js → ARMOR_PRESETS.
     5. Save and refresh the planner.

   ============================================================ */

window.ITEMS = window.ITEMS || [];

window.ITEMS.push(
  {
    name: "None",
    slot: ["head", "mask", "chest", "legs", "neck", "armor", "underarmor", "wrists", "gloves", "feet"],
    weight: "light",
    armorPreset: "ARMOR_CLOTHING",
    coverage: HEAD
  },

  {
    name: "Arming Cap",
    slot: ["head", "mask"],
    weight: "light",
    armorPreset: "ARMOR_PADDED_BAD",
    coverage: HEAD|HAIR|EARS
  },
  
  {
    name: "Padded Arming Cap",
    slot: ["head", "mask"],
    weight: "light",
    armorPreset: "ARMOR_PADDED",
    coverage: HEAD|HAIR|EARS
  },
  
  {
    name: "Leather Helmet",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_LEATHER_NPC",
    coverage: HEAD|HAIR|EARS|NOSE,
	variants: ["Goblin Helmet"]
  },
  
  {
    name: "Chapeau a Naled",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: HEAD|HAIR|EARS
  }, 

  {
    name: "Chapeau a Naled (Alt)",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: HEAD|HAIR|FACE
  },
  
  {
    name: "Volf Helmet",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: HEAD|HAIR|EARS
  },
  
  {
    name: "Saiga Skull",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_LEATHER_NPC",
    coverage: HEAD|EARS|HAIR|NOSE|EYES,
	variants: ["Moose Hood"]
  },
  
  {
    name: "Hardened Leather Helmet",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: HEAD|EARS|HAIR|NOSE
  },

  {
    name: "Spellsinger Hat",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: HEAD|HAIR
  },
  
  {
    name: "Grenzelhoft Plume Hat",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: HEAD|HAIR|EARS
  },
  
/* Why did I even enter unarmored stuff in the armor calculator program?
  {
    name: "Briar Thorns",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_CLOTHING",
    coverage: HEAD|HAIR|EARS
  }, */
  
  {
    name: "Worn Bamboo Hat",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: HEAD|HAIR|EARS
  },
  
  {
    name: "Helmet",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|NOSE,
	variants: ["Nasal Helmet", "Iron Nasal Helmet, Iron Winged Helmet"]
  },
  
  {
    name: "Skull Cap",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR,
	variants: ["Iron Skull Cap"]
  },
  
  {
    name: "Copper Lamellar Helmet",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: HEAD|HAIR
  },
  
  {
    name: "Horned Cap",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR
  },
  
  {
    name: "Winged Cap",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR
  },
  
  {
    name: "Kettle helmet",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|EARS,
	variants: ["Decrepite Kettle Helmet", "Ancient Kettle Helmet", "Iron Kettle Helmet", "Wide Kettle Helmet", "Reinforced Miners Helmet"]
  },
  
  {
    name: "Sallet",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|EARS,
	variants: ["Iron Sallet", "Sallet w/Plume hat", "Sallet w/Plumed Beret"]
  },
  
  {
    name: "Beast Skull",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|EARS
  },
  
  {
    name: "Visored Sallet",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|EARS|HAIR|NOSE|EYES,
	variants: ["Iron Visored Sallet", "Snouted Visored Sallet", "Iron Snouted Visored Sallet"]
  },
  
  {
    name: "Steel Shishak",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|EARS|HAIR|NECK
  },
  
  {
    name: "Kulah Khud",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|EARS
  },
  
  {
    name: "Otavan Helmet",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|NOSE
  },
  
  {
    name: "Elven Barbute",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: FULL_HEAD,
	variants: ["Winged Elven Barbute"]
  },
  
  {
    name: "Bascinet",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|EARS,
	variants: ["Iron Bascinet", "Holy Silver Bascinet"]
  },
  
  {
    name: "Bascinet with Aventail",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|EARS|MOUTH|NECK,
	variants: ["Iron Bascinet with Aventail"]
  },
  
  {
    name: "Pigface Bascinet",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: FULL_HEAD,
	variants: ["Hounskull Bascinet", "Roundface Bascinet", "Snouted Roundface Bascinet", "Iron Pigface Bascinet", "Iron Hounskull Bascinet", "Iron Roundface Bascinet", "Iron Snouted Roundface Bascinet"]
  },
  
  {
    name: "Klappvisier Bascinet",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: FULL_HEAD,
	variants: ["Iron Klappvisier Bascinet", "Etruscan Bascinet w/Plume hat", "Etruscan Bascinet w/Plumed beret"]
  },
  
  {
    name: "Jingasa",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|EARS
  },
  
  {
    name: "Warden's helmet",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: FULL_HEAD,
	variants: ["Warden's volfskull helm", "warden's ramskull helm", "warden's bearskull helm", "warden's rouskull helm"]
  },
  
  {
    name: "Eora Helmet",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|EARS
  },
  
/* Why did I even enter unarmored stuff in the armor calculator program?
  {
    name: "Warden's Hood",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_CLOTHING",
    coverage: NECK|HAIR|EARS|HEAD,
	variants: ["Warden's Antlered Hood"]
  },
  
  {
    name: "Forgehound's Hood",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_CLOTHING",
    coverage: NECK|HAIR|EARS|HEAD
  },
*/
  
  {
    name: "Bronze Illyriahelm",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_BRONZE",
    coverage: HEAD|HAIR|EARS
  },

  {  
    name: "Bronze Murmillo",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_BRONZE",
    coverage: FULL_HEAD
  },
  
  {  
    name: "Banded Iron Helmet",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|EARS|HAIR|NOSE|EYES
  },

  {  
    name: "Headcage",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|NOSE
  },
  
  {  
    name: "Saccharine Sallet",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|EARS|MOUTH|EYES
  },

  {  
    name: "Barbute",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|NOSE,
	variants: ["Visored Barbute", "Great Barbute", "Ancient Barbute", "Holy See Barbute", "Iron Barbute", "Visored Iron Barbute"]
  },
  
  {  
    name: "Bronze Barbute",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_BRONZE",
    coverage: FULL_HEAD
  },
  
  {  
    name: "Decrepite Barbute",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: COVERAGE_HEAD
  },
  
  {  
    name: "Snouted Burgonnet",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|NOSE
  },
  
  {  
    name: "Kabuto",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|NOSE
  },
  
  {  
    name: "Savoyard",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|NOSE,
	variants: ["Decrepite Savoyard, Ancient Savoyard", "Steel Savoyard"]
  },
  
  {  
    name: "Beak Helmet",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|NOSE,
	variants: ["Beaked Iron Helmet"]
  },

  {  
    name: "Barred Helmet",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|NOSE,
	variants: ["Barred Iron Helmet"]
  },
  
  {  
    name: "Golden Helmet",
    slot: "head",
    weight: "heavy",
    armorPreset: "ARMOR_INDESTRUCTIBLE",
    coverage: HEAD|HAIR|NOSE,
	variants: ["Royal Golden Helmet", "Golden Knight's Armet", "Royal Golden Armet"]
  },
  
  {  
    name: "Armet",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|NOSE,
	variants: ["Knight's Armet", "Snouted Armet", "Fluted Armet", "Fluted Armet with Greatplume", "Greatplumed Armet", "Strigidae Armet", "Iron Greatplumed Armet", "Iron Knight's armet", "Iron Armet", "Iron Snouted Armet", "Holy Silver Armet"]
  },
  
  {  
    name: "Decrepit Bascinet",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|NOSE,
	variants: ["Ancient Bascinet"]
  },
  
  {  
    name: "Knight's Helmet",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|NOSE,
	variants: ["Iron Knight's Helmet"]
  },
  
  {  
    name: "Bucket Helmet",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|NOSE,
	variants: ["Decorated Bucket Helmet", "Iron Bucket Helm", "Iron Bucket Helmet", "Gronn Norsii Horned Helmet"]
  },
  
  {  
    name: "Slitted Kettle Helm",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|NOSE,
	variants: ["Slitted Iron Kettle Helm"]
  },
  
  {  
    name: "Sugarloaf Helmet",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|NOSE,
	variants: ["Decorated Sugarloaf Helmet"]
  },
  
  {  
    name: "Xylixian Helmet",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|NOSE
  },
  
  {  
    name: "Astrata Helmet",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|NOSE,
	variants: ["Astrata Plumed Helmet"]
  },
  
  {  
    name: "Psydonic Barbute",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|NOSE,
	variants: ["Psydonic Armet", "Psydonic Armet with Greatplume", "Psydonic Bucket Helmet", "Psydonic Sallet"]
  },
  
  {  
    name: "Ordinator's Blessed froggemund",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|NOSE
  },
  
  {  
    name: "Absolver's Greathelm",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: FULL_HEAD|NECK
  },
  
  {  
    name: "Psydonic Conical Greathelm",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: FULL_HEAD|NECK
  },
  
  {  
    name: "Noc Helmet",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|NOSE,
	variants: ["Noc Burgonet"]
  },
  
  {  
    name: "Necra Helmet",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|NOSE,
	variants: ["Necra Skullhelm"]
  },
  
  {  
    name: "Dendor Helmet",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|NOSE
  },
  
  {  
    name: "Abyssorite Helmet",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|NOSE
  },
  
  {  
    name: "Justice Eagle",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|NOSE
  },
  
  {  
    name: "Ravox Helmet",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|NOSE
  },
  
  {  
    name: "Heavy Volfskulle Bascinet",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|NOSE,
	variants: ["Psydonic Volfskulle Bascinet", "Iron Volfskulle Bascinet"]
  },

/* Why did I even enter unarmored stuff in the armor calculator program?
  {  
    name: "Volfskulle Bascinet",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_CLOTHING",
    coverage: HEAD|HAIR|NOSE
  },
*/  

  {  
    name: "Stripped Volfskulle Bascinet",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|NOSE
  },
  
  {  
    name: "Grudgebearer Dwarven Helm",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|MOUTH|NOSE|EYES|EARS|NECK,
	variants: ["Grudgebearer smith Helm"]
  },
  
  {  
    name: "Woad Elven Helm",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_BLACKOAK",
    coverage: FULL_HEAD|NECK,
  },
  
  {  
    name: "Woad Elven Barbute",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_BLACKOAK",
    coverage: HEAD|HAIR|NOSE|EARS|NECK
  },
  
  {  
    name: "Froggemund helmet",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: FULL_HEAD|NECK,
	Variants: ["Froggemund Helmet with Greatplume"]
  },
  
  {  
    name: "Gilded Visage",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|NOSE
  },
  
  {  
    name: "Vicious Helmet",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|NOSE,
	variants: ["Vicious Skullhelm"]
  },
  
  {  
    name: "Avantyne Barbute",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|NOSE,
	variants: ["avantyne froggemund", "Avantyne Volf-Face Bascinet", "Avantyne Bascinet"]
  },
  
  {  
    name: "Banneret's Helmet",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|NOSE,
	variants: ["Banneret's snouted Sallet", "Banneret's Snouted Bascinet"]
  },
  
  {  
    name: "Hounskull with Aventail",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: FULL_HEAD|NECK,
	variants: ["Iron Hounskull with Aventail"]
  },
  
  {  
    name: "Bogman's Helmet",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|NOSE
  },
  
  {  
    name: "Blacksteel Armet",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_PLATE_BSTEEL",
    coverage: FULL_HEAD,
	variants: ["Blacksteel Bucket Helm", "Blacksteel Sugarloaf Helmet", "Blacksteel Armet w/plume hat", "Blacksteel Armet w/plumed beret"]
  },
  
  {  
    name: "Crown of Psydonian Thorns",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_PLATE_BSTEEL",
    coverage: HAIR|HEAD
  },
  
  {  
    name: "Length of Psydonian Chains",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_PLATE_BSTEEL",
    coverage: HAIR
  },
  
  {  
    name: "Otherworldly Squid Helm",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|EARS
  },
  
  {  
    name: "Keeper Stone Mask",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|NOSE
  },
  
  {  
    name: "Gronnic Ravager Helm",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|EARS|EYES|NOSE
  },
  
  {  
    name: "Moose Hood",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: HEAD|HAIR|EARS|NOSE
  },
  
  {  
    name: "Gronnic Ownel Helmet",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|HAIR|EARS|EYES|NOSE
  },
  
  {  
    name: "Lucky Tricorn",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: HEAD|HAIR|NOSE
  },
  
  {  
    name: "Hoblin Leather Helmet",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: HEAD|EARS|HAIR|EYES|NOSE
  },
  
  {  
    name: "Goblin Helmet",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|EARS|HAIR|EYES
  },
  
  {  
    name: "Hoblin Helmet",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: HEAD|EARS|HAIR|EYES|NOSE
  },
  
  {  
    name: "Autumnwoad Elven Helm",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_BLACKOAK",
    coverage: FULL_HEAD|NECK
  },
  
  {  
    name: "Autumnwoad Elven Barbute",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_BLACKOAK",
    coverage: HEAD|HAIR|NOSE|EARS
  },

  {
	name: "Bucket Helm",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: FULL_HEAD
  },
  
  {
	name: "Owl Helmet",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: FULL_HEAD|NECK
  },
  
  {
	name: "Sylveric Helmet",
    slot: "head",
    weight: "light",
    armorPreset: "ARMOR_PADDED",
    coverage: HEAD|HAIR|NOSE
  },
  
  {
	name: "Ancient Ceremonial Savoyard",
    slot: "head",
    weight: "medium",
    armorPreset: "ARMOR_VAMP",
    coverage: HEAD|HAIR|NOSE
  }  
);
