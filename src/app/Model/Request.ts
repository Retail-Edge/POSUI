export interface ExecutionSummary
{
    serviceName : String,
    endpoint : String,
    executionCount : number,
    errorCount : number
}

export interface LineItem
{
    isAdding : boolean,
    sku? : string,
    productDescription? : string,
    billedQty? : number,
    inStockQty? : number,
    unitPrice? : number,
    extPrice? : number
}

export interface Product
{
    skuId? : string,
    id? : number,
    description? : string
}

export interface Inventory
{
    productMaster : Product,
    inStockQuantity? : number,
    orderQuantity? : number,
    backOrderQuantity? : number
    unitCost? : number,
    unitPrice? : number,
    maxRetailPrice? : number,
    minimumQuantity? : number,
    maximumQuantity? : number,
    lastSaleDate? : Date,
    lastStockDate? : Date
}