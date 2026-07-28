import { redirect } from "next/navigation";
import { auth, signIn } from "@/lib/auth";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string; error?: string }>;
}) {
  const session = await auth();
  const { callbackUrl, error } = await searchParams;

  if (session) {
    redirect(callbackUrl ?? "/admin");
  }

  async function loginAction(formData: FormData) {
    "use server";
    const email = formData.get("email");
    const password = formData.get("password");
    const target = formData.get("callbackUrl")?.toString() || "/admin";

    await signIn("credentials", {
      email,
      password,
      redirectTo: target,
    });
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-sm flex-col justify-center px-4">
      <h1 className="text-h1 mb-6 font-semibold">Yönetim Paneli Girişi</h1>
      {error ? (
        <p role="alert" className="mb-4 rounded-md border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-800">
          E-posta veya şifre hatalı.
        </p>
      ) : null}
      <form action={loginAction} className="flex flex-col gap-4">
        <input type="hidden" name="callbackUrl" value={callbackUrl ?? "/admin"} />
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium">
            E-posta
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div>
          <label htmlFor="password" className="mb-1 block text-sm font-medium">
            Şifre
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <button
          type="submit"
          className="rounded-md bg-primary-900 px-4 py-2 font-medium text-white"
        >
          Giriş yap
        </button>
      </form>
    </main>
  );
}
