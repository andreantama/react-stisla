import Navbar from './navbar';
import Sidebar from './sidebar';

const Template = ({children}) => {
  return (
    <div class="main-wrapper">
      <Navbar />
      <div class="main-sidebar">
        <Sidebar />
      </div>
      <div class="main-content">
        <section class="section">
          <div class="section-header">
            {/* {title} */}
          </div>
          <div class="section-body">
            {children}
          </div>
        </section>
      </div>
      <footer class="main-footer">
        <div class="footer-left">
          Copyright &copy; 2021 <div class="bullet"></div> <a href="https://poliwangi.ac.id/">Politenik Negeri Banyuwangi</a>
        </div>
        <div class="footer-right">
          2.3.0
        </div>
      </footer>
    </div>
  );
}
export default Template;