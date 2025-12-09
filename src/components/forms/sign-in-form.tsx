import { /*useNavigate*/ Link } from "react-router-dom"
import { z } from "zod";
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";


const formSchema = z.object({
  email: z.email().min(1, "Email is required"),
  password: z.string().min(1, "Password is required").min(8, "Password must have 8 characters")
});

function SignInForm() {
  // const navigate = useNavigate();
  const { handleSubmit, control, formState: { errors } } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="flex flex-col mx-20">
      <div className="">
        <h3 className="pt-12 pb-2 text-3xl font-bold text-center">Welcome Back</h3>
        <p className="text-center">Let&apos;s login into your WeCare account first</p>
        <div>
          <form onSubmit={handleSubmit(onSubmit)} id="sign-in-form">
            <div className="flex flex-col gap-5 mt-10">
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
            </div>
            <button form="sign-in-form" className="mt-5 bg-primary px-2 py-2 rounded-md w-full text-white cursor-pointer hover:bg-primary/80" type="submit">Submit</button>
          </form>
          <p className="text-[#6C727F] text-[14px] mt-2 text-right">Dont&apos;t have an account? {" "} <Link to="/sign-up" className="text-primary font-bold hover:underline">Sign up here</Link></p>
        </div>
      </div>
      <img src="/logo-svg.svg" className="w-[125px] mx-auto mt-10" />
    </div>
  )
}

export default SignInForm;