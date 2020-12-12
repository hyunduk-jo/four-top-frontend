import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { toast } from 'react-toastify';
import useInput from '../../Hooks/useInput';
import AuthPresenter from './AuthPresenter';
import { CONFIRM_SECRET, CREATE_ACCOUNT, LOCAL_LOG_IN, REQUEST_SECRET } from './AuthQueries';

const AuthContainer = () => {
  const [action, setAction] = useState("login");
  const email = useInput("");
  const userName = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const secret = useInput("");

  const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
    variables: { email: email.value, userName: userName.value, firstName: firstName.value, lastName: lastName.value }
  })

  const [requestSecretMutation] = useMutation(REQUEST_SECRET, {
    variables: { email: email.value }
  })

  const [confirmSecretMutation] = useMutation(CONFIRM_SECRET, {
    variables: { email: email.value, secret: secret.value }
  })

  const [logUserInMutation] = useMutation(LOCAL_LOG_IN);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (action === "login") {
      if (email.value !== "") {
        try {
          const { data: { requestSecret } } = await requestSecretMutation();
          if (requestSecret) {
            toast.success("Check your email for login secret");
            setTimeout(() => setAction("confirm"), 1500);
          } else {
            toast.error("You don't have account yet, create one");
            setTimeout(() => setAction("signup"), 1500);
          }
        } catch (e) {
          toast.error(e.message);
        }
      } else {
        toast.error("Email is required");
      }
    } else if (action === "signup") {
      if (email.value !== "" && userName.value !== "" && firstName.value !== "" && lastName.value !== "") {
        try {
          const { data: { createAccount } } = await createAccountMutation();
          if (createAccount) {
            toast.success("Account created, login now!");
            setTimeout(setAction("login"), 1500);
          } else {
            toast.error("Can't create account now, try again");
          }
        } catch (e) {
          toast.error(e.message);
        }
      } else {
        toast.error("All fields are required");
      }
    } else if (action === "confirm") {
      if (secret !== "") {
        try {
          const { data: { confirmSecret: token } } = await confirmSecretMutation();
          if (token !== "" && token !== undefined) {
            await logUserInMutation({ variables: { token } });
            toast.success("Welcome");
          } else {
            throw Error("error");
          }
        } catch (e) {
          throw Error(e.message);
        }
      } else {
        toast.error("Paste your login secret in your email.")
      }
    }
  }
  return <AuthPresenter
    action={action}
    setAction={setAction}
    email={email}
    userName={userName}
    firstName={firstName}
    lastName={lastName}
    secret={secret}
    onSubmit={onSubmit} />
}

export default AuthContainer;