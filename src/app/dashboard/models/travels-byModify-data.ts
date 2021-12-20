export interface Travels{
    Cliente:string,
    Dirección:string,
    date:string,
    Estado:string,
    lastStatusTravel:number,
    observation:string,
    isReasigned:boolean,
    cadeteId:number,
    travelId:number
  
  }
  export interface InfoTravelChange{
    newStatus:number,
    elementTravel:Travels
  }