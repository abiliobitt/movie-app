export const convertRatingToScale5 = (ratingString: string): number => {
    const rating = Number(ratingString)
    if (rating < 1 || rating > 10) {
        console.error('Rating must be between 1 and 10')
        return 0
    }
    const convertedRating = Math.round((rating / 10) * 5)
  
    return convertedRating
}