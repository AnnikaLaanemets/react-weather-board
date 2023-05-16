import "./App.css";

export default function Forecast() {
  return (
    <div className="forecast">
      <div className="grid eight-columns">
        <div className="grid three-rows">
          <div>Sunday</div>
          <div>
            <img class="icon" src={require("./icons/sun.png")} width="60px" />
          </div>
          <div>25°C/20°C</div>
        </div>
        <div className="grid three-rows">
          <div>Monday</div>
          <div>
            <img class="icon" src={require("./icons/sun.png")} width="60px" />
          </div>
          <div>19°C/12°C</div>
        </div>
        <div className="grid three-rows">
          <div>Tuesday</div>
          <div>
            <img class="icon" src={require("./icons/sun.png")} width="60px" />
          </div>
          <div>22°C/12°C</div>
        </div>
        <div className="grid three-rows">
          <div>Wednesday</div>
          <div>
            <img class="icon" src={require("./icons/sun.png")} width="60px" />
          </div>
          <div>22°C/13°C</div>
        </div>
        <div className="grid three-rows">
          <div>Thursday</div>
          <div>
            <img class="icon" src={require("./icons/sun.png")} width="60px" />
          </div>
          <div>22°C/14°C</div>
        </div>
        <div className="grid three-rows">
          <div>Friday</div>
          <div>
            <img class="icon" src={require("./icons/sun.png")} width="60px" />
          </div>
          <div>23°C/14°C</div>
        </div>
        <div className="grid three-rows">
          <div>Saturday</div>
          <div>
            <img class="icon" src={require("./icons/sun.png")} width="60px" />
          </div>
          <div>23°C/15°C</div>
        </div>
        <div className="grid three-rows">
          <div>Sunday</div>
          <div>
            <img class="icon" src={require("./icons/sun.png")} width="60px" />
          </div>
          <div>21°C/14°C</div>
        </div>
      </div>
    </div>
  );
}