import React from "react";
import styles from "./HomePageRight.module.css";

export const HomePageRight = () => {
  return (
    <div className={styles.HomePageRight}>
      <div>
        <h3 className={styles.SponsorHeader}>Sponsored</h3>
        <div className={styles.SponsorList}>
          <a href="https://onefitplus.com/collections/treadmills/products/rpm-fitness-rpm747s?utm_source=fb&utm_medium=cpc&utm_campaign=GC_TOF_RPM%20747S%20Treadmill_05%2F03%2F22&utm_content=RPM%20747S%20Treadmill%20-%20Carousel&utm_term=Open&fbclid=IwAR2u-LV02eWNxwdNTTOiBQs3B0vhwAl1kIjlhfJdJJX4ooBFrryIMdrwlMQ">
            <div className={styles.SponsorListItem}>
              <div>
                <img src="https://scontent.fixy1-1.fna.fbcdn.net/v/t45.1600-4/275178487_23849942213530354_3430919339024082151_n.jpg?stp=cp0_dst-jpg_p960x960_q75_spS444&_nc_cat=109&ccb=1-5&_nc_sid=67cdda&_nc_ohc=enNjm_c89MEAX8Z2LEI&_nc_ht=scontent.fixy1-1.fna&oh=00_AT8tJOkQF87g_ZE5IVSMhQKyCvcQhLKJZkqFqp5ZA1tYqA&oe=622A0D7E" />
              </div>
              <div>
                <p>OneFitPlus</p>
              </div>
            </div>
          </a>
          <a href="https://www.start2bake.in/s/store/courses/description/Eggfree-Healthy-Gourmet-Cookies?fbclid=IwAR3a_uDDYHkfNN46kj8KBBRT0LC3_PT9qRqaEu_nyhs1RFlk_MMWQuiK4fE">
            <div className={styles.SponsorListItem}>
              <div>
                <img src="https://scontent.fixy1-1.fna.fbcdn.net/v/t45.1600-4/275131436_23850253679670177_1181208201623784194_n.png?stp=cp0_dst-jpg_p296x100_q90_spS444&_nc_cat=105&ccb=1-5&_nc_sid=67cdda&_nc_ohc=UeFHhbiBd9sAX_Fg0IO&_nc_ht=scontent.fixy1-1.fna&oh=00_AT8YJ4_fJV0JjB2VMncimuGUtUYi50ZeZA8Q_AGeQNDW5A&oe=6228D27E" />
              </div>
              <div>
                <p>Limited&nbsp;Offer</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
