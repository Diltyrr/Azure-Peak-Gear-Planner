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
	name: "Plated Boots",
    slot: "feet",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: FEET,
	variants: ["Otherworldly Boots", "Darkened Plated Boots", "Ancient Boots", "Grudgebearer Dwarven Boots", "Iron Plated Boots", "Inquisitorial Boots", "Gronn Norsii Iron Boots", "Holy Silver Plated Boots"]
  },
  {
	name: "Steel Horseshoes",
    slot: "feet",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: FEET,
	variants: ["Iron Horseshoes", "Silver Horseshoes", "Gold Horseshoes", "Bronze Horseshoes"]
  },
  {
	name: "Decrepit Boots",
    slot: "feet",
    weight: "light",
    armorPreset: "ARMOR_BRONZE",
    coverage: FEET
  },
  {
	name: "Hardened Leather Boots",
    slot: "feet",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: FEET,
	variants: ["Psydonic Leather Boots", "Aavnic Riding Boots", "Otavan Leather Boots", "Grenzelhoft Boots", "Aesthetic Grenzelhoft Boots", "Fencing Boots", "Gilded Leather Boots"]
  },
  {
	name: "Armored Sandals",
    slot: "feet",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: FEET,
	variants: ["Raised Sandals"]
  },
  {
	name: "Copper Lamellar Boots",
    slot: "feet",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: FEET
  },
  {
	name: "Decrepit Sandals",
    slot: "feet",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: FEET,
	variants: ["Ancient Sandals"]
  },
  {
	name: "Woad Elven Boots",
    slot: "feet",
    weight: "light",
    armorPreset: "ARMOR_BLACKOAK",
    coverage: FEET,
	variants: ["Autumnwoad Elven Boots"]
  },
  {
	name: "Maille Boots",
    slot: "feet",
    weight: "light",
    armorPreset: "ARMOR_MAILLE",
    coverage: FEET,
	variants: ["Iron Maille Boots"]
  },
  {
	name: "Bronze Maille Boots",
    slot: "feet",
    weight: "light",
    armorPreset: "ARMOR_BRONZE",
    coverage: FEET
  },
  {
	name: "Bronze Greaves",
    slot: "feet",
    weight: "light",
    armorPreset: "ARMOR_BRONZE",
    coverage: FEET|LEGS
  },
  {
	name: "Golden Greaves",
    slot: "feet",
    weight: "heavy",
    armorPreset: "ARMOR_INDESTRUCTIBLE",
    coverage: FEET|LEGS,
	variants: ["Royal Golden Greaves"]
  },
  {
	name: "Vicious Boots",
    slot: "feet",
    weight: "light",
    armorPreset: "ARMOR_PLATE_BSTEEL",
    coverage: FEET,
	variants: ["Gilded Boots"]
  },
  {
	name: "Avantyne Boots",
    slot: "feet",
    weight: "medium",
    armorPreset: "ARMOR_PLATE_BSTEEL",
    coverage: FEET
  },
  {
	name: "Avantyne-Threaded Sabatons",
    slot: "feet",
    weight: "light",
    armorPreset: "ARMOR_PLATE_BSTEEL",
    coverage: FEET
  },
  {
	name: "Saccharine Heels",
    slot: "feet",
    weight: "light",
    armorPreset: "ARMOR_PLATE_BSTEEL",
    coverage: FEET
  },
  {
	name: "Blacksteel Plate Boots",
    slot: "feet",
    weight: "light",
    armorPreset: "ARMOR_PLATE_BSTEEL",
    coverage: FEET,
	variants: ["Ancient Blacksteel Plate Boots"]
  },
  {
	name: "Padded Cloth Footwraps",
    slot: "feet",
    weight: "light",
    armorPreset: "ARMOR_PADDED",
    coverage: FEET
  },
  {
	name: "Padded Cloth Footwraps",
    slot: "feet",
    weight: "light",
    armorPreset: "ARMOR_PADDED",
    coverage: FEET
  },
  {
	name: "Hardened Leather Footwraps",
    slot: "feet",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: FEET
  },
  {
	name: "Ancient Ceremonial Sabatons",
    slot: "feet",
    weight: "light",
    armorPreset: "ARMOR_VAMP",
    coverage: FEET
  }
);