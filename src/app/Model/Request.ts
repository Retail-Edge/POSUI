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