import styles from "./Form.module.css"
import Button from "./Button"

export default function Form({inputs, handleChange, handleSubmit}) {
  return (
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="name" className={styles.textLabel}>
          Name
        </label>
        <input
          type="text"
          value={inputs.name}
          name="name"
          id="name"
          placeholder="Enter name"
          onChange={handleChange}
          className={styles.textInput}
        />
        <label htmlFor="speed" className={styles.textLabel}>
          Speed (mph)
        </label>
        <input
          type="number"
          value={inputs.speed}
          name="speed"
          id="speed"
          placeholder="Enter Speed"
          onChange={handleChange}
          className={styles.textInput}
        />
        <p className={styles.textLabel}>Color</p>
        <div className={styles.radioContainer}>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              value="red"
              name="color"
              id="color"
              onChange={handleChange}
              className={styles.radioBtn}
              checked={inputs.color === "red"}
            />
            Red
          </label>

          <label className={styles.radioLabel}>
            <input
              type="radio"
              value="blue"
              name="color"
              id="color"
              onChange={handleChange}
              className={styles.radioBtn}
              checked={inputs.color === "blue"}
            />
            Blue
          </label>

          <label className={styles.radioLabel}>
            <input
              type="radio"
              value="green"
              name="color"
              id="color"
              onChange={handleChange}
              className={styles.radioBtn}
              checked={inputs.color === "green"}
            />
            Green
          </label>

          <label className={styles.radioLabel}>
            <input
              type="radio"
              value="yellow"
              name="color"
              id="color"
              onChange={handleChange}
              className={styles.radioBtn}
              checked={inputs.color === "yellow"}
            />
            Yellow
          </label>

          <label className={styles.radioLabel}>
            <input
              type="radio"
              value="orange"
              name="color"
              id="color"
              onChange={handleChange}
              className={styles.radioBtn}
              checked={inputs.color === "orange"}
            />
            Orange
          </label>

          <label className={styles.radioLabel}>
            <input
              type="radio"
              value="pink"
              name="color"
              id="color"
              onChange={handleChange}
              className={styles.radioBtn}
              checked={inputs.color === "pink"}
            />
            Pink
          </label>
        </div>
        <Button>Submit</Button>
      </form>
  )
}