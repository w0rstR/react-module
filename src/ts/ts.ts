export interface IRocket{
    mission_name:string,
    launch_date_local:string,
}

interface ILaunchSite{
    site_name_long:string
}

interface ILinks{
    article_link:null,
    video_link:string
}

interface IRocketDescription{
    rocket_name:string,
    first_stage:IFirstStage
    second_stage: ISecondStage
}

interface IFirstStage{
    cores:Array<ICore>
}

interface ICore{
    flight:number,
    core:ISubCore
}

interface ISubCore {
    reuse_count:number,
    status:string
}

interface ISecondStage{
    payloads:Array<Peyload>
}
interface Peyload{
    payload_type:string,
    payload_mass_kg:number,
    payload_mass_lbs:number
}