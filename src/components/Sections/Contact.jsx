export default function Contact() {
  return (
    <section id="contact" className="py-20 text-center bg-indigo-50">
      <h3 className="text-3xl font-semibold mb-6 text-indigo-600">Contact</h3>
      <p className="text-gray-700 mb-8">
        Let’s connect! Feel free to reach out via email or LinkedIn.
      </p>

      <div className="flex flex-col items-center space-y-4">

      <a href="https://www.linkedin.com/in/angus-wu-02223b15a/" 
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        target="_blank"
        rel="noopener noreferrer">
          LinkedIn
      </a>
      
      <a
        href="mailto:AngusWu28074@gmail.com"
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        Send Email: AngusWu28074@gmail.com
      </a>
      </div>
    </section>
  )
}
