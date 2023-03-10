import { notFound } from "next/navigation";

const Contact = () => {
  const error = false;
  if (error) {
    notFound();
  }
  return <div>Enter</div>;
};

export default Contact;
