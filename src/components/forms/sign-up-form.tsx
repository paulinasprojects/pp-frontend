import { /*useNavigate*/ Link } from "react-router-dom"
import { z } from "zod";
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { Select, SelectContent, SelectOption, SelectTrigger } from "../role-select";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email().min(1, "Email is required"),
  password: z.string().min(1, "Password is required").min(8, "Password must have 8 characters"),
  role: z.enum(["PATIENT", "DOCTOR"], { error: "Please select an option" }),
});

function SignUpForm() {
  const { handleSubmit, control, formState: { errors } } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values)
  };

  return (
    <div className="flex flex-col mx-20">
      <div className="">
        <h3 className="pt-12 pb-2 text-3xl font-bold text-center">Welcome Back</h3>
        <p className="text-center">Let&apos;s create a WeCare account first</p>
        <div>
          <form onSubmit={handleSubmit(onSubmit)} id="sign-up-form">
            <div className="flex flex-col gap-5 mt-10">
              <Controller
                name="name"
                control={control}
                render={({ field, fieldState }) => (
                  <div className="flex flex-col">
                    <input
                      {...field}
                      aria-invalid={fieldState.invalid}
                      placeholder="John Doe"
                      autoComplete="off"
                      className="outline rounded-md px-2 py-2 placeholder:text-sm w-full"
                    />
                    {errors.name && <span className="text-red-500 text-sm mt-2">{errors.name.message}</span>}
                  </div>
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                  <div className="flex flex-col">
                    <input
                      {...field}
                      aria-invalid={fieldState.invalid}
                      placeholder="mail@example.com"
                      autoComplete="off"
                      className="outline rounded-md px-2 py-2 placeholder:text-sm w-full"
                    />
                    {errors.email && <span className="text-red-500 text-sm mt-2">{errors.email.message}</span>}
                  </div>
                )}
              />
              <Controller
                name="password"
                control={control}
                render={({ field, fieldState }) => (
                  <div className="flex flex-col gap-2">
                    <input
                      {...field}
                      type="password"
                      aria-invalid={fieldState.invalid}
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      className="outline rounded-md px-2 py-2 placeholder:text-sm w-full"
                    />
                    {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                  </div>
                )}
              />
              <Controller
                name="role"
                control={control}
                render={({ field }) => (
                  <div className="flex flex-col gap-2">
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="px-2 py-2 border-black" placeholder="Select option" />
                      <SelectContent>
                        <SelectOption value="DOCTOR">DOCTOR</SelectOption>
                        <SelectOption value="PATIENT">PATIENT</SelectOption>
                      </SelectContent>
                    </Select>
                    {errors.role && (
                      <span className="text-red-500 text-sm">{errors.role.message}</span>
                    )}
                  </div>
                )}
              />
            </div>
            <button form="sign-up-form" className="mt-5 bg-primary px-2 py-2 rounded-md w-full text-white cursor-pointer hover:bg-primary/80" type="submit">Submit</button>
          </form>
          <p className="text-[#6C727F] text-[14px] mt-2 text-right">Already have an account? {" "} <Link to="/sign-in" className="text-primary font-bold hover:underline">Sign in here</Link></p>
        </div>
      </div>
      <img src="/logo-svg.svg" className="w-[125px] mx-auto mt-10" />
    </div>
  )
}

export default SignUpForm