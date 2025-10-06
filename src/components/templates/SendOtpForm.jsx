import { sendOtp } from "../../services/auth";
import styles from "./AuthForm.module.css";


function SendOtpForm ({mobile , setMobile , setStep}) {
    const submitHandler = async (event) => {
        event.preventDefault();
        
        if (mobile.length !== 11) return;

        const {response , error } =  await sendOtp(mobile);

        if (response) setStep(2)

        if (error) {
            console.log(error.response.data.message);
        }
    }

    return(
    <form onSubmit={submitHandler} className={styles.form}>
      <p className={styles.title}>ورود به حساب کاربری</p>
      <span className={styles.desc}>
        برای استفاده از امکانات دیوار، لطفاً شمارهٔ موبایل خود را وارد کنید.  
        کد تأیید به این شماره پیامک خواهد شد.
      </span>

      <label htmlFor="mobile" className={styles.label}>
        شمارهٔ موبایل خود را وارد کنید
      </label>
      <input
        type="text"
        id="mobile"
        placeholder="شماره موبایل"
        className={styles.input}
        onChange={(e) => setMobile(e.target.value)}
        value={mobile}
      />

      <button type="submit" className={styles.buttonPrimary}>
        ارسال کد تأیید
      </button>
    </form>

    )
}

export default SendOtpForm;