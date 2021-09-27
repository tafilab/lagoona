enum GENRE {
    ROMANTIC,
    DRAMA,
    COMEDY,
    DOCUMENTARY,
}

projector.configureFilm(GENRE.COMEDY);

class Projector {
    // delactation of Projector
    configureFilm(genre) {
        switch (genre) {
            case GENRE.ROMANTIC:
            // some logic to be executed
        }
    }
}