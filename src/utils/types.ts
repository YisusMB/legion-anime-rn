export type Anime = {
    id: string,
    title: string,
    isFavorite: boolean,
    viewCount: number,
    image: string | undefined,
    lastSeenEpisode: number,
    description?: string,
}