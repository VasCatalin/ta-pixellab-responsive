'use client';

export default function HomeNewsletter() {
  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const emailInput = form.email;

    if (emailInput.value.trim().length < 1) {
      return;
    }

    // do ajax
    fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailInput.value,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then(() => {
        emailInput.value = '';
      });
  };

  return (
    <section className="home-newsletter">
      <form className="container" onSubmit={onSubmit}>
        <label htmlFor="email">
          <span>Subscribe to our</span>
          Newsletter
        </label>

        <input
          type="email"
          name="email"
          id="email"
          placeholder="enter your email address to receive the latest news"
        ></input>

        <button type="submit" title="Subscribe">
          Subscribe
        </button>
      </form>
    </section>
  );
}
