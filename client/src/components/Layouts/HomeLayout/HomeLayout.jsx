export default function HomeLayout({ children }) {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
        <h1>TaskList</h1>
      <div className=" w-full p-6 bg-white h-screen rounded-lg shadow-md">
        {children}
      </div>
    </div>
  );
}