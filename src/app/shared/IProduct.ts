import { IPicture } from './IPicture';
import { ISpec } from './ISpec';


export interface IProduct
{
    ID: number;
    Name: string;
    DateOfRelease: string;
    price: number;
    imageUrl: string;
    rating: number;
    shortDescription: string;
    images: IPicture[];
    specs: ISpec[];
    type: string;
}
