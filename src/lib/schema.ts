import { z } from 'zod';

export const schemaRsvp = z
	.object({
		name: z
			.string({ required_error: 'Name is Required' })
			.trim()
			.min(1, { message: 'Name is Required' }),
		phone: z
			.string({
				required_error: 'Phone Number is Required'
			})
			.regex(/(^08)(\d{3,4}-?){2}\d{2,3}$/, 'Phone Number is Invalid'),
		email: z
			.string({
				required_error: 'Email is Required'
			})
			.email({
				message: 'Email is Invalid'
			}),
		is_attending_holy_matrimony: z
			.string({
				required_error: 'is Attending is Required'
			})
			.default('No'),
		is_attending_dinner_reception: z
			.string({
				required_error: 'is Attending is Required'
			})
			.default('No'),
		plus_one: z.string(),
		wishes: z.string({
			required_error: 'Wishes is Required'
		}),
		from: z.string({
			required_error: 'Sender name is Required'
		})
	})
	.required();
