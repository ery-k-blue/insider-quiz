import styles from "../../styles/components/insiderscene/PopupArea.module.css";

type PopupAreaProps = {
  showPopup: string;
  setShowPopup: (s: string) => void;
};

export const PopupArea: React.FC<PopupAreaProps> = ({
  showPopup,
  setShowPopup,
}) => {
  return (
    <div id={styles.overlay}>
      <div id={styles.content}>
        <p>{showPopup}いんさいだー</p>
        <button onClick={() => setShowPopup("")}>close</button>
      </div>
    </div>
  );
};
