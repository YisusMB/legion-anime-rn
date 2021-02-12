export type Anime = {
    id: number,
    title: string,
    isFavorite: boolean,
    viewCount: number,
    image: string | undefined,
    lastSeenEpisode: number,
    description?: string,
}