
function Footer() {
  const currentYear = new Date().getFullYear();

  return(
    <footer>
      <p>&copy; {currentYear}</p>
    </footer>
  );
}

export default Footer;