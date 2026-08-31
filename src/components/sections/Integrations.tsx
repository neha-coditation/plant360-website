import styles from "./Integrations.module.scss";

export type IntegrationLogo = { name: string; imageUrl?: string; url?: string };

const fallbackSlots: IntegrationLogo[] = [
  { name: "Octave" , 
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGx9Bpkh0RZJ6vlY0BzOCBgxKv5_rRxoTvUo88pwzk_dLPm37vpITYmAVV&s=10" },
  { name: "AVEVA" ,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTAdGv3VHqYRYb9G1ZCbYusG6GPRvGra5yaJYnZ9YYTA&s=10" },  
  { name: "DEXPI",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/43/DEXPI_logo.png"
  },
  { name: "Autocad",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/AutoCad_new_logo.svg/1280px-AutoCad_new_logo.svg.png"
  },
  {
    name: "IBM Maximo",
    imageUrl: "https://comm-itgroup.com/wp-content/uploads/2023/02/ibmmaximo.png"
  },
  {
    name: "More+",
  },
  // { name: "SAP / Maximo" },
];

/**
 * "Your existing tools are inputs, not the platform" - light gray band. Copy on
 * the left, a grid of logo slots on the right. Logos come from Sanity
 * (`integrationLogo`); named placeholder slots render until licensed vendor
 * logos are dropped in. Matches the reference layout.
 */
export function Integrations({ logos }: { logos: IntegrationLogo[] }) {
  const slots = (logos.length > 0 ? logos : fallbackSlots).slice(0, 6);

  return (
    <section className={styles.section} id="integrations">
      <div className={`p360-container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Integrations</p>
          <h2 className={styles.heading}>
            Your existing tools are <strong>inputs</strong>, not the platform.
          </h2>
          <p className={styles.lead}>
            Plant360 ingests from the systems you already run and pushes structured data back out
            through an open API. You own the data layer. No proprietary lock-in to any single CAD or
            asset vendor.
          </p>
        </div>

        <div className={styles.logosCol}>
          <p className={styles.logosLabel}>Ingests from &amp; syncs with</p>
          <div className={styles.logos} data-reveal data-reveal-stagger>
            {slots.map((logo) => (
              <div key={logo.name} className={styles.logo}>
                {logo.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={logo.imageUrl} alt={logo.name} className={styles.logoImg} />
                ) : (
                  <span className={styles.placeholder}>{logo.name}</span>
                )}
              </div>
            ))}
          </div>
          <p className={styles.note}>Representative systems. Plant360 is vendor-neutral.</p>
        </div>
      </div>
    </section>
  );
}
