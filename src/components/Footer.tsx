const Footer = () => {
  return (
    <footer>
      <div className="flex justify-center bg-slate-700 p-2 text-sm">
        <p className="text-gray-300">
          &copy; {new Date().getFullYear()} InfoKonserID. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
