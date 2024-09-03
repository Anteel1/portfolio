type ApiResponse<T> = {
    message: string;
    status: number;
    data: T;
  };

type BasicResponse = {
  message : string
}

type StockResponse = {
  exchange : string,
  indexId  : string,
  indexValue : number,
  preIndexValue: number,
  time : number,
  latestValue : any,
  change : number,
  changePercent : number,
  totalQttyPT : number,
  chartOpen : number,
  advances : number,
  allQty : number,
  allValue: number,
  chartHigh: number,
  chartLow : number,
  declines:number,
  timeMaker:number,
  nochages:number,
  totalQtty:number,
  totalValue:number,
  history: any,
  totalBuyForeinQtty: number,
  totalSellForeignQtty:number,
  label:string,
  exchangeLabel:string
}