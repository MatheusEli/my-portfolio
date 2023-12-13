import Form from '../Form';
import Navigation from '../Navigation';

export default function Contact({ resultRef }) {
  return (
    <section className="contact" ref={resultRef}>
      <div className="contact__container">
        <div>
          <h2>Contact</h2>
          <p>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>

        <Form />
      </div>
      <Navigation />
    </section>
  );
}
