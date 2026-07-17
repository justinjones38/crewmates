import styles from "./Form.module.css"
import Button from "./Button"
import RadioBtn from "./RadioBtn"

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
          <RadioBtn color="red" inputs={inputs} handleChange={handleChange}>Red</RadioBtn>
          <RadioBtn color="blue" inputs={inputs} handleChange={handleChange}>Blue</RadioBtn>
          <RadioBtn color="green" inputs={inputs} handleChange={handleChange}>Green</RadioBtn>
          <RadioBtn color="yellow" inputs={inputs} handleChange={handleChange}>Yellow</RadioBtn>
          <RadioBtn color="orange" inputs={inputs} handleChange={handleChange}>Orange</RadioBtn>
          <RadioBtn color="pink" inputs={inputs} handleChange={handleChange}>Pink</RadioBtn>
        </div>
        <Button>Submit</Button>
      </form>
  )
}