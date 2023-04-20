import Heading from "./components/common/Headings";
import Paragraph from "./components/common/Paragraph";
import PrimaryBtn from "./components/common/PrimaryBtn";

export default function Contact() {
  return (
    <section className="flex flex-col justify-center max-w-3xl p-2 shadow-md rounded-xl bg-white mx-auto mt-7 mb-10">
      <div className="px-4 text-center max-w-screen-md pt-4">
        <Heading level={2} color="indigo-800">
          Contact Us <span className="text-red-600">*</span>
        </Heading>
        <p className="text-xs font-normal text-red-500">
          This form is not functional.
        </p>
        <div className="mt-4 px-10 -mb-6">
          <Paragraph>
            Got a technical issue? Want to send feedback? Any other questions?
            Let us know.
          </Paragraph>
        </div>
      </div>
      <div className="px-4 sm:p-6">
        <form action="#" className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm md:rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
              placeholder="name@email.com"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Your message
            </label>
            <textarea
              id="message"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 h-[120px] "
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <div className="float-right">
            <PrimaryBtn href="#" text="Send Message" width="fit" />
          </div>
          
        </form>
      </div>
    </section>
  );
}
