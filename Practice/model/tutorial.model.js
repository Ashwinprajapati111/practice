module.exports = mongoose =>{
    const Tutorial = mongoose.model(
        "swwwwww",
        mongoose.Schema(
            {
                name: String,
                desc: String,
                published:Boolean
            },
            { timestamps: true}
        )
    )
    return Tutorial
}