import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { authentication } from "next-firebase-auth-edge/lib/next/middleware";

const PUBLIC_PATHS = ["/", "/about", "/film", "/contact"];

function redirectToHome(request: NextRequest) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    url.search = "";
    return NextResponse.redirect(url);
  }
  
function redirectToLogin(request: NextRequest) {
    if (PUBLIC_PATHS.some(x => request.nextUrl.pathname === x)) {
      return NextResponse.next();
    }

    const url = request.nextUrl.clone();
    if(request.nextUrl.pathname === '/login') {
        return NextResponse.next()
    } 
    url.pathname = "/login";
    url.search = `redirect=${request.nextUrl.pathname}`;
    return NextResponse.next();
}

export async function middleware(request: NextRequest) {
    return authentication(request, {
      loginPath: "/api/login",
      logoutPath: "/api/logout",
      apiKey: "AIzaSyCzeANhgGkOQ15VZIRqlwZSVLxe0bRaLAE",
      cookieName: "AuthToken",
      cookieSerializeOptions: {
        path: "/",
        httpOnly: true,
        secure: false, 
        sameSite: "lax",
        maxAge: 0.02083333333 * 60 * 60 * 24,
      },
      cookieSignatureKeys: ["B31nf1n1t1@@247", "f1lmbr1dg3"],
      serviceAccount: {
        projectId: "filmbridge-b8d81",
        clientEmail: "firebase-adminsdk-tlkvo@filmbridge-b8d81.iam.gserviceaccount.com",
        privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQChN756O2fxltpn\nwXqx7K7uVBCiayaXI3iBGCfrUBPNo3axjJdFfUs6WrD9yHrGvIyTvtT1ilNQrw+0\nkCXU9lkawQigl9uRLOFSE6WuXRsSpoJUQ9WYUzPNg1Qjy5kAk4zP+KWAd7u+PlPf\nNhuHVJx5yhWsl8syscppXoRNSDlMsP09C5+Wn57PteE2ztxuJ0T9ZqF5wU9Ii+bo\nrx2e/dc74ULt4S34aUcTnzRc0XXJWD74KhIKqTqPEsjBMi2jPW8owv+sPo1f119e\n2FgdQQnFgXEWtUteOssQxFb+m+cfNy1x/3/+BzgFm/dVhGlX1sWLaVk+XI2+sPYA\nMJDbeIAHAgMBAAECggEAPm9MrKC6CgU+cwUqg6JiQrk6sfPmP40Em5Yjy405BiAC\nlRMZ+FbkHebGeZo89h9KH+O9LJRT3MDXR7m1dQqsimBse2kkJs5nOnaSaPr0w53J\nhmG45COAwdvU54HvMJpz44zrZ1u3UR9pMt4M/jWF3eKlzzAACRNyjKkGerl4O1sI\nCoFcTpaX1zQRhEx1NGVJ/veDS0at+TLO2gsvim35j7cxxw3RaxFc1qPWxgfMEJsW\n+r/lgkeEC8l5Wy/NSJ31aZg8kK6F4r/p84KQruxAWq3s7jpjuY6Qu30lmsUMXxP+\nEnfEwqhI47HbnNS5pASnSlLEyqibpM+K6w/gqwQwrQKBgQDafFzWDkL92gTlUyQa\njeNx44NUU60uY+lf8eh+0CPtzi4O2WpyRgRERxcVLjApKBrCLeWW0kyC9etOgnfI\nIxc7v6vrgWF1aZr2hV28Qzyw2TU/6YRTliBCUflw78Q/5DX8jk/4D+wz+GsNRxFy\n++freyyNWBai4+aBY0ZvN5kAYwKBgQC85iPRS3NYH0tBJkX7tVeLdt68DorF9asI\n3omkQ328kSQupVcNRHRAp39WXJAufg6Vnp6XY9MYCssao4AluDKGtY3lXKeZaLbs\nStSnZ+OalOpkdvnJBCaN6LVK34ua0qVuxoHPysB/zs8ILYWpuDTMaBR/9D0mMbq6\nd0Dy0JAJDQKBgCwcz+GoH36BdluW3cM+wp1MAkgUXPLw2T216eswuxBYgJQe8Y8A\n8/uVHuP332Fv53ctLR22eBw46rl/Pg/6hcZafKugA71hBRig9Lv+F1LdiBLPYxg9\nR2YchvB2eHkt6niDg0HidR5JGdQkdTFyCvFQfT5MesWInhGhqabq4slhAoGAXipj\npIv2PfGrtBh+PpIRyCZDtn+RUkm7LzqwZsB2R7Aa11343VZIlYpqAgU2otaYMqHV\n8SYELzICOY9T7Hm8RkbvK21a5zC6L2TGSYWSgpbFmbttnXWCOq/M4Dw7/bwQV/6A\n67Lo702LC0qWHRsExvkDbx2z9fxIV3fnWqP5iWkCgYAqOjPJjUz23iyxlSIsJ+/Z\netruOQFR0y9MSdYzTr2BXwgQGDw1zeePOayiH6NBMqgDmqKxtt9CLLpfKwZni7l+\nVe87xJy/SMRYqW7B0LsVtz8KpcfKnVfRU2OLh3Ty53Jj7NH3mUHf2XpR/QpgBmPT\n4F9MdBGorK7KSk4nAO2lFw==\n-----END PRIVATE KEY-----\n",
      },
      handleValidToken: async ({ token, decodedToken }, headers) => {
        if (request.nextUrl.pathname === '/login') {
          const url = request.nextUrl.clone();
          url.pathname = "/dashboard";
          url.search = "";
          return NextResponse.redirect(url);
        }
  
        return NextResponse.next({
          request: {
            headers, 
          },
        });
      },
      handleInvalidToken: async () => {
        return redirectToLogin(request);
      },
      handleError: async (error) => {
        console.error("Unhandled authentication error", { error });
        return redirectToLogin(request);
      },
    });
  }

  export const config = {
    matcher: [
      "/",
      "/((?!_next|favicon.ico|api|.*\\.).*)",
      "/api/login",
      "/api/logout",
    ],
  };