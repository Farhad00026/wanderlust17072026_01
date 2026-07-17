"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    Separator,
    TextField,
} from "@heroui/react";
import { redirect, useRouter } from "next/navigation";
import { BsGoogle } from "react-icons/bs";

export default function loginPage() {
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData(e.currentTarget);
            const user = Object.fromEntries(formData.entries());

            const { email, password } = user;

            const { data, error } = await authClient.signIn.email({
                email,
                password,
                callbackURL: "/"
            });

        } catch (err) {
            console.error("Something went wrong:", err);
        }
    };
    const handlesignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <Card className="border mx-auto w-125 p-5 mt-5 mb-5">
            <h1 className="text-center text-2xl font-bold">Sign IN </h1>

            <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }

                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }

                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>
                        Must be at least 8 characters with 1 uppercase and 1 number
                    </Description>
                    <FieldError />
                </TextField>

                <div className="flex gap-2">
                    <Button type="submit" className="w-full text-center">
                        <Check />
                        Login
                    </Button>
                </div>
                <div className="flex items-center gap-4 my-6">
                    <Separator className="flex-1" />
                    <span className="text-sm text-gray-500 whitespace-nowrap">
                        Or Sign in with Google
                    </span>
                    <Separator className="flex-1" />
                </div>
                <div className="flex gap-2">
                    <Button className="w-full text-center" onClick={handlesignIn}>
                        <BsGoogle />
                        GooGle SignIn
                    </Button>
                </div>
            </Form>
        </Card>
    );
}