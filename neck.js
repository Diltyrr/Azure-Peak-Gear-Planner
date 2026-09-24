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
    name: "Blacksteel Neckguard",
    slot: ["neck"],
    weight: "light",
    armorPreset: "ARMOR_PLATE_BSTEEL",
    coverage: NECK|MOUTH|NOSE,
	variants: ["Ancient Blacksteel Neckguard", "Iron Bevor"]
  },
  {
	name: "Bevor",
    slot: "neck",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: NECK|MOUTH|NOSE,
	variants: ["Otherworldly Bevor"]
  },
  {
	name: "Dragonscale Necklace",
    slot: "neck",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: NECK
  },
  {
	name: "Coif",
    slot: ["neck", "head"],
    weight: "light",
    armorPreset: "ARMOR_PADDED_BAD",
    coverage: NECK|HAIR|EARS|HEAD
  },
  {
	name: "Padded Coif",
    slot: ["neck", "head"],
    weight: "light",
    armorPreset: "ARMOR_PADDED",
    coverage: NECK|HAIR|EARS|HEAD
  },
  {
	name: "Heavy Padded Coif",
    slot: ["neck", "head"],
    weight: "light",
    armorPreset: "ARMOR_PADDED",
    coverage: NECK|MOUTH|NOSE|HAIR|EARS|HEAD
  },
  {
	name: "Hardened Leather Gorget",
    slot: "neck",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: NECK
  },
  {
	name: "Chain Coif",
    slot: ["neck", "head"],
    weight: "light",
    armorPreset: "ARMOR_MAILLE",
    coverage: NECK|HAIR|EARS|HEAD,
	variants: ["Ancient Coif", "Iron Chain Coif", "Decrepit Coif"]
  }, 
  {
	name: "Chain Mantle",
    slot: "neck",
    weight: "light",
    armorPreset: "ARMOR_MAILLE",
    coverage: NECK|MOUTH
  },
  {
	name: "Full Chain Coif",
    slot: ["neck", "head"],
    weight: "light",
    armorPreset: "ARMOR_MAILLE",
    coverage: NECK|MOUTH|NOSE|HAIR|EARS|HEAD,
	variants: ["Full Iron Chain Coif"]
  },
  {
	name: "Bronze Chain Coif",
    slot: ["neck", "head"],
    weight: "light",
    armorPreset: "ARMOR_BRONZE",
    coverage: NECK|HAIR|EARS|HEAD
  },
  {
	name: "Bronze Gorgette",
    slot: "neck",
    weight: "light",
    armorPreset: "ARMOR_BRONZE",
    coverage: NECK|MOUTH|NOSE
  },
  {
	name: "Gorget",
    slot: "neck",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: NECK,
	variants: ["Decrepit Gorget", "Steel Gorget", "Kazengunite Gorget", "Ancient Gorget", "Vicious Gorget", "Gold Plated Gorget"]
  },
  {
	name: "Aventail",
    slot: "neck",
    weight: "medium",
    armorPreset: "ARMOR_MAILLE",
    coverage: NECK|MOUTH,
	variants: ["Iron Aventail"]
  },
  {
	name: "Bronze Neckguard",
    slot: "neck",
    weight: "light",
    armorPreset: "ARMOR_BRONZE",
    coverage: NECK,
	variants: ["Neck Protector"]
  },
  {
	name: "Fencing Guard",
    slot: "neck",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: NECK
  },
  {
	name: "Forlorn Collar",
    slot: "neck",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: NECK
  },
  {
	name: "Golden Gorget",
    slot: "neck",
    weight: "heavy",
    armorPreset: "ARMOR_INDESTRUCTIBLE",
    coverage: NECK,
	variants: ["Royal Golden Gorget"]
  },
  {
	name: "Avantyne Bevor",
    slot: "neck",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: NECK|MOUTH|NOSE
  },
  {
	name: "Saccharine Veil",
    slot: "neck",
    weight: "light",
    armorPreset: "ARMOR_PADDED",
    coverage: NECK|HAIR|EARS|HEAD|NOSE
  },
  {
	name: "Ancient Ceremonial Gorget",
    slot: "neck",
    weight: "light",
    armorPreset: "ARMOR_VAMP",
    coverage: NECK
  }
);