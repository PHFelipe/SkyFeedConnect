import PropTypes from "prop-types";
import "@style/MainPage.css";
import WeatherWidget from "@components/WeatherSearch";
import NewsFeed from "@components/NewsFeed";
import logo from "../assets/logo2.png";
import DateTimeWidget from "./DateTimeWidget";
import { RxExit } from "react-icons/rx";

const MainPage = ({ onLogout }) => {
  const username = localStorage.getItem("userName") || "Usuário";

  return (
    <section id="body">
      <section id="header">
        <div className="header-content">
          <div className="branch">
            <img src={logo} alt="Logo" className="logo" />
            <div className="header-title">
              <h1>SKY FEED CONNECT</h1>
              <p>Porque sua vida conosco é mais conectada</p>
            </div>
          </div>
          <div className="header-user-info">
            <span className="username">{username}</span>
            <a href="/login" onClick={onLogout} className="logout-link">
              <RxExit />
            </a>
          </div>
        </div>
      </section>
      ,
      <section id="principal">
        <div className="personal-feed">
          <NewsFeed className="news-feed" />
          <div className="vertical-divider">
            <WeatherWidget className="weather-widget" />
            <DateTimeWidget />
          </div>
        </div>
      </section>
    </section>
  );
};

MainPage.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default MainPage;
