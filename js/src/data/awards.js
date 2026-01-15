/**
 * awardsData
 * -----------------------------------------------------------------------------
 * Stores detailed information about the film's awards and festival recognition.
 * 
 * Each award entry includes:
 * - title: The formal name of the award.
 * - subtitle: The recipient (actor or director).
 * - festival: The name of the film festival.
 * - logo: Path to the festival laurel or logo image.
 * - image: A high-quality photo from the award ceremony or a related still.
 * - quote: A congratulatory message or official statement.
 * - imageAlt: Accessibility text for the award image.
 */

const awardsData = {
    'best-canadian-feature': {
        title: "Best Canadian Feature Award",
        subtitle: "Director: Armin Zarringhalam",
        festival: "Vancouver International Youth Film Festival",
        logo: "assets/awards/DCIFF LAUREL _ 2025-2026 New copy 2.png",
        image: "assets/awards/best_canadian_feature.jpg",
        quote: "Congratulations to Armin Zarringhalam for winning the Best Canadian Feature Award at the Vancouver International Youth Film Festival! A testament to his vision and the strength of this powerful story.",
        imageAlt: "Armin Zarringhalam Receiving Best Canadian Feature Award"
    },
    'best-actor': {
        title: "Best Actor Award",
        subtitle: "Ramtin Khorshidi",
        festival: "Vancouver International Youth Film Festival",
        logo: "assets/awards/BEST_ACTOR_Vancouver_International_Youth_Film_Festival_2025_1.png",
        image: "assets/awards/best_actor_moment.jpg",
        quote: "Congratulations to Ramtin Khorshidi for winning the Best Actor Award at the Vancouver International Youth Film Festival for his unforgettable performance in Foreign Homeland! His portrayal of a father's struggle and resilience touched hearts and earned well-deserved recognition.",
        imageAlt: "Ramtin Khorshidi Receiving Best Actor Award"
    }
};
