export interface TierTableData {
  buy: number;
  sell: {
    type: "yield" | "tier";
    value: number;
  };
  seed: number;
}
