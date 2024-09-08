'use client'
import { TypeUserForm } from "@/types/auth.types";
import { SubmitHandler, useForm } from "react-hook-form";
import { useInitialData } from "./useInitialData";
import { useUpdateSettings } from "./useUpdateSettings";
import { Field } from "@/components/ui/fields/Field";
import { Button } from "@/components/ui/buttons/Button";
import s from './Settings.module.scss'

export function Settings() {
    const {register, handleSubmit, reset} = useForm<TypeUserForm>({
        mode: 'onChange'
    })

    useInitialData(reset)

    const {isPending, mutate} = useUpdateSettings()

    const onSubmit: SubmitHandler<TypeUserForm> = (data) => {
        const { password, ...rest } = data

        mutate({
            ...rest,
            password: password || undefined
        })
    }

    return <div>
        <form
        className={s.form}
        onSubmit={handleSubmit(onSubmit)}
        >
            <div className={s.grid}>
                <div>
                    <Field
                    id="email"
                    label="Email:"
                    placeholder="Enter your email:"
                    type="email"
                    {...register('email', {
                        required: 'Email is required',
                    })}
                    extra="mb-4"
                    />

                    <Field
                    id="name"
                    label="Name:"
                    placeholder="Enter your name:"
                    extra="mb-4"
                    {...register('name')}
                    />
                </div>
                <div>
                    <Field
                    id="workInterval"
                    label="Work interval (min.):"
                    placeholder="Enter your work interval (min.):"
                    isNumber
                    {...register('workInterval', {
                        valueAsNumber: true,
                    }
                    )}
                    extra="mb-4"
                    />

                    <Field
                    id="breakInterval"
                    label="Break interval (min.):"
                    placeholder="Enter your break interval (min.):"
                    isNumber
                    {...register('breakInterval', {
                        valueAsNumber: true,
                    }
                    )}
                    extra="mb-4"
                    />

                    <Field
                    id="intervalsCount"
                    label="Intervals count:"
                    placeholder="Enter your intervals count:"
                    isNumber
                    {...register('intervalsCount', {
                        valueAsNumber: true,
                    }
                    )}
                    extra="mb-4"
                    />
                </div>
            </div>
            <Button
            type="submit"
            disabled={isPending}
            >
                Save
            </Button>
        </form>
    </div>
}