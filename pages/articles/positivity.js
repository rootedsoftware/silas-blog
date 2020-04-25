import Head from 'next/head';

export default function Home() {
  return (
    <div className="container" style={{ backgroundColor: '#e6e6e4' }}>
      <Head>
        <title>TKKN</title>
        <link rel="icon" href="/🗞️.png" />
      </Head>

      <main>
        <h3>Youtubers Share Thoughts, Positivity</h3>
        <h1 className="title">TKKN</h1>

        <p className="description">
          <code>Zach King</code>
        </p>

        <div className="grid">
          <h2></h2>
          <div className="card">
            <img
              src="/images/Zach_King_Photo.jpg"
              alt="Zach King"
              width="100%"
            />
            <br />
            <br />
            <p>
              Google’s YouTube Channel overflows with more than 10 million
              people, and it becomes a huge way to be accessed for attention.
              Youtubers like ‘Zach King’, and others are saying Words of
              encouragement throughout their videos. Zach King suggests ”A good,
              video or two” that you should make, and send to him “For
              commenting, and great joy through this pandemic.” ‘Zach King’ in a
              video throughout his “Magical Universe” [Photo By Youtube
              Association Film.] ’Zach King’ By what he variously calls himself.
              Throughout videos I encourage you guys to do something he suggests
              on his channel. Watch his videos(If wishing to), At{' '}
              <a href="https://www.youtube.com/user/ZachKingVine">Zach King</a>.
              His words of encouragement are huge and you all need to mention it
              to me when you see his videos. IF ANY OTHER YOUTUBERS SHOW UP THAT
              YOU KNOW OF, TELL ME. AND A FEW OF THEIR ENCOURAGING QUOTES. Zach
              King At Youtube.com/APRIL 2020,BEST ENCOURAGEMENTS:
              <a href="https://youtube.com">youtubers</a>
            </p>
          </div>
        </div>
      </main>

      <footer>
        <h2>© Copyright 2020 Silas Bechard 🗞️</h2>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: #0070f3;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 95%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
