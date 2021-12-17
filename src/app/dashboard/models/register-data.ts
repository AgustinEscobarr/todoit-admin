export class Vehicle{
    constructor(public id=0, public name:string,public isDeleted=0){
        this.id=id;
        this.name=name;
        this.isDeleted=isDeleted
    }
}
export class Rol{
    constructor(public id:number, public name:string,public isDeleted=0){
        this.id=id;
        this.name=name;
        this.isDeleted=isDeleted

    }
}




export class RegisterData{
    constructor(public id?:number, public email?:string,public fullName?:string, public cellPhone?:string,
         public isAccepted?:boolean, public isDeleted?:boolean, public observations?:string, public password? :string,
         public vehicle? :Vehicle, public rol? :Rol){
        this.id=id;
        this.email=email;
        this.fullName=fullName;
        this.cellPhone=cellPhone;
        this.isAccepted=isAccepted;
        this.isDeleted=isDeleted;
        this.observations=observations,
        this.password=password;
        this.vehicle=vehicle;
        this.rol=rol;
    }
}