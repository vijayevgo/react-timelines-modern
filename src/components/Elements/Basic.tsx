import { CSSProperties, FunctionComponent, ReactNode } from "react";
import { getDayMonth } from "../../utils/formatDate";
import createClasses from "../../utils/classes";

interface BuildDataAttributesSettings {
  [key: string]: string;
}

const buildDataAttributes = (attributes: BuildDataAttributesSettings = {}) => {
  const value = {};
  Object.keys(attributes).forEach((name) => {
    value[`data-${name}`] = attributes[name];
  });
  return value;
};

interface Props {
  classes?: string[];
  dataSet: BuildDataAttributesSettings;
  end: Date;
  start: Date;
  style?: CSSProperties;
  title: string;
  tooltip?: ReactNode;
  continuing?: ReactNode;
}

const Basic: FunctionComponent<Props> = (props) => {
  const {
    classes = [],
    dataSet,
    end,
    start,
    style,
    title,
    tooltip,
    continuing,
  } = props;
  return (
    <div
      className={createClasses("rt-element", classes)}
      style={style}
      {...buildDataAttributes(dataSet)}
    >
      <div className="rt-element__content" aria-hidden="true">
        <span className="rt-element__title">{title}</span>
        {continuing || <></>}
      </div>
      <div className="rt-element__tooltip">
        {tooltip || (
          <div>
            <div>{title}</div>
            <div>
              <strong>Start</strong> {getDayMonth(start)}
            </div>
            <div>
              <strong>End</strong> {getDayMonth(end)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Basic;
