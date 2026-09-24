# **Azure Peak Gear Planner**

A lightweight browser tool for calculating armor coverage and protection values for **SS13 Azure Peak**.  
It lets players mix and match gear, preview DR/DBLOCK values, and see exactly which body zones each item protects.

---

## **How to use**
Download the files in a folder and open APGearPlanner with your browser of choice.

## **Features**

- DR/DBLOCK breakdown for every damage type  
- Full body coverage map
- Multi‑slot items 
- Weight‑based filtering
- Easy to extend with custom items or variants

---

## **Item Definitions**

All gear lives in small modular files like:

- `armor.js`  
- `hat.js`  
- `mask.js`  
- `gloves.js`  
- `feet.js`  
- `legs.js`  
- `neck.js`

Each file adds items to the global `window.ITEMS` array.

### **Item Format**
```js
{
  name: "Item Name",
  slot: "armor",              // or ["armor", "underarmor"]
  weight: "light",            // light / medium / heavy
  armorPreset: "ARMOR_PLATE", // defined in script.js
  coverage: HEAD | CHEST,     // bitflags from script.js
  variants: ["Alt A", "Alt B"] // optional cosmetic names
}
```

### **Variants**
Variants are **cosmetic only** — same stats, different names in the dropdown.

### **Coverage**
Coverage uses bitflags (HEAD, FACE, LEGS, FULL_HEAD, etc.) defined in `script.js`.  
These match the game's code to make it easier to add items.

---

## **Adding New Items**

1. Open the appropriate item file.  
2. Copy an existing entry.  
3. Change:
   - `name`
   - `slot`
   - `weight`
   - `armorPreset`
   - `coverage`
   - `variants` (optional)
4. Make sure the preset exists in `script.js → ARMOR_PRESETS`.  
5. Save and refresh the planner.

No other changes needed.

---

## **Purpose**

Theorycrafting armor is fun, right? Maybe.
