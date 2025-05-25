const DesktopHeader = () => {
  return (
    <header class="desktop-header">
      <div>
        <img class="desktop-main-logo" src="images/logo.png" alt="main logo" />
      </div>
      <nav class="desktop-nav">
        <ul>
          <li>
            <a>საზოგადოება</a>
          </li>
          <li>
            <a>პოლიტიკა</a>
          </li>
          <li>
            <a>ეკონომიკა</a>
          </li>
          <li>
            <a>სპორტი</a>
          </li>
          <li>
            <a>მეცნიერება</a>
          </li>
          <li>
            <a>კულტურა</a>
          </li>
          <li>
            <a>მოდა</a>
          </li>
          <li>
            <a>ჯანმრთელობა</a>
          </li>
          <li>
            <a>კულტურა</a>
          </li>
          <div class="category-and-arrow">
            <li>
              <a>მეტი</a>
            </li>
            <img
              class="arrow-drop-down"
              src="images/arrowDropDown.png"
              alt="main logo"
            />
          </div>
        </ul>
      </nav>
      <div>
        <img class="search-logo" src="images/search.png" />
      </div>
      <div class="vector-logo-and-text">
        <div>
          <img class="vector-logo" src="images/vector.png" />
        </div>
        <h4>შესვლა</h4>
      </div>
      <buttom>დაწერე სტატია</buttom>
    </header>
  );
};

export default DesktopHeader;
