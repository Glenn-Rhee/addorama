import { z } from "zod";
import parsePhoneNumberFromString from "libphonenumber-js";

export class UserModel {
  public static readonly SIGNUP = z.object({
    username: z
      .string()
      .min(5, { message: "Username must be at least 5 characters" }),
    fullname: z
      .string()
      .min(1, { message: "Fullname must be at least 1 character!" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z
      .string()
      .min(8, {
        message: "Confirmation password must be at least 8 characters",
      }),
    phone: z
      .string()
      .min(10, { message: "Phone number must be at least 10 " })
      .refine((value) => {
        const phoneNumber = parsePhoneNumberFromString("+62" + value);
        return phoneNumber && phoneNumber.isValid();
      }),
    dateOfBirth: z.string().date("Invalid date of birth"),
  });
}
