//Modelo que devuelve la API

//Modelo completo
export interface issuesListInterface{
    total_count: Int16Array,
    incomplete_results: boolean,
    items: Array<issuesItemInterface>

}


//Cuerpo de la issue
export interface issuesItemInterface{

    url?: string;
    repository_url?: string;
    labels_url?: string;
    comments_url?:string;
    events_url?: string;
    html_url?:string;
    id?: Int16Array;
    node_id?: string;
    number?: Int16Array;
    title?: string,
    user?:userInterface
}
//Cuerpo usuario
export interface userInterface{
   
        login?: string;
        id?: Int16Array;
        node_id?: string;
        avatar_url?: string;
        gravatar_id?:string;
        url?: string;
        html_url?: string;
        followers_url?:string;
        following_url?: string;
        gists_url?:string;
        starred_url?: string;
        subscriptions_url?:string;
        organizations_url?: string;
        repos_url?: string;
        events_url?: string;
        received_events_url?: string;
        type?: string;
        site_admin?: boolean

}