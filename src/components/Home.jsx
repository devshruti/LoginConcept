import Sidebar from "./Sidebar";

const Home = () => {
    return (
        <>
        {/* Sidebar Section */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-grow flex justify-center ">
        <h1 className="text-4xl font-bold mt-10">Home Page</h1>
        </div>
        </>
    )
}

export default Home;