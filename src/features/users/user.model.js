import { Schema, model } from "mongoose";
import bc from "bcryptjs";

const userSchema = new Schema(
    {
        fullname: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        googleId: { type: String, default: null },
        profilePicture: {
            type: String,
            default: process.env.DEFAULT_PROFILE_PICTURE,
        },
        about: { type: String, default: "" },
        followers: {
            type: [
                {
                    type: Schema.Types.ObjectId,
                    ref: "User",
                },
            ],
            default: [],
        },
        following: {
            type: [
                {
                    type: Schema.Types.ObjectId,
                    ref: "User",
                },
            ],
            default: [],
        },
    },
    {
        timestamps: true,
    }
);

// Pre document middleware to hash password
// if user is newly registered or changes his password
userSchema.pre("save", async function (next) {
    if (this.isModified("password") || this.isNew) {
        const hashedPassword = await bc.hash(this.password, 12);
        this.password = hashedPassword;
        next();
    } else {
        next();
    }
});

const UserModel = model("User", userSchema);

export { UserModel };
