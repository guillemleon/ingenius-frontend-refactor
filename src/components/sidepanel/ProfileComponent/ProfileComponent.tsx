import React from 'react'
import Image from 'next/image'
import Message from "@/assets/icons/message.svg";
import styles from './ProfileComponent.module.scss';

const ProfileComponent = ({ data, profileConfig, isEditable = false }: any) => {
    return (
        <div className={styles.profileContainer}>
            <div className={styles.cardContainer}>
                <div className={styles.headCard} >
                    <div className={styles.profileInfo}>
                        <div className={styles.profileInfoImage}>
                            <img
                                src={data && data[profileConfig?.image?.fieldName]}
                                alt="Brand"
                                loading="lazy"
                            />
                        </div>
                    </div>
                    <div className={styles.profileInfo}>
                        <div className={styles.profileInfoBox}>
                            {profileConfig?.header?.map((header: any, index: number) => (
                                <div key={`${header.fieldName}-${index}`} className={styles.profileInfoWrap}>
                                    <p className={styles.smallcaps}>{header.title}</p>
                                    <p className={styles.profileText}>{data[header.fieldName]}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.cardText}>
                    {profileConfig?.info?.map((info: any, index: number) => (
                        <div key={`${info.fieldName}-${index}`}>
                            <p className={styles.smallcaps}>{info.title}</p>
                            <span className={styles.secButton}>
                                <p className={styles.secTag}>{data[info.fieldName]}</p>
                            </span>
                        </div>
                    ))}

                    <div className={styles.sidepanelHidden}>
                        <p className={styles.smallcaps}>{profileConfig?.contact?.title}</p>
                        <div className={styles.buttonGroup}>
                            <button
                                className={styles.button}
                                onClick={() => {
                                    window.location.href = `
                                        mailto:${data[profileConfig?.contact?.fieldName]}?subject=Subject&body=Body
                                    `
                                }}
                            >
                                <Image className="" src={Message} alt="Icon" width={15} height={15} />
                                <p>Message</p>
                            </button>
                        </div>
                    </div>

                    {isEditable && (
                        <div className="card-container">
                            <p className="smallcaps">MANAGE BRAND</p>
                            <div className="button-group">
                                <button
                                    className="sec-button linen"
                                    onClick={() => {

                                    }}
                                >
                                    <p>Edit</p>
                                </button>
                                <button
                                    className="sec-button stone"
                                    onClick={() => {

                                    }}
                                >
                                    <p>Delete</p>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent