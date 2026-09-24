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
    name: "Bracers",
    slot: "wrists",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: ARMS,
	variants: ["Otherworldly Bracers", "Decrepite Bracers", "Ancient Bracers", "Iron Bracers", "Gilded Bracers", "Vicious Bracers"]
  },
  {
    name: "Golden Bracers",
    slot: "wrists",
    weight: "heavy",
    armorPreset: "ARMOR_INDESTRUCTIBLE",
    coverage: ARMS|HANDS,
	variants: ["Royal Golden Bracers"]
  },
  {
    name: "Livrasi Pauldrons",
    slot: "wrists",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: ARMS
  },
  {
    name: "Psydonic Thorns",
    slot: "wrists",
    weight: "light",
    armorPreset: "ARMOR_PLATE_BSTEEL",
    coverage: ARMS
  },
  {
    name: "Bronze Wristguard",
    slot: "wrists",
    weight: "light",
    armorPreset: "ARMOR_BRONZE",
    coverage: ARMS|HANDS,
	variants: ["Copper Bracers"]
  },
  {
    name: "Leather Bracers",
    slot: "wrists",
    weight: "light",
    armorPreset: "ARMOR_PADDED",
    coverage: ARMS
  },
  {
    name: "Hardened Leather Bracers",
    slot: "wrists",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: ARMS
  },
  {
    name: "Cloth Bracers",
    slot: "wrists",
    weight: "light",
    armorPreset: "ARMOR_PADDED",
    coverage: ARMS
  },
  {
    name: "Padded Warppings",
    slot: "wrists",
    weight: "light",
    armorPreset: "ARMOR_PADDED",
    coverage: ARMS,
	variants: ["Sojourner's Wrappings"]
  },
  {
    name: "Brigandine Rerebraces",
    slot: "wrists",
    weight: "light",
    armorPreset: "ARMOR_BRIGANDINE",
    coverage: ARMS
  },
  {
    name: "Splint Bracers",
    slot: "wrists",
    weight: "light",
    armorPreset: "ARMOR_BRIGANDINE",
    coverage: ARMS
  },
  {
    name: "Jack Chains",
    slot: "wrists",
    weight: "light",
    armorPreset: "ARMOR_BRIGANDINE",
    coverage: ARMS
  },
  {
    name: "Gem Bracelet Base",
    slot: "wrists",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: ARMS,
	variants: ["Jade Bracelets", "Cerulite Bracelets", "Onyxa Bracelets", "Heartstone Bracelet", "Amber Bracelets", "Shell Bracelets", "Rosestone Bracelets", "Opal Bracelets"]
  },
  {
    name: "Chain Sleeves",
    slot: "wrists",
    weight: "light",
    armorPreset: "ARMOR_MAILLE",
    coverage: ARMS,
	variants: ["Decrepit Chain Sleeves", "Ancient Chain Sleeves", "Iron Chain Sleeves"]
  },
  {
    name: "Bonze Chain Sleeves",
    slot: "wrists",
    weight: "light",
    armorPreset: "ARMOR_MAILLE",
    coverage: ARMS
  },
  {
    name: "Avantyne Bracers",
    slot: "wrists",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: ARMS
  },
  {
    name: "Vicious Wristguards",
    slot: "wrists",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: ARMS
  },
  {
    name: "Saccharine Cuffs",
    slot: "wrists",
    weight: "light",
    armorPreset: "ARMOR_PADDED",
    coverage: ARMS
  },
  {
    name: "Hand's Bracers",
    slot: "wrists",
    weight: "light",
    armorPreset: "ARMOR_MAILLE",
    coverage: ARMS
  },
  {
    name: "Blacksteel Bracers",
    slot: "wrists",
    weight: "light",
    armorPreset: "ARMOR_PLATE_BSTEEL",
    coverage: ARMS,
	variants: ["Ancient Blacksteel Bracers"]
  },
  {
    name: "Ancient Ceremonial Bracers",
    slot: "wrists",
    weight: "light",
    armorPreset: "ARMOR_VAMP",
    coverage: ARMS,
	variants: ["Ancient Blacksteel Bracers"]
  }
);