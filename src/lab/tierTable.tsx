export interface TierTableData {
  buy: number;
  sell: {
    type: "yield" | "tier";
    value: number;
  };
  seed: number;
}

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
  }

  return [];
};

export { getTierTable };
