import Button from "@/components/Button";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen min-w-[100vw] flex items-center justify-center">
      <div className="flex gap-y-1 items-center flex-col">
        <h1 className="text-5xl font-bold text-myBlue">404</h1>
        <span className="text-lg font-semibold text-myBlack">
          Oops! Page Not found
        </span>
        <Button />
      </div>
    </div>
  );
}
