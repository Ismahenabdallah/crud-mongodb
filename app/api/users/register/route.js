import connectMongoDB from "@/libs/mongodb"
import bcrypt from 'bcrypt'
import User from "@/models/user"
import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        await connectMongoDB()

        const { username, email, password: pass, adr } = await req.json()
        if (!username || !email || !pass || !adr) {
            return NextResponse.json({ error: "Required fields" }, { status: 400 });
        }
        const isExisting = await User.findOne({ email })

        if (isExisting) {
            return NextResponse.json({ error: "User with this email already exists" }, { status: 409 });
        }

        const hashedPassword = await bcrypt.hash(pass, 10)

        const newUser = await User.create({ username, email, password: hashedPassword, adr })


        return NextResponse.json({ user: newUser }, { status: 201 });

    } catch (error) {
        return new Response(JSON.stringify(error.message), { status: 500 })
    }
}