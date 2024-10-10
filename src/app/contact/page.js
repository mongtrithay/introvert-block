export default function BlogPostCard() {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl h-900px mx-auto">
        {/* Profile Circle */}
        <div className="flex justify-center mb-4">
          <div className="w-32 h-32 bg-gray-200 rounded-full"></div> {/* Larger Profile Image */}
        </div>
  
        {/* Welcome Text */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-semibold">Hi!</h1> {/* Larger Text */}
          <p className="text-xl">Welcome to my blog! :)</p> {/* Larger Text */}
        </div>
  
        {/* Buttons */}
        <div className="flex justify-center space-x-8 mb-6">
          <button className="bg-blue-300 text-white py-3 px-10 rounded-full">Button 1</button>
          <button className="bg-purple-300 text-white py-3 px-10 rounded-full">Button 2</button>
        </div>
  
        {/* User Info */}
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div> {/* Larger Avatar */}
          <div>
            <h3 className="text-lg font-semibold">Karen T.</h3> {/* Larger Text */}
            <p className="text-md text-gray-500">Designer, 7 hours ago</p>
          </div>
        </div>
  
        {/* Post Text */}
        <p className="text-gray-700 text-lg mb-4">Check out my most recent post! I really hope that you all like it [...]</p> {/* Larger Post Text */}
  
        {/* Like and Comment Icons */}
        <div className="flex justify-between items-center text-gray-500">
          {/* Likes */}
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-red-500">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
            </svg>
            <span className="text-lg">22 likes</span> {/* Larger Text */}
          </div>
          {/* Comments */}
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M21 16v-2a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2h14l4 4"></path>
            </svg>
            <span className="text-lg">4 comments</span> {/* Larger Text */}
          </div>
        </div>
      </div>
    );
  }
  
  