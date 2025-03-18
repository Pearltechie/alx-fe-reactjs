function UserProfile() {
  return (
    <div className="bg-gray-100 sm:p-4 md:p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      <img className="w-36 h-36 rounded-full mx-auto hover:scale-110 transition-transform duration-300 ease-in-out" 
           src="https://via.placeholder.com/150" alt="User" />
      <h1 className="text-xl text-blue-800 my-4 hover:text-blue-500">John Doe</h1>
      <p className="text-gray-600 text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;
