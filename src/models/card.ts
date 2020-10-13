import { Url } from 'url';

export interface Card {
    id: number,
    title: string,
    about: string,
    url?: Url
}