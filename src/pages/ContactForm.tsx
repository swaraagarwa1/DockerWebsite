import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ContactForm.module.css";

const ContactForm: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.contactForm}>
      <div className={styles.contactInfo}>
        <h1 className={styles.foodPreferenceQuiz}>Food Preference Quiz</h1>
        <h2 className={styles.fillOutThis}>
          Fill out this quick form to help generate your ideal meal plan
        </h2>
      </div>
      <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
      <div className={styles.contactFormInner}>
        <form className={styles.mealPlanSelectionParent}>
          <div className={styles.mealPlanSelection}>
            <div className={styles.emailFieldParent}>
              <div className={styles.emailField}>
                <div className={styles.dietaryRestrictionsLabel}>
                  <div className={styles.firstName}>First name</div>
                  <div className={styles.field}>
                    <input
                      className={styles.label}
                      placeholder="Jane"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.emailField1}>
                <div className={styles.lastNameParent}>
                  <div className={styles.lastName}>Last name</div>
                  <div className={styles.field1}>
                    <input
                      className={styles.label1}
                      placeholder="Smitherton"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.mealPlanSelectionLabelWrapper}>
                <div className={styles.mealPlanSelectionLabel}>
                  <div className={styles.emailAddress}>Email address</div>
                  <div className={styles.fieldParent}>
                    <div className={styles.field2}>
                      <input
                        className={styles.label2}
                        placeholder="email@janesfakedomain.net"
                        type="text"
                      />
                    </div>
                    <div className={styles.dropdown}>
                      <div className={styles.label3}>Gender?</div>
                      <img
                        className={styles.chevronDownIcon}
                        alt=""
                        src="/chevrondown-4.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.emailField2}>
                <div className={styles.dropdown1}>
                  <div className={styles.label4}>Height?</div>
                  <img
                    className={styles.chevronDownIcon1}
                    alt=""
                    src="/chevrondown-4.svg"
                  />
                </div>
              </div>
              <div className={styles.emailField3}>
                <div className={styles.dropdown2}>
                  <div className={styles.label5}>Weight?</div>
                  <img
                    className={styles.chevronDownIcon2}
                    alt=""
                    src="/chevrondown-4.svg"
                  />
                </div>
              </div>
              <div className={styles.emailField4}>
                <div className={styles.whatAreYouLookingForInAParent}>
                  <div className={styles.whatAreYou}>
                    What are you looking for in a meal plan?
                  </div>
                  <button className={styles.buttonCompact}>
                    <div className={styles.healthy}>Healthy</div>
                  </button>
                  <button className={styles.buttonCompact1}>
                    <div className={styles.looseWeight}>Loose Weight</div>
                  </button>
                  <button className={styles.buttonCompact2}>
                    <div className={styles.bulk}>Bulk</div>
                  </button>
                </div>
              </div>
              <div className={styles.emailField5}>
                <div className={styles.doYouHaveAnyDietaryRestriParent}>
                  <div className={styles.doYouHave}>
                    Do you have any dietary restrictions?
                  </div>
                  <div className={styles.doYouHave1}>
                    Do you have any dietary restrictions?
                  </div>
                </div>
                <div className={styles.veganButton}>
                  <button className={styles.buttonCompact3}>
                    <div className={styles.vegan}>Vegan</div>
                  </button>
                </div>
                <button className={styles.buttonCompact4}>
                  <div className={styles.vegetarian}>{`Vegetarian `}</div>
                </button>
                <button className={styles.buttonCompact5}>
                  <div className={styles.halal}>Halal</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.veganLabel}>
            <div className={styles.confirmButtonLabel}>
              <div className={styles.whatAreYouLookingForInAWrapper}>
                <div className={styles.whatAreYou1}>
                  What are you looking for in a meal plan?
                </div>
              </div>
              <button className={styles.buttonCompact6}>
                <div className={styles.bulk1}>Bulk</div>
              </button>
              <div className={styles.inputForm}>
                <button className={styles.buttonCompact7}>
                  <div className={styles.filling}>{`Filling `}</div>
                </button>
              </div>
              <div className={styles.inputForm1}>
                <button className={styles.buttonCompact8}>
                  <div className={styles.bulk2}>Bulk</div>
                </button>
              </div>
            </div>
            <div className={styles.inputFieldContainer}>
              <div className={styles.restrictionQuestion}>
                <div className={styles.doYouHave2}>
                  Do you have any dietary restrictions?
                </div>
                <div className={styles.doYouHave3}>
                  Do you have any dietary restrictions?
                </div>
              </div>
              <div className={styles.submitButton}>
                <button className={styles.buttonCompact9}>
                  <div className={styles.vegan1}>Vegan</div>
                </button>
              </div>
              <button className={styles.buttonCompact10}>
                <div className={styles.vegetarian1}>{`Vegetarian `}</div>
              </button>
              <button className={styles.buttonCompact11}>
                <div className={styles.halal1}>Halal</div>
              </button>
            </div>
          </div>
          <div className={styles.healthyButton}>
            <div className={styles.compactHealthy}>
              <div className={styles.whatAreYou2}>
                What are you looking for in a meal plan?
              </div>
              <button className={styles.buttonCompact12}>
                <div className={styles.healthy1}>Healthy</div>
              </button>
              <button className={styles.buttonCompact13}>
                <div className={styles.looseWeight1}>Loose Weight</div>
              </button>
              <button className={styles.buttonCompact14}>
                <div className={styles.bulk3}>Bulk</div>
              </button>
            </div>
          </div>
          <div className={styles.vegetarianHalalImageWrapper}>
            <div className={styles.vegetarianHalalImage}>
              <div className={styles.emailFieldContainer}>
                <div className={styles.doYouHave4}>
                  Do you have any dietary restrictions?
                </div>
                <div className={styles.doYouHave5}>
                  Do you have any dietary restrictions?
                </div>
              </div>
              <div className={styles.emailInput}>
                <button className={styles.buttonCompact15}>
                  <div className={styles.vegan2}>Vegan</div>
                </button>
              </div>
              <button className={styles.buttonCompact16}>
                <div className={styles.vegetarian2}>{`Vegetarian `}</div>
              </button>
              <button className={styles.buttonCompact17}>
                <div className={styles.halal2}>Halal</div>
              </button>
            </div>
          </div>
          <div className={styles.healthyButton1}>
            <div className={styles.whatAreYouLookingForInAGroup}>
              <div className={styles.whatAreYou3}>
                What are you looking for in a meal plan?
              </div>
              <button className={styles.buttonCompact18}>
                <div className={styles.healthy2}>Healthy</div>
              </button>
              <button className={styles.buttonCompact19}>
                <div className={styles.looseWeight2}>Loose Weight</div>
              </button>
              <button className={styles.buttonCompact20}>
                <div className={styles.bulk4}>Bulk</div>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className={styles.buttonCompact21}>
        <div className={styles.filling1}>{`Filling `}</div>
      </div>
      <div className={styles.buttonCompact22}>
        <div className={styles.filling2}>{`Filling `}</div>
      </div>
      <div className={styles.buttonCompact23}>
        <div className={styles.vegetarian3}>{`Vegetarian `}</div>
      </div>
      <div className={styles.buttonCompact24}>
        <div className={styles.halal3}>Halal</div>
      </div>
      <div className={styles.buttonCompact25}>
        <div className={styles.filling3}>{`Filling `}</div>
      </div>
      <div className={styles.buttonCompact26}>
        <div className={styles.filling4}>{`Filling `}</div>
      </div>
      <div className={styles.buttonCompact27}>
        <div className={styles.vegetarian4}>{`Vegetarian `}</div>
      </div>
      <div className={styles.buttonCompact28}>
        <div className={styles.halal4}>Halal</div>
      </div>
      <div className={styles.buttonCompact29}>
        <div className={styles.filling5}>{`Filling `}</div>
      </div>
      <div className={styles.buttonCompact30}>
        <div className={styles.filling6}>{`Filling `}</div>
      </div>
      <div className={styles.buttonCompact31}>
        <div className={styles.filling7}>{`Filling `}</div>
      </div>
      <div className={styles.buttonCompact32}>
        <div className={styles.vegetarian5}>{`Vegetarian `}</div>
      </div>
      <div className={styles.buttonCompact33}>
        <div className={styles.halal5}>Halal</div>
      </div>
      <div className={styles.buttonCompact34}>
        <div className={styles.filling8}>{`Filling `}</div>
      </div>
      <div className={styles.buttonCompact35}>
        <div className={styles.filling9}>{`Filling `}</div>
      </div>
      <section className={styles.image8Parent}>
        <img
          className={styles.image8Icon}
          loading="lazy"
          alt=""
          src="/image-8@2x.png"
        />
        <button className={styles.button} onClick={onButtonClick}>
          <div className={styles.submit}>Submit</div>
        </button>
      </section>
    </div>
  );
};

export default ContactForm;
