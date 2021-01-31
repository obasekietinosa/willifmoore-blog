import React from 'react';

export default function Services() {
  return (
    <section className="Services">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2>Services</h2>
          </div>
          <div className="col-12 col-md-4">
            <h4>🖋 Writing Services</h4>
            <ul>
              <li>Story outline development</li>
              <li>Ghostwriting</li>
              <li>Editing (copy &amp; line)</li>
            </ul>
          </div>
          <div className="col-12 col-md-4">
            <h4>👨🏽‍💻 Branding Services</h4>
            <ul>
              <li>Copywriting</li>
              <li>Campaign design</li>
              <li>Copy design</li>
            </ul>
          </div>
          <div className="col-12 col-md-4">
            <h4>🎓 Corporate Lectures</h4>
            <ul>
              <li>Brand communication</li>
              <li>Creative markieting</li>
              <li>Digital communication</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}