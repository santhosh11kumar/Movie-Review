import mongoose from 'mongoose';

const { Schema } = mongoose;

const movieSchema = new Schema({
    movieName: {
        type: String,
        required: true,
    },
    details: [{
        email: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        comment: {
            type: String,
            required: true,
            maxlength: 200,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    }],
});

const Movie = mongoose.model('Movie', movieSchema);

export default Movie;
