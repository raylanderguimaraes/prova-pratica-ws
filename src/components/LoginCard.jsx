export default function LoginCard({title,children}) {
  return (
    <div className="bg-red-100 px-5 py-5 rounded-md w-96 my-4">
      <h2 className="text-xl font-bold mb-3 text-center ">{title}</h2>
      {children}
    </div>
  );
}
