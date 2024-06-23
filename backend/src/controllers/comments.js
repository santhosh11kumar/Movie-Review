import Movie from '../models/Movie.js';

const AddComments = async (req, res) => {
    const { movieName, email, name, comment } = req.body;

    // Check if any required field is missing
    if (!email || !movieName || !name || !comment) {
        return res.status(406).json({ message: 'Fill all the required details' });
    }

    try {
        // Check if the movie exists
        let movie = await Movie.findOne({ movieName });

        if (!movie) {
            // If movie doesn't exist, create a new movie document with the comment
            movie = await Movie.create({
                movieName,
                details: [{
                    email: email,
                    name: name,
                    comment: comment
                }]
            });

            return res.status(200).json({
                message: 'Comment added successfully',
                comment: movie.details[0] // Return the newly added comment
            });
        }

        // Check if the user's email already exists for this movie
        const existingComment = movie.details.find(c => c.email === email);

        if (existingComment) {
            return res.status(409).json({ message: 'User already posted a comment for this movie' });
        }

        // Add the new comment to the existing movie document
        movie.details.push({
            email,
            name,
            comment
        });

        await movie.save();

        return res.status(200).json({
            message: 'Comment added successfully',
            comment: movie.details[movie.details.length - 1] // Return the last added comment
        });

    } catch (error) {
        // Handle MongoDB duplicate key error
        if (error.code === 11000 && error.keyPattern && error.keyPattern['details.email']) {
            return res.status(409).json({ message: 'User already responded' });
        }

        console.error(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};
const RetriewComments = async (req, res) => {
    const { movieName } = req.params;
    try {
        const movie = await Movie.findOne({ movieName });

        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }

        const comments = movie.details.map(comment => ({
            email: comment.email,
            name: comment.name,
            comment: comment.comment,
            createdAt: comment.createdAt
        }));

        const commentCount = movie.details.length; // Use movie.details.length instead of movie.comments.length

        res.status(200).json({ commentCount, comments });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch comments' });
    }
};

export { AddComments, RetriewComments };
