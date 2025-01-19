export default function NotFoundPage() {
  return (
    <div className="min-h-screen min-w-[100vw] flex items-center justify-center">
      <div className="flex gap-y-1 items-center flex-col">
        {/* <Image
          src={"/error-404.png"}
          alt="Shop error not found"
          width={200}
          height={200}
          className="aspect-square w-auto"
        /> */}
        <h1 className="text-5xl font-bold text-myBlue">404</h1>
        <span className="text-lg font-semibold text-myBlack">
          Oops! Page Not found
        </span>
      </div>
    </div>
  );
}
