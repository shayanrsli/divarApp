import { useNavigate } from "react-router-dom";
import { checkOtp } from "../../services/auth";
import setCookie from "../../utils/Cookie";
import { useQuery } from "@tanstack/react-query";
import styles from "./AuthForm.module.css";


function CheckOtpForm ({code , setCode , setStep , mobile}) {
    const navigate = useNavigate();
    const { refetch } = useQuery(["profile"] , getProfile);

    const SubmitHandler = async (event) => {
        event.preventDefault();

        if (code.length == 5) return;

        const {response , error } = await checkOtp(mobile , code);

        if (response) {
            setCookie(response.data)
            navigate("/")
            refetch()
        }
        if (error)  console.log(error);

    }
    return(
   <form onSubmit={SubmitHandler} className={styles.form}>
      <p className={styles.title}>تایید کد پیامک شده</p>
      <span className={styles.desc}>
        کد پیامک شده به شماره <b>{mobile}</b> را وارد کنید
      </span>

      <label htmlFor="code" className={styles.label}>
        کد تایید را وارد کنید
      </label>
      <input
        type="text"
        id="code"
        placeholder="کد تایید"
        className={styles.input}
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <button type="submit" className={styles.buttonPrimary}>
        ورود
      </button>
      <button
        type="button"
        onClick={() => setStep(1)}
        className={styles.buttonSecondary}
      >
        تغییر شماره موبایل
      </button>
    </form>
    )
}

export default CheckOtpForm;