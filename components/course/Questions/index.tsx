import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"

const Contacts = () => {
  return (
    <section className="mb-16 md:mb-24">
      <h4 className="leading-14 mb-8 text-3xl font-bold sm:text-4xl md:text-[text-5xl]">
        Frequently Asked Questions
      </h4>
      <Accordion
        type="single"
        collapsible
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-start text-lg">
            What is Coursio?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            Coursio - your one-stop service for mastering in-demand tech skills!
            We offer a wide range of online courses across various IT fields.
            With our comprehensive courses, flexible learning formats, and
            expert instructors, you can learn at your own pace and achieve your
            tech goals. Check out our catalog on the main page and start your
            learning journey today!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-start text-lg">
            How can I cancel my course subscription?
          </AccordionTrigger>
          <AccordionContent className="text-base">Can't.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default Contacts
