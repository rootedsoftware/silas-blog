import Head from 'next/head';

export default function Home() {
  return (
    <div className="container" style={{ backgroundColor: '#e6e6e4' }}>
      <Head>
        <title>TKKN</title>
        <link rel="icon" href="/🗞️.png" />
      </Head>

      <main>
        <h3>
          VOL. 2 NO. 60 FRIDAY APRIL 17 - THURSDAY APRIL 23,2020
          2019-2020/PRMM/PREMIUM/EVENTS/2019-2020/KRAZY
        </h3>
        <h1 className="title">TKKN</h1>

        <p className="description">
          <code>VOL. 2 NO. 60</code>
        </p>

        <div className="grid">
          <h2>
            Winners For Top-5 Best Writers, and Top-5 Best Fans 19-20 3/10 Fans
            and Writers
          </h2>
          <div className="card">
            <p>
              THANK YOU ALL FOR YOUR "KRAZY" GREAT HELP!!!!!!!!!!!! This year
              was a great year and I hope to do a summer journalism so that
              summertime can be funner than just a great day to relax,
              but,because of everyone’s participation, I can do a lot of the
              journalism by myself and about you guys, and your hard work. Stay
              tuned for more premium, e-edition,special edition, and limited
              editions. And remember, if you have a birthday during this time,
              you can submit a birthday, and then I WILL Put you on the
              following, or the following, following edition front page,
              because, darn virus if you can’t celebrate it. Have a great day
              See you next time.
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
          color: inherit;
          text-decoration: none;
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
          text-decoration: none;
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
