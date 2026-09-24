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
    name: "Iron Mask",
    slot: "mask",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: FACE,
	variants: ["Ornate Golden Mask", "Steel Mask", "Strange Mask", "Anthraxi War Mask", "Decrepite Mask", "Psydonic Mask", "Ancient Mask", "Steppesman War Mask", "Steppesman Beast Mask", "Gold Mask", "Oni Mask", "Kitsune Mask", "Soldier's Half-Mask", "Eerie Ancient Mask"]
  },
  {
    name: "Iron Spectacles",
    slot: "mask",
    weight: "light",
    armorPreset: "ARMOR_PLATE_BSTEEL",
    coverage: EYES,
	variants: ["Golden Spectacles", "Bronze Spectacles", "Steel Spectacles"]
  },
  {
    name: "Sack Mask",
    slot: "mask",
    weight: "light",
    armorPreset: "ARMOR_PADDED",
    coverage: FACE|HEAD,
	variants: ["Psydonic Sack Mask"]
  },
  {
    name: "Wild Guard",
    slot: "mask",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: FACE
  },
  {
    name: "Bronze Mask",
    slot: "mask",
    weight: "light",
    armorPreset: "ARMOR_BRONZE",
    coverage: FACE,
	variants: ["Copper Mask", "Bronze Death Mask"]
  },
  {
    name: "Vicious Jawmask",
    slot: "mask",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: MOUTH|NOSE
  },
  {
    name: "Skull Mask",
    slot: "mask",
    weight: "light",
    armorPreset: "ARMOR_PADDED_BAD",
    coverage: FACE
  },
  {
    name: "Jade Mask",
    slot: "mask",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: FACE,
	variants: ["Cerulite Mask", "Rosetone Mask", "Shell Mask", "Heartstone Mask", "Amber Mask", "Onyxa Mask", "Opal Mask"]
  },
  {
    name: "Iron Duelist Goggles",
    slot: "mask",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: EYES,
	variants: ["Steel Duelist Goggles", "Bronze Duelist Goggles"]
  },
  {
    name: "Padded Mask",
    slot: "mask",
    weight: "light",
    armorPreset: "ARMOR_PADDED",
    coverage: FACE
  }, 
  {
    name: "Padded Leather Mask",
    slot: "mask",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: FACE
  },
  {
    name: "Iron Chainmaille Mask",
    slot: "mask",
    weight: "light",
    armorPreset: "ARMOR_MAILLE",
    coverage: FACE,
	variants: ["Steel Fluted Chainmaille Mask", "Iron Fluted Chainmaille Mask"]
  },
  {
    name: "Helmetless Visor",
    slot: "mask",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: EYES|NOSE,
	variants: ["Clerical Helmetless Visor"]
  },
  {
    name: "Flimsy Helmetless Visor",
    slot: "mask",
    weight: "light",
    armorPreset: "ARMOR_BRONZE",
    coverage: EYES|NOSE
  },
  {
    name: "Plague Mask",
    slot: "mask",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: FACE
  },
  {
    name: "Gilded Spectacles",
    slot: "mask",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: EYES
  }
);