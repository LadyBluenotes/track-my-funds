export default function Home() {
  return (
      <div className="h-[calc(100vh-74px)] overflow-auto bg-gradient-to-br from-white to-indigo-200">
        <div className="grid max-w-screen-xl px-8 py-8 mx-auto lg:gap-8 xl:gap-0 lg:mt-20 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Empower your money management</h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">The smart way to manage your money and reach your financial goals - Track My Funds is a free and easy to use personal finance app.</p>
                <a href="/register" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-grey-600 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">
                    Get started
                    <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
                <a href="/about" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-grey-900 border border-gray-300 rounded-lg hover:bg-indigo-600 focus:ring-4 focus:ring-gray-100 bg-indigo-500 text-white" >
                    Learn More
                </a> 
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex w-4/6 h-auto" >
                <img src="/moneyStack.jpg" alt="pile of cash" />
            </div>                
        </div>
    </div>
  )
}
