export const collectionsData = [
  {
    title: "Medical & Pharmaceutical Solutions",
    description: "Products developed to meet healthcare and pharmaceutical standards.",
    subcategories: [
      {
        title: "PharmaPack Products",
        products: [
          {
            id: 1,
            slug: "purified-water",
            name: "Purified Water",
            category: "medical",
            indexImage: "purified-water.jpg",
            keySpecifications: [
              { spec: "Volume", value: "500ml" },
              { spec: "Purity", value: "99.9%" },
              { spec: "Shelf Life", value: "2 years" }
            ],
            features: [
              "Sterile and safe",
              "Meets USP standards",
              "Convenient packaging"
            ],
            pharmapack: {
              image: "pharmapack-purified-water.jpg",
              uniqueFeatures: [
                "Processed for medical use",
                "Ideal for antibiotic dissolution",
                "Safe for baby formulations"
              ]
            }
          },
          {
            id: 2,
            slug: "paraffin-gauze-dressings",
            name: "Paraffin Gauze Dressings",
            category: "medical",
            indexImage: "paraffin-gauze-dressings.jpg",
            keySpecifications: [
              { spec: "Quantity", value: "10 dressings per pack" },
              { spec: "Size", value: "10x10 cm" },
              { spec: "Shelf Life", value: "3 years" }
            ],
            features: [
              "Sterile packaging",
              "Non-adherent",
              "Promotes healing"
            ],
            pharmapack: {
              image: "pharmapack-paraffin-gauze-dressings.jpg",
              uniqueFeatures: [
                "Soothes burns and wounds",
                "Maintains moist wound environment",
                "Easy to apply and remove"
              ]
            }
          },
          {
            id: 3,
            slug: "sea-salt-water",
            name: "Sea Salt Water",
            category: "medical",
            indexImage: "sea-salt-water.jpg",
            keySpecifications: [
              { spec: "Volume", value: "250ml" },
              { spec: "Active Ingredient", value: "Sodium Chloride 0.9%" },
              { spec: "Shelf Life", value: "2 years" }
            ],
            features: [
              "Medical-grade saline",
              "Non-irritating",
              "Multi-purpose use"
            ],
            pharmapack: {
              image: "pharmapack-sea-salt-water.jpg",
              uniqueFeatures: [
                "Suitable for wound irrigation",
                "Safe for cosmetic applications",
                "Sterile and preservative-free"
              ]
            }
          },
          {
            id: 4,
            slug: "lubricant-gels-medical",
            name: "Lubricant Gels (Medical Use)",
            category: "medical",
            indexImage: "lubricant-gels-medical.jpg",
            keySpecifications: [
              { spec: "Volume", value: "100ml" },
              { spec: "Material", value: "Water-based gel" },
              { spec: "Shelf Life", value: "2 years" }
            ],
            features: [
              "Non-irritating",
              "Sterile formula",
              "Easy application"
            ],
            pharmapack: {
              image: "pharmapack-lubricant-gels-medical.jpg",
              uniqueFeatures: [
                "Optimized for ultrasound exams",
                "Hypoallergenic formula",
                "Non-sticky residue"
              ]
            }
          },
          {
            id: 5,
            slug: "povidone-iodine-wipes",
            name: "Povidone Iodine Wipes",
            category: "medical",
            indexImage: "povidone-iodine-wipes.jpg",
            keySpecifications: [
              { spec: "Quantity", value: "100 wipes per pack" },
              { spec: "Active Ingredient", value: "Povidone-Iodine 10%" },
              { spec: "Shelf Life", value: "3 years" }
            ],
            features: [
              "Antiseptic action",
              "Single-use wipes",
              "Portable packaging"
            ],
            pharmapack: {
              image: "pharmapack-povidone-iodine-wipes.jpg",
              uniqueFeatures: [
                "Broad-spectrum disinfection",
                "Non-staining formula",
                "Gentle on skin"
              ]
            }
          },
          {
            id: 6,
            slug: "alcohol-swabs",
            name: "Alcohol Swabs",
            category: "medical",
            indexImage: "alcohol-swabs.jpg",
            keySpecifications: [
              { spec: "Quantity", value: "200 swabs per box" },
              { spec: "Alcohol Content", value: "70% isopropyl" },
              { spec: "Shelf Life", value: "3 years" }
            ],
            features: [
              "Sterile and sealed",
              "Quick-drying",
              "Compact size"
            ],
            pharmapack: {
              image: "pharmapack-alcohol-swabs.jpg",
              uniqueFeatures: [
                "Pre-injection skin prep",
                "High alcohol purity",
                "Individually wrapped"
              ]
            }
          },
          {
            id: 7,
            slug: "face-masks",
            name: "Face Masks",
            category: "medical",
            indexImage: "face-masks.jpg",
            keySpecifications: [
              { spec: "Quantity", value: "50 masks per box" },
              { spec: "Material", value: "Non-woven fabric" },
              { spec: "Shelf Life", value: "2 years" }
            ],
            features: [
              "3-layer protection",
              "Breathable material",
              "Comfortable fit"
            ],
            pharmapack: {
              image: "pharmapack-face-masks.jpg",
              uniqueFeatures: [
                "High filtration efficiency",
                "Adjustable nose clip",
                "Latex-free ear loops"
              ]
            }
          }
        ]
      }
    ]
  },
  {
    title: "Hydrogel Patches",
    description: "Therapeutic patches designed for pain relief and fever management.",
    subcategories: [
      {
        title: "PharmaPack Products",
        products: [
          {
            id: 10,
            slug: "fever-cooling-patches",
            name: "Fever Cooling Patches",
            category: "therapeutic",
            indexImage: "fever-cooling-patches.jpg",
            keySpecifications: [
              { spec: "Quantity", value: "6 patches per pack" },
              { spec: "Active Ingredient", value: "Hydrogel" },
              { spec: "Shelf Life", value: "3 years" }
            ],
            features: [
              "Long-lasting cooling",
              "Safe for all ages",
              "Comfortable fit"
            ],
            pharmapack: {
              image: "pharmapack-fever-cooling-patches.jpg",
              uniqueFeatures: [
                "Instant fever relief",
                "No refrigeration needed",
                "Non-medicated formula"
              ]
            },
            privateLabeling: [
              {
                clientName: "Temp",
                image: [
                   "privatelabeling-fever-cooling-patches-Temp-1.jpg",
                   "privatelabeling-fever-cooling-patches-Temp-2.jpg"
                ],
                uniqueFeatures: [
                  "Custom packaging design",
                  "Branded cooling gel",
                  "Tailored patch sizes"
                ]
              },
              {
                clientName: "Qualita",
                image: [
                  "privatelabeling-fever-cooling-patches-Qualita-1.jpg",
                  "privatelabeling-fever-cooling-patches-Qualita-2.jpg"
                ],
                uniqueFeatures: [
                  "Child-friendly designs",
                  "Extended cooling duration",
                  "Hypoallergenic materials"
                ]
              }
            ]
          },
          {
            id: 11,
            slug: "cold-pain-relieving-patches",
            name: "Cold Pain-Relieving Patches",
            category: "therapeutic",
            indexImage: "cold-pain-relieving-patches.jpg",
            keySpecifications: [
              { spec: "Quantity", value: "5 patches per pack" },
              { spec: "Active Ingredient", value: "Menthol 5%" },
              { spec: "Shelf Life", value: "3 years" }
            ],
            features: [
              "Targeted pain relief",
              "Cooling sensation",
              "Flexible material"
            ],
            pharmapack: {
              image: "pharmapack-cold-pain-relieving-patches.jpg",
              uniqueFeatures: [
                "Soothes muscle aches",
                "Non-greasy adhesive",
                "Up to 8 hours of relief"
              ]
            },
            privateLabeling: [
              {
                clientName: "Sulfax",
                image: "privatelabeling-cold-pain-relieving-patches-Sulfax-1.jpg",
                uniqueFeatures: [
                  "Custom menthol strength",
                  "Branded packaging",
                  "Enhanced adhesive"
                ]
              }
            ]
          },
          {
            id: 12,
            slug: "hot-cold-pain-relieving-patches",
            name: "Hot & Cold Pain-Relieving Patches",
            category: "therapeutic",
            indexImage: "hot-cold-pain-relieving-patches.jpg",
            keySpecifications: [
              { spec: "Quantity", value: "4 patches per pack" },
              { spec: "Material", value: "Non-woven fabric" },
              { spec: "Shelf Life", value: "3 years" }
            ],
            features: [
              "Dual-action relief",
              "Flexible application",
              "Non-medicated"
            ],
            pharmapack: {
              image: "pharmapack-hot-cold-pain-relieving-patches.jpg",
              uniqueFeatures: [
                "Adjustable temperature therapy",
                "Reusable design",
                "Ergonomic fit"
              ]
            },
            privateLabeling: [
              {
                clientName: "Sulfax",
                image: "privatelabeling-hot-cold-pain-relieving-patches-Sulfax-1.jpg",
                uniqueFeatures: [
                  "Custom temperature settings",
                  "Branded reusable packaging",
                  "Enhanced ergonomic design"
                ]
              }
            ]
          },
          {
            id: 13,
            slug: "period-pain-relieving-patches",
            name: "Period Pain-Relieving Patches",
            category: "therapeutic",
            indexImage: "period-pain-relieving-patches.jpg",
            keySpecifications: [
              { spec: "Quantity", value: "5 patches per pack" },
              { spec: "Active Ingredient", value: "Herbal blend" },
              { spec: "Shelf Life", value: "3 years" }
            ],
            features: [
              "Targeted relief",
              "Comfortable wear",
              "Non-irritating"
            ],
            pharmapack: {
              image: "pharmapack-period-pain-relieving-patches.jpg",
              uniqueFeatures: [
                "Natural herbal formula",
                "Long-lasting comfort",
                "Discreet application"
              ]
            },
            privateLabeling: [
              {
                clientName: "Sekoun",
                image: "privatelabeling-period-pain-relieving-patches-Sekoun-1.jpg",
                uniqueFeatures: [
                  "Custom herbal blend",
                  "Branded discreet packaging",
                  "Enhanced adhesive formula"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Personal Care & Cosmetics",
    description: "Products for daily skincare, hygiene, and grooming routines.",
    subcategories: [
      {
        title: "PharmaPack Products",
        products: [
          {
            id: 15,
            slug: "baby-wipes",
            name: "Baby Wipes",
            category: "personal-care",
            indexImage: "baby-wipes.jpg",
            keySpecifications: [
              { spec: "Quantity", value: "72 wipes per pack" },
              { spec: "Material", value: "Non-woven fabric" },
              { spec: "Shelf Life", value: "2 years" }
            ],
            features: [
              "Hypoallergenic",
              "Fragrance-free",
              "Soft texture"
            ],
            pharmapack: {
              image: "pharmapack-baby-wipes.jpg",
              uniqueFeatures: [
                "Enriched with chamomile",
                "pH-balanced for baby skin",
                "Thick and durable"
              ]
            },
            privateLabeling: [
              {
                clientName: "Pharmachem",
                image: "privatelabeling-baby-wipes-Pharmachem.jpg",
                uniqueFeatures: [
                  "Custom packaging design",
                  "Branded hypoallergenic formula",
                  "Eco-friendly materials"
                ]
              },
              {
                clientName: "Eva",
                image: "privatelabeling-baby-wipes-Eva.jpg",
                uniqueFeatures: [
                  "Enhanced chamomile infusion",
                  "Premium quality assurance",
                  "Fast production turnaround"
                ]
              },
              {
                clientName: "Qualita",
                image: "privatelabeling-baby-wipes-Qualita.jpg",
                uniqueFeatures: [
                  "Custom scent options",
                  "Thicker wipe design",
                  "Branded retail packaging"
                ]
              }
            ]
          },
          {
            id: 16,
            slug: "baby-water-wipes",
            name: "Baby Water Wipes",
            category: "personal-care",
            indexImage: "baby-water-wipes.jpg",
            keySpecifications: [
              { spec: "Quantity", value: "80 wipes per pack" },
              { spec: "Material", value: "Non-woven fabric" },
              { spec: "Shelf Life", value: "2 years" }
            ],
            features: [
              "99% water-based",
              "Gentle on skin",
              "Biodegradable"
            ],
            pharmapack: {
              image: "pharmapack-baby-water-wipes.jpg",
              uniqueFeatures: [
                "Minimal ingredients",
                "Safe for newborns",
                "Eco-friendly packaging"
              ]
            },
            privateLabeling: [
              {
                clientName: "Tay",
                image: "privatelabeling-baby-water-wipes-Tay-1.jpg",
                uniqueFeatures: [
                  "Custom biodegradable fabric",
                  "Branded minimalist packaging",
                  "Enhanced purity formula"
                ]
              },
              {
                clientName: "Amazon",
                image: "privatelabeling-baby-water-wipes-Amazon-1.jpg",
                uniqueFeatures: [
                  "Eco-conscious materials",
                  "Premium quality assurance",
                  "Fast production turnaround"
                ]
              },
              {
                clientName: "AmazonA",
                image: "privatelabeling-baby-water-wipes-AmazonA-1.jpg",
                uniqueFeatures: [
                  "Custom water purity levels",
                  "Branded eco-packaging",
                  "Hypoallergenic certification"
                ]
              },
              {
                clientName: "Penduline",
                image: [
                  "privatelabeling-baby-water-wipes-Penduline-1.jpg",
                  "privatelabeling-baby-water-wipes-Penduline-2.jpg"
                ],
                uniqueFeatures: [
                  "Custom wipe thickness",
                  "Branded newborn-safe formula",
                  "Sustainable materials"
                ]
              },
              {
                clientName: "Qualita",
                image: "privatelabeling-baby-water-wipes-Qualita-1.jpg",
                uniqueFeatures: [
                  "Custom eco-friendly packaging",
                  "Premium softness",
                  "Fast production turnaround"
                ]
              }
            ]
          },
          {
            id: 17,
            slug: "makeup-remover-wipes",
            name: "Makeup Remover Wipes",
            category: "personal-care",
            indexImage: "makeup-remover-wipes.jpg",
            keySpecifications: [
              { spec: "Quantity", value: "25 wipes per pack" },
              { spec: "Material", value: "Biodegradable fabric" },
              { spec: "Shelf Life", value: "2 years" }
            ],
            features: [
              "Micellar water infused",
              "Non-irritating",
              "Hydrates skin"
            ],
            pharmapack: {
              image: "pharmapack-makeup-remover-wipes.jpg",
              uniqueFeatures: [
                "Removes waterproof makeup",
                "Enriched with aloe vera",
                "Suitable for sensitive skin"
              ]
            },
            privateLabeling: [
              {
                clientName: "StarVille",
                image:[ 
                  "privatelabeling-makeup-remover-wipes-StraVille-1.jpg",
                  "privatelabeling-makeup-remover-wipes-StraVille-2.jpg"
                ],
                uniqueFeatures: [
                  "Custom micellar formula",
                  "Branded eco-packaging",
                  "Enhanced hydration"
                ]
              },
              {
                clientName: "WipeIt",
                image: "privatelabeling-makeup-remover-wipes-WipeIt-1.jpg",
                uniqueFeatures: [
                  "Custom biodegradable fabric",
                  "Branded retail packaging",
                  "Enhanced cleansing power"
                ]
              },
              {
                clientName: "Eva",
                image: [
                  "privatelabeling-makeup-remover-wipes-Eva-1.jpg",
                  "privatelabeling-makeup-remover-wipes-Eva-2.jpg",
                  "privatelabeling-makeup-remover-wipes-Eva-3.jpg"
                ],
                uniqueFeatures: [
                  "Custom scent options",
                  "Premium softness",
                  "Hypoallergenic formula"
                ]
              },
            ]
          },
          {
            id: 18,
            slug: "mosquito-repellent-wipes",
            name: "Mosquito Repellent Wipes",
            category: "personal-care",
            indexImage: "mosquito-repellent-wipes.jpg",
            keySpecifications: [
              { spec: "Quantity", value: "30 wipes per pack" },
              { spec: "Active Ingredient", value: "DEET 10%" },
              { spec: "Shelf Life", value: "2 years" }
            ],
            features: [
              "Long-lasting protection",
              "Non-greasy",
              "Portable packaging"
            ],
            pharmapack: {
              image: "pharmapack-mosquito-repellent-wipes.jpg",
              uniqueFeatures: [
                "Safe for family use",
                "Pleasant scent",
                "Quick application"
              ]
            },
            privateLabeling: [
              {
                clientName: "Wipe It",
                image: "privatelabeling-mosquito-repellent-wipes-WipeIt.jpg",
                uniqueFeatures: [
                  "Custom DEET concentration",
                  "Branded packaging",
                  "Enhanced scent profile"
                ]
              }
            ]
          },
          {
            id: 19,
            slug: "nail-polish-remover-wipes",
            name: "Nail Polish Remover Wipes",
            category: "personal-care",
            indexImage: "nail-polish-remover-wipes.jpg",
            keySpecifications: [
              { spec: "Quantity", value: "40 wipes per pack" },
              { spec: "Material", value: "Non-woven fabric" },
              { spec: "Shelf Life", value: "2 years" }
            ],
            features: [
              "Acetone-free",
              "Moisturizing formula",
              "Easy to use"
            ],
            pharmapack: {
              image: "pharmapack-nail-polish-remover-wipes.jpg",
              uniqueFeatures: [
                "Removes glitter polish",
                "Enriched with vitamin E",
                "Non-drying formula"
              ]
            },
            privateLabeling: [
              {
                clientName: "Ciliver",
                image: "privatelabeling-nail-polish-remover-wipes-Ciliver-1.jpg",
                uniqueFeatures: [
                  "Custom vitamin E infusion",
                  "Branded packaging",
                  "Enhanced glitter removal"
                ]
              }
            ]
          },
          {
            id: 20,
            slug: "alcohol-wipes",
            name: "Alcohol Wipes",
            category: "personal-care",
            indexImage: "alcohol-wipes.jpg",
            keySpecifications: [
              { spec: "Quantity", value: "50 wipes per pack" },
              { spec: "Alcohol Content", value: "70% isopropyl" },
              { spec: "Shelf Life", value: "2 years" }
            ],
            features: [
              "Quick-drying",
              "Antimicrobial action",
              "Portable size"
            ],
            pharmapack: {
              image: "pharmapack-alcohol-wipes.jpg",
              uniqueFeatures: [
                "Sterile for hygiene",
                "Soft non-woven material",
                "Resealable packaging"
              ]
            }
          },
          {
            id: 21,
            slug: "antiseptic-wipes",
            name: "Antiseptic Wipes",
            category: "personal-care",
            indexImage: "antiseptic-wipes.jpg",
            keySpecifications: [
              { spec: "Quantity", value: "50 wipes per pack" },
              { spec: "Active Ingredient", value: "Benzalkonium Chloride 0.13%" },
              { spec: "Shelf Life", value: "2 years" }
            ],
            features: [
              "Alcohol-free",
              "Broad-spectrum antimicrobial",
              "Gentle on skin"
            ],
            pharmapack: {
              image: "pharmapack-antiseptic-wipes.jpg",
              uniqueFeatures: [
                "Safe for frequent use",
                "Non-irritating formula",
                "Resealable pack"
              ]
            },
            privateLabeling: [
              {
                clientName: "Clorox",
                image: [
                  "privatelabeling-antiseptic-wipes-Clorox-1.jpg",
                  "privatelabeling-antiseptic-wipes-Clorox-2.jpg"
                ],
                uniqueFeatures: [
                  "Custom antimicrobial formula",
                  "Branded resealable packaging",
                  "Enhanced skin gentleness"
                ]
              },
              {
                clientName: "Qualita",
                image: [
                  "privatelabeling-antiseptic-wipes-Qualita-1.jpg",
                  "privatelabeling-antiseptic-wipes-Qualita-2.jpg",
                  "privatelabeling-antiseptic-wipes-Qualita-3.jpg"
                ],
                uniqueFeatures: [
                  "Eco-friendly materials",
                  "Premium quality assurance",
                  "Fast production turnaround"
                ]
              },
            ]
          },
          {
            id: 22,
            slug: "hand-and-body-wipes",
            name: "Hand and Body Wipes",
            category: "personal-care",
            indexImage: "hand-and-body-wipes.jpg",
            keySpecifications: [
              { spec: "Quantity", value: "80 wipes per pack" },
              { spec: "Material", value: "Non-woven fabric" },
              { spec: "Shelf Life", value: "2 years" }
            ],
            features: [
              "Moisturizing formula",
              "Large wipe size",
              "Multi-purpose use"
            ],
            pharmapack: {
              image: "pharmapack-hand-and-body-wipes.jpg",
              uniqueFeatures: [
                "Infused with aloe vera",
                "Gentle for all skin types",
                "Travel-friendly pack"
              ]
            },
            privateLabeling: [
              {
                clientName: "Bemart",
                image: "privatelabeling-hand-and-body-wipes-Bemart-1.jpg",
                uniqueFeatures: [
                  "Custom aloe vera infusion",
                  "Branded travel packaging",
                  "Enhanced moisturizing formula"
                ]
              },
              {
                clientName: "Qualita",
                image: ["privatelabeling-hand-and-body-wipes-Qualita-1.jpg",
                    "privatelabeling-hand-and-body-wipes-Qualita-2.jpg"
                ],
                uniqueFeatures: [
                  "Eco-friendly materials",
                  "Premium quality assurance",
                  "Fast production turnaround"
                ]
              },
              {
                clientName: "Eva",
                image: "privatelabeling-hand-and-body-wipes-Eva-1.jpg",
                uniqueFeatures: [
                  "Custom wipe size",
                  "Branded retail packaging",
                  "Enhanced skin hydration"
                ]
              },
            ]
          },
          {
            id: 23,
            slug: "face-sheet-masks",
            name: "Face Sheet Masks",
            category: "personal-care",
            indexImage: "face-sheet-masks.jpg",
            keySpecifications: [
              { spec: "Quantity", value: "5 masks per pack" },
              { spec: "Material", value: "Biodegradable fabric" },
              { spec: "Shelf Life", value: "2 years" }
            ],
            features: [
              "Hydrating formula",
              "Fits all face shapes",
              "Single-use masks"
            ],
            pharmapack: {
              image: "pharmapack-face-sheet-masks.jpg",
              uniqueFeatures: [
                "Infused with hyaluronic acid",
                "Promotes radiant skin",
                "Eco-friendly materials"
              ]
            },
            privateLabeling: [
              {
                clientName: "Mother Naked",
                image: "privatelabeling-face-sheet-masks-MotherNaked-1.jpg",
                uniqueFeatures: [
                  "Custom hyaluronic acid formula",
                  "Branded eco-packaging",
                  "Enhanced skin radiance"
                ]
              },
              {
                clientName: "Like",
                image: "privatelabeling-face-sheet-masks-Like-1.jpg",
                uniqueFeatures: [
                  "Custom biodegradable fabric",
                  "Premium quality assurance",
                  "Fast production turnaround"
                ]
              }
            ]
          },
          {
            id: 24,
            slug: "under-eye-patches",
            name: "Under-Eye Patches",
            category: "personal-care",
            indexImage: "under-eye-patches.jpg",
            keySpecifications: [
              { spec: "Quantity", value: "10 pairs per pack" },
              { spec: "Material", value: "Hydrogel" },
              { spec: "Shelf Life", value: "2 years" }
            ],
            features: [
              "Reduces puffiness",
              "Hydrates delicate skin",
              "Easy to apply"
            ],
            pharmapack: {
              image: "pharmapack-under-eye-patches.jpg",
              uniqueFeatures: [
                "Collagen-infused formula",
                "Targets dark circles",
                "Non-slip design"
              ]
            },
            privateLabeling: [
              {
                clientName: "MotherNaked",
                image: [
                  "privatelabeling-under-eye-patches-MotherNaked-1.jpg",
                  "privatelabeling-under-eye-patches-MotherNaked-2.jpg",
                  "privatelabeling-under-eye-patches-MotherNaked-3.jpg"
                ],
                uniqueFeatures: [
                  "Custom collagen formula",
                  "Branded packaging",
                  "Enhanced anti-puffiness"
                ]
              },
            ]
          },
          {
            id: 25,
            slug: "hand-sanitizers",
            name: "Hand Sanitizers",
            category: "personal-care",
            indexImage: "hand-sanitizers.jpg",
            keySpecifications: [
              { spec: "Volume", value: "100ml" },
              { spec: "Alcohol Content", value: "70% ethyl alcohol" },
              { spec: "Shelf Life", value: "2 years" }
            ],
            features: [
              "Kills 99.9% of germs",
              "Non-sticky",
              "Travel-friendly"
            ],
            pharmapack: {
              image: "pharmapack-hand-sanitizers.jpg",
              uniqueFeatures: [
                "Moisturizing with aloe vera",
                "Quick-drying formula",
                "Compact bottle design"
              ]
            }
          },
          {
            id: 26,
            slug: "lubricant-gel",
            name: "Lubricant Gel",
            category: "personal-care",
            indexImage: "lubricant-gel.jpg",
            keySpecifications: [
              { spec: "Volume", value: "100ml" },
              { spec: "Material", value: "Water-based gel" },
              { spec: "Shelf Life", value: "2 years" }
            ],
            features: [
              "Non-irritating",
              "Long-lasting",
              "Easy to apply"
            ],
            pharmapack: {
              image: "pharmapack-lubricant-gel.jpg",
              uniqueFeatures: [
                "Hypoallergenic formula",
                "Safe for sensitive skin",
                "Non-sticky residue"
              ]
            }
          }
        ]
      }
    ]
  }
];