export interface BacktestResponseData {
  market: string;
  seed: number;
  start_date: string;
  end_date: string;
  avatar_profit_list: number[];
  avatar_money_list: number[];
  avatar_coin_list: number[];
  trade_list: {
    datetime: string;
    type: "buy" | "sell";
    tier: number;
    price: number;
    count: number;
    money: number;
    fee: number;
    profit?: number;
  }[];
  last_coin_price: number;
}
