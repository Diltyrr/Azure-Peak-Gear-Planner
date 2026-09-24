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
    name: "Leather Armor",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_LEATHER_NPC",
    coverage: COVERAGE_TORSO,
	variants: ["Leather Cuirass", "Padded Leather Armor", "Padded Leather Cuirass", "Hide Armor", "Forester's Armor"]
  },
  {
    name: "Artificer Jacket",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_LEATHER_NPC",
    coverage: COVERAGE_TORSO,
	variants: ["Decrepit Sapper Jacket"]
  },
  {
    name: "Hardened Leather Armor",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: COVERAGE_TORSO,
	variants: ["Padded Hardened Leather Armor"]
  },
  {
    name: "Hardened Leather Coat",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: COVERAGE_ALL_BUT_ARMFEET,
	variants: ["Megarmach Scale Coat", "Fur-woven Chargah Coat", "Fur-Lined Trophy Robes", "Aesthetic Fur-Lined Trophy Robes", "Aesthetic Fur-Woven Hatanga Coat"]
  },
  {
    name: "Studded Leather Armor",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_BRIGANDINE",
    coverage: COVERAGE_TORSO,
	variants: ["Padded Studded Leather Armor"]
  },
  {
    name: "Steel Half-Plate",
    slot: "armor",
    weight: "heavy",
    armorPreset: "ARMOR_PLATE",
    coverage: COVERAGE_TORSO,
	variants: ["Valorian Half-Plate", "Iron Half-Plate", "Valorian Iron Half-Plate", "Decrepite Half-Plate", "Ancient Half-Plate", "Otavan Half-Plate", "Templar's Half-Plate"]
  },
  {
    name: "Steel Cuirass",
    slot: "armor",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: COVERAGE_VEST,
	variants: ["Valorian Cuirass", "Decrepit Cuirass", "Ancient Cuirass"]
  },
  {
    name: "Fluted Cuirass",
    slot: "armor",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: CHEST|VITALS|LEGS,
	variants: ["Holy See Cuirass", "Psydonic Cuirass", "Decorated Cuirass"]
  },
  {
    name: "Golden Cuirass",
    slot: "armor",
    weight: "heavy",
    armorPreset: "ARMOR_INDESTRUCTIBLE",
    coverage: CHEST|VITALS|LEGS,
	variants: ["Golden Heroic Cuirass"]
  },
  {
    name: "Fencer's Cuirass",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: COVERAGE_VEST,
	variants: ["Valorian Fencer's Cuirass", "Gothic Cuirass"]
  },
  {
    name: "Steel Heartplate",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: COVERAGE_VEST
  },
  {
    name: "Steel Plackart",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: COVERAGE_VEST
  },
  {
    name: "Psydonic Chestplate",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: COVERAGE_VEST,
	variants: ["Decorated Chestplate"]
  },
  {
    name: "Iron Breastplate",
    slot: "armor",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: COVERAGE_VEST,
	variants: ["Aged Iron Breastplate", "Valerian Iron Breastplate"]
  },
  {
    name: "Copper Heartplate",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_BRONZE",
    coverage: CHEST
  },
  {
    name: "Plate Armor",
    slot: "armor",
    weight: "heavy",
    armorPreset: "ARMOR_PLATE",
    coverage: COVERAGE_ALL_BUT_HANDFEET,
	variants: ["Valorian Plate Armor", "Fluted Plate Armor", "Valorian Fluted Plate Armor", "Valorian Iron Plate Armor", "Otherworldly Fullplate", "Vicious Full-Plate", "Iron Plate Armor", "Psydonic Plate Armor", "Ordinator's Blessed Plate", "Gilded Full-Plate", "Avantyne Full-Plate", "Decorated Plate Armor", "Grudgebearer Dwarven Plate", "Holy Silver Plate"]
  },
  {
    name: "Haubergeon",
    slot: ["armor", "underarmor"],
    weight: "medium",
    armorPreset: "ARMOR_MAILLE",
    coverage: COVERAGE_ALL_BUT_HANDLEGS,
	variants: ["Iron Haubergeon, Bronze Haubergeon", "Decrepite Haubergeon", "Ancient Haubergeon"]
  },
  {
    name: "Besilked Haubergeon",
    slot: ["armor", "underarmor"],
    weight: "light",
    armorPreset: "ARMOR_MAILLE",
    coverage: COVERAGE_ALL_BUT_HANDLEGS
  },
  {
    name: "Hauberk",
    slot: ["armor", "underarmor"],
    weight: "medium",
    armorPreset: "ARMOR_MAILLE",
    coverage: COVERAGE_ALL_BUT_HANDFEET,
	variants: ["Otherworldly Hauberk", "Iron Hauberk", "Bronze Hauberk", "Decrepite Hauberk", "Ancient Hauberk", "Gilded Hauberk", "Avantyne Hauberk", "Vicious Hauberk", "Varangian Hauberk"]
  },
  {
    name: "Regenerating Skin",
    slot: "underarmor",
    weight: "light",
    armorPreset: "ARMOR_PADDED",
    coverage: COVERAGE_FULL,
	variants: ["Enduring Skin"]
  },
  {
    name: "Hardened Scales",
    slot: "underarmor",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: COVERAGE_ALL_BUT_HANDFEET|HANDS|FEET|COVERAGE_HEAD
  },
  {
    name: "Verewolf's Skin",
    slot: "underarmor",
    weight: "light",
    armorPreset: "ARMOR_WWOLF",
    coverage: CHEST
  },
  {
    name: "Verewolf's Thin Skin",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_WWOLF",
    coverage: FULL_BODY_NO_CHEST
  },
  {
    name: "Darkened Steel Plate",
    slot: "armor",
    weight: "heavy",
    armorPreset: "ARMOR_PLATE",
    coverage: CHEST|GROIN|VITALS|ARMS
  },
  {
    name: "Padded Undervestments",
    slot: ["armor", "underarmor"],
    weight: "light",
    armorPreset: "ARMOR_PADDED_BAD",
    coverage: CHEST|GROIN|ARMS|VITALS,
	variants: ["Decrepite Unholy Undervestaments"]
  },
  {
    name: "Padded Dress",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: COVERAGE_ALL_BUT_HANDFEET
  },
  {
    name: "Winter Dress",
    slot: ["armor", "underarmor"],
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: COVERAGE_ALL_BUT_HANDFEET
  },
  {
    name: "Winter Dress (Consort vers)",
    slot: ["armor", "underarmor"],
    weight: "light",
    armorPreset: "ARMOR_PADDED",
    coverage: COVERAGE_ALL_BUT_HANDFEET
  },
  {
    name: "Blacksteel Plate Armor",
    slot: "armor",
    weight: "heavy",
    armorPreset: "ARMOR_PLATE_BSTEEL",
    coverage: COVERAGE_ALL_BUT_HANDFEET,
	variants: ["Ancient Blacksteel Plate Armor"]
  },
  {
    name: "Blacksteel Half-Plate",
    slot: "armor",
    weight: "heavy",
    armorPreset: "ARMOR_PLATE_BSTEEL",
    coverage: COVERAGE_ALL_BUT_HANDLEGS,
	variants: ["Ancient Blacksteel Half-Plate"]
  },
  {
    name: "Blacksteel Cuirass",
    slot: "armor",
    weight: "heavy",
    armorPreset: "ARMOR_PLATE_BSTEEL",
    coverage: COVERAGE_VEST
  },
  {
    name: "Brigandine",
    slot: "armor",
    weight: "medium",
    armorPreset: "ARMOR_BRIGANDINE",
    coverage: COVERAGE_ALL_BUT_HANDLEGS
  },
  {
    name: "Lightweight Brigandine",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_BRIGANDINE",
    coverage: COVERAGE_TORSO
  },
  {
    name: "Coat of Plates",
    slot: "armor",
    weight: "heavy",
    armorPreset: "ARMOR_BRIGANDINE",
    coverage: COVERAGE_ALL_BUT_HANDLEGS,
	variants: ["Iron Coat of Plates", "Decorated Coat of Plates"]
  },
  {
    name: "Knight Banneret's Brigandine",
    slot: "armor",
    weight: "heavy",
    armorPreset: "ARMOR_BRIGANDINE",
    coverage: COVERAGE_ALL_BUT_HANDLEGS
  },
  {
    name: "Hansimhae Cuirass",
    slot: "armor",
    weight: "medium",
    armorPreset: "ARMOR_BRIGANDINE",
    coverage: COVERAGE_ALL_BUT_HANDLEGS
  },
  {
    name: "Haubyrnie",
    slot: ["armor", "underarmor"],
    weight: "light",
    armorPreset: "ARMOR_MAILLE",
    coverage: CHEST|VITALS,
	variants: ["Iron Haubyrnie"]
  },
  {
    name: "Bronze Haubyrnie",
    slot: ["armor", "underarmor"],
    weight: "light",
    armorPreset: "ARMOR_BRONZE",
    coverage: CHEST|VITALS
  },
  {
    name: "Chainmail Corslet",
    slot: ["armor", "underarmor"],
    weight: "light",
    armorPreset: "ARMOR_MAILLE",
    coverage: CHEST|GROIN
  },
  {
    name: "Plate-and-Maille",
    slot: "armor",
    weight: "heavy",
    armorPreset: "ARMOR_MAILLE",
    coverage: COVERAGE_ALL_BUT_HANDFEET,
	variants: ["Iron Plate-and-Maille", "Decrepite Plate-and-Maille", "Ancient Plate-and-Maille", "Decorated Plate-and-Maille"]
  },
  {
    name: "Fluted Plate-and-Maille",
    slot: "armor",
    weight: "heavy",
    armorPreset: "ARMOR_PLATE",
    coverage: COVERAGE_ALL_BUT_HANDFEET,
	variants: ["Psydonite Plate-and-Maille"]
  },
  {
    name: "Gambeson",
    slot: ["armor", "underarmor"],
    weight: "light",
    armorPreset: "ARMOR_PADDED",
    coverage: COVERAGE_ALL_BUT_HANDFEET,
	variants: ["Padded Gambeson", "The Singular Squire Padded Gambeson", "Fencing Gambeson", "Hand's Gambeson"]
  },
  {
    name: "Arming Jacket",
    slot: ["armor", "underarmor"],
    weight: "light",
    armorPreset: "ARMOR_PADDED",
    coverage: COVERAGE_ALL_BUT_HANDLEGS,
	variants: ["Light Arming Jacket", "Padded Arming Jacket", "Besilked Jacket"]
  },
  {
    name: "Stalker Robe",
    slot: ["armor", "underarmor"],
    weight: "light",
    armorPreset: "ARMOR_PADDED",
    coverage: COVERAGE_ALL_BUT_HANDFEET,
	variants: ["Thin Stalker Robe"]
  },
  {
    name: "Thin Desert Coat",
    slot: ["armor", "underarmor"],
    weight: "light",
    armorPreset: "ARMOR_PADDED",
    coverage: COVERAGE_ALL_BUT_HANDFEET
  },
  {
    name: "Light Gambeson",
    slot: ["armor", "underarmor"],
    weight: "light",
    armorPreset: "ARMOR_PADDED_BAD",
    coverage: COVERAGE_ALL_BUT_HANDFEET
  },
  {
    name: "Fencing Shirt",
    slot: "underarmor",
    weight: "light",
    armorPreset: "ARMOR_PADDED",
    coverage: COVERAGE_ALL_BUT_HANDLEGS,
	variants: ["Sheperd's Shirt"]
  },
  {
    name: "Padded Caftan",
    slot: ["armor", "underarmor"],
    weight: "light",
    armorPreset: "ARMOR_PADDED",
    coverage: COVERAGE_ALL_BUT_HANDFEET,
	variants: ["Pontifex's Kaftan", "Aesthetic Pontifex's Kaftan"]
  },
  {
    name: "Beast-Hide Coat",
    slot: ["armor", "underarmor"],
    weight: "light",
    armorPreset: "ARMOR_PADDED",
    coverage: COVERAGE_ALL_BUT_HANDFEET,
	variants: ["Padded Desert Coat"]
  },
  {
    name: "Grenzelhoftian Hip-Shirt",
    slot: ["armor", "underarmor"],
    weight: "light",
    armorPreset: "ARMOR_PADDED",
    coverage: COVERAGE_ALL_BUT_HANDLEGS,
	variants: ["Aesthetic Grenzelhoftian Hip-Shirt"]
  },
  {
    name: "Shawl",
    slot: ["armor", "underarmor"],
    weight: "light",
    armorPreset: "ARMOR_PADDED",
    coverage: COVERAGE_ALL_BUT_HANDFEET,
	variants: ["Hierophant's Shawl","Aesthetic Hierophant's Shawl"]
  },
  {
    name: "Inquisitorial Leather Tunic",
    slot: ["armor", "underarmor"],
    weight: "light",
    armorPreset: "ARMOR_PADDED",
    coverage: COVERAGE_ALL_BUT_HANDFEET
  },
  {
    name: "Worn Psydonic Leather Tunic",
    slot: ["armor", "underarmor"],
    weight: "light",
    armorPreset: "ARMOR_PADDED_BAD",
    coverage: COVERAGE_ALL_BUT_HANDFEET
  },
  {
    name: "Saccharine Vestments",
    slot: ["armor", "underarmor"],
    weight: "light",
    armorPreset: "ARMOR_PADDED",
    coverage: CHEST|GROIN|ARMS
  },
  {
    name: "Gronnic Ravager Mantle",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: COVERAGE_TORSO
  },
  {
    name: "Gronn Byrine Hauberk",
    slot: "armor",
    weight: "medium",
    armorPreset: "ARMOR_MAILLE",
    coverage: COVERAGE_ALL_BUT_HANDLEGS
  },
  {
    name: "Gronn Norsii Iron Plate",
    slot: "armor",
    weight: "heavy",
    armorPreset: "ARMOR_PLATE",
    coverage: COVERAGE_ALL_BUT_HANDLEGS
  },
  {
    name: "Forester's Brigandine",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_BRIGANDINE",
    coverage: COVERAGE_TORSO
  },
  {
    name: "Studded Leather Armor",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_BRIGANDINE",
    coverage: COVERAGE_TORSO
  },
  {
    name: "Cuir-Bouilli Armor",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_BRIGANDINE",
    coverage: COVERAGE_TORSO
  },
  {
    name: "Cuir-Bouilli Vest",
    slot: ["armor", "underarmor"],
    weight: "light",
    armorPreset: "ARMOR_BRIGANDINE",
    coverage: CHEST|VITALS
  },
  {
    name: "Confessional Coat",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: COVERAGE_ALL_BUT_HANDFEET,
	variants: ["Gravetender's Coat"]
  },
  {
    name: "Hardened Leather Jacket",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: COVERAGE_ALL_BUT_HANDLEGS
  },
  {
    name: "Drowcraft Vest",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: COVERAGE_TORSO,
	variants: ["Custom-fit Drowcraft Vest", "Sheperd's Vest", "Noble's Vest"]
  },
  {
    name: "Fencing Jacket",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: COVERAGE_TORSO,
	variants: ["Aesthetic Fencing Jacket"]
  },
  {
    name: "Leather Corslet",
    slot: ["armor", "underarmor"],
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: CHEST|GROIN,
	variants: ["Hide Corslet"]
  },
  {
    name: "Studded Leather Corslet",
    slot: ["armor", "underarmor"],
    weight: "light",
    armorPreset: "ARMOR_BRIGANDINE",
    coverage: CHEST|GROIN
  },
  {
    name: "Sanguine Coat",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: COVERAGE_ALL_BUT_HANDLEGS,
	variants: ["Sanguine Jacket"]
  },
  {
    name: "Tailcoat",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: COVERAGE_ALL_BUT_HANDLEGS,
	variants: ["Sanguine Jacket"]
  },
  {
    name: "Druid Armor",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: COVERAGE_TORSO
  },
  {
    name: "Harmonious Skin",
    slot: ["armor", "underarmor"],
    weight: "light",
    armorPreset: "ARMOR_PADDED",
    coverage: COVERAGE_FULL,
	variants: [ "Tough Skin", "Enduring Skin", "Seon-Mul Core", "Trained Skin", "Arbalist's Skin", "Trained Chest", "Enduring Chest", "Calloused Skin", "Hardened Skin", "Pit-Hardened Skin", "Calloused Chest", "Pit-Hardened Chest", "Unstoppable Chest"]
  },
  {
    name: "Tough Skin (Honorbound)",
    slot: ["armor", "underarmor"],
    weight: "light",
    armorPreset: "ARMOR_PADDED",
    coverage: COVERAGE_FULL|COVERAGE_HEAD|NECK
  },
  {
    name: "Bouhoi Bujeog Tattoos (Harmonious)",
    slot: ["armor", "underarmor"],
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: COVERAGE_FULL|COVERAGE_HEAD|NECK
  },
  {
    name: "Bouhoi Bujeog Tattoos (Defiant)",
    slot: ["armor", "underarmor"],
    weight: "light",
    armorPreset: "ARMOR_PLATE_BSTEEL",
    coverage: COVERAGE_FULL|COVERAGE_HEAD|NECK
  },
  {
    name: "Bouhoi Bujeog Tattoos (Enduring)",
    slot: ["armor", "underarmor"],
    weight: "light",
    armorPreset: "ARMOR_PADDED",
    coverage: COVERAGE_FULL|COVERAGE_HEAD|NECK
  },
  {
    name: "Bouhoi Bujeog Core",
    slot: ["armor", "underarmor"],
    weight: "light",
    armorPreset: "ARMOR_BRIGANDINE",
    coverage: COVERAGE_FULL|COVERAGE_HEAD|NECK
  },
  {
    name: "Unstoppable Skin",
    slot: ["armor", "underarmor"],
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: COVERAGE_FULL
  },
  {
    name: "Silk Coat",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: COVERAGE_ALL_BUT_HANDFEET
  },
  {
    name: "Shamanic Coat",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: COVERAGE_TORSO
  },
  {
    name: "Iron Half-Plate Corslet",
    slot: "armor",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: CHEST|GROIN
  },
  {
    name: "Banded Iron Armor",
    slot: "armor",
    weight: "heavy",
    armorPreset: "ARMOR_PLATE",
    coverage: CHEST|ARMS|LEGS|GROIN
  },
  {
    name: "Bronze Cuirass",
    slot: "armor",
    weight: "medium",
    armorPreset: "ARMOR_BRONZE",
    coverage: CHEST|VITALS|LEGS
  },
  {
    name: "Bronze Cardiophylax",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_BRONZE",
    coverage: CHEST|VITALS
  },
  {
    name: "Bronze Panoplic Armor",
    slot: "armor",
    weight: "heavy",
    armorPreset: "ARMOR_BRONZE",
    coverage: COVERAGE_ALL_BUT_HANDFEET
  },
  {
    name: "Bronze Panoplic Assembly",
    slot: "armor",
    weight: "heavy",
    armorPreset: "ARMOR_BRONZE",
    coverage: CHEST|VITALS|LEGS
  },
  {
    name: "Artificed half-plate",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: COVERAGE_TORSO
  },
  {
    name: "Fluted Half-Plate",
    slot: "armor",
    weight: "heavy",
    armorPreset: "ARMOR_PLATE",
    coverage: CHEST|VITALS|LEGS,
	variants: ["Decorated Half-Plate"]
  },
  {
    name: "Avantyne Half-Plate",
    slot: "armor",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: CHEST|VITALS|LEGS
  },
  {
    name: "Avantyne-Threaded Maille",
    slot: "armor",
    weight: "medium",
    armorPreset: "ARMOR_PLATE_BSTEEL",
    coverage: CHEST|VITALS|LEGS
  },
  {
    name: "Saccharine Plate Armor",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: CHEST|VITALS|LEGS
  },
  {
    name: "Vicious Half-Plate",
    slot: "armor",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: CHEST|VITALS|LEGS
  },
  {
    name: "Psydonic Half-Plate",
    slot: "armor",
    weight: "heavy",
    armorPreset: "ARMOR_PLATE",
    coverage: COVERAGE_ALL_BUT_HANDFEET,
  },
  {
    name: "Full-Plate Corset",
    slot: "armor",
    weight: "heavy",
    armorPreset: "ARMOR_PLATE",
    coverage: CHEST|GROIN|LEGS|ARMS,
	variants: ["Iron Full-Plate Corset"]
  },
  {
    name: "Samsiba Scaleplate",
    slot: "armor",
    weight: "heavy",
    armorPreset: "ARMOR_PLATE",
    coverage: COVERAGE_ALL_BUT_HANDLEGS
  },
  {
    name: "Scourge Breastplate",
    slot: "armor",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: COVERAGE_ALL_BUT_HANDFEET
  },
  {
    name: "Coat of Armor",
    slot: "armor",
    weight: "heavy",
    armorPreset: "ARMOR_PLATE",
    coverage: COVERAGE_ALL_BUT_HANDFEET
  },
  {
    name: "Half-Plate Corslet",
    slot: "armor",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: CHEST|GROIN
  },
  {
    name: "Scalemail",
    slot: "armor",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: COVERAGE_ALL_BUT_ARMFEET
  },
  {
    name: "Lamellar",
    slot: "armor",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: COVERAGE_ALL_BUT_ARMFEET,
	variants: ["Bronze Lamellar", "Steel Heavy Lamellar"]
  },
  {
    name: "Copper Lamellar",
    slot: "armor",
    weight: "medium",
    armorPreset: "ARMOR_LEATHER",
    coverage: COVERAGE_ALL_BUT_ARMFEET
  },
  {
    name: "Coat of the Commander",
    slot: "armor",
    weight: "medium",
    armorPreset: "ARMOR_PLATE",
    coverage: COVERAGE_ALL_BUT_ARMFEET
  },
  {
    name: "Inquisitorial Duster",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: COVERAGE_ALL_BUT_HANDFEET
  },
  {
    name: "Armored Inquisitorial Duster",
    slot: "armor",
    weight: "medium",
    armorPreset: "ARMOR_BRIGANDINE",
    coverage: COVERAGE_ALL_BUT_HANDFEET
  },
  {
    name: "Plated Inquisitorial Duster",
    slot: "armor",
    weight: "heavy",
    armorPreset: "ARMOR_PLATE",
    coverage: COVERAGE_ALL_BUT_HANDFEET
  },
  {
    name: "Spellsinger Robes",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: COVERAGE_ALL_BUT_HANDFEET
  },
  {
    name: "Simple Dobo Robe",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_PADDED",
    coverage: COVERAGE_ALL_BUT_HANDFEET,
	variants: ["Aesthetic Simple Dobo Robe", "Decorated Dobo Robe", "Aesthetic Decorated Dobo Robe", "Old Dobo Robe", "Aesthetic Old Dobo Robe"]
  },
  {
    name: "Grudgebearer Splint Apron",
    slot: "armor",
    weight: "medium",
    armorPreset: "ARMOR_PADDED",
    coverage: CHEST|GROIN|VITALS|LEGS
  },
  {
    name: "Woad Elven Plate",
    slot: "armor",
    weight: "heavy",
    armorPreset: "ARMOR_BLACKOAK",
    coverage: COVERAGE_ALL_BUT_HANDFEET
  },
  {
    name: "Woad Elven Maille",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_BLACKOAK",
    coverage: CHEST|VITALS|LEGS,
	variants: ["Autumnwoad Elven Plate", "Autumnwoad Elven Maille"]
  },
  {
    name: "Vampiric Armour",
    slot: ["armor", "underarmor"],
    weight: "light",
    armorPreset: "ARMOR_PADDED",
    coverage: COVERAGE_FULL
  },
  {
    name: "Gnoll Skin (Standard)",
    slot: ["armor", "underarmor"],
    weight: "light",
    armorPreset: "ARMOR_GNOLL_STANDARD",
    coverage: FULL_BODY
  },
  {
    name: "Gnoll Skin (Strong)",
    slot: ["armor", "underarmor"],
    weight: "light",
    armorPreset: "ARMOR_GNOLL_STRONG",
    coverage: FULL_BODY
  },
  {
    name: "Gnoll Skin (Weak)",
    slot: ["armor", "underarmor"],
    weight: "light",
    armorPreset: "ARMOR_GNOLL_WEAK",
    coverage: FULL_BODY
  },
  {
    name: "Goblin Mail",
    slot: "armor",
    weight: "heavy",
    armorPreset: "ARMOR_PLATE",
    coverage: CHEST|GROIN|ARMS|LEGS|VITALS
  },
  {
    name: "Goblin Armor",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: CHEST|GROIN|ARMS|VITALS
  },
  {
    name: "Hoblin Plate",
    slot: "armor",
    weight: "heavy",
    armorPreset: "ARMOR_PLATE",
    coverage: CHEST|GROIN|ARMS|LEGS|VITALS|FEET
  },
  {
    name: "Hoblin Armor",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: CHEST|GROIN|ARMS|VITALS|LEGS
  },
  {
    name: "Rough Skin",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_MAILLE",
    coverage: COVERAGE_FULL|COVERAGE_HEAD|NECK
  },
  {
    name: "Construc Plating",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_PADDED",
    coverage: FULL_BODY
  },
  {
    name: "Druid Shapeshift",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: FULL_BODY,
	variants: ["Cabbit Skin", "Cat's Skin", "Aged Moss Shell", "Bear's Skin", "Pitiful Carapace", "Saiga's Skin", "Spider's Skin", "Fox's Skin", "Volf's Skin"]
  },
  {
    name: "White Stag Skin",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_PLATE_BSTEEL",
    coverage: FULL_BODY
  },
  {
    name: "Calcified Bristled Hide",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_PLATE_BSTEEL",
    coverage: FULL_BODY
  },
  {
    name: "Bestowed Ward",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_BRIGANDINE",
    coverage: COVERAGE_FULL_BODY_ACTUAL
  },
  {
    name: "Arcyne Ward",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_LEATHER",
    coverage: COVERAGE_FULL_BODY_ACTUAL
  },
  {
    name: "Dragonhide Ward",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_DRAGONHIDE",
    coverage: COVERAGE_FULL_BODY_ACTUAL
  },
  {
    name: "Crystalhide Ward",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_BRIGANDINE",
    coverage: COVERAGE_FULL_BODY_ACTUAL
  },
  {
    name: "Ironhide Ward",
    slot: "armor",
    weight: "light",
    armorPreset: "ARMOR_PLATE",
    coverage: COVERAGE_FULL_BODY_ACTUAL
  },
  {
    name: "Regal Maille",
    slot: ["armor", "underarmor"],
    weight: "heavy",
    armorPreset: "ARMOR_VAMP",
    coverage: COVERAGE_TORSO,
	variants: ["Ancient Ceremonial Vestments"]
  },
  {
    name: "Ancient Ceremonial Plate",
    slot: "armor",
    weight: "heavy",
    armorPreset: "ARMOR_VAMP",
    coverage: COVERAGE_ALL_BUT_HANDFEET
  }
);