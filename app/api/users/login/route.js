import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; // Import the jsonwebtoken library
import User from "@/models/user";
import connectMongoDB from "@/libs/mongodb";

// Define the HTTP method explicitly (e.g., POST)
export  async function POST(request) {
    try {
        // Connect to MongoDB
        await connectMongoDB();
        const { email, password } = await request.json();

        // Verify if the email and password are provided
        if (!email || !password) {
            return NextResponse.json({ error: "Email and password are required fields" }, { status: 400 });
        }

        // Verify if the user with the provided email exists
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // Verify if the provided password matches the hashed password stored in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json({ error: "Invalid password" }, { status: 401 });
        }

        // Generate a JSON Web Token (JWT) with a secret key and user ID as payload
        const token = jwt.sign({ userId: user }, "your-secret-key"  , {expiresIn :"6d"});

        // You can now store the token in a cookie or send it in the response as needed.
        // For demonstration purposes, let's send it in the response as a JSON object.
        return NextResponse.json({ message: "Login successful", token }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to login" }, { status: 500 });
    }
}
