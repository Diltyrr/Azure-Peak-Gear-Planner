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
	name: "Plate Gauntlets",
    slot: "gloves",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: HANDS,
	variants: ["Otherworldly Gauntlets", "Darkened Plate Gauntles", "Gronn Norsii Iron Gauntlets", "Iron Plate Gauntlets", "Banded Iron Gauntlets", "Decrepite Plate Gauntlets", "Ancient Plate Gauntlets", "Vicious Plated Gauntlets", "Gilded Gauntlets", "Saccharine Gaunlets", "Grudgebearer Dwarven Gauntlets", "Holy Silver Plate Gauntlets"]
  },
  {
	name: "Avantyne Plate Gauntlets",
    slot: "gloves",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: HANDS
  },
  {
	name: "Beast Claws",
    slot: "gloves",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: HANDS
  },
  {
	name: "Avantyne-Threaded Sleevegloves",
    slot: "gloves",
    weight: "medium",
    armorPreset: "ARMOR_PLATE_BSTEEL",
    coverage: HANDS|ARMS
  },
  {
	name: "Darkplate Gauntlets",
    slot: "gloves",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: HANDS|ARMS
  },
  {
	name: "Jjajeungna Gauntlets",
    slot: "gloves",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: HANDS|ARMS
  },
  {
	name: "Hardened Leather Gloves",
    slot: "gloves",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: HANDS,
	variants: ["Gronnic Fur-Lined Leather Gloves", "Gronnic Fur-Lined Bone Gloves", "Thin Fur-Lined Bone Gloves", "Grenzelhoft Gloves", "Fencing Gloves", "Aesthetic Fencing Gloves", "Feldsher's Gloves", "Physicker's Gloves", "Thin Physicker's Gloves", "Fur-Luned Leather Gloves"]
  },
  {
	name: "Forge Gauntlets",
    slot: "gloves",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: HANDS
  },
  {
	name: "Chain Gauntlets",
    slot: "gloves",
    weight: "light",
    armorPreset: "ARMOR_MAILLE",
    coverage: HANDS,
	variants: ["Decrepit Chain Gauntlets", "Ancient Chain Gauntlets", "Iron Chain Gauntlets"]
  },
  {
	name: "Voltic Contraption Gauntlets",
    slot: "gloves",
    weight: "light",
    armorPreset: "ARMOR_MAILLE",
    coverage: HANDS
  },
  {
	name: "Bronze Maille Gauntlets",
    slot: "gloves",
    weight: "light",
    armorPreset: "ARMOR_BRONZE",
    coverage: HANDS
  },
  {
	name: "Psydonic Chain-Wrapped Gloves",
    slot: "gloves",
    weight: "light",
    armorPreset: "ARMOR_MAILLE",
    coverage: HANDS
  },
  {
	name: "Gronn Byrine Gloves",
    slot: "gloves",
    weight: "light",
    armorPreset: "ARMOR_MAILLE",
    coverage: HANDS
  },
  {
	name: "Bandages",
    slot: "gloves",
    weight: "light",
    armorPreset: "ARMOR_PADDED_BAD",
    coverage: HANDS,
	variants: ["Weighted Bandages", "Pugilistic Bandages"]
  },
  {
	name: "Steel Knuckles",
    slot: "gloves",
    weight: "light",
    armorPreset: "ARMOR_PADDED_BAD",
    coverage: HANDS,
	variants: ["Bronze Knuckles", "Iron Knuckles", "Psydonic Knuckles", "Silver Knuckles", "Enduring Knuckles", "Decrepit Knuckles", "Ancient Knuckles", "Blacksteel Knuckles", "Construct Knuckles"]
  },
  {
	name: "Close Caress",
    slot: "gloves",
    weight: "light",
    armorPreset: "ARMOR_PADDED_BAD",
    coverage: HANDS
  },
  {
	name: "Rune-Scrybed Wrappings",
    slot: "gloves",
    weight: "light",
    armorPreset: "ARMOR_PADDED_BAD",
    coverage: HANDS
  },
  {
	name: "Blacksteel Plate Gauntlets",
    slot: "gloves",
    weight: "light",
    armorPreset: "ARMOR_PLATE_BSTEEL",
    coverage: HANDS,
	variants: ["Ancient Blacksteel Plate Gauntlets"]
  },
  {
	name: "Leather Gloves",
    slot: "gloves",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: HANDS,
	variants: ["Fingerless Leather Gloves", "Psydonic Leather Gloves", "Black Gloves", "Stylish Gloves", "Sanguine Gloves", "Sanguine Sleeves", "Gilded Fingerless Gloves"]
  },
  {
	name: "Fingerless Gloves (elflock)",
    slot: "gloves",
    weight: "light",
    armorPreset: "ARMOR_MAILLE",
    coverage: HANDS,
	variants: ["Aesthetic Shadowy Fingerless Gloves"]
  },
  {
	name: "Otavan Leather Gloves",
    slot: "gloves",
    weight: "light",
    armorPreset: "ARMOR_MAILLE",
    coverage: HANDS,
	variants: ["Inquisitorial Leather Gloves"]
  },
  {
	name: "Padded Mittens",
    slot: "gloves",
    weight: "light",
    armorPreset: "ARMOR_PADDED",
    coverage: HANDS
  },
  {
	name: "Woad Elven Gloves",
    slot: "gloves",
    weight: "light",
    armorPreset: "ARMOR_BLACKOAK",
    coverage: HANDS,
	variants: ["Autumnwoad Elven Gloves"]
  },
  {
	name: "Ancient Ceremonial Gauntlets",
    slot: "gloves",
    weight: "light",
    armorPreset: "ARMOR_VAMP",
    coverage: HANDS
  }
);