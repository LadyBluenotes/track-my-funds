export default function Privacy() {
  return (
    <section className="p-10 bg-white rounded-lg drop-shadow-md sm:max-w-md lg:max-w-2xl m-auto my-20">
      <h1 className="text-4xl font-bold text-center pb-2">Privacy Policy</h1>
      <p className="text-center pb-10 text-gray-500">Last updated: February 18, 2023</p>
      <ul className="list-disc list-inside">
        <li className="pb-2">
            Under no circumstances will we sell or distribute your data to third parties unless you have explicitly asked us to.
        </li>
        <li className="pb-2">
            Your email will only be used as a way to register and login to your account and for no other purpose.
        </li>
        <li className="pb-2">
            We will not send you any emails unless you have explicitly asked us to.
        </li>
        <li className="pb-2">
            If you have any questions or concerns about our privacy policy, please contact us at <a href="https://trackmyfunds.sarahgerrard.me/contact" className="text-blue-500">trackmyfunds.sarahgerrard.me/contact</a>.
        </li>
    </ul>
    </section>
  );
}
