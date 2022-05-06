import React from 'react'
import './profileCard.css'
import noAvatar from '../../assets/noAvatar.png'

export default function profileCard() {
  return (
<div class="card">
  <img src={noAvatar} alt="John" style={{width:'100%'}}/>
  <h1>John Doe</h1>
  <p class="title">CEO & Founder, Example</p>
  <p>Harvard University</p>
  <a href="#"><i class="fa fa-dribbble"></i></a>
  <a href="#"><i class="fa fa-twitter"></i></a>
  <a href="#"><i class="fa fa-linkedin"></i></a>
  <a href="#"><i class="fa fa-facebook"></i></a>
  <p><button>Contact</button></p>
</div>
  )
}
