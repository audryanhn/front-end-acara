import {
  Button,
  Card,
  Form,
  Input,
  Label,
  Link,
  TextField,
} from "@heroui/react";
import Image from "next/image";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { useState } from "react";
import useRegister from "./useRegister";

const Register = () => {
  // const [showPassword, setShowPassword] = useState(false);
  // const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { visiblePassword, handleVisiblePassword } = useRegister();

  return (
    <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:gap-20">
      <div className="flex w-full flex-col items-center gap-10 sm:w-1/3 lg:w-1/4">
        <Image
          src={"/images/general/logo.svg"}
          alt="logo"
          width={180}
          height={180}
        />
        <Image
          src={"/images/illustrations/login.svg"}
          alt="logo"
          className="w-2/3 lg:w-full"
          width={1024}
          height={1024}
        />
      </div>

      <Card className="flex w-full rounded-2xl border border-slate-200 p-6 shadow-xl sm:w-2/3 lg:w-1/3">
        <Card.Header>
          <Card.Title className="text-default text-2xl font-bold">
            Create Account
          </Card.Title>
          <Card.Description className="text-sm">
            Have an Account?&nbsp;
            <Link href="/login" className={"text-default"}>
              Login Here
            </Link>
          </Card.Description>
        </Card.Header>
        <Form>
          <Card.Content>
            <div className="flex flex-col gap-6">
              <TextField name="text" type="text" className={"floating-field"}>
                <Label className="text-slate-500">Fullname</Label>
                <Input
                  className={"border border-slate-300 py-4"}
                  placeholder=""
                />
              </TextField>

              <TextField name="text" type="text" className={"floating-field"}>
                <Label className="text-slate-500">Username</Label>
                <Input
                  className={"border border-slate-300 py-4"}
                  placeholder=""
                />
              </TextField>

              <TextField name="email" type="email" className={"floating-field"}>
                <Label className="text-slate-500">Email</Label>
                <Input
                  className={"border border-slate-300 py-4"}
                  placeholder=""
                />
              </TextField>

              <TextField name="password" className="floating-field relative">
                <Label className="text-slate-500">Password</Label>

                <Input
                  type={visiblePassword.password ? "text" : "password"}
                  placeholder=" "
                  className="w-full border border-slate-300 py-4 pr-12"
                />

                <button
                  type="button"
                  aria-label={
                    visiblePassword.password ? "Hide password" : "Show password"
                  }
                  aria-pressed={visiblePassword.password}
                  onClick={() => handleVisiblePassword("password")}
                  className="absolute top-1/2 right-3 z-10 -translate-y-1/2 text-slate-500 transition-colors hover:text-slate-800"
                >
                  {visiblePassword.password ? <EyeSlash /> : <Eye />}
                </button>
              </TextField>
              <TextField
                name="password"
                type={visiblePassword.confirmPassword ? "text" : "password"}
                className={"floating-field"}
              >
                <Label className="text-slate-500">Confirm Password</Label>
                <Input
                  placeholder=""
                  className={"border border-slate-300 py-4"}
                />

                <button
                  type="button"
                  onClick={() => handleVisiblePassword("confirmPassword")}
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-slate-500 hover:text-slate-800"
                >
                  {visiblePassword.confirmPassword ? <EyeSlash /> : <Eye />}
                </button>
              </TextField>
            </div>
          </Card.Content>
          <Card.Footer className="mt-8 flex flex-col gap-2">
            <Button className="bg-default w-full rounded-xl py-6" type="submit">
              Register
            </Button>
          </Card.Footer>
        </Form>
      </Card>
    </div>
  );
};

export default Register;
