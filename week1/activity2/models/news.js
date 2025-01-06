const mongoose = require("mongoose");

const NewsSchema = mongoose.Schema(
    {
        headline: {
            type: String,
            required: [true, "Please enter headline"],
        },
        description: {
            type: String,
            required: [true, "Please enter description"],
        },
        link: {
            type: String,
            required: false,
            default: "0",
        },
        img: {
            type: String,
            required: false,
            default: "0",
        },
    },
    {
        timestamps: true,  // Corrected 'Timestamp' to 'timestamps'
    }
);

const NewsModel = mongoose.model("News", NewsSchema);

module.exports = NewsModel;
