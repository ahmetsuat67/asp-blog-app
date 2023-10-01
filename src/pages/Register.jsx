import { Formik, Form } from "formik";
import useAuthCall from "../hooks/useAuthCalls";
import { object, string } from "yup";
const Register = () => {
  const { register } = useAuthCall();
  const registerSchema = object({
    username: string()
      .max(20, "Kullanıcı adı 10 karakterden az olmalıdır.")
      .required("username zorunludur"),
    first_name: string()
      .max(20, "İsim 20 karakterden az olmalıdır.")
      .required("first_name zorunludur"),
    last_name: string()
      .max(20, "Soyisim 30 karakterden az olmalıdır.")
      .required("last_name zorunludur"),

    email: string().email().required("Email zorunludur"),
    password: string()
      .required("password zorunludur")
      .min(8, "password en az 8 karakter olmalıdır")
      .max(20, "password en fazla 20 karakter olmalıdır")
      .matches(/\d+/, "Password bir sayı içermelidir")
      .matches(/[a-z]/, "Password bir küçük harf içermelidir")
      .matches(/[A-Z]/, "Password bir büyük harf içermelidir")
      .matches(/[!,?{}><%&$#£+-.]+/, "Password bir özel karakter içermelidir"),
  });
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">REGISTER</h1>
        <Formik
          initialValues={{
            username: "",
            first_name: "",
            last_name: "",
            email: "",
            password: "",
          }}
          validationSchema={registerSchema}
          onSubmit={(values, actions) => {
            register({ ...values, password2: values.password }); // backendde iki tane password istediği için password2 yi de password olarak gönderdim
            actions.resetForm();
            actions.setSubmitting(false);
          }}
        >
          {({ handleChange, handleBlur, values, touched, errors }) => (
          <Form>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium mb-1"
              >
                User Name
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full border px-3 py-2 rounded-md focus:outline-none focus:border-stone-950"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="first_name"
                className="block text-sm font-medium mb-1"
              >
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                className="w-full border px-3 py-2 rounded-md focus:outline-none focus:border-stone-950"
                value={values.first_name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="last_name"
                className="block text-sm font-medium mb-1"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                className="w-full border px-3 py-2 rounded-md focus:outline-none focus:border-stone-950"
                value={values.last_name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border px-3 py-2 rounded-md focus:outline-none focus:border-stone-950"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border px-3 py-2 rounded-md focus:outline-none focus:border-stone-950"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-stone-900 text-white py-2 rounded-md hover:bg-stone-950 transition duration-300"
            >
              Register
            </button>
          </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
