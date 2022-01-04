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
  }

  return [];
};

export { getTierTable };
