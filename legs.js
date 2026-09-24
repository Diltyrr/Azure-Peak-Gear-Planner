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
	name: "Steel Plate Chausses",
    slot: "legs",
    weight: "heavy",
    armorPreset: "ARMOR_PLATE",
    coverage: GROIN|LEGS,
	variants: ["Darkened Plate Chausses", "Gronn Norsii Iron Boots", "Iron Plate Chausses", "Decrepite Plate Chausses", "Ancient Plate Chausses", "Holy Silver Chausses"]
  },
  {
	name: "Steel Plate Tassets",
    slot: "legs",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: GROIN,
  },
  {
	name: "Vicious Leggings",
    slot: "legs",
    weight: "medium",
    armorPreset: "ARMOR_PLATE_BSTEEL",
    coverage: GROIN|LEGS
  },
  {
	name: "Gilded Leggings",
    slot: "legs",
    weight: "heavy",
    armorPreset: "ARMOR_PLATE_BSTEEL",
    coverage: GROIN|LEGS
  },
  {
	name: "Avantyne Vestments",
    slot: "legs",
    weight: "medium",
    armorPreset: "ARMOR_PLATE_BSTEEL",
    coverage: GROIN|LEGS
  },
  {
	name: "Avantyne-Threaded Fauldcoat",
    slot: "legs",
    weight: "medium",
    armorPreset: "ARMOR_PLATE_BSTEEL",
    coverage: GROIN|LEGS
  },
  {
	name: "Otherworldly Legplate",
    slot: "legs",
    weight: "heavy",
    armorPreset: "ARMOR_PLATE_BSTEEL",
    coverage: GROIN|LEGS
  },
  {
	name: "Work Trousers",
    slot: "legs",
    weight: "light",
    armorPreset: "ARMOR_PADDED_BAD",
    coverage: GROIN|LEGS,
	variants: ["Belt-Buckled Trousers", "Apothecary Trousers", "Tinker Trousers", "Decrepite Sapper Trousers"]
  },
  {
	name: "Silk Tights",
    slot: "legs",
    weight: "light",
    armorPreset: "ARMOR_PADDED_BAD",
    coverage: GROIN|LEGS,
	variants: ["Leather Tights"]
  },
  {
	name: "Leather Trousers",
    slot: "legs",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: GROIN|LEGS,
	variants: ["Mourning Trousers", "Sanguine Trousers"]
  },
  {
	name: "Pontifex's Chaqchur",
    slot: "legs",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: GROIN|LEGS
  },
  {
	name: "Baggy Desert Pants",
    slot: "legs",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: GROIN|LEGS
  },
  {
	name: "Fur Pants",
    slot: "legs",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: GROIN|LEGS,
	variants: ["Gronnic Fur Pants"]
  },
  {
	name: "Steel Chain Chausses",
    slot: "legs",
    weight: "medium",
    armorPreset: "ARMOR_MAILLE",
    coverage: GROIN|LEGS,
	variants: ["Gronn Byrine Chausses", "Iron Chain Chausses", "Knight Banneret's Chausses"]
  },
  {
	name: "Steel Chain Kilt",
    slot: "legs",
    weight: "medium",
    armorPreset: "ARMOR_MAILLE",
    coverage: GROIN|LEGS,
	variants: ["Decrepit Chain Kilt", "Ancient Chain Kilt", "Iron Chain Kilt", "Bronze Chain Kilt"]
  },
  {
	name: "Blacksteel Plate Chausses",
    slot: "legs",
    weight: "heavy",
    armorPreset: "ARMOR_PLATE_BSTEEL",
    coverage: GROIN|LEGS,
	variants: ["Ancient Blacksteel Plate Chausses"]
  },
  {
	name: "Brigandine Chausses",
    slot: "legs",
    weight: "light",
    armorPreset: "ARMOR_BRIGANDINE",
    coverage: GROIN|LEGS
  },
  {
	name: "Splinted Leggings",
    slot: "legs",
    weight: "light",
    armorPreset: "ARMOR_BRIGANDINE",
    coverage: GROIN|LEGS
  },
  {
	name: "Brayette",
    slot: "legs",
    weight: "light",
    armorPreset: "ARMOR_MAILLE",
    coverage: GROIN
  },
  {
	name: "Steel Chain Skirt",
    slot: "legs",
    weight: "light",
    armorPreset: "ARMOR_MAILLE",
    coverage: GROIN
  },
  {
	name: "Iron Chain Hosen",
    slot: "legs",
    weight: "medium",
    armorPreset: "ARMOR_MAILLE",
    coverage: LEGS|FEET,
	variants: ["Steel Chain Hosen", "Iron Chain Hosen with Coverings", "Steel Chain Hosen with Covering", "Iron Chain Hosen with Decrepit Covering"]
  },
  {
	name: "Padded Chausses",
    slot: "legs",
    weight: "light",
    armorPreset: "ARMOR_PADDED",
    coverage: GROIN|LEGS
  },
  {
	name: "Shalwar Pants",
    slot: "legs",
    weight: "light",
    armorPreset: "ARMOR_PADDED",
    coverage: GROIN|LEGS
  },
  {
	name: "Hardened Leather Trousers",
    slot: "legs",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: GROIN|LEGS,
	variants: ["Otavan Leather Trousers", "Gambeson Trousers"]
  },
  {
	name: "Shepherd's Pants",
    slot: "legs",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: GROIN|LEGS,
	variants: ["Cut-Throat's Pants", "Aesthetic Cut-Throat's Pants", "Strange Ripped Pants", "Aesthetic Strange Ripped Pants"]
  },
  {
	name: "Fencing Breeches",
    slot: "legs",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: GROIN|LEGS
  },
  {
	name: "Grenzelhoftian Paumpers",
    slot: "legs",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: GROIN|LEGS,
	variants: ["Aesthetic Grenzelhoftian Paumpers"]
  },
  {
	name: "Silk Tights",
    slot: "legs",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: GROIN|LEGS,
	variants: ["Custom-Fit Silk Tights", "Hand's Tights"]
  },
  {
	name: "Bronze Chain Skirt",
    slot: "legs",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: GROIN|LEGS
  },
  {
	name: "Hardened Leather Shorts",
    slot: "legs",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: GROIN
  },
  {
	name: "Saccharine Fauldcoat",
    slot: "legs",
    weight: "light",
    armorPreset: "ARMOR_PADDED",
    coverage: GROIN|LEGS
  },
  {
	name: "Gambesoned Kilt",
    slot: "legs",
    weight: "light",
    armorPreset: "ARMOR_PADDED",
    coverage: GROIN|LEGS
  },
  {
	name: "Light Gambesoned Kilt",
    slot: "legs",
    weight: "light",
    armorPreset: "ARMOR_PADDED_BAD",
    coverage: GROIN|LEGS
  },
  {
	name: "Ancient Ceremonial Plate Greaves",
    slot: "legs",
    weight: "heavy",
    armorPreset: "ARMOR_VAMP",
    coverage: GROIN|LEGS
  }
);