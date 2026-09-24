// ============================================================
// BITFLAG DEFINITIONS
// ------------------------------------------------------------
// Reusing game code bitflags for item coverage so we can just
// copy said bitflag when adding items.
// ============================================================

const HEAD       = 1 << 0;
const CHEST      = 1 << 1;
const GROIN      = 1 << 2;
const LEG_LEFT   = 1 << 3;
const LEG_RIGHT  = 1 << 4;
const FOOT_LEFT  = 1 << 5;
const FOOT_RIGHT = 1 << 6;
const ARM_LEFT   = 1 << 7;
const ARM_RIGHT  = 1 << 8;
const HAND_LEFT  = 1 << 9;
const HAND_RIGHT = 1 << 10;
const NECK       = 1 << 11;
const VITALS     = 1 << 13;
const MOUTH      = 1 << 14;
const EARS       = 1 << 15;
const NOSE       = 1 << 16;
const RIGHT_EYE  = 1 << 17;
const LEFT_EYE   = 1 << 18;
const HAIR       = 1 << 19;

// Combined coverage macros
const LEGS       = LEG_LEFT | LEG_RIGHT;
const FEET       = FOOT_LEFT | FOOT_RIGHT;
const ARMS       = ARM_LEFT | ARM_RIGHT;
const HANDS      = HAND_LEFT | HAND_RIGHT;
const EYES       = LEFT_EYE | RIGHT_EYE;
const FACE       = MOUTH | NOSE | EYES | EARS;
const FULL_HEAD  = HEAD | MOUTH | NOSE | EYES | EARS | HAIR;
const BELOW_HEAD = CHEST | GROIN | VITALS | ARMS | HANDS | LEGS | FEET;
const FULL_BODY  = FULL_HEAD | NECK | BELOW_HEAD;
const COVERAGE_HEAD = HEAD | HAIR | EARS;
const COVERAGE_TORSO = CHEST | GROIN | VITALS;
const COVERAGE_ALL_BUT_ARMFEET = CHEST | GROIN | VITALS | LEGS;
const COVERAGE_VEST = CHEST | VITALS
const COVERAGE_ALL_BUT_HANDFEET = CHEST | GROIN | VITALS | LEGS | ARMS
const COVERAGE_ALL_BUT_HANDLEGS = CHEST | GROIN | VITALS | ARMS
const COVERAGE_FULL = CHEST | GROIN | VITALS | LEGS | ARMS | HANDS | FEET
const FULL_BODY_NO_CHEST = GROIN | VITALS | LEGS | FEET | ARMS | HANDS | FULL_HEAD | NECK
const COVERAGE_FULL_BODY_ACTUAL = HEAD | HAIR | EARS | EYES | NOSE | MOUTH | NECK | CHEST | GROIN | VITALS | LEGS | ARMS | HANDS | FEET

// Mapping bitflags → zone names for UI
const COVERAGE_MAP = {
  [HEAD]: "head",
  [CHEST]: "chest",
  [GROIN]: "groin",
  [LEG_LEFT]: "leg_left",
  [LEG_RIGHT]: "leg_right",
  [FOOT_LEFT]: "foot_left",
  [FOOT_RIGHT]: "foot_right",
  [ARM_LEFT]: "arm_left",
  [ARM_RIGHT]: "arm_right",
  [HAND_LEFT]: "hand_left",
  [HAND_RIGHT]: "hand_right",
  [NECK]: "neck",
  [VITALS]: "vitals",
  [MOUTH]: "mouth",
  [EARS]: "ears",
  [NOSE]: "nose",
  [RIGHT_EYE]: "right_eye",
  [LEFT_EYE]: "left_eye",
  [HAIR]: "hair"
};

// Convert bitmask → array of zone strings
function expandCoverage(bitmask) {
  const zones = [];
  for (const flag in COVERAGE_MAP) {
    const f = Number(flag);
    if (bitmask & f) zones.push(COVERAGE_MAP[f]);
  }
  return zones;
}

// ============================================================
// ARMOR SYSTEM
// ------------------------------------------------------------
// DR (damage reduction) and DBLOCK (damage block tier) values
// are defined through named presets, values taken from game code.
// ============================================================

const DR_VALUES = {
  "DR_NONE": 0,
  "DR_LIGHT": 0.167,
  "DR_MEDIUM": 0.286,
  "DR_HEAVY": 0.375,
  "DR_SUPER": 0.444,
  "DR_ULTRA": 0.50
};

const DBLOCK_TIERS = {
  "DBLOCK_NONE": 0,
  "DBLOCK_LIGHT": 1,
  "DBLOCK_MEDIUM": 2,
  "DBLOCK_HEAVY": 3,
  "DBLOCK_BSTEEL": 4
};

// Armor presets taken from game code
const ARMOR_PRESETS = {
  "ARMOR_CLOTHING": {
    blunt: "DR_NONE",
    slash: "DBLOCK_NONE",
    stab: "DBLOCK_NONE",
    piercing: "DBLOCK_NONE",
    fire: "DR_NONE",
    acid: "DR_NONE"
  },

  "ARMOR_PADDED_BAD": {
    blunt: "DR_MEDIUM",
    slash: "DBLOCK_LIGHT",
    stab: "DBLOCK_LIGHT",
    piercing: "DBLOCK_LIGHT",
    fire: "DR_NONE",
    acid: "DR_NONE"
  },
  
  "ARMOR_PADDED": {
    blunt: "DR_SUPER",
    slash: "DBLOCK_MEDIUM",
    stab: "DBLOCK_LIGHT",
    piercing: "DBLOCK_BSTEEL",
    fire: "DR_LIGHT",
    acid: "DR_NONE"
  },
  
  "ARMOR_LEATHER_NPC": {
    blunt: "DR_HEAVY",
    slash: "DBLOCK_LIGHT",
    stab: "DBLOCK_LIGHT",
    piercing: "DBLOCK_MEDIUM",
    fire: "DR_MEDIUM",
    acid: "DR_NONE"
  },
  
  "ARMOR_LEATHER": {
    blunt: "DR_ULTRA",
    slash: "DBLOCK_MEDIUM",
    stab: "DBLOCK_MEDIUM",
    piercing: "DBLOCK_HEAVY",
    fire: "DR_MEDIUM",
    acid: "DR_NONE"
  },
  
  "ARMOR_PLATE": {
    blunt: "DR_LIGHT",
    slash: "DBLOCK_HEAVY",
    stab: "DBLOCK_HEAVY",
    piercing: "DBLOCK_MEDIUM",
    fire: "DR_NONE",
    acid: "DR_NONE"
  },
  
  "ARMOR_BRONZE": {
    blunt: "DR_MEDIUM",
    slash: "DBLOCK_MEDIUM",
    stab: "DBLOCK_MEDIUM",
    piercing: "DBLOCK_MEDIUM",
    fire: "DR_MEDIUM",
    acid: "DR_MEDIUM"
  },

  "ARMOR_INDESTRUCTIBLE": {
    blunt: "DR_ULTRA",
    slash: "DBLOCK_BSTEEL",
    stab: "DBLOCK_BSTEEL",
    piercing: "DBLOCK_BSTEEL",
    fire: "DR_ULTRA",
    acid: "DR_NONE"
  },
  
  "ARMOR_BLACKOAK":{
	blunt: "DR_ULTRA",
    slash: "DBLOCK_LIGHT",
    stab: "DBLOCK_BSTEEL",
    piercing: "DBLOCK_MEDIUM",
    fire: "DR_NONE",
    acid: "DR_NONE"
  },
  
  "ARMOR_PLATE_BSTEEL": {
    blunt: "DR_MEDIUM",
    slash: "DBLOCK_BSTEEL",
    stab: "DBLOCK_BSTEEL",
    piercing: "DBLOCK_BSTEEL",
    fire: "DR_LIGHT",
    acid: "DR_LIGHT"
  },
  
  "ARMOR_VAMP": {
    blunt: "DR_ULTRA",
    slash: "DBLOCK_BSTEEL",
    stab: "DBLOCK_BSTEEL",
    piercing: "DBLOCK_BSTEEL",
    fire: "DR_ULTRA",
    acid: "DR_ULTRA"
  },
  
  "ARMOR_MAILLE": {
    blunt: "DR_MEDIUM",
    slash: "DBLOCK_HEAVY",
    stab: "DBLOCK_HEAVY",
    piercing: "DBLOCK_LIGHT",
    fire: "DR_NONE",
    acid: "DR_NONE"
  },
  "ARMOR_BRIGANDINE": {
    blunt: "DR_HEAVY",
    slash: "DBLOCK_HEAVY",
    stab: "DBLOCK_MEDIUM",
    piercing: "DBLOCK_HEAVY",
    fire: "DR_NONE",
    acid: "DR_NONE"
  },
  "ARMOR_WWOLF": {
    blunt: "DR_SUPER",
    slash: "DBLOCK_HEAVY",
    stab: "DBLOCK_HEAVY",
    piercing: "DBLOCK_MEDIUM",
    fire: "DR_MEDIUM",
    acid: "DR_MEDIUM"
  },
  "ARMOR_GNOLL_STANDARD": {
    blunt: "DR_SUPER",
    slash: "DBLOCK_HEAVY",
    stab: "DBLOCK_HEAVY",
    piercing: "DBLOCK_HEAVY",
    fire: "DR_MEDIUM",
    acid: "DR_MEDIUM"
  },
  "ARMOR_GNOLL_STRONG": {
    blunt: "DR_MEDIUM",
    slash: "DBLOCK_BSTEEL",
    stab: "DBLOCK_BSTEEL",
    piercing: "DBLOCK_HEAVY",
    fire: "DR_MEDIUM",
    acid: "DR_MEDIUM"
  },
  "ARMOR_GNOLL_WEAK": {
    blunt: "DR_ULTRA",
    slash: "DBLOCK_HEAVY",
    stab: "DBLOCK_HEAVY",
    piercing: "DBLOCK_MEDIUM",
    fire: "DR_MEDIUM",
    acid: "DR_MEDIUM"
  },
  "ARMOR_DRAGONHIDE": {
    blunt: "DR_SUPER",
    slash: "DBLOCK_MEDIUM",
    stab: "DBLOCK_LIGHT",
    piercing: "DBLOCK_LIGHT",
    fire: "DR_MEDIUM",
    acid: "DR_LIGHT"
  },
};

// Weight filtering order
const WEIGHT_ORDER = {
  light: 1,
  medium: 2,
  heavy: 3
};

let ITEMS = window.ITEMS;

// ============================================================
// COLOR GRADIENT
// ------------------------------------------------------------
// Color from red to green depending on how good an item is.
// ============================================================

function armorColor(p) {
  p = Math.max(0, Math.min(1, p));

  // Red (255,0,0) → Green (0,255,0)
  const r = Math.round(255 * (1 - p));
  const g = Math.round(255 * p);
  const b = 0;

  return `rgb(${r}, ${g}, ${b})`;
}

// ============================================================
// UI POPULATION
// ------------------------------------------------------------
// Builds dropdowns for each slot, grouped by armor preset category.
// Items are sorted alphabetically, with "None" always first.
// ============================================================

function isBlock(value) { return value.startsWith("DBLOCK"); }
function isReduce(value) { return value.startsWith("DR"); }

const ARMOR_GROUP_LABELS = {
  "ARMOR_PLATE": "Plate Armor",
  "ARMOR_LEATHER": "Leather Armor",
  "ARMOR_LEATHER_NPC": "Low Quality Leather Armor",
  "ARMOR_PADDED": "Padded Armor",
  "ARMOR_PADDED_BAD": "Low Quality Padded Armor",
  "ARMOR_BRONZE": "Bronze Armor",
  "ARMOR_CLOTHING": "Unarmored",
  "ARMOR_INDESTRUCTIBLE": "Indestructible Armor",
  "ARMOR_BLACKOAK": "Black Oak Armor",
  "ARMOR_PLATE_BSTEEL": "Blacksteel Armor",
  "ARMOR_VAMP": "Vampiric Armor",
  "ARMOR_MAILLE": "Maille Armor",
  "ARMOR_BRIGANDINE": "Brigandine Armor",
  "ARMOR_WWOLF": "Werewolf Armor",
  "ARMOR_GNOLL_STANDARD": "Gnoll Armor",
  "ARMOR_GNOLL_STRONG": "Gnoll Armor",
  "ARMOR_GNOLL_WEAK": "Gnoll Armor",
  "ARMOR_DRAGONHIDE": "Dragon Hide",
};

function populateSlots() {
  const weight = document.getElementById("armorWeight").value;

  const slots = [
    { id: "headSlot", slot: "head" },
    { id: "maskSlot", slot: "mask" },
	{ id: "neckSlot", slot: "neck" },
    { id: "armorSlot", slot: "armor" },
	{ id: "underarmorSlot", slot: "underarmor" },
	{ id: "wristsSlot", slot: "wrists" },
	{ id: "glovesSlot", slot: "gloves" },
	{ id: "feetSlot", slot: "feet" },
    { id: "legsSlot", slot: "legs" }
  ];

  slots.forEach(s => {
    const dropdown = document.getElementById(s.id);
    dropdown.innerHTML = "";

    const groups = {};

    ITEMS
      .filter(i =>
        (Array.isArray(i.slot) ? i.slot.includes(s.slot) : i.slot === s.slot) &&
        WEIGHT_ORDER[i.weight] <= WEIGHT_ORDER[weight]
      )
      .forEach(item => {
        const groupName = ARMOR_GROUP_LABELS[item.armorPreset] || "Other";
        if (!groups[groupName]) groups[groupName] = [];
        groups[groupName].push(item);
      });

    Object.keys(groups)
      .sort((a, b) => {
        if (a === "Unarmored") return -1;
        if (b === "Unarmored") return 1;
        return a.localeCompare(b);
      })
      .forEach(groupName => {
        const optgroup = document.createElement("optgroup");
        optgroup.label = groupName;

        groups[groupName]
          .sort((a, b) => {
            if (a.name === "None") return -1;
            if (b.name === "None") return 1;
            return a.name.localeCompare(b.name);
          })
          .forEach(item => {
            const opt = document.createElement("option");
            opt.value = item.name;

            opt.textContent = item.variants
              ? `${item.name} - variants: ${item.variants.join(" / ")}`
              : item.name;

            optgroup.appendChild(opt);
          });

        dropdown.appendChild(optgroup);
      });

    if (dropdown.querySelector('option[value="None"]')) {
      dropdown.value = "None";
    }

    updateItemPreview(s.id, s.id.replace("Slot", "Preview"));
  });

  updateTotals();
}

// ============================================================
// ITEM PREVIEW
// ------------------------------------------------------------
// Shows DR/DBLOCK values and coverage zones for the selected item.
// ============================================================

function updateItemPreview(slotId, previewId) {
  const selectedName = document.getElementById(slotId).value;
  const preview = document.getElementById(previewId);

  if (!selectedName) {
    preview.textContent = "No item selected";
    return;
  }

  const item = ITEMS.find(i => i.name === selectedName);
  const preset = ARMOR_PRESETS[item.armorPreset];

  const zones = expandCoverage(item.coverage);

  const coverageText = zones.length
    ? `Covers: ${zones.join(", ")}\n`
    : "";

  function formatValue(value, dmgType) {
    if (dmgType === "blunt" || dmgType === "fire" || dmgType === "acid") {
      const reduction = DR_VALUES[value];
      return `Reduce - ${Math.round(reduction * 100)}%`;
    }
    if (isBlock(value)) {
      const tier = DBLOCK_TIERS[value];
      return `Block (Tier ${tier})`;
    }
    return "Unknown";
  }

  preview.textContent =
    coverageText +
    `Blunt: ${formatValue(preset.blunt, "blunt")} | ` +
    `Slash: ${formatValue(preset.slash, "slash")} | ` +
    `Stab: ${formatValue(preset.stab, "stab")} | ` +
    `Piercing: ${formatValue(preset.piercing, "piercing")} | ` +
    `Fire: ${formatValue(preset.fire, "fire")} | ` +
    `Acid: ${formatValue(preset.acid, "acid")}`;
}

// ============================================================
// TOTALS CALCULATION
// ------------------------------------------------------------
// Aggregates DR/DBLOCK values across all equipped items.
// Highest value per zone/damage type wins.
// ============================================================

function updateTotals() {

const zones = {
  hair:   { blunt: 0, slash: 0, stab: 0, piercing: 0, fire: 0, acid: 0, mode: {} },
  head:   { blunt: 0, slash: 0, stab: 0, piercing: 0, fire: 0, acid: 0, mode: {} },
  right_eye: { blunt: 0, slash: 0, stab: 0, piercing: 0, fire: 0, acid: 0, mode: {} },
  left_eye:  { blunt: 0, slash: 0, stab: 0, piercing: 0, fire: 0, acid: 0, mode: {} },
  ears:   { blunt: 0, slash: 0, stab: 0, piercing: 0, fire: 0, acid: 0, mode: {} },
  nose:   { blunt: 0, slash: 0, stab: 0, piercing: 0, fire: 0, acid: 0, mode: {} },
  mouth:  { blunt: 0, slash: 0, stab: 0, piercing: 0, fire: 0, acid: 0, mode: {} },
  neck:   { blunt: 0, slash: 0, stab: 0, piercing: 0, fire: 0, acid: 0, mode: {} },
  chest:  { blunt: 0, slash: 0, stab: 0, piercing: 0, fire: 0, acid: 0, mode: {} },
  vitals: { blunt: 0, slash: 0, stab: 0, piercing: 0, fire: 0, acid: 0, mode: {} },
  groin:  { blunt: 0, slash: 0, stab: 0, piercing: 0, fire: 0, acid: 0, mode: {} },
  arm_left:  { blunt: 0, slash: 0, stab: 0, piercing: 0, fire: 0, acid: 0, mode: {} },
  arm_right: { blunt: 0, slash: 0, stab: 0, piercing: 0, fire: 0, acid: 0, mode: {} },
  hand_left: { blunt: 0, slash: 0, stab: 0, piercing: 0, fire: 0, acid: 0, mode: {} },
  hand_right:{ blunt: 0, slash: 0, stab: 0, piercing: 0, fire: 0, acid: 0, mode: {} },
  leg_left:  { blunt: 0, slash: 0, stab: 0, piercing: 0, fire: 0, acid: 0, mode: {} },
  leg_right: { blunt: 0, slash: 0, stab: 0, piercing: 0, fire: 0, acid: 0, mode: {} },
  foot_left:  { blunt: 0, slash: 0, stab: 0, piercing: 0, fire: 0, acid: 0, mode: {} },
  foot_right: { blunt: 0, slash: 0, stab: 0, piercing: 0, fire: 0, acid: 0, mode: {} }
};


  for (const z in zones) {
    zones[z] = {
      blunt: 0, slash: 0, stab: 0, piercing: 0, fire: 0, acid: 0,
      mode: {}
    };
  }

  const equipped = [
    document.getElementById("headSlot").value,
    document.getElementById("maskSlot").value,
	document.getElementById("neckSlot").value,
    document.getElementById("armorSlot").value,
	document.getElementById("underarmorSlot").value,
	document.getElementById("wristsSlot").value,
	document.getElementById("glovesSlot").value,
	document.getElementById("feetSlot").value,
    document.getElementById("legsSlot").value
  ].map(name => ITEMS.find(i => i.name === name));

  equipped.forEach(item => {
    if (!item) return;

    const preset = ARMOR_PRESETS[item.armorPreset];
    const expanded = expandCoverage(item.coverage);

    expanded.forEach(zone => {
      for (const dmg in preset) {
        const value = preset[dmg];

        if (dmg === "blunt" || dmg === "fire" || dmg === "acid") {
          const reduction = DR_VALUES[value];
          if (reduction > zones[zone][dmg]) {
            zones[zone][dmg] = reduction;
            zones[zone].mode[dmg] = "reduce";
          }
        } else {
          const tier = DBLOCK_TIERS[value];
          if (tier > zones[zone][dmg]) {
            zones[zone][dmg] = tier;
            zones[zone].mode[dmg] = "block";
          }
        }
      }
    });
  });

  for (const zone in zones) {
    const Z = zone.charAt(0).toUpperCase() + zone.slice(1);

    ["blunt", "slash", "stab", "piercing", "fire", "acid"].forEach(dmg => {
      const cell = document.getElementById(
        `zone${Z}${dmg.charAt(0).toUpperCase() + dmg.slice(1)}`
      );
      const val = zones[zone][dmg];
      const mode = zones[zone].mode[dmg] || "-";

      if (mode === "reduce") {
        const pct = Math.round(val * 100);   // DR percent
        const p = pct / 50;                  // normalize 0–50 → 0–1
        cell.innerHTML = `Reduce - ${pct}%`;
        cell.style.color = armorColor(p);
      }

      else if (mode === "block") {
        const tier = val;                    // DBLOCK tier 0–4
        const p = tier / 4;                  // normalize 0–4 → 0–1
        cell.innerHTML = `Tier ${tier}`;
        cell.style.color = armorColor(p);
      }

      else {
        cell.textContent = "-";
        cell.style.color = "#ccc";
      }
    });
  }
}

window.addEventListener("load", () => {
  ITEMS = window.ITEMS;
  populateSlots();
  updateTotals();
});
