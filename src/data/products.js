export const catalogData = [
  {
    id: "1",
    slug: "haitian-150t-injection-molding-machine",
    title: "150T High-Precision Injection Molding Machine",
    category: "Injection Molding",
    description: "A highly efficient, energy-saving 150-ton injection molding machine built for precision manufacturing. Ideal for producing thin-walled and medium-sized plastic components with incredibly fast cycle times.",
    images: [
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
    ],
    specs: {
      "Clamping Force": "150T",
      "Screw Diameter": "45mm",
      "Shot Weight": "220g",
      "Tie Bar Space": "460x460 (mm)",
      "Condition": "Refurbished / Excellent"
    },
    updatedAt: new Date().toISOString()
  },
  {
    id: "2",
    slug: "cnc-milling-center-vmc850",
    title: "VMC-850 Precision CNC Machining Center",
    category: "General Industrial",
    description: "Robust vertical machining center designed for heavy-duty industrial milling operations. Features enhanced spindle speeds and automated tool changers.",
    images: [
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800"
    ],
    specs: {
      "Table Size": "1000x500 (mm)",
      "Max Spindle Speed": "8000 RPM",
      "Axis Travel (X/Y/Z)": "800/500/550 mm",
      "Condition": "New"
    },
    updatedAt: new Date().toISOString()
  },
  {
    id: "3",
    slug: "industrial-water-chiller-10hp",
    title: "10HP Industrial Water Chiller Unit",
    category: "Accessories",
    description: "Critical auxiliary equipment to ensure stable temperature control during rapid injection molding operations, drastically improving output quality.",
    images: [
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800"
    ],
    specs: {
      "Cooling Capacity": "10 HP (30kW)",
      "Temperature Range": "5°C - 30°C",
      "Refrigerant": "R407C",
      "Condition": "New"
    },
    updatedAt: new Date().toISOString()
  }
];

export async function getMachines() {
  return catalogData;
}

export async function getMachineBySlug(slug) {
  return catalogData.find(m => m.slug === slug) || null;
}
