import { z } from "zod";

export const referralPostValidator = z.object({
  desscription: z.string().nonempty("Desscription is required"),
  role: z
    .object({
      value: z.string(),
      label: z.string(),
    })
    .transform((value) => value.value),
  experience: z
    .object({
      value: z.string(),
      label: z.string(),
    })
    .transform((value) => value.value),
  range: z
    .object({
      value: z.string(),
      label: z.string(),
    })
    .transform((value) => value.value),
  companyName: z
    .object({
      value: z.string(),
      label: z.string(),
    })
    .transform((value) => value.value),
  jobCode: z.string().optional(),
  jobType: z
    .object({
      value: z.string(),
      label: z.string(),
    })
    .transform((value) => value.value),
  location: z.enum(["On-site", "Remote", "Hybrid"], {
    required_error: "You need to select a notification type.",
  }),
  countryLocation: z.string().nonempty(),
  stateLocation: z.string().optional(),
  cityLocation: z.string().optional(),
  skills: z
    .array(
      z.object({
        value: z.string().nonempty("Job Type is required"),
        label: z.string().nonempty("Job Type is required"),
      })
    )
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    })
    .transform((value) => value.map((item) => item.value)),
  accept: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  expiresAt: z
    .date({
      required_error: "Expiry of this Application is required.",
    })
    .optional(),
  stars: z.number().optional(),
});
