import { TierTableData } from "../types/TierTableData";

const getTierTable = (strategy: string): TierTableData[] => {
  if (strategy === "7tier") {
    return [
      {
        buy: 0,
        sell: {
          type: "yield",
          value: 6
        },
        seed: (1 / 6) * 100
      },
      {
        buy: -5,
        sell: {
          type: "tier",
          value: 1
        },
        seed: (1 / 6) * 100
      },
      {
        buy: -5,
        sell: {
          type: "tier",
          value: 2
        },
        seed: (1 / 6) * 100
      },
      {
        buy: -7,
        sell: {
          type: "tier",
          value: 3
        },
        seed: (1 / 6) * 100
      },
      {
        buy: -7,
        sell: {
          type: "yield",
          value: 26
        },
        seed: (1 / 6) * 100
      },
      {
        buy: -15,
        sell: {
          type: "tier",
          value: 2
        },
        seed: (1 / 12) * 100
      },
      {
        buy: -20,
        sell: {
          type: "tier",
          value: 2
        },
        seed: (1 / 12) * 100
      }
    ];
  } else if (strategy === "new_poten_13tier") {
    return [
      {
        buy: 0,
        sell: {
          type: "yield",
          value: 6
        },
        seed: (1 / 6) * 100
      },
      {
        buy: -1.5,
        sell: {
          type: "yield",
          value: 4
        },
        seed: (1 / 12) * 100
      },
      {
        buy: -1.5,
        sell: {
          type: "yield",
          value: 4
        },
        seed: (1 / 12) * 100
      },
      {
        buy: -1.5,
        sell: {
          type: "yield",
          value: 4
        },
        seed: (1 / 12) * 100
      },
      {
        buy: -1,
        sell: {
          type: "yield",
          value: 5
        },
        seed: (1 / 12) * 100
      },
      {
        buy: -2,
        sell: {
          type: "yield",
          value: 7
        },
        seed: (1 / 12) * 100
      },
      {
        buy: -2.5,
        sell: {
          type: "yield",
          value: 7
        },
        seed: (1 / 12) * 100
      },
      {
        buy: -2.5,
        sell: {
          type: "yield",
          value: 8
        },
        seed: (1 / 12) * 100
      },
      {
        buy: -2.5,
        sell: {
          type: "yield",
          value: 9
        },
        seed: (1 / 12) * 100
      },
      {
        buy: -7,
        sell: {
          type: "tier",
          value: 2
        },
        seed: (1 / 24) * 100
      },
      {
        buy: -7,
        sell: {
          type: "tier",
          value: 2
        },
        seed: (1 / 24) * 100
      },
      {
        buy: -15,
        sell: {
          type: "tier",
          value: 2
        },
        seed: (1 / 24) * 100
      },
      {
        buy: -20,
        sell: {
          type: "tier",
          value: 2
        },
        seed: (1 / 24) * 100
      }
    ];
  } else if (strategy === "new_poten_17tier") {
    return [
      {
        buy: 0,
        sell: {
          type: "yield",
          value: 6
        },
        seed: (1 / 6) * 100
      },
      {
        buy: -1.5,
        sell: {
          type: "yield",
          value: 4
        },
        seed: (1 / 12) * 100
      },
      {
        buy: -1.5,
        sell: {
          type: "yield",
          value: 4
        },
        seed: (1 / 12) * 100
      },
      {
        buy: -1.5,
        sell: {
          type: "yield",
          value: 4
        },
        seed: (1 / 12) * 100
      },
      {
        buy: -1,
        sell: {
          type: "yield",
          value: 5
        },
        seed: (1 / 12) * 100
      },
      {
        buy: -2,
        sell: {
          type: "yield",
          value: 7
        },
        seed: (1 / 12) * 100
      },
      {
        buy: -2.5,
        sell: {
          type: "yield",
          value: 7
        },
        seed: (1 / 12) * 100
      },
      {
        buy: -2.5,
        sell: {
          type: "yield",
          value: 8
        },
        seed: (1 / 12) * 100
      },
      {
        buy: -2.5,
        sell: {
          type: "yield",
          value: 9
        },
        seed: (1 / 12) * 100
      },
      {
        buy: -4,
        sell: {
          type: "tier",
          value: 2
        },
        seed: (1 / 24) * 100
      },
      {
        buy: -4,
        sell: {
          type: "tier",
          value: 2
        },
        seed: (1 / 24) * 100
      },
      {
        buy: -4,
        sell: {
          type: "tier",
          value: 2
        },
        seed: (1 / 48) * 100
      },
      {
        buy: -4,
        sell: {
          type: "tier",
          value: 2
        },
        seed: (1 / 48) * 100
      },
      {
        buy: -8,
        sell: {
          type: "tier",
          value: 2
        },
        seed: (1 / 96) * 100
      },
      {
        buy: -8,
        sell: {
          type: "tier",
          value: 2
        },
        seed: (1 / 96) * 100
      },
      {
        buy: -12,
        sell: {
          type: "tier",
          value: 2
        },
        seed: (1 / 96) * 100
      },
      {
        buy: -12,
        sell: {
          type: "tier",
          value: 2
        },
        seed: (1 / 96) * 100
      }
    ];
  } else if (strategy === "new_poten_20tier") {
    return [
      {
        buy: 0,
        sell: {
          type: "yield",
          value: 6
        },
        seed: (1 / 6) * 100
      },
      {
        buy: -1.5,
        sell: {
          type: "yield",
          value: 4
        },
        seed: (1 / 12) * 100
      },
      {
        buy: -1.5,
        sell: {
          type: "yield",
          value: 4
        },
        seed: (1 / 12) * 100
      },
      {
        buy: -1.5,
        sell: {
          type: "yield",
          value: 4
        },
        seed: (1 / 12) * 100
      },
      {
        buy: -1,
        sell: {
          type: "yield",
          value: 5
        },
        seed: (1 / 12) * 100
      },
      {
        buy: -2,
        sell: {
          type: "yield",
          value: 7
        },
        seed: (1 / 12) * 100
      },
      {
        buy: -2.5,
        sell: {
          type: "yield",
          value: 7
        },
        seed: (1 / 12) * 100
      },
      {
        buy: -2.5,
        sell: {
          type: "yield",
          value: 8
        },
        seed: (1 / 12) * 100
      },
      {
        buy: -2.5,
        sell: {
          type: "yield",
          value: 9
        },
        seed: (1 / 12) * 100
      },
      {
        buy: -4,
        sell: {
          type: "tier",
          value: 2
        },
        seed: (1 / 48) * 100
      },
      {
        buy: -4,
        sell: {
          type: "tier",
          value: 2
        },
        seed: (1 / 48) * 100
      },
      {
        buy: -4,
        sell: {
          type: "tier",
          value: 2
        },
        seed: (1 / 48) * 100
      },
      {
        buy: -4,
        sell: {
          type: "tier",
          value: 2
        },
        seed: (1 / 48) * 100
      },
      {
        buy: -10,
        sell: {
          type: "tier",
          value: 2
        },
        seed: (1 / 48) * 100
      },
      {
        buy: -10,
        sell: {
          type: "tier",
          value: 2
        },
        seed: (1 / 96) * 100
      },
      {
        buy: -12,
        sell: {
          type: "tier",
          value: 2
        },
        seed: (1 / 96) * 100
      },
      {
        buy: -12,
        sell: {
          type: "tier",
          value: 2
        },
        seed: (1 / 96) * 100
      },
      {
        buy: -12,
        sell: {
          type: "tier",
          value: 2
        },
        seed: (1 / 96) * 100
      },
      {
        buy: -12,
        sell: {
          type: "tier",
          value: 2
        },
        seed: (1 / 96) * 100
      },
      {
        buy: -12,
        sell: {
          type: "tier",
          value: 2
        },
        seed: (1 / 96) * 100
      }
    ];
  } else if (strategy === "del_poten_20tier") {
    return [
      {
        buy: 0,
        sell: {
          type: "yield",
          value: 6
        },
        seed: (1 / 6) * 100
      },
      {
        buy: -1.5,
        sell: {
          type: "yield",
          value: 4
        },
        seed: (7 / 114) * 100
      },
      {
        buy: -1.5,
        sell: {
          type: "yield",
          value: 4
        },
        seed: (7 / 114) * 100
      },
      {
        buy: -1.5,
        sell: {
          type: "yield",
          value: 4
        },
        seed: (7 / 114) * 100
      },
      {
        buy: -1,
        sell: {
          type: "yield",
          value: 5
        },
        seed: (7 / 114) * 100
      },
      {
        buy: -2,
        sell: {
          type: "yield",
          value: 7
        },
        seed: (7 / 114) * 100
      },
      {
        buy: -2.5,
        sell: {
          type: "yield",
          value: 7
        },
        seed: (7 / 114) * 100
      },
      {
        buy: -2.5,
        sell: {
          type: "yield",
          value: 8
        },
        seed: (7 / 114) * 100
      },
      {
        buy: -2.5,
        sell: {
          type: "yield",
          value: 9
        },
        seed: (7 / 114) * 100
      },
      {
        buy: -4,
        sell: {
          type: "tier",
          value: 2
        },
        seed: (5 / 114) * 100
      },
      {
        buy: -4,
        sell: {
          type: "tier",
          value: 2
        },
        seed: (4 / 114) * 100
      },
      {
        buy: -4,
        sell: {
          type: "tier",
          value: 2
        },
        seed: (4 / 114) * 100
      },
      {
        buy: -4,
        sell: {
          type: "tier",
          value: 2
        },
        seed: (4 / 114) * 100
      },
      {
        buy: -10,
        sell: {
          type: "tier",
          value: 2
        },
        seed: (4 / 114) * 100
      },
      {
        buy: -10,
        sell: {
          type: "tier",
          value: 2
        },
        seed: (3 / 114) * 100
      },
      {
        buy: -12,
        sell: {
          type: "tier",
          value: 2
        },
        seed: (3 / 114) * 100
      },
      {
        buy: -12,
        sell: {
          type: "tier",
          value: 2
        },
        seed: (3 / 114) * 100
      },
      {
        buy: -12,
        sell: {
          type: "tier",
          value: 2
        },
        seed: (3 / 114) * 100
      },
      {
        buy: -12,
        sell: {
          type: "tier",
          value: 2
        },
        seed: (3 / 114) * 100
      },
      {
        buy: -12,
        sell: {
          type: "tier",
          value: 2
        },
        seed: (3 / 114) * 100
      }
    ];
  } else if (strategy === "del_poten_26tier") {
    return [
      { buy: 0, sell: { type: "yield", value: 6.0 }, seed: 8.33 },
      { buy: -1.5, sell: { type: "yield", value: 4.0 }, seed: 6.25 },
      { buy: -1.5, sell: { type: "yield", value: 4.0 }, seed: 6.25 },
      { buy: -1.5, sell: { type: "tier", value: 2 }, seed: 6.25 },
      { buy: -1.5, sell: { type: "tier", value: 3 }, seed: 6.25 },
      { buy: -1.5, sell: { type: "tier", value: 4 }, seed: 6.25 },
      { buy: -2.5, sell: { type: "tier", value: 5 }, seed: 6.25 },
      { buy: -2.5, sell: { type: "tier", value: 6 }, seed: 4.17 },
      { buy: -2.5, sell: { type: "tier", value: 7 }, seed: 4.17 },
      { buy: -2.5, sell: { type: "tier", value: 8 }, seed: 4.17 },
      { buy: -3.5, sell: { type: "tier", value: 9 }, seed: 4.17 },
      { buy: -3.5, sell: { type: "tier", value: 10 }, seed: 4.17 },
      { buy: -3.5, sell: { type: "tier", value: 11 }, seed: 4.17 },
      { buy: -5.0, sell: { type: "tier", value: 13 }, seed: 4.17 },
      { buy: -5.0, sell: { type: "tier", value: 14 }, seed: 4.17 },
      { buy: -7.0, sell: { type: "tier", value: 15 }, seed: 2.08 },
      { buy: -7.0, sell: { type: "tier", value: 16 }, seed: 2.08 },
      { buy: -7.0, sell: { type: "tier", value: 17 }, seed: 2.08 },
      { buy: -7.0, sell: { type: "tier", value: 18 }, seed: 2.08 },
      { buy: -7.0, sell: { type: "tier", value: 19 }, seed: 2.08 },
      { buy: -7.0, sell: { type: "tier", value: 20 }, seed: 2.08 },
      { buy: -7.0, sell: { type: "tier", value: 21 }, seed: 2.08 },
      { buy: -10.0, sell: { type: "tier", value: 22 }, seed: 2.08 },
      { buy: -10.0, sell: { type: "tier", value: 23 }, seed: 2.08 },
      { buy: -10.0, sell: { type: "tier", value: 24 }, seed: 1.04 },
      { buy: -10.0, sell: { type: "tier", value: 25 }, seed: 1.04 }
    ];
  }

  return [];
};

export { getTierTable };
