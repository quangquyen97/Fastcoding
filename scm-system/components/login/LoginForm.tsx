export default function Example() {

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-6 h-full">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px">
              <div className="py-3">
                <label htmlFor="email-address" className="sr-only">
                  Email
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full placeholder-gray-300 border border-gray-300 px-7 py-2 text-gray-900 focus:z-10  focus:outline-none sm:text-sm rounded-md shadow-sm"
                  placeholder="Email"
                  style={{ borderRadius: 24 }}
                />
              </div>
              <div className="py-3 showPassWord">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full border placeholder-gray-300 border-gray-300 px-7 py-2 text-gray-900  focus:z-10 focus:outline-none sm:text-sm rounded-md shadow-sm"
                  placeholder="Password"
                  style={{ borderRadius: 24 }}
                />
                <span><img id="on" onClick={() => { 

                

                   const passField:any = document.getElementById("password");
                   const showBtn:any = document.querySelector("span img");
                   
                  if(passField.type === "password"){
                    passField.type = "text";
                    showBtn.classList.add("hide-btn");
                    document.images['on'].src = "https://img.icons8.com/ios/50/null/closed-eye.png";
                  }else{
                    passField.type = "password";
                    showBtn.classList.remove("hide-btn");
                    document.images['on'].src = "https://img.icons8.com/fluency-systems-filled/48/null/visible.png";
                  }
                 }} src="https://img.icons8.com/fluency-systems-filled/48/null/visible.png"/></span>
                <div>
                
                </div>
              </div>
            </div> 

            <div>
              <button
                type="submit"
                className="btnEffect group  flex w-full justify-center rounded-md border  bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign in
              </button>
              <div className="flex items-center justify-between px-3 py-3">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Save Password?
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="aEffect ml-2 block text-sm text-gray-900"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
            </div>
          </form>
          <div
            className="w-90 m-auto text-center relative font-bold"
            style={{ borderTop: "1px solid #C4C4C4", opacity: "80%" }}
          >
            <span
              className="absolute m-auto"
              style={{
                width: "25%",
                left: 0,
                right: 0,
                top: -13,
                background: "white",
              }}
            >
              OR
            </span>
          </div>
          <div className="SocialNetwork flex justify-around w-40 m-auto mt-5">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48px"
                height="48px"
              >
                <linearGradient
                  id="Ld6sqrtcxMyckEl6xeDdMa"
                  x1="9.993"
                  x2="40.615"
                  y1="9.993"
                  y2="40.615"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#2aa4f4" />
                  <stop offset="1" stop-color="#007ad9" />
                </linearGradient>
                <path
                  fill="url(#Ld6sqrtcxMyckEl6xeDdMa)"
                  d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                />
                <path
                  fill="#fff"
                  d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48px"
                height="48px"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                />
              </svg>
            </a>
          </div>
          <div className="text-center">
            <span>
              Don't have an account ?{" "}
              <a style={{ color: "#e35c22", fontWeight: "700" }} href="#">
                Sign up.
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
