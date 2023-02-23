const CoverLetter = ({ title, employer, close }) => {
  return (
    <div className="modal">
      <label htmlFor="letter">Cover Letter</label>
      <textarea
        name="letter"
        cols="70"
        rows="10"
        defaultValue={`Dear Madam/Sir, 

I am excited to submit my application for the role of ${title} with ${employer}. As a highly motivated and skilled web developer with 5 years of experience in the judicial system and 7 months of project-based experience in web development, I am eager and confident in my abilities to make a valuable contribution to your team. 

Throughout my career, I have developed a strong work ethic, reliability, and a dedication to delivering results. I believe that effective communication and cooperation are essential to achieving success, and I work collaboratively with colleagues and stakeholders to ensure that projects meet or exceed expectations. When faced with challenging situations, I rely on my grit and determination to overcome obstacles and deliver high-quality solutions.

I am committed to pursuing professional growth and development, and I believe that your company's dedication to fostering a culture of growth and development, would provide me with the opportunity to expand my skill set and contribute to the team's continued success.

In turn, I am dedicated to bringing my best efforts to the role, to support the company's mission by producing high-quality, reliable code to deliver exceptional user experiences.

I am always eager to learn about new technologies and experiment with different programming languages and tools. I am constantly seeking out opportunities to expand my skill set and knowledge, and I believe that this curiosity and drive to learn is essential for success in the rapidly evolving field of software development.

Thank you for considering my application, and I look forward to the opportunity to further discuss my qualifications and how they align with the needs of ${employer}.

Sincerely,
Octavian Nicu Şulic
Email: octavain.nicu.sulic@gmail.com
Tel:0757 966 569`}
      ></textarea>

      <label htmlFor="intro">Email Intro</label>
      <textarea
        name="intro"
        cols="70"
        rows="10"
        defaultValue={`Dear Madam/Sir,

I am writing to express my interest in the ${title} position that is currently available at ${employer}. Please find attached my CV and Cover Letter for your consideration.
        
Thank you for considering my application. I look forward to the opportunity to further discuss my qualifications with you.
        
Best Regards,
Octavian Nicu Şulic`}
      ></textarea>
      <button onClick={() => close()}>Close</button>
    </div>
  );
};

export default CoverLetter;
