
const GetStarted = () => {
    return (
        <section className="mt-9 mb-24">
            <h3 className="font-bold leading-14 text-5xl">How to get started?</h3>
            <div className="grid grid-cols-2 grid-rows-2 gap-x-24 gap-y-12 mt-8">
                <div className="flex items-start gap-5 my-3 w-full">
                    <div className="flex items-center justify-center text-center bg-primary rounded-xl text-white text-[54px] font-medium">
                        <p className="w-20 h-20">1</p>
                    </div>
                    <p className="w-full"><strong>Click the "Register" button on this page</strong>, create your profile and fill in the required information.</p>
                </div>
                <div className="flex items-start gap-5 my-3 w-full">
                    <div className="flex items-center justify-center text-center bg-primary rounded-xl text-white text-[54px] font-medium">
                        <p className="w-20 h-20">2</p>
                    </div>
                    <p className="w-full"><strong>Optionally, pass the English test to check your level.</strong>You can find it in your profile after you've registered on the program.</p>
                </div>
                <div className="flex items-start gap-5 my-3 w-full">
                    <div className="flex items-center justify-center text-center bg-primary rounded-xl text-white text-[54px] font-medium">
                        <p className="w-20 h-20">3</p>
                    </div>
                    <p className="w-full"><strong>Check your email. A link to the course will be sent to you after registration.</strong>If you did not receive the email immediately, check Spam and Promotions folders.</p>
                </div>
                <div className="flex items-start gap-5 my-3 w-full">
                    <div className="flex items-center justify-center text-center bg-primary rounded-xl text-white text-[54px] font-medium">
                        <p className="w-20 h-20">4</p>
                    </div>
                    <p className="w-full"><strong>Start the course on the Coursio Learn portal</strong> and join the discussion on Discord!</p>
                </div>
            </div>

        </section>
    )
}

export default GetStarted