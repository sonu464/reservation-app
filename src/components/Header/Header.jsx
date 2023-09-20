import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faHotel,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

function Header() {
  const [calender, setCalender] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOption, setOpenOption] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="header">
      <div className="headerContanier">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faHotel} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        <h1 className="headerTitle">A lifetime of discounts? it's Genius.</h1>
        <p className="headerDescription">
          GEt rewarded for your travels - unlock instant savings of 10% or more
          with a free Bidubooking account
        </p>
        <button className="headerbtn">Sign in/Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="Wher are you going?"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
              className="headerSearchText"
              onClick={() => {
                setCalender((calender) => !calender);
              }}
            >{`
              ${format(date[0].startDate, "MM/dd/yyyy")} to 
              ${format(date[0].endDate, "MM/dd/yyyy")}
            `}</span>
            {calender && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span
              className="headerSearchText"
              onClick={() => {
                setOpenOption((openOption) => !openOption);
              }}
            >
              {`${options.adult} adult . ${options.children} children . ${options.room} room`}
            </span>
            {openOption && (
              <div className="options">
                <div className="optionItem">
                  <span className="optionText">Adult</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.adult < 1}
                      className="optionCounterButton"
                      onClick={() => {
                        handleOption("adult", "d");
                      }}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{options.adult}</span>
                    <button
                      className="optionCounterButton"
                      onClick={() => {
                        handleOption("adult", "i");
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Children</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.children < 1}
                      className="optionCounterButton"
                      onClick={() => {
                        handleOption("children", "d");
                      }}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">
                      {options.children}
                    </span>
                    <button
                      className="optionCounterButton"
                      onClick={() => {
                        handleOption("children", "i");
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Room</span>{" "}
                  <div className="optionCounter">
                    <button
                      disabled={options.room < 1}
                      className="optionCounterButton"
                      onClick={() => {
                        handleOption("room", "d");
                      }}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber"> {options.room}</span>
                    <button
                      className="optionCounterButton"
                      onClick={() => {
                        handleOption("room", "i");
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="headerSearchItem">
            <button className="headerSerachBtn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
