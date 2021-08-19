export interface ExecutionSummary
{
    serviceName : String,
    endpoint : String,
    executionCount : number,
    errorCount : number
}

export interface LineItem
{
    sku : string,
    productDescription : string,
    billedQty : number,
    unitPrice : number,
    extPrice? : number
}

export interface Inventory
{
    sku : string,
    productDescription : string,
    stockQty : number,
    orderQty : number,
    backorderQty : number
    unitCost : number,
    unitPrice : number,
    maxPrice : number,
    minimumQty : number,
    maximumQty : number
}