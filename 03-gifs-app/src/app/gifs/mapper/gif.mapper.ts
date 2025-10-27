import { Gif } from "../interfaces/gif.interface";
import { GipyItem } from "../interfaces/giphy.interfaces";

export class GifMapper {
  static mapGiphyItemToGif(giphyItem: GipyItem): Gif {
    return {
      id: giphyItem.id,
      title: giphyItem.title,
      url: giphyItem.images.original.url
    }
  }

  static mapGiphyItemsToGifArray(giphyItems: GipyItem[]): Gif[] {
    return giphyItems.map(this.mapGiphyItemToGif)
  }
}
