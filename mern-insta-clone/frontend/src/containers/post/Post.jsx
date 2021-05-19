import React, { Component } from 'react';
import './post.css';

export default class Post extends Component {
    render() {
        return (
            <div>
                <div className="card">

                    {/* 1st div for 1st section */}
                    <div className="section_one">
                        <div className="sc_one_post-usr_profile">
                            <div>
                                <img id="post-user_img" src="https://media-exp1.licdn.com/dms/image/C4E03AQGWywzNuoKnZA/profile-displayphoto-shrink_100_100/0/1620893932125?e=1626307200&v=beta&t=Q4cVroZdVWjhuJDpzze0kCTe3db_NwiWUN4KmTK2-oc" />
                            </div>

                            {/* 2nd div for user profile */}
                            <div className="post_user_block">
                                <span id="title">Moon HR</span>&nbsp;

            <div className="post_uploaded_time">
                                    <span>1d • </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                                        <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
                                    </svg>
                                </div>
                            </div>

                        </div>
                        <div>

                            {/* 3rd div for post description */}
                            <div className="post_description">
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


         </p>
                            </div>

                        </div>
                    </div>

                    {/* 2nd section for image */}
                    <div className="section_two">
                        <div className="post_image">
                            <img src="https://media-exp1.licdn.com/dms/image/C4D22AQEZgiBspnhkPQ/feedshare-shrink_800/0/1621073315961?e=1623888000&v=beta&t=CYF39-UsV60fvZk6W8hakcREooiMAnYVDgWFEg1NMDY" />
                        </div>
                    </div>

                    {/* 3rd section for comment,like */}
                    <div className="section_three">
                        <div>

                            <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"></img>

                            <span>3</span>

                        </div>

                        <hr></hr>
                        {/* div for like,comment,share */}
                        <div className="social-actions">

                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                    <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
                                </svg>

                                <span>Like</span>
                            </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            {/*  */}

                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                    <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
                                </svg>

                                <span>Comment</span>
                            </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            {/* 3rd  */}
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                    <path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"></path>
                                </svg>

                                <span>Share</span>
                            </div>
                        </div>

                        {/*  */}
                        <div className="block">
                            <p>Be the first to comment on this</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
