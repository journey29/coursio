const GetStarted = () => {
  return (
    <section className="mb-16 md:mb-24">
      <h3 className="leading-14 text-3xl font-bold sm:text-4xl md:text-[text-5xl]">
        How to get started?
      </h3>
      <div className="mt-5 grid grid-cols-1 gap-y-6 md:mt-8 md:grid-cols-2 md:grid-rows-2 md:gap-x-24 md:gap-y-12">
        <GetStartedItem order="1">
          <strong>Click the "Learn More" button on this page</strong>, create
          your profile and fill in the required information.
        </GetStartedItem>
        <GetStartedItem order="2">
          <strong>
            Optionally, pass the English test to check your level.
          </strong>
          You can find it in your profile after you've registered on the
          program.
        </GetStartedItem>
        <GetStartedItem order="3">
          <strong>
            Check your email. A link to the course will be sent to you after
            registration.
          </strong>
          If you did not receive the email immediately, check Spam and
          Promotions folders.
        </GetStartedItem>
        <GetStartedItem order="4">
          <strong>Start the course on the Coursio Learn portal</strong> and join
          the discussion on Discord!
        </GetStartedItem>
      </div>
    </section>
  )
}

export default GetStarted

type GetStartedItemType = {
  order: string
  children: React.ReactNode
}

const GetStartedItem = ({ order, children }: GetStartedItemType) => {
  return (
    <div className="my-3 flex w-full items-start gap-5">
      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary text-center text-4xl font-medium text-white md:h-20 md:w-20 md:text-[54px]">
        <p>{order}</p>
      </div>
      <p className="w-full text-sm sm:text-base">{children}</p>
    </div>
  )
}
