'use client';

import { Input } from '@nextui-org/react';
import { useFormContext } from 'react-hook-form';

export default function UserDetailsForm() {
	const {
		register,
		formState: { errors },
		getValues,
	} = useFormContext();
	return (
		<div className='space-y-4'>
			<Input
				defaultValue={getValues('name')}
				label='Name'
				variant='bordered'
				{...register('name')}
				isInvalid={!!errors.name}
				errorMessage={errors.name?.message as string}
			/>
			<Input
				defaultValue={getValues('email')}
				label='Email'
				variant='bordered'
				{...register('email')}
				isInvalid={!!errors.email}
				errorMessage={errors.email?.message as string}
			/>
			<Input
				defaultValue={getValues('password')}
				label='Password'
				variant='bordered'
				type='password'
				{...register('password')}
				isInvalid={!!errors.password}
				errorMessage={errors.password?.message as string}
			/>
		</div>
	);
}
