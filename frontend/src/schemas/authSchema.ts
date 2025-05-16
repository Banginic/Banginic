import * as z from "zod";

export const signUpSchema = z.object({
  fullName: z
    .string()
    .min(1, { message: "Name is required" })
    .max(25, { message: "Name should not be more than 25 letters" })
    .min(3, { message: "Name should be more than 3 letters" }),
    
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .max(25, { message: "Email should not be more than 25 letters" })
    .min(3, { message: "Email should be more than 3 letters" }),
    
  phone: z
    .string()
    .min(1, { message: "Phone number is required" })
    .max(25, { message: "Phone number should not be more than 25 letters" })
    .min(9, { message: "Phone number should be more than 3 letters" }),
    
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .max(25, { message: "Password should not be more than 25 letters" })
    .min(3, { message: "password should be more than 7 characters" }),
    
});

export const signInSchema = z.object({

  email: z
    .string()
    .min(1, { message: "Email is required" })
    .max(25, { message: "Email should not be more than 25 letters" })
    .min(3, { message: "Email should be more than 3 letters" }),
    
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .max(25, { message: "Password should not be more than 25 letters" })
    .min(3, { message: "password should be more than 7 characters" }),
    
});

