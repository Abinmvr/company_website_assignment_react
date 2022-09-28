export interface dispalayAchieves{
    title:string,
    image:string,
    details:string
}
export interface displayAbout{
    counter:number,
    text:string
 }
 export interface displayInsights{
    title:string,
    image:string,
    details:string
}
export interface getAchieveProps{
    achievedata:any,
    loading:boolean,
    error:string,
    getAchieve : ()=>void
}
export interface displayFooter{
    head:string,
    text1:string,
    text2:string,
    text3:string,
    text4:string,
    text5:string,

}
export interface employeeProps{
    id:number,
    name:string,
    position:string,
    empimage:any
}
export interface feedprops{
    feedback:string,
    email:string,
}
export interface aboutReducerProps{
    about:string[],
    loading:boolean,
    error:string|null
}
export interface achieveReducerProps{
    achieve:string[],
    loading:boolean,
    error:string|null
}
export interface careerReducerProps{
    join:{
        isjoin : boolean
    },
    submit:{
        issubmit : boolean
    }
}
export interface employeeReducerProps{
    employee:string[],
    detail:string[],
    loading:boolean,
    error:string|null
 }
 export interface feedReducerProps{
    // feedvalue:{
    //    name:string,
    //    email:string
    // },
    feedback:string[],
    loading:boolean,
    error:string|null
}
export interface footerReducerprops{
    footer:string[],
    loading:boolean,
    error:string|null
}
export interface insightReducerprops{
    insight:string[],
    loading:boolean,
    error:string|null
}
export interface loginReducerprops{
    auth:{
        isAuth :boolean,
         authUser :string
        }
}