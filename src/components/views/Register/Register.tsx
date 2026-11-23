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

const Register = () => {
  return (
    <div>
      <div className="flex h-screen w-full items-center justify-center gap-20">
        <div className="flex w-1/3 flex-col items-center gap-10">
          <Image
            src={"/images/general/logo.svg"}
            alt="logo"
            width={1024}
            height={1024}
          />
          <Image
            src={"/images/illustrations/login.svg"}
            alt="logo"
            width={1024}
            height={1024}
          />
        </div>

        <Card className="flex w-1/4 p-6 shadow-xl">
          <Card.Header>
            <Card.Title className="text-default text-2xl font-bold">
              Create Account
            </Card.Title>
            <Card.Description className="text-sm">
              Have an Account?&nbsp;
              <Link href="/login">Click Here</Link>
            </Card.Description>
          </Card.Header>
          <Form>
            <Card.Content>
              <div className="flex flex-col gap-4">
                <TextField name="email" type="email">
                  <Label>Email</Label>
                  <Input placeholder="email@example.com" />
                </TextField>
                <TextField name="password" type="password">
                  <Label>Password</Label>
                  <Input placeholder="••••••••" />
                </TextField>
              </div>
            </Card.Content>
            <Card.Footer className="mt-4 flex flex-col gap-2">
              <Button className="bg-default w-full" type="submit">
                Sign In
              </Button>
              <Link className="text-center text-sm" href="#">
                Forgot password?
              </Link>
            </Card.Footer>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default Register;
