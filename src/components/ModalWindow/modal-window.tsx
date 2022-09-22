import React, {FC} from 'react';
import "./styles.css";

interface Props {
  isModalActive: boolean,
  setIsModalActive: (isModalActive: boolean) => void
}

const ModalWindow: FC<Props> = ({isModalActive, setIsModalActive}) => {
  return (
      <div
          className={isModalActive? "modal active" : "modal"}
          onClick={() => setIsModalActive(false)}
      >
        <div
            className={isModalActive? "modal__container active": "modal__container"}
            onClick={(event => event.stopPropagation())}
        >
          {/*<div style={{overflowY: "scroll", height:"400px"}}>*/}

          {/*</div>*/}
        </div>
      </div>
  );
};

export default ModalWindow;