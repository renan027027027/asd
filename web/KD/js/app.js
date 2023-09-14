function delegateEvent(targetSelector,eventName,callback){document.querySelector('body').addEventListener(eventName,(e)=>{if(!e.target.closest(targetSelector))return
callback(e)})}
const _raisedToasts=[]
class Toast{$={container:document.querySelector('.js-toast-container'),}
icons={success:`<svg class="toast__icon-svg" width="100%" viewBox="0 0 50 50">
          <g transform="translate(-1025 -1255)">
          <g transform="translate(1025 1255)" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="25" cy="25" r="25" stroke="none"/>
            <circle cx="25" cy="25" r="24" fill="none"/>
          </g>
          <path d="M1043.093,1292l4.552,6.122,10.924-10.014" transform="translate(-1 -13)" fill="none" stroke="currentColor" stroke-width="2"/>
        </g>
      </svg>`,failure:`<svg class="toast__icon-svg" width="100%" viewBox="0 0 50 50">
        <g transform="translate(-1025 -1255)">
          <g transform="translate(1025 1255)" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="25" cy="25" r="25" stroke="none"/>
            <circle cx="25" cy="25" r="24" fill="none"/>
          </g>
          <path d="M1.89-8.3,4.97-6.86,5.5-24.57H1.3Zm1.5,3.64a2.262,2.262,0,0,0-1.663.683A2.262,2.262,0,0,0,1.05-2.31,2.205,2.205,0,0,0,1.732-.665,2.293,2.293,0,0,0,3.395,0,2.293,2.293,0,0,0,5.057-.665,2.205,2.205,0,0,0,5.74-2.31a2.262,2.262,0,0,0-.683-1.662A2.262,2.262,0,0,0,3.395-4.655Z" transform="translate(1047 1295)" fill="currentColor"/>
        </g>
      </svg>`,info:`<svg class="toast__icon-svg" width="100%" viewBox="0 0 50 50">
          <g transform="translate(-1025 -1255)">
          <g transform="translate(1025 1255)" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="25" cy="25" r="25" stroke="none"/>
            <circle cx="25" cy="25" r="24" fill="none"/>
          </g>
          <path d="M1.89,3.3,4.97,1.86,5.5,19.57H1.3Zm1.5-3.64a2.262,2.262,0,0,1-1.663-.683A2.262,2.262,0,0,1,1.05-2.69a2.205,2.205,0,0,1,.683-1.645A2.293,2.293,0,0,1,3.395-5a2.293,2.293,0,0,1,1.662.665A2.205,2.205,0,0,1,5.74-2.69a2.262,2.262,0,0,1-.683,1.662A2.262,2.262,0,0,1,3.395-.345Z" transform="translate(1047 1271)" fill="currentColor"/>
        </g>
      </svg>`,cookies:`<svg class="toast__icon-svg" width="100%" viewBox="0 0 54.4 42.1">
      <path fill="currentColor" d="M27.6,18.8c-1.6,0-3,1.3-3,3s1.3,3,3,3c1.6,0,3-1.3,3-3C30.5,20.1,29.2,18.8,27.6,18.8z M27.6,23.1c-0.7,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4c0.7,0,1.4,0.6,1.4,1.4C28.9,22.5,28.3,23.1,27.6,23.1z M21.8,29.6c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5c0.8,0,1.5-0.7,1.5-1.5C23.3,30.3,22.6,29.6,21.8,29.6z M21.8,31.3C21.7,31.3,21.7,31.2,21.8,31.3c-0.1-0.1-0.1-0.2,0-0.2C21.8,31.1,21.9,31.1,21.8,31.3C21.9,31.2,21.8,31.3,21.8,31.3z M17.4,18.8c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5c0.8,0,1.5-0.7,1.5-1.5C19,19.5,18.3,18.8,17.4,18.8z M17.4,20.4C17.4,20.4,17.4,20.4,17.4,20.4c-0.1-0.1-0.1-0.2,0-0.2C17.5,20.2,17.5,20.3,17.4,20.4C17.5,20.4,17.5,20.4,17.4,20.4z M12.4,27.5c-2,0-3.7,1.7-3.7,3.7s1.7,3.7,3.7,3.7c2,0,3.7-1.7,3.7-3.7C16.1,29.1,14.4,27.5,12.4,27.5z M12.4,33.3c-1.1,0-2.1-0.9-2.1-2.1s0.9-2.1,2.1-2.1c1.1,0,2.1,0.9,2.1,2.1C14.5,32.3,13.5,33.3,12.4,33.3z M39.9,24.6c-1.6,0-3,1.3-3,3s1.3,3,3,3c1.6,0,3-1.3,3-3C42.8,25.9,41.5,24.6,39.9,24.6z M39.9,28.9c-0.7,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4v0c0.7,0,1.4,0.6,1.4,1.4C41.2,28.3,40.6,28.9,39.9,28.9z M47.8,20.2c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5c0.8,0,1.5-0.7,1.5-1.5C49.4,20.9,48.7,20.2,47.8,20.2z M47.9,21.8C47.9,21.8,47.9,21.9,47.9,21.8c-0.1,0.1-0.2,0-0.2,0C47.7,21.7,47.8,21.7,47.9,21.8C47.9,21.7,47.9,21.7,47.9,21.8C47.9,21.8,47.9,21.8,47.9,21.8z M39.9,20.4c0.8,0,1.5-0.7,1.5-1.5c0-0.8-0.7-1.5-1.5-1.5c-0.8,0-1.5,0.7-1.5,1.5C38.3,19.7,39,20.4,39.9,20.4z M39.9,18.8C39.9,18.8,39.9,18.8,39.9,18.8C39.9,18.9,39.9,18.9,39.9,18.8c0.1,0.1,0,0.2,0,0.2S39.8,18.9,39.9,18.8C39.8,18.8,39.8,18.8,39.9,18.8z M53.4,11.7L53.4,11.7c-0.2-0.4-0.6-0.7-1-0.5c0,0-0.1,0-0.1,0c-0.5,0.2-1,0.4-1.6,0.4c-1.9,0-3.5-1.6-3.5-3.5c0-0.4,0.1-0.8,0.2-1.2c0.2-0.4-0.1-0.9-0.5-1c-0.1,0-0.2-0.1-0.3,0l-0.1,0c0,0-0.1,0-0.1,0c-1.5,0-2.9-1-3.4-2.4c-0.1-0.4-0.5-0.6-0.9-0.5c-1.7,0.4-3.5-0.6-4.1-2.3C37.9,0.2,37.6,0,37.2,0h-0.1C37.1,0,37,0,37,0c-5.9,0-11.4,3-14.6,7.9C13.1,5.2,3.4,10.5,0.7,19.8s2.6,18.9,11.8,21.6c7.4,2.2,15.3-0.8,19.5-7.2c9.2,2.7,18.9-2.6,21.6-11.8C54.7,18.8,54.6,15.1,53.4,11.7z M17.4,40.5c-8.7,0-15.8-7.1-15.8-15.8c0-8.7,7.1-15.8,15.8-15.8c8.7,0,15.8,7.1,15.8,15.8C33.3,33.4,26.2,40.5,17.4,40.5z M28.4,11.1c0,0,0-0.1,0-0.1c0-1.1,0.9-2.1,2.1-2.1s2.1,0.9,2.1,2.1S31.6,13,30.5,13l-0.1,0C29.8,12.3,29.1,11.7,28.4,11.1z M41.4,32.6C40,33,38.5,33.3,37,33.3v0c-1.4,0-2.7-0.2-4.1-0.5c3.1-5.9,2.5-12.9-1.3-18.3c1.9-0.6,3-2.7,2.4-4.7c-0.6-1.9-2.7-3-4.7-2.4c-1.2,0.4-2.1,1.4-2.5,2.6c-0.9-0.6-1.9-1.1-2.9-1.5c2.9-4.2,7.6-6.8,12.8-6.9c0.9,1.9,2.9,3,5,2.9c0.7,1.5,2.2,2.6,3.9,2.9c0,0.2,0,0.5,0,0.7c0,2.8,2.3,5.1,5.2,5.2c0.5,0,1-0.1,1.4-0.2C54.6,21.4,49.8,30.2,41.4,32.6z"/>
      </svg>`,}
constructor(userOptions){const{type,title,message,duration,className,onClose,single}={type:'info',duration:6000,className:'',single:false,onClose:()=>{},...userOptions,}
const toastID=title+message
if(single&&_raisedToasts.includes(toastID))return
_raisedToasts.push(toastID)
this.toast=document.createElement('div')
this.toast.classList.add('toast',`toast--${type}`,className?className:null)
this.toast.style.transform='translateX(110%)'
this.toast.innerHTML=`
      <div class="toast__content">
        <div class="toast__icon">
          ${this.icons[type]}
        </div>
        <div class="toast__text">
          <p class="toast__title">${title}</p>
          <p class="toast__desc">${message}</p>
        </div>
        <div class="toast__close-btn"></div>
      </div>
    `
this.$.container.appendChild(this.toast)
setTimeout(()=>{this.toast.style.transition='0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
this.toast.style.transform='translateX(0)'},50)
this.onClose=()=>{if(_raisedToasts.includes(toastID)){_raisedToasts.splice(_raisedToasts.indexOf(toastID))}
onClose()}
this.hide=()=>{if(!this.toast)return
this.toast.style.transition='height 0.2s 0.4s ease-out, margin-top 0.2s 0.4s ease-out, transform 0.5s ease-out'
this.toast.style.transform='translateX(110%)'
this.toast.style.height=`${this.toast.offsetHeight}px`
setTimeout(()=>{this.toast.style.height=0
this.toast.style.marginTop=0},10)
this.toast.addEventListener('transitionend',()=>{this.$.container.removeChild(this.toast)
this.onClose()})}
this.timeout=setTimeout(()=>this.hide(),duration)
this.toast.addEventListener('click',()=>{this.hide()
if(this.timeout){window.clearTimeout(this.timeout)}})}}
const _getIntlTimePart=(value,unitName,style='short',defaultLang={days:'days',hours:'hr.',minutes:'min.',seconds:'sec.',})=>{let unit=defaultLang[unitName]
if('RelativeTimeFormat'in Intl){const rt=new Intl.RelativeTimeFormat(document.documentElement.lang,{style,})
const parts=rt.formatToParts(value,unitName)
unit=parts.filter((part)=>part.type==='literal')
unit=unit[unit.length-1]
unit=unit.value.trim()}
return{value,unit,full:`${value} ${unit}`,}}
const getTimeDiff=(startTime,endTime)=>{const diffMs=endTime-startTime
const secondInMs=1000
const minuteInMs=secondInMs*60
const hourInMs=minuteInMs*60
const dayInMs=hourInMs*24
const days=Math.max(0,Math.floor(diffMs/dayInMs))
const daysRest=diffMs%dayInMs
const hours=Math.max(0,Math.floor(daysRest/hourInMs))
const hoursRest=diffMs%hourInMs
const minutes=Math.max(0,Math.floor(hoursRest/minuteInMs))
const minutesRest=diffMs%minuteInMs
const seconds=Math.max(0,Math.floor(minutesRest/secondInMs))
const diff={value:diffMs,days:_getIntlTimePart(days,'days'),hours:_getIntlTimePart(hours,'hours'),minutes:_getIntlTimePart(minutes,'minutes'),seconds:_getIntlTimePart(seconds,'seconds'),}
const format=()=>`${diff.days.full} ${diff.hours.full} ${diff.minutes.full} ${diff.seconds.full}`
return{...diff,toString:format}}
const serverCountdown=(userOptions)=>{const options={currentTime:0,startTime:0,endTime:0,onTick:()=>{},onComplete:()=>{},...userOptions,}
const SECOND=1000
const distance=options.endTime-options.startTime
const render=()=>{let intervalID
const currentTime=(options.currentTime+=SECOND)
const cd=getTimeDiff(currentTime,options.endTime)
cd.distance=distance
cd.progress=1-cd.value/cd.distance
if(cd.value<=SECOND){options.onComplete(cd)
if(intervalID)clearInterval(intervalID)}else{options.onTick(cd)}}
render()
intervalID=setInterval(render,SECOND)
return()=>clearInterval(intervalID)}
MicroModal.init()